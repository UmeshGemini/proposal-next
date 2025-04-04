import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EMotorCompCode } from "../../../Enum/EMotorCompCode";
import VehicleDetails from "../../../Page/Desktop/Car/Common/VehicleDetails";
import MVehicleDetails from "../../../Page/Mobile/Car/Common/MVehicleDetails";
import { CAR_ROUTES } from "../../../Router/Path/CarRoutes";
import { CAR_ADD_FORM_SERVICES } from "../../../Services/car-node/CarAddFormServices";
import { CAR_SERVICES } from "../../../Services/car-node/CarServices";
import { ECompanyCode } from "../../../Services/Enum/EHome";
import { useAppSelector } from "../../../redux/hooks";
import { CarSlice } from "../../../redux/slice/Car/CarSlice";
import { CarPremiumCal } from "../../../SupportingFiles/CarPermiumCal";
import {
  isEmpty,
  validateChassisNo,
  validateEngineNo,
  validateKotakEngineNo,
  validatePAN,
  validatePrevPolicyNo,
} from "../../../SupportingFiles/HelpingFunction";
import useIsMobile from "../../../SupportingFiles/MobileProvider";
import { TCarPremiumDetails } from "../../../types/Car/TCarSingleQuoteDetail";
import { TDropdown } from "../../../types/Common/TDropdown";
import { TCarVehicleDetails } from "../../../types/TCarSlice";
import { CLIENTS } from "../../../URLCollection/Clients";
import {
  pushMotorDataLayer,
  sendEventToNativeApp,
} from "../../../utils/analytics";

