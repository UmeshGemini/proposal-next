import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OwnerDetails from "../../../Page/Desktop/Car/HDFC/OwnerDetails";
import MOwnerDetails from "../../../Page/Mobile/Car/HDFC/MOwnerDetails";
import { CAR_ROUTES } from "../../../Router/Path/CarRoutes";
import { CKYCServcies } from "../../../Services/ckyc-node/CKYCServices";
import { CAR_SERVICES } from "../../../Services/car-node/CarServices";
import { CKYCSlice } from "../../../redux/slice/CKYC/CKYCSlice";
import { CarSlice } from "../../../redux/slice/Car/CarSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  isEmpty,
  validateEmail,
  validateFullName,
  validateGST,
  validateMobileNumber,
} from "../../../SupportingFiles/HelpingFunction";
import useIsMobile from "../../../SupportingFiles/MobileProvider";
import { CLIENTS } from "../../../URLCollection/Clients";
import { TCarOwnerDetails } from "../../../types/TCarSlice";
import {
  pushMotorDataLayer,
  sendEventToNativeApp,
} from "../../../utils/analytics";

const OwnerDetailsContainer = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    OWNER_DETAILS,
    ADD_FORM_RESPONSE,
    PAGE_STATUS,
    ADDON_STATUS,
    SELECTED_QUOTE_DATA,
    REDIRECTED,
  } = useAppSelector((state) => state.Car);
  const { CKYC, Car } = useAppSelector((state) => state);
  const { VERIFY_KYC_FORM } = useAppSelector((state) => state.CKYC);
  const ownerMarital_data = [
    { label: "Married", value: "Married" },
    { label: "Single", value: "Single" },
  ];
  const [ownerFields, setOwnerFields] =
    useState<TCarOwnerDetails>(OWNER_DETAILS);
  const [kycOpen, setKycOpen] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    const windowURL = window.location.search;
    const params = new URLSearchParams(windowURL);
    const txnId = params.get("txnId");
    const status = params.get("status");
    const kyc_id = params.get("kyc_id");

    if (txnId && status && kyc_id) {
      const prams = {
        quote_no: ADD_FORM_RESPONSE.quote_no,
        vehicle_owned: CKYC.VERIFY_KYC_FORM.customer_type.value,
        kyc_id: kyc_id,
      };
      GET_CKYC_DETAILS_FROM_HDFC(prams);
    }
  }, []);

  const GET_CKYC_DETAILS_FROM_HDFC = (params: {
    quote_no: string;
    vehicle_owned: string;
    kyc_id: string;
  }) => {
    const onSuccess = (res: any) => {
      const results = res.results;
      const error = results.error;
      setLoader(false);
      if (!error) {
        const response = results.response;

        setOwnerFields((prev) => ({
          ...prev,
          name: {
            value: response.kycCustomerName,
            warning: false,
          },
          dob: {
            value: response.kycDOB,
            warning: false,
          },
          mobile: {
            value: Car.ADD_FORM.mobile.value,
            warning: false,
          },
        }));
        dispatch(
          CKYCSlice.actions.BULK_UPDATE({
            ...CKYC,
            CKYC_DETAILS: response,
          })
        );
        dispatch(
          CarSlice.actions.BULK_UPDATE({
            ...Car,
            OWNER_DETAILS: {
              ...Car.OWNER_DETAILS,
              name: {
                value: response.kycCustomerName,
                warning: false,
              },
              dob: {
                value: response.kycDOB,
                warning: false,
              },
              mobile: {
                value: Car.ADD_FORM.mobile.value,
                warning: false,
              },
            },
            ADDRESS_DETAILS: {
              ...Car.ADDRESS_DETAILS,
              addressLineOne: {
                value: response.kycAddress1,
                warning: false,
              },
              addressLineTwo: {
                value: `${response.kycAddress2}, ${response.kycAddress3}`,
                warning: false,
              },
              pincode: {
                value: response.kycPincode,
                warning: false,
              },
              state: response.kycState,
              city: response.kycCity,
            },
          })
        );
      }
    };
    const onError = () => {
      setLoader(false);
    };
    setKycOpen(true);
    setLoader(true);
    CKYCServcies.GET_CKYC_DETAILS_FROM_HDFC(onSuccess, onError, params);
  };

  const updateMasterState = (attrName: string, value: boolean) => {
    if (attrName === "pageStatus") {
      validateForm();
    } else if (attrName === "backbutton") {
      navigate(-1);
    }
  };

  const validateForm = () => {
    let data: TCarOwnerDetails = { ...ownerFields };

    if (!data.includePAOwner) {
      data = {
        ...data,
        pacover: {
          ...data.pacover,
          warning: isEmpty(data.pacover.value),
        },
      };
    }
    if (VERIFY_KYC_FORM.customer_type.value === "Organization") {
      data = {
        ...data,
        mobile: {
          ...data.mobile,
          warning: !validateMobileNumber(data.mobile.value),
        },
        dob: {
          ...data.dob,
          warning: isEmpty(data.dob.value),
        },
        email: {
          ...data.email,
          warning: !validateEmail(data.email.value),
        },
        gst: {
          ...data.gst,
          warning: !validateGST(data.gst.value),
        },
      };
    } else {
      data = {
        ...data,
        mobile: {
          ...data.mobile,
          warning: !validateMobileNumber(data.mobile.value),
        },
        dob: {
          ...data.dob,
          warning: isEmpty(data.dob.value),
        },
        gender: {
          ...data.gender,
          warning: isEmpty(data.gender.value),
        },
        maritalStatus: {
          ...data.maritalStatus,
          warning: isEmpty(data.maritalStatus.value),
        },
        email: {
          ...data.email,
          warning: !validateEmail(data.email.value),
        },
      };
    }
    let hasError: boolean = false;

    if (VERIFY_KYC_FORM.customer_type.value !== "Organization") {
      hasError =
        data.name.warning ||
        data.mobile.warning ||
        data.email.warning ||
        data.gender.warning ||
        data.maritalStatus.warning ||
        data.dob.warning;
    } else {
      hasError = hasError || data.gst.warning || data.email.warning;
    }

    setOwnerFields(data);

    if (!hasError) {
      if (window.location.hostname === CLIENTS.JIO) {
        pushMotorDataLayer(
          "jioinsure_flow_details",
          "owner",
          "proceed",
          "car",
          REDIRECTED ? "JFS app" : "Insure website"
        );
        const eventProps = {
          action: "owner",
          click: "continue",
          type: "car",
          EntrySource: REDIRECTED ? "JFS app" : "Insure website",
        };
        sendEventToNativeApp("jioinsure_flow_details", eventProps);
      }
      dispatch(CarSlice.actions.OWNER_DETAILS(data));
      CAPTURE_DATA();
      if (PAGE_STATUS) {
        navigate(
          `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.PREVIEW_DEATILS}?type=CAR&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`
        );
      } else {
        navigate(
          `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.VEHICLE_DETAILS}?type=CAR&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`
        );
      }
    }
  };

  useEffect(() => {
    const Params: {
      quote_no: string;
      type: string;
      addon: string;
      value: "0" | "1" | any;
    } = {
      quote_no: ADD_FORM_RESPONSE.quote_no,
      type: "TW",
      addon: "pa_owner_driver",
      value:
        VERIFY_KYC_FORM.customer_type.value === "Organization"
          ? "0"
          : ADDON_STATUS.pa_owner_cover.value
          ? "1"
          : "0",
    };

    CAR_SERVICES.UPDATE_ADDON_STATUS(
      () => {},
      () => {},
      Params
    );
  }, [ADDON_STATUS]);

  useEffect(() => {
    if (VERIFY_KYC_FORM.customer_type.value === "Organization") {
      dispatch(
        CarSlice.actions.UPDATE_ADDON_STATUS([
          {
            key: "pa_owner_cover",
            value: false,
          },
        ])
      );
    }
  }, []);

  const CAPTURE_DATA = () => {
    let dto: any = {
      quote_no: ADD_FORM_RESPONSE.quote_no,
      effectivePUC: ownerFields.validPuc,
      customerName: ownerFields.name.value,
      vehicleOwned: VERIFY_KYC_FORM.customer_type.value,
      tenure: "1",
      reason_for_exemption_pa: ownerFields.pacover.value,
      customerEmail: ownerFields.email.value,
      mobile: ownerFields.mobile.value,
      maritalStatus: ownerFields.maritalStatus.value,
      customerGender: ownerFields.gender.value,
      customerDOB: ownerFields.dob.value,
      customerGSTNo: ownerFields.gst.value,
      section: "customer_details",
      insurance_type: "CAR",
    };
    const onSuccess = (res: any) => {
      const response = res;
      const error = response.error;
      if (error === false) {
        if (PAGE_STATUS === true) {
          navigate(
            `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.PREVIEW_DEATILS}?type=CAR&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`
          );
        } else {
          navigate(
            `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.VEHICLE_DETAILS}?type=CAR&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`
          );
        }
      }
    };

    const onError = (res: any) => {
      console.log("Error");
    };
    CAR_SERVICES.Capture_data(onSuccess, onError, dto);
  };

  const fieldsUpdateState = (attrName: any, value: any) => {
    attrName[3]({
      ...attrName[2],
      [attrName[0]]: {
        [attrName[1]]: value,
        warning:
          attrName[0] === "name"
            ? !validateFullName(value)
            : attrName[0] === "mobile"
            ? !validateMobileNumber(value)
            : attrName[0] === "email"
            ? !validateEmail(value)
            : attrName[0] === "gst"
            ? !validateGST(value)
            : isEmpty(value),
      },
    });
  };

  const handleClick = (key: any, value: any) => {
    setOwnerFields({
      ...ownerFields,

      [key]: value,
      name: { ...ownerFields.name, warning: false },
      pacover: { ...ownerFields.pacover, warning: false },
      gender: { ...ownerFields.gender, warning: false },
      mobile: { ...ownerFields.mobile, warning: false },
      gst: { ...ownerFields.gst, warning: false },
      email: { ...ownerFields.email, warning: false },
      maritalStatus: { ...ownerFields.maritalStatus, warning: false },
      dob: { ...ownerFields.dob, warning: false },
    });
  };

  return (
    <>
      {isMobile ? (
        <MOwnerDetails
          ownerFields={ownerFields}
          questionToggleStatus={"1"}
          pageStatus={1}
          updateMasterState={updateMasterState}
          handleClick={handleClick}
          setOwnerFields={setOwnerFields}
          fieldsUpdateState={fieldsUpdateState}
          validateForm={validateForm}
          ownerMarital_data={ownerMarital_data}
        />
      ) : (
        <OwnerDetails
          loader={loader}
          kycOpen={kycOpen}
          setKycOpen={setKycOpen}
          ownerMarital_data={ownerMarital_data}
          ownerFields={ownerFields}
          updateMasterState={updateMasterState}
          handleClick={handleClick}
          setOwnerFields={setOwnerFields}
          fieldsUpdateState={fieldsUpdateState}
          validateForm={validateForm}
        />
      )}
    </>
  );
};

export default OwnerDetailsContainer;
