import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import NationalManualKYC from "../../../Page/Desktop/CKYC/National/NationalManualKYC";
import MNationalManualCKYC from "../../../Page/Mobile/CKYC/National/MNationalManualKYC";
import { CAR_ROUTES } from "../../../Router/Path/CarRoutes";
import { HEALTH_ROUTE } from "../../../Router/Path/HealthRoutes";
import { TW_ROUTES } from "../../../Router/Path/TWRoutes";
import { CAR_SERVICES } from "../../../Services/car-node/CarServices";
import { CKYCServcies } from "../../../Services/ckyc-node/CKYCServices";
import { TW_SERVICES } from "../../../Services/tw-node/TWServices";
import { CKYCSlice } from "../../../store/actions/CKYC/CKYCSlice";
import { CarSlice } from "../../../store/actions/Car/CarSlice";
import { CommonDropdownSlice } from "../../../store/actions/CommonDropdown/CommonDropdownSlice";
import { HealthSlice } from "../../../store/actions/Health/HealthSlice";
import { TWSlice } from "../../../store/actions/TwoWheeler/TWSlice";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import {
  FORMAT_DD_MM_YYYY,
  GET_QUERY_PARAMETERS,
  isEmpty,
  validateEmail,
  validateFullName,
} from "../../../SupportingFiles/HelpingFunction";
import useIsMobile from "../../../SupportingFiles/MobileProvider";
import { CLIENTS } from "../../../URLCollection/Clients";
import { TManualCKYCForm } from "../../../types/CKYC/TCKYC";
import { TDropdown } from "../../../types/Common/TDropdown";
import { TCarSlice } from "../../../types/TCarSlice";
import CarAttributePayload from "../../../utils/CarAttributePayload";
import {
  pushMotorDataLayer,
  sendEventToNativeApp,
} from "../../../utils/analytics";
import { TTWSlice } from "../../../types/TTWSlice";
import TwAttributePayload from "../../../utils/TwAttributePayload";