const VehicleDetailsContainer = () => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    VEHICLE_DETAILS,
    SELECTED_QUOTE_DATA,
    ADD_FORM_RESPONSE,
    PLAN_TYPE,
    ADD_FORM,
    ADDON_STATUS,
    ADDON_USER_VALUE,
    PAGE_STATUS,
    REDIRECTED,
    OWNER_DETAILS,
  } = useAppSelector((state) => state.Car);
  const { VERIFY_KYC_FORM } = useAppSelector((state) => state.CKYC);
  const [policyRevisionPopup, setPolicyRevisionPopup] =
    useState<boolean>(false);
  const [vehicleDetailFields, setVehicleDetailFields] =
    useState<TCarVehicleDetails>({
      ...VEHICLE_DETAILS,
      pan_no: {
        value: validatePAN(VERIFY_KYC_FORM.doc_id.value)
          ? VERIFY_KYC_FORM.doc_id.value
          : VEHICLE_DETAILS?.pan_no?.value,
        warning: false,
      },
    });
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [prevDepth, setPrevDepth] = useState<boolean>(true);
  const [bankdata, setBankdata] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [premium, setPremium] = useState<number>(0);
  const { Car, CKYC } = useAppSelector((state) => state);

  const [addon_stats_value, setAddon_Status_value] =
    useState<TCarVehicleDetails>(VEHICLE_DETAILS);
  useEffect(() => {
    setAddon_Status_value(VEHICLE_DETAILS);
  }, [VEHICLE_DETAILS]);
  console.log("VEHICLE_DETAILS", VEHICLE_DETAILS);

  const [previousInsurance, setPreviousInsurance] = useState<any>();

  useEffect(() => {
    GET_PREV_INSURER_LIST();
    const premium_details = SELECTED_QUOTE_DATA.quotationDetail;

    if (premium_details) {
      const premium_with_tax = CarPremiumCal(
        premium_details,
        ADDON_STATUS,
        ADDON_USER_VALUE.passengerCover.value,
        PLAN_TYPE,
        CKYC.VERIFY_KYC_FORM.customer_type.value,
        ADD_FORM.reg_date.value
      );
      setPremium(premium_with_tax);
    }
  }, [SELECTED_QUOTE_DATA, ADDON_STATUS]);

  function useDebounce(text: string, delay: number) {
    useEffect(() => {
      const timerId = setTimeout(() => {
        setValue(text);
      }, delay);
      return () => {
        clearTimeout(timerId);
      };
    }, [text, delay]);
    return value;
  }

  const debouncedBankdata = useDebounce(bankdata, 500);
  useEffect(() => {
    VEHICLE_ON_LOANS(debouncedBankdata);
  }, [debouncedBankdata]);

  const VEHICLE_ON_LOANS = (bankdata: any) => {
    const onSuccess = (res: any) => {
      const response = res?.data?.response;

      const local_array: TDropdown[] = [];
      for (const data of response) {
        local_array.push({
          label: data.name,
          value: data.name,
        });
      }

      dispatch(
        CarSlice.actions.SET_DROPDOWN_DATA({
          key: "VEHICLE_ON_LOAN",
          value: local_array,
        })
      );
    };
    const onError = (err: any) => {
      console.log("error", err);
    };
    let param: any = {
      product_code:
        SELECTED_QUOTE_DATA.quotationDetail?.productDetails.product_code,
      term: bankdata,
    };
    if (bankdata.length >= 3) {
      CAR_ADD_FORM_SERVICES.VEHICLE_ON_LOAN(onError, onSuccess, param);
    }
  };

  const GET_PREV_INSURER_LIST = () => {
    const onSuccess = (res: any) => {
      let data = [];
      const response = res?.data?.response;

      data = Object.values(response).map((item: any) => ({
        label: item?.short_name,
        value: item?.short_name,
      }));
      const removedInsure = data.filter(
        (item: any) =>
          item.value !==
          SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.short_desc
      );
      setPreviousInsurance(removedInsure);
      dispatch(
        CarSlice.actions.UPDATE_DROPDOWN_MASTER({
          key: "PREVIOUS_INSURER_LIST",
          value: data,
        })
      );
    };

    const onError = (res: any) => {
      console.log("Error");
    };
    CAR_ADD_FORM_SERVICES.GET_PREVIOUS_INSURER_LIST(onError, onSuccess);
  };

  const handleClick = () => {
    setVehicleDetailFields({
      ...vehicleDetailFields,
      is_vehicle_on_loan: !vehicleDetailFields.is_vehicle_on_loan,
    });
  };

  const [recalculatedPremium, setRecalculatedPremium] =
    useState<TCarPremiumDetails>({
      recalculated: false,
      withDiscountconsumablesCover: 0,
      withDiscountdepreciationCover: 0,
      withDiscountinvoicePriceCover: 0,
      withDiscountroadSideAssistance: 0,
      withOutBasicOd: 0,
      withBundleAccessory: 0,
      withOutBundleAccessory: 0,
      RSQUOTEID: "",
      withBundleBasicOD: 0,
      withBundleNcbDiscount: 0,
      withOutBundlebBasicOd: 0,
      withOutNcbDiscount: 0,
      paymentId: "",
      UniqueRequestID: "",
      tata_coral_plan_amount: 0,
      tata_gold_plan_amount: 0,
      tata_perl_plan_amount: 0,
      tata_perlplus_plan_amount: 0,
      tata_sapphire_plan_amount: 0,
      tata_sapphirep_plan_amount: 0,
      tata_sapphirepp_plan_amount: 0,
      includedkeyReplacementCover: 0,
      zerodepAssurePlusPremiume: 0,
      zerodepAssurePremiume: 0,
      pTransactionId: "",
      correlationId: "",
      includedPersonalBelonging: 0,
      personalBelonging: 0,
      passerngerCover: 0,
      error: false,
      freeRoadSideAssistance: 0,
      tyreSecureCover: 0,
      fg_plan_type: "",
      tariffDiscount: 0,
      exshowroomPrice: 0,
      minimumIDV: 0,
      maximumIDV: 0,
      IDV: 0,
      basicOD: 0,
      basicTP: 0,
      netPremium: 0,
      ncbDiscount: 0,
      odDiscount: 0,
      antiTheftDiscount: 0,
      associationDiscount: 0,
      ePolicyDiscount: 0,
      otherDiscount: 0,
      deductibleDiscount: 0,
      ambulanceChargesCover: 0,
      consumablesCover: 0,
      depreciationCover: 0,
      hospitalCashCover: 0,
      hydrostaticLockCover: 0,
      keyReplacementCover: 0,
      paOwnerDriver: 0,
      engineGearBoxProtection: 0,
      noClaimBonusSameSlab: 0,
      roadSideAssistance: 0,
      medicalExpenses: 0,
      accessoryCoverCharge: 0,
      llDriver: 0,
      paFamily: 0,
      invoicePriceCover: 0,
      driverCover: 0,
      seatingCapacity: 0,
      includedPAOwnerDriver: 0,
      cngKitOD: 0,
      cngKitTP: 0,
      GD_ProPlanPremium: 0,
      GD_DProPlanPremium: 0,
      GD_DCProPlanPremium: 0,
      GD_DCEProPlanPremium: 0,
      GD_DCTProPlanPremium: 0,
      GD_DCETProPlanPremium: 0,
      GD_DCRTIProPlanPremium: 0,
      GD_DCERTIProPlanPremium: 0,
      GD_DCTRTIProPlanPremium: 0,
      GD_DCETRTIProPlanPremium: 0,
      GD_ProPlan: {
        personalbelonging: 0,
        roadside: 0,
        Key: 0,
      },
      GD_DProPlan: {
        personalbelonging: 0,
        roadside: 0,
        Key: 0,
        zerodeps: 0,
      },
      GD_DCProPlan: {
        personalbelonging: 0,
        roadside: 0,
        Key: 0,
        zerodeps: 0,
        consumable: 0,
      },
      GD_DCEProPlan: {
        personalbelonging: 0,
        roadside: 0,
        Key: 0,
        zerodeps: 0,
        consumable: 0,
        engine: 0,
      },
      GD_DCERTIProPlan: {
        personalbelonging: 0,
        roadside: 0,
        Key: 0,
        zerodeps: 0,
        consumable: 0,
        engine: 0,
        invoice: 0,
      },
      GD_DCTProPlan: {
        personalbelonging: 0,
        roadside: 0,
        Key: 0,
        zerodeps: 0,
        consumable: 0,
        tyre: 0,
      },
      GD_DCTRTIProPlan: {
        personalbelonging: 0,
        roadside: 0,
        Key: 0,
        zerodeps: 0,
        consumable: 0,
        tyre: 0,
        invoice: 0,
      },
      GD_DCETProPlan: {
        personalbelonging: 0,
        roadside: 0,
        Key: 0,
        zerodeps: 0,
        consumable: 0,
        engine: 0,
        tyre: 0,
      },
      GD_DCETRTIProPlan: {
        personalbelonging: 0,
        roadside: 0,
        Key: 0,
        zerodeps: 0,
        consumable: 0,
        engine: 0,
        tyre: 0,
        invoice: 0,
      },
      GD_DCRTIProPlan: {
        personalbelonging: 0,
        roadside: 0,
        Key: 0,
        zerodeps: 0,
        consumable: 0,
        invoice: 0,
      },
    });

  const validateForm = () => {
    let data = { ...vehicleDetailFields };
    data = {
      ...data,
      chasis_no: {
        ...data.chasis_no,
        warning: validateChassisNo(
          data.chasis_no.value,
          `${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}`,
          ADD_FORM.business_type
        ),
      },
      engine_no: {
        ...data.engine_no,
        warning:
          SELECTED_QUOTE_DATA?.quotationDetail?.CompanyDetails.company_code ===
          ECompanyCode.KOTAK
            ? validateKotakEngineNo(data.engine_no.value)
            : validateEngineNo(
                data.engine_no.value,
                `${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}`
              ),
      },
      prev_policy_no: {
        ...data.prev_policy_no,
        warning: validatePrevPolicyNo(data.prev_policy_no.value),
      },
      prev_insurer: {
        ...data.prev_insurer,
        warning: isEmpty(data.prev_insurer.value),
      },
      mfg_year: {
        ...data.mfg_year,
        warning: isEmpty(data.mfg_year.value),
      },
      reg_date: {
        ...data.reg_date,
        warning: isEmpty(data.reg_date.value),
      },
      tp_insurer: {
        ...data.tp_insurer,
        warning: isEmpty(data.tp_insurer.value),
      },
      tp_policy: {
        ...data.tp_policy,
        warning: validatePrevPolicyNo(data.tp_policy.value),
      },
      tp_policy_start: {
        ...data.tp_policy_start,
        warning: isEmpty(data.tp_policy_start.value),
      },
    };

    const premium_details = SELECTED_QUOTE_DATA.quotationDetail;
    const premium = CarPremiumCal(
      premium_details,
      ADDON_STATUS,
      ADDON_USER_VALUE.passengerCover.value,
      PLAN_TYPE,
      CKYC.VERIFY_KYC_FORM.customer_type.value,
      ADD_FORM.reg_date.value
    );
    if (
      SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
      EMotorCompCode.RSA
    ) {
      data = {
        ...data,
        pan_no: { ...data.pan_no, warning: !validatePAN(data.pan_no.value) },
      };
    } else {
      if (
        SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
        EMotorCompCode.ACKO
      ) {
        if (premium >= 100000) {
          data = {
            ...data,
            pan_no: {
              ...data.pan_no,
              warning: !validatePAN(data.pan_no.value),
            },
          };
        } else {
          data = { ...data, pan_no: { ...data.pan_no, warning: false } };
        }
      } else {
        if (premium >= 50000) {
          data = {
            ...data,
            pan_no: {
              ...data.pan_no,
              warning: !validatePAN(data.pan_no.value),
            },
          };
        } else {
          data = {
            ...data,
            pan_no: {
              ...data.pan_no,
              warning: !validatePAN(data.pan_no.value),
            },
          };
        }
      }
    }
    let hasError =
      data.chasis_no?.warning ||
      data.engine_no?.warning ||
      data.mfg_year?.warning ||
      data.pan_no?.warning;
    // if (
    //   SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
    //   EMotorCompCode.RSA
    // ) {
    //   hasError = hasError || data.pan_no.warning;
    // }

    if (PLAN_TYPE !== "Bundle Policy") {
      hasError =
        hasError ||
        data.prev_policy_no?.warning ||
        data.prev_insurer?.warning ||
        data.mfg_year?.warning ||
        data.reg_date?.warning;
    }

    if (PLAN_TYPE === "SAOD") {
      hasError =
        hasError ||
        data.tp_policy.warning ||
        data.tp_insurer.warning ||
        data.tp_policy_start.warning;
    }
    if (
      CarPremiumCal(
        premium_details,
        ADDON_STATUS,
        ADDON_USER_VALUE.passengerCover.value,
        PLAN_TYPE,
        CKYC.VERIFY_KYC_FORM.customer_type.value,
        ADD_FORM.reg_date.value
      ) >= 50000 ||
      !isEmpty(data.pan_no.value)
    ) {
      hasError = hasError || data.pan_no.warning;
    }

    if (data.is_vehicle_on_loan) {
      data = {
        ...data,
        bank_name: {
          ...data.bank_name,
          warning: isEmpty(data.bank_name.value),
        },
        city: {
          ...data.city,
          warning: isEmpty(data.city.value),
        },
      };
      hasError = hasError || data.bank_name.warning || data.city.warning;
    }

    setVehicleDetailFields(data);
    if (!hasError) {
      if (window.location.hostname === CLIENTS.JIO) {
        pushMotorDataLayer(
          "jioinsure_flow_details",
          "vehicle",
          "proceed",
          "car",
          REDIRECTED ? "JFS app" : "Insure website"
        );
        const eventProps = {
          action: "vehicle",
          click: "continue",
          type: "car",
          EntrySource: REDIRECTED ? "JFS app" : "Insure website",
        };
        sendEventToNativeApp("jioinsure_flow_details", eventProps);
      }
      setisLoading(true);
      dispatch(
        CarSlice.actions.BULK_UPDATE({
          ...Car,
          QUOTE_LOADER: true,
          VEHICLE_DETAILS: {
            ...data,
            prev_rti_cover: VEHICLE_DETAILS.prev_rti_cover,
            prev_cng_cover: VEHICLE_DETAILS.prev_cng_cover,
            prev_depth_cover: VEHICLE_DETAILS.prev_depth_cover,
          },
        })
      );

      CAPTURE_DATA();
    }
  };

  const fieldsUpdateState = (attrName: any, value: any) => {
    let data = vehicleDetailFields;
    if (attrName[0] === "IS_OWNERSHIP_CHANGED") {
      data = {
        ...data,
        IS_OWNERSHIP_CHANGED: value,
      };
    } else if (attrName[0] === "chasis_no") {
      data = {
        ...data,
        chasis_no: {
          ...data.chasis_no,
          value: value,
          warning: validateChassisNo(
            value,
            `${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}`,
            ADD_FORM.business_type
          ),
        },
      };
    } else if (attrName[0] === "engine_no") {
      data = {
        ...data,
        engine_no: {
          ...data.engine_no,
          value: value,
          warning:
            value.length <= 6
              ? SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails
                  .company_code === ECompanyCode.KOTAK
                ? validateKotakEngineNo(value)
                : validateEngineNo(
                    value,
                    `${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}`
                  )
              : isEmpty(value),
        },
      };
    } else if (attrName[0] === "prev_policy_no") {
      data = {
        ...data,
        prev_policy_no: {
          ...data.prev_policy_no,
          value: value,
          warning:
            value.length <= 5 ? validatePrevPolicyNo(value) : isEmpty(value),
        },
      };
    } else if (attrName[0] === "prev_insurer") {
      data = {
        ...data,
        prev_insurer: {
          ...data.prev_insurer,
          value: value,
          warning: isEmpty(value),
        },
      };
    } else if (attrName[0] === "mfg_year") {
      data = {
        ...data,
        mfg_year: { ...data.mfg_year, value: value, warning: isEmpty(value) },
      };
    } else if (attrName[0] === "PAN") {
      data = {
        ...data,
        pan_no: { ...data.pan_no, value: value, warning: !validatePAN(value) },
      };
    } else if (attrName[0] === "reg_date") {
      data = {
        ...data,
        reg_date: { ...data.reg_date, value: value, warning: isEmpty(value) },
        mfg_year: { ...data.mfg_year, value: "", warning: isEmpty(value) },
        tp_policy_start: {
          ...data.tp_policy_start,
          value: "",
          warning: isEmpty(value),
        },
      };
    } else if (attrName[0] === "policy_exp_date") {
      data = {
        ...data,
        policy_exp_date: {
          ...data.policy_exp_date,
          value: value,
          warning: isEmpty(value),
        },
      };
    } else if (attrName[0] === "city") {
      data = {
        ...data,
        city: { ...data.city, value: value, warning: isEmpty(value) },
      };
    } else if (attrName[0] === "bank_name") {
      data = {
        ...data,
        bank_name: { ...data.bank_name, value: value, warning: isEmpty(value) },
      };
    } else if (attrName[0] === "tp_policy") {
      data = {
        ...data,
        tp_policy: {
          ...data.tp_policy,
          value: value,
          warning: isEmpty(value),
        },
      };
    } else if (attrName[0] === "tp_insurer") {
      data = {
        ...data,
        tp_insurer: {
          ...data.tp_insurer,
          value: value,
          warning: isEmpty(value),
        },
      };
    } else if (attrName[0] === "tp_policy_start") {
      data = {
        ...data,
        tp_policy_start: {
          ...data.tp_policy_start,
          value: value,
          warning: isEmpty(value),
        },
      };
    }

    setVehicleDetailFields(data);
  };
  const updateMasterState = (attrName: string, value: boolean) => {
    if (attrName === "backbutton") {
      navigate(-1);
    }
  };

  const PREMIUM_RECALCULATION = () => {
    const onSuccess = (res: any) => {
      setisLoading(false);
      const results = res;
      const error = results?.error;
      dispatch(CarSlice.actions.updateQuoteLoaderStatus(false));
      if (error === false) {
        const response: TCarPremiumDetails =
          results?.quoteLists[0]?.premiumDetails;

        if (SELECTED_QUOTE_DATA.quotationDetail && response) {
          const new_premium = CarPremiumCal(
            SELECTED_QUOTE_DATA.quotationDetail,
            ADDON_STATUS,
            ADDON_USER_VALUE.passengerCover.value,
            PLAN_TYPE,
            CKYC.VERIFY_KYC_FORM.customer_type.value,
            ADD_FORM.reg_date.value
          );
          const old_premium = CarPremiumCal(
            {
              ...SELECTED_QUOTE_DATA.quotationDetail,
              premiumDetails: response,
            },
            ADDON_STATUS,
            ADDON_USER_VALUE.passengerCover.value,
            PLAN_TYPE,
            CKYC.VERIFY_KYC_FORM.customer_type.value,
            ADD_FORM.reg_date.value
          );
          if (`${new_premium}` === `${old_premium}`) {
            dispatch(
              CarSlice.actions.SET_SELECTED_QUOTE_DATA({
                ...SELECTED_QUOTE_DATA,
                quotationDetail: {
                  ...SELECTED_QUOTE_DATA.quotationDetail,
                  premiumDetails: { ...response },
                },
              })
            );
            if (PAGE_STATUS) {
              navigate(
                `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.PREVIEW_DEATILS}?type=CAR&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`
              );
            } else {
              if (CKYC.VERIFY_KYC_FORM.customer_type.value === "Organization") {
                navigate(
                  `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.ADDRESS_DETAILS}?type=CAR&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`
                );
              } else {
                navigate(
                  `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.NOMINEE_DETAILS}?type=CAR&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`
                );
              }
            }
          } else {
            setPolicyRevisionPopup(true);
            setRecalculatedPremium(response);
          }
        }
      }
    };

    const onError = (err: any) => {
      console.log("error", err);
      dispatch(CarSlice.actions.updateQuoteLoaderStatus(false));
    };

    if (SELECTED_QUOTE_DATA.quotationDetail) {
      let param = {
        product_code:
          SELECTED_QUOTE_DATA.quotationDetail?.productDetails.product_code,
        quote_no: ADD_FORM_RESPONSE.quote_no,
        company_code:
          SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code,
      };

      setTimeout(() => {
        CAR_SERVICES.PREMIUM_RECALCULATION(onSuccess, onError, param);
      }, 100);
    }
  };

  const parts = ADD_FORM_RESPONSE.policy_expiry_date.split("-");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Subtract 1 since months are zero-based (0-11)
  const year = parseInt(parts[2], 10);

  // Create a new Date object with the extracted components
  const policyExpiryDate = new Date(year, month, day);

  const CAPTURE_DATA = () => {
    let dto: any = {
      quote_no: ADD_FORM_RESPONSE.quote_no,
      chassisNumber: vehicleDetailFields.chasis_no.value,
      engineNumber: vehicleDetailFields.engine_no.value,
      existingPolicyNo: vehicleDetailFields.prev_policy_no.value,
      previous_insurer: vehicleDetailFields.prev_insurer.value,
      manufacture_date: vehicleDetailFields.mfg_year.value,
      policy_expiry_date: vehicleDetailFields.policy_exp_date.value,
      registration_date: vehicleDetailFields.reg_date.value,
      financierName: vehicleDetailFields.bank_name.value,
      financierCity: vehicleDetailFields.city.value,
      prev_depth_cover: addon_stats_value.prev_depth_cover ? "Yes" : "No",
      prev_rti_cover: addon_stats_value.prev_rti_cover ? "Yes" : "No",
      prev_cng_cover: addon_stats_value.prev_cng_cover ? "Yes" : "No",
      prev_engine_cover: addon_stats_value.prev_engine_cover ? "Yes" : "No",
      prev_tyre_cover: addon_stats_value.prev_tyre_cover ? "Yes" : "No",
      prev_consumable_cover: addon_stats_value.prev_consumable_cover
        ? "Yes"
        : "No",
      panNumber: validatePAN(VERIFY_KYC_FORM.doc_id.value)
        ? VERIFY_KYC_FORM.doc_id.value
        : vehicleDetailFields.pan_no.value,
      ownership_changed: vehicleDetailFields.IS_OWNERSHIP_CHANGED
        ? "Yes"
        : "No",
      is_vehicle_on_loan: vehicleDetailFields.is_vehicle_on_loan ? "Yes" : "No",
      section: "coverage_details",
      insurance_type: "CAR",
      pincode: OWNER_DETAILS?.pincode?.value,
    };
    if (
      !vehicleDetailFields.tp_policy.warning &&
      !vehicleDetailFields.tp_insurer.warning &&
      !vehicleDetailFields.tp_policy_start.warning
    ) {
      dto = {
        ...dto,
        tpExistingPolicyNo: vehicleDetailFields.tp_policy.value,
        tp_policy_start_date: vehicleDetailFields.tp_policy_start.value,
        tp_previous_insurer: vehicleDetailFields.tp_insurer.value,
      };
    }
    const onSuccess = (res: any) => {
      const response = res;
      const error = response.error;

      if (error === false) {
        if (
          (SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code !==
            EMotorCompCode.BAJAJ &&
            SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code !==
              EMotorCompCode.HDFC &&
            SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code !==
              EMotorCompCode.RSA &&
            PLAN_TYPE === "Bundle Policy") ||
          (SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code !==
            EMotorCompCode.BAJAJ &&
            SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code !==
              EMotorCompCode.HDFC &&
            SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code !==
              EMotorCompCode.RSA &&
            PLAN_TYPE === "Third Party")
        ) {
          dispatch(CarSlice.actions.updateQuoteLoaderStatus(false));
          if (PAGE_STATUS) {
            navigate(
              `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.PREVIEW_DEATILS}?type=CAR&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`
            );
          } else {
            if (CKYC.VERIFY_KYC_FORM.customer_type.value === "Organization") {
              navigate(
                `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.ADDRESS_DETAILS}?type=CAR&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`
              );
            } else {
              navigate(
                `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.NOMINEE_DETAILS}?type=CAR&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`
              );
            }
          }
        } else {
          PREMIUM_RECALCULATION();
        }
      }
    };

    const onError = (res: any) => {
      console.log("Error");
    };
    CAR_SERVICES.Capture_data(onSuccess, onError, dto);
  };

  return (
    <>
      {isMobile ? (
        <MVehicleDetails
          recalculatedPremium={recalculatedPremium}
          vehicleDetailFields={vehicleDetailFields}
          handleClick={handleClick}
          fieldsUpdateState={fieldsUpdateState}
          setVehicleDetailFields={setVehicleDetailFields}
          policyRevisionPopup={policyRevisionPopup}
          setPolicyRevisionPopup={setPolicyRevisionPopup}
          validateForm={validateForm}
          isLoading={isLoading}
          prevDepth={prevDepth}
          setPrevDepth={setPrevDepth}
          premium={premium}
          policyExpiryDate={policyExpiryDate}
          setBankdata={setBankdata}
          previousInsurance={previousInsurance}
        />
      ) : (
        <VehicleDetails
          vehicleDetailFields={vehicleDetailFields}
          recalculatedPremium={recalculatedPremium}
          handleClick={handleClick}
          fieldsUpdateState={fieldsUpdateState}
          setVehicleDetailFields={setVehicleDetailFields}
          policyExpiryDate={policyExpiryDate}
          policyRevisionPopup={policyRevisionPopup}
          setPolicyRevisionPopup={setPolicyRevisionPopup}
          validateForm={validateForm}
          isLoading={isLoading}
          updateMasterState={updateMasterState}
          setBankdata={setBankdata}
          prevDepth={prevDepth}
          setPrevDepth={setPrevDepth}
          premium={premium}
          previousInsurance={previousInsurance}
        />
      )}
    </>
  );
};

export default VehicleDetailsContainer;