function NationalManualKYCContainer() {
  const [loader, setLoader] = useState<boolean>(false);
  const [showManualPopup, setShowManualPopup] = useState<boolean>(false);
  const [showCKYCDetailsPopup, setShowCKYCDetailsPopup] =
    useState<boolean>(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const REDUX_HEAD = useAppSelector((state) => state);
  const { TW, CKYC, Car, Health } = useAppSelector((state) => state);
  const { VERIFY_KYC_FORM } = useAppSelector((state) => state.CKYC);
  const [formDetails, setFormDetails] = useState<TManualCKYCForm>({
    customer_type: { value: "Individual", warning: false },
    dob: { value: "", warning: false },
    doc_type_id_proof: { value: "", warning: false },
    doc_no_id_proof: { value: "", warning: false },
    doc_id_proof_image: { value: "", warning: false },
    full_name: { value: "", warning: false },
    gender: { value: "", warning: false },
    email: { value: "", warning: false },
    doc_address_proof_image: { value: "", warning: false },
    doc_type_address_proof: { value: "", warning: false },
  });
  const [pageStatus, setPageStatus] = useState<string>("");

  useEffect(() => {
    const windowURL = window.location.search;
    const params = new URLSearchParams(windowURL);
    const type = params.get("type");

    if (type) {
      setPageStatus(type);
    }
  }, []);

  const updateMasterState = (attrName: any, value: any) => {
    if (attrName === "full_name") {
      setFormDetails((prev) => ({
        ...prev,
        [attrName]: { value: value, warning: !validateFullName(value) },
      }));
    } else if (attrName === "customer_type") {
      setFormDetails((prev) => ({
        ...prev,
        [attrName]: { value: value, warning: isEmpty(value) },
        dob: { value: "", warning: false },
      }));
    } else if (
      attrName === "doc_address_proof_image" ||
      attrName === "doc_id_proof_image"
    ) {
      setFormDetails((prev) => ({
        ...prev,
        [attrName]: { value: value, warning: false },
      }));
    } else if (attrName === "email") {
      setFormDetails((prev) => ({
        ...prev,
        [attrName]: { value: value, warning: !validateEmail(value) },
      }));
    } else {
      setFormDetails((prev) => ({
        ...prev,
        [attrName]: { value: value, warning: isEmpty(value) },
      }));
    }
  };

  useEffect(() => {
    setFormDetails((prev) => ({
      ...prev,
      customer_type: REDUX_HEAD.CKYC.VERIFY_KYC_FORM.customer_type,
    }));
  }, []);

  useEffect(() => {
    GET_DROPDOWN_MASTER("POV");
  }, []);

  const GET_DROPDOWN_MASTER = (TYPE: "POI" | "POA" | "POV") => {
    const onSuccess = (res: any) => {
      const results = res.data;
      const error = results.error;

      if (!error) {
        const response = results.data;
        const data: TDropdown[] = [];
        for (const key of response) {
          data.push({ value: key?.doc_code, label: key?.document });
        }

        dispatch(
          CommonDropdownSlice.actions.UPDATE_DROPDOWN_DATA({
            key: TYPE,
            value: data,
          })
        );
      }
    };
    const onError = (error: any) => {};

    switch (pageStatus) {
      case "CAR":
        const car_params = {
          company_code: `${REDUX_HEAD.Car.SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}`,
          list_for: TYPE,
        };
        CKYCServcies.CKYC_DROPDOWN_MASTER(onSuccess, onError, car_params);
        break;
      case "TW":
        const tw_params = {
          company_code: `${REDUX_HEAD.TW.SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}`,
          list_for: TYPE,
        };
        CKYCServcies.CKYC_DROPDOWN_MASTER(onSuccess, onError, tw_params);
        break;
      case "TERM":
        break;
      case "HP":
        const health_params = {
          company_code: `${REDUX_HEAD.Health.SELECTED_QUOTE_DATA.CompanyDetails.company_code}`,
          list_for: TYPE,
        };
        CKYCServcies.CKYC_DROPDOWN_MASTER(onSuccess, onError, health_params);
        break;

      default:
        break;
    }
  };

  const validateForm = () => {
    let data: TManualCKYCForm = { ...formDetails };

    data = {
      ...data,
      full_name: {
        ...data.full_name,
        warning: !validateFullName(data.full_name.value),
      },
      dob: { ...data.dob, warning: isEmpty(data.dob.value) },
      doc_type_id_proof: {
        ...data.doc_type_id_proof,
        warning: isEmpty(data.doc_type_id_proof.value),
      },
      // doc_no_id_proof: {
      //   ...data.doc_no_id_proof,
      //   warning: isEmpty(data.doc_no_id_proof.value),
      // },
      doc_id_proof_image: {
        ...data.doc_id_proof_image,
        warning: isEmpty(data.doc_id_proof_image.value),
      },
      customer_type: {
        ...data.customer_type,
        warning: isEmpty(data.customer_type.value),
      },
      gender: { ...data.gender, warning: isEmpty(data.gender.value) },
      // doc_type_address_proof: {
      //   ...data.doc_type_address_proof,
      //   warning: isEmpty(data.doc_type_address_proof.value),
      // },
      doc_address_proof_image: {
        ...data.doc_address_proof_image,
        warning: isEmpty(data.doc_address_proof_image.value),
      },
      email: {
        ...data.email,
        warning: isEmpty(`${data.email.value}`),
      },
    };

    setFormDetails(data);

    let hasError =
      data.full_name.warning ||
      data.doc_type_id_proof.warning ||
      // data.doc_no_id_proof.warning ||
      data.doc_id_proof_image.warning ||
      // data.customer_type.warning ||
      data.dob.warning ||
      // data.doc_type_address_proof.warning ||
      data.doc_address_proof_image.warning ||
      // data.doc_type_address_proof.warning ||
      data.doc_address_proof_image.warning ||
      data.doc_id_proof_image.warning;

    if (data.customer_type.value !== "Organization") {
      hasError = hasError || data.gender.warning;
    }

    if (
      data.doc_id_proof_image.warning ||
      data.doc_address_proof_image.warning
    ) {
      toast.error("Please attach documents");
    }

    if (!hasError) {
      MANUAL_CKYC_DETAILS(data);
    }
  };

  const MANUAL_CKYC_DETAILS = (data: TManualCKYCForm) => {
    const onSuccess = (res: any) => {
      setLoader(false);
      const results = res;
      const error = results.error;
      if (!error) {
        const message = results.message;
        const response = results.response;
        if (message === "No record found") {
          if (window.location.hostname === CLIENTS.JIO) {
            pushMotorDataLayer(
              "jioinsure_flow_details",
              "ckyc details failure",
              `${message}`,
              pageStatus === "TW"
                ? "two wheeler"
                : pageStatus?.toLocaleLowerCase(),

              Car.REDIRECTED ? "JFS app" : "Insure website"
            );
            const eventProps = {
              action: "ckyc",
              status: "ckyc details failure",
              message: `${message}`,
              type:
                pageStatus === "TW"
                  ? "two wheeler"
                  : pageStatus?.toLocaleLowerCase(),
              EntrySource: Car.REDIRECTED ? "JFS app" : "Insure website",
            };
            sendEventToNativeApp("jioinsure_flow_details", eventProps);
          }
          const kycManualURL = response.kycManualURL;
          setShowManualPopup(true);
        } else {
          if (window.location.hostname === CLIENTS.JIO) {
            pushMotorDataLayer(
              "jioinsure_flow_details",
              "ckyc details success",
              "na",
              pageStatus === "TW"
                ? "two wheeler"
                : pageStatus?.toLocaleLowerCase(),

              Car.REDIRECTED ? "JFS app" : "Insure website"
            );
            const eventProps = {
              action: "ckyc",
              status: "ckyc details success",
              message: "na",
              type:
                pageStatus === "TW"
                  ? "two wheeler"
                  : pageStatus?.toLocaleLowerCase(),
              EntrySource: Car.REDIRECTED ? "JFS app" : "Insure website",
            };
            sendEventToNativeApp("jioinsure_flow_details", eventProps);
          }
          dispatch(
            CKYCSlice.actions.BULK_UPDATE({
              ...CKYC,
              CKYC_DETAILS: response,
            })
          );
          setShowCKYCDetailsPopup(true);
        }
      } else {
        const message = results.message;
        toast.error(`${message}`);
        setShowManualPopup(false);
      }
    };

    const onError = (err: any) => {
      setLoader(false);
      console.log(err);
    };

    setLoader(true);
    switch (pageStatus) {
      case "TW":
        let tw_dto_formData = new FormData();
        tw_dto_formData.append("quote_no", TW.ADD_FORM_RESPONSE.quote_no);
        tw_dto_formData.append("kycCusName", data.full_name.value);
        tw_dto_formData.append("dobForKyc", data.dob.value);
        tw_dto_formData.append("email", data.email.value);
        tw_dto_formData.append("mobile", TW?.ADD_FORM?.mobile?.value);
        tw_dto_formData.append("backPgImage", data.doc_id_proof_image.value);
        tw_dto_formData.append(
          "frontPgImage",
          data.doc_address_proof_image.value
        );
        tw_dto_formData.append("docIDNoForKyc", data.doc_no_id_proof.value);
        tw_dto_formData.append("docNameForKyc", data.doc_type_id_proof.value);
        tw_dto_formData.append("insuranceType", "TW");

        CKYCServcies.VERIFY_NATIONAL_MANUAL_CKYC(
          onSuccess,
          onError,
          tw_dto_formData
        );
        break;
      case "CAR":
        let car_dto_formData = new FormData();
        car_dto_formData.append("quote_no", Car.ADD_FORM_RESPONSE.quote_no);
        car_dto_formData.append("kycCusName", data.full_name.value);
        car_dto_formData.append("dobForKyc", data.dob.value);
        car_dto_formData.append("email", data.email.value);
        car_dto_formData.append("mobile", Car?.OWNER_DETAILS?.mobile?.value);
        car_dto_formData.append("backPgImage", data.doc_id_proof_image.value);
        car_dto_formData.append(
          "frontPgImage",
          data.doc_address_proof_image.value
        );
        car_dto_formData.append("docIDNoForKyc", data.doc_no_id_proof.value);
        car_dto_formData.append("docNameForKyc", data.doc_type_id_proof.value);
        car_dto_formData.append("insuranceType", "CAR");
        CKYCServcies.VERIFY_NATIONAL_MANUAL_CKYC(
          onSuccess,
          onError,
          car_dto_formData
        );
        break;
      case "HP":
        let health_dto_formData = new FormData();
        health_dto_formData.append("quote_no", Car.ADD_FORM_RESPONSE.quote_no);
        health_dto_formData.append("kycCusName", data.full_name.value);
        health_dto_formData.append("dobForKyc", data.dob.value);
        health_dto_formData.append("email", data.email.value);
        health_dto_formData.append("mobile", Car?.ADD_FORM?.mobile?.value);
        health_dto_formData.append(
          "backPgImage",
          data.doc_id_proof_image.value
        );
        health_dto_formData.append(
          "frontPgImage",
          data.doc_address_proof_image.value
        );
        health_dto_formData.append("docIDNoForKyc", data.doc_no_id_proof.value);
        health_dto_formData.append(
          "docNameForKyc",
          data.doc_type_id_proof.value
        );
        health_dto_formData.append("insuranceType", "HP");

        CKYCServcies.VERIFY_NATIONAL_MANUAL_CKYC(
          onSuccess,
          onError,
          health_dto_formData
        );
        break;
      default:
        break;
    }
  };

  const CONTINUE_TO_PROPOSAL = () => {
    switch (pageStatus) {
      case "TW":
        dispatch(
          TWSlice.actions.BULK_UPDATE({
            ...TW,
            OWNER_DETAILS: {
              ...TW.OWNER_DETAILS,
              name: {
                // value: CKYC.CKYC_DETAILS.kycCustomerName,
                value: `${CKYC.CKYC_DETAILS?.firstName} ${
                  CKYC.CKYC_DETAILS?.middleName
                    ? CKYC.CKYC_DETAILS.middleName + " "
                    : ""
                }${CKYC.CKYC_DETAILS?.lastName || ""}`.trim(),
                warning: false,
              },
              gender: {
                value: CKYC.VERIFY_KYC_FORM.gender.value,
                warning: false,
              },
              dob: {
                value: FORMAT_DD_MM_YYYY(CKYC.CKYC_DETAILS?.DateOfBirth),
                warning: false,
              },
              email: {
                value: CKYC.CKYC_DETAILS.Email,
                warning: false,
              },
              mobile: {
                value: CKYC.CKYC_DETAILS.Mobile,
                warning: false,
              },
              GST: {
                value: CKYC.CKYC_DETAILS.CustomerGSTINNo,
                warning: false,
              },
            },
            ADDRESS_DETAILS: {
              ...TW.ADDRESS_DETAILS,
              addressLineOne: {
                value: CKYC.CKYC_DETAILS?.Address,
                warning: false,
              },
              pincode: {
                value: CKYC.CKYC_DETAILS.PostCode,
                warning: false,
              },
              state: CKYC.CKYC_DETAILS.State,
              city: CKYC.CKYC_DETAILS.City,
            },
          })
        );

        RECORD_TW_CKYC_RESPONSE();

        break;
      case "CAR":
        dispatch(
          CarSlice.actions.BULK_UPDATE({
            ...Car,
            OWNER_DETAILS: {
              ...Car.OWNER_DETAILS,
              name: {
                // value: CKYC.CKYC_DETAILS.kycCustomerName,
                value: `${CKYC.CKYC_DETAILS?.firstName} ${
                  CKYC.CKYC_DETAILS?.middleName
                    ? CKYC.CKYC_DETAILS.middleName + " "
                    : ""
                }${CKYC.CKYC_DETAILS?.lastName || ""}`.trim(),
                warning: false,
              },
              gender: {
                value: CKYC.VERIFY_KYC_FORM.gender.value,
                warning: false,
              },
              dob: {
                value: FORMAT_DD_MM_YYYY(CKYC.CKYC_DETAILS?.DateOfBirth),
                warning: false,
              },
              mobile: {
                value: Car.ADD_FORM.mobile.value,
                warning: false,
              },
              email: {
                value: CKYC.CKYC_DETAILS.Email,
                warning: false,
              },
              gst: {
                value: CKYC.CKYC_DETAILS.CustomerGSTINNo,
                warning: false,
              },
            },
            ADDRESS_DETAILS: {
              ...Car.ADDRESS_DETAILS,
              addressLineOne: {
                value: CKYC.CKYC_DETAILS?.Address,
                warning: false,
              },

              pincode: {
                value: CKYC.CKYC_DETAILS.PostCode,
                warning: false,
              },
              state: CKYC.CKYC_DETAILS.State,
              city: CKYC.CKYC_DETAILS.City,
            },
          })
        );
        RECORD_CAR_CKYC_RESPONSE();
        break;
      case "HP":
        dispatch(
          HealthSlice.actions.BULK_UPLOAD({
            ...Health,
            INSURED_MEMBER_DETAILS: {
              ...Health.INSURED_MEMBER_DETAILS,
              PROPOSER_DETAILS: {
                ...Health.INSURED_MEMBER_DETAILS.PROPOSER_DETAILS,
                name: {
                  value: CKYC.CKYC_DETAILS.kycCustomerName,
                  warning: false,
                },
                dob: {
                  value: CKYC.CKYC_DETAILS.kycDOB,
                  warning: false,
                },
                mobile: { value: CKYC.CKYC_DETAILS.kycMobile, warning: false },
                emergencyPhone: { value: "", warning: false },
                email: { value: CKYC.CKYC_DETAILS.kycEmail, warning: false },
                aadhar: { value: "", warning: false },
                gender: {
                  value: VERIFY_KYC_FORM.gender.value,
                  warning: false,
                },
                maritalStatus: { value: "", warning: false },
                weight: { value: "", warning: false },
                heightFeet: { value: "", warning: false },
                heightInches: { value: "", warning: false },
                occupation: { value: "", warning: false },
                relationship: { value: "", warning: false },
                proposer_name: { value: "", warning: false },
              },
            },
            ADDRESS_DETAILS: {
              ...Health.ADDRESS_DETAILS,
              pincode: { value: CKYC.CKYC_DETAILS.kycPincode, warning: false },
              city: CKYC.CKYC_DETAILS.kycCity,
              state: CKYC.CKYC_DETAILS.kycState,
              addressLineOne: {
                value: CKYC.CKYC_DETAILS.kycAddress1,
                warning: false,
              },
              addressLineTwo: {
                value: CKYC.CKYC_DETAILS.kycAddress2,
                warning: false,
              },
              isMailingAddressSame: true,
              mailingPinCode: { value: "", warning: false },
              mailingCity: "",
              mailingState: "",
              mailingAddressLineOne: { value: "", warning: false },
              mailingAddressLineTwo: { value: "", warning: false },
            },
          })
        );

        navigate(
          // `${HEALTH_ROUTE.PROPOSAL_PAGE}/${HEALTH_ROUTE.ADULT_ONE_DETAILS}`
          `${HEALTH_ROUTE.PROPOSAL_PAGE}/${
            HEALTH_ROUTE.ADDON_DETAILS
          }?type=HP&companyCode=${
            Health?.SELECTED_QUOTE_DATA?.CompanyDetails.company_code
          }&quote_no=${Health?.ADD_FORM_RESPONSE.quote_no}&product_id=${
            Health?.SELECTED_QUOTE_DATA?.productDetails.id
          }&utm_medium=${GET_QUERY_PARAMETERS(
            "utm_medium"
          )}&utm_source=${GET_QUERY_PARAMETERS(
            "utm_source"
          )}&utm_campaign=${GET_QUERY_PARAMETERS(
            "utm_campaign"
          )}&utm_content=${GET_QUERY_PARAMETERS(
            "utm_content"
          )}&utm_term=${GET_QUERY_PARAMETERS(
            "utm_term"
          )}&agent_name=${GET_QUERY_PARAMETERS("agent_name")}`
        );

        break;
      default:
        break;
    }
  };

  const ADD_UPDATE_TW_TAG = (TW: TTWSlice) => {
    const onSuccess = () => {};
    const onError = (err: any) => {};
    let param = TwAttributePayload(TW, CKYC, "ckyc");

    TW_SERVICES.ADD_UPDATE_TW_TAG(onSuccess, onError, param);
  };

  const RECORD_TW_CKYC_RESPONSE = () => {
    const onSuccess = (res: any) => {
      if (pageStatus === "TW") {
        ADD_UPDATE_TW_TAG(TW);
      }
      navigate(
        `${TW_ROUTES.PROPOSAL_PAGE}/${
          TW_ROUTES.PREVIEW_DEATILS
        }?type=TW&companyCode=${
          TW?.SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code
        }&quote_no=${TW?.ADD_FORM_RESPONSE.quote_no}&product_id=${
          TW?.SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id
        }&utm_medium=${GET_QUERY_PARAMETERS(
          "utm_medium"
        )}&utm_source=${GET_QUERY_PARAMETERS(
          "utm_source"
        )}&utm_campaign=${GET_QUERY_PARAMETERS(
          "utm_campaign"
        )}&utm_content=${GET_QUERY_PARAMETERS(
          "utm_content"
        )}&utm_term=${GET_QUERY_PARAMETERS(
          "utm_term"
        )}&agent_name=${GET_QUERY_PARAMETERS("agent_name")}`
      );
    };
    const onError = (err: any) => {
      console.log("err..", err);
    };
    let param = {
      details: CKYC.CKYC_DETAILS,
      form_details: formDetails,
      section: "kyc_details",
      insurance_type: pageStatus,
      quote_no: TW.ADD_FORM_RESPONSE.quote_no,
      vehicleOwned: formDetails.customer_type.value,
    };
    TW_SERVICES.CAPTURE_RECORD_ON_EVERY_STEP(onSuccess, onError, param);
  };

  const RECORD_CAR_CKYC_RESPONSE = () => {
    const onSuccess = (res: any) => {
      if (pageStatus === "CAR") {
        ADD_UPDATE_CAR_TAG(Car);
      }
      navigate(
        `${CAR_ROUTES.PROPOSAL_PAGE}/${
          CAR_ROUTES.PREVIEW_DEATILS
        }?type=CAR&companyCode=${
          Car?.SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code
        }&quote_no=${Car?.ADD_FORM_RESPONSE.quote_no}&product_id=${
          Car?.SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id
        }&utm_medium=${GET_QUERY_PARAMETERS(
          "utm_medium"
        )}&utm_source=${GET_QUERY_PARAMETERS(
          "utm_source"
        )}&utm_campaign=${GET_QUERY_PARAMETERS(
          "utm_campaign"
        )}&utm_content=${GET_QUERY_PARAMETERS(
          "utm_content"
        )}&utm_term=${GET_QUERY_PARAMETERS(
          "utm_term"
        )}&agent_name=${GET_QUERY_PARAMETERS("agent_name")}`
      );
    };
    const onError = (err: any) => {
      console.log("err..", err);
    };
    let param = {
      details: CKYC.CKYC_DETAILS,
      form_details: formDetails,
      section: "kyc_details",
      insurance_type: pageStatus,
      quote_no: Car.ADD_FORM_RESPONSE.quote_no,
      vehicleOwned: formDetails.customer_type.value,
    };
    CAR_SERVICES.Capture_data(onSuccess, onError, param);
  };

  const [source, setSource] = useState("");
  const [medium, setMedium] = useState("");

  useEffect(() => {
    const windowURL = window.location.search;
    const params = new URLSearchParams(windowURL);
    const utm_source = params.get("utm_source");
    const utm_medium = params.get("utm_medium");
    setSource(utm_source || "");
    setMedium(utm_medium || "");
  }, []);

  const ADD_UPDATE_CAR_TAG = (Car: TCarSlice) => {
    const onSuccess = () => {};

    const onError = (err: any) => {};

    let param = CarAttributePayload(Car, CKYC, "ckyc");

    CAR_SERVICES.ADD_UPDATE_CAR_TAG(onSuccess, onError, param);
  };

  return (
    <>
      {isMobile ? (
        <MNationalManualCKYC
          updateMasterState={updateMasterState}
          formDetails={formDetails}
          validateForm={validateForm}
          CONTINUE_TO_PROPOSAL={CONTINUE_TO_PROPOSAL}
          setShowCKYCDetailsPopup={setShowCKYCDetailsPopup}
          setShowManualPopup={setShowManualPopup}
          showCKYCDetailsPopup={showCKYCDetailsPopup}
          showManualPopup={showManualPopup}
          loader={loader}
        />
      ) : (
        <NationalManualKYC
          updateMasterState={updateMasterState}
          formDetails={formDetails}
          validateForm={validateForm}
          CONTINUE_TO_PROPOSAL={CONTINUE_TO_PROPOSAL}
          setShowCKYCDetailsPopup={setShowCKYCDetailsPopup}
          setShowManualPopup={setShowManualPopup}
          showCKYCDetailsPopup={showCKYCDetailsPopup}
          showManualPopup={showManualPopup}
          loader={loader}
        />
      )}
    </>
  );
}

export default NationalManualKYCContainer;
