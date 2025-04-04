import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NationalCKYC from "../../../Page/Desktop/CKYC/National/NationalCKYC";
import MNationalCKYC from "../../../Page/Mobile/CKYC/National/MNationalCKYC";
import { CAR_ROUTES } from "../../../Router/Path/CarRoutes";
import { TW_ROUTES } from "../../../Router/Path/TWRoutes";
import { CAR_SERVICES } from "../../../Services/car-node/CarServices";
import { CKYCServcies } from "../../../Services/ckyc-node/CKYCServices";
import { TW_SERVICES } from "../../../Services/tw-node/TWServices";
import { CKYCSlice } from "../../../store/actions/CKYC/CKYCSlice";
import { CarSlice } from "../../../store/actions/Car/CarSlice";
import { CommonDropdownSlice } from "../../../store/actions/CommonDropdown/CommonDropdownSlice";
import { TWSlice } from "../../../store/actions/TwoWheeler/TWSlice";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import {
  GET_QUERY_PARAMETERS,
  isEmpty,
  validateEmail,
  validateFullName,
} from "../../../SupportingFiles/HelpingFunction";
import useIsMobile from "../../../SupportingFiles/MobileProvider";
import { CLIENTS } from "../../../URLCollection/Clients";
import { TVerifyCKYCForm } from "../../../types/CKYC/TCKYC";
import { TDropdown } from "../../../types/Common/TDropdown";
import { TCarSlice } from "../../../types/TCarSlice";
import CarAttributePayload from "../../../utils/CarAttributePayload";
import {
  pushMotorDataLayer,
  sendEventToNativeApp,
} from "../../../utils/analytics";
import { TTWSlice } from "../../../types/TTWSlice";
import TwAttributePayload from "../../../utils/TwAttributePayload";

function NationalCKYCContainer() {
  const [loader, setLoader] = useState<boolean>(false);
  const [showManualPopup, setShowManualPopup] = useState<boolean>(false);
  const [showCKYCDetailsPopup, setShowCKYCDetailsPopup] =
    useState<boolean>(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const REDUX_HEAD = useAppSelector((state) => state);
  const { VERIFY_KYC_FORM } = useAppSelector((state) => state.CKYC);
  const { TW, CKYC, Car } = useAppSelector((state) => state);
  const { DISCOUNT_FORM } = useAppSelector((state) => state.Car);
  const [formDetails, setFormDetails] =
    useState<TVerifyCKYCForm>(VERIFY_KYC_FORM);
  const [pageStatus, setPageStatus] = useState<string>("");

  useEffect(() => {
    setFormDetails(VERIFY_KYC_FORM);
  }, [VERIFY_KYC_FORM]);

  useEffect(() => {
    const windowURL = window.location.search;
    const params = new URLSearchParams(windowURL);
    const type = params.get("type");

    if (type) {
      setPageStatus(type);
    }
  }, []);
  useEffect(() => {
    if (DISCOUNT_FORM.vehicle_owned === "Organization") {
      setFormDetails((prev) => ({
        ...prev,
        customer_type: { value: "Organization", warning: false },
      }));
      dispatch(
        CKYCSlice.actions.BULK_UPDATE({
          ...CKYC,
          VERIFY_KYC_FORM: {
            ...formDetails,
            customer_type: { value: "Organization", warning: false },
          },
        })
      );
    }
  }, [DISCOUNT_FORM]);

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
    if (!isEmpty(pageStatus)) GET_DROPDOWN_MASTER("POV");
  }, [pageStatus]);

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
        CKYCServcies.CKYC_DROPDOWN_MASTER(onError, onSuccess, car_params);
        break;
      case "TW":
        const tw_params = {
          company_code: `${REDUX_HEAD.TW.SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}`,
          list_for: TYPE,
        };
        CKYCServcies.CKYC_DROPDOWN_MASTER(onError, onSuccess, tw_params);
        break;
      case "TERM":
        break;
      case "HP":
        const health_params = {
          company_code: `${REDUX_HEAD.Health.SELECTED_QUOTE_DATA.CompanyDetails.company_code}`,
          list_for: TYPE,
        };
        CKYCServcies.CKYC_DROPDOWN_MASTER(onError, onSuccess, health_params);
        break;

      default:
        break;
    }
  };

  const validateForm = () => {
    let data: TVerifyCKYCForm = { ...formDetails };
    data = {
      ...data,
      full_name: {
        ...data.full_name,
        warning: !validateFullName(data.full_name.value),
      },
      dob: { ...data.dob, warning: isEmpty(data.dob.value) },
      doc_type: { ...data.doc_type, warning: isEmpty(data.doc_type.value) },
      doc_id: { ...data.doc_id, warning: isEmpty(data.doc_id.value) },
      customer_type: {
        ...data.customer_type,
        warning: isEmpty(data.customer_type.value),
      },
      email: {
        ...data.email,
        warning: isEmpty(`${data.email.value}`),
      },
      gender: { ...data.gender, warning: isEmpty(data.gender.value) },
      section: "premium_details",
    };

    setFormDetails(data);

    let hasError =
      data.full_name.warning ||
      data.doc_type.warning ||
      data.doc_id.warning ||
      data.customer_type.warning ||
      data.dob.warning;

    if (data.customer_type.value !== "Organization") {
      hasError = hasError || data.gender.warning;
    }

    if (!hasError) {
      if (window.location.hostname === CLIENTS.JIO) {
        pushMotorDataLayer(
          "jioinsure_flow_details",
          "ckyc",
          "proceed",
          pageStatus === "TW" ? "two wheeler" : pageStatus?.toLocaleLowerCase(),

          Car.REDIRECTED ? "JFS app" : "Insure website"
        );
        const eventProps = {
          action: "ckyc",
          click: "continue",
          type:
            pageStatus === "TW"
              ? "two wheeler"
              : pageStatus?.toLocaleLowerCase(),
          EntrySource: Car.REDIRECTED ? "JFS app" : "Insure website",
        };
        sendEventToNativeApp("jioinsure_flow_details", eventProps);
      }
      VERIFY_CKYC_DETAILS(data);
    }
  };

  const VERIFY_CKYC_DETAILS = (data: TVerifyCKYCForm) => {
    const toastId = toast.loading("Please wait...");
    const onSuccess = (res: any) => {
      toast.dismiss(toastId);
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
          dispatch(
            CKYCSlice.actions.BULK_UPDATE({
              ...CKYC,
              CKYC_DETAILS: response,
              VERIFY_KYC_FORM: { ...data },
              MANUAL_KYC_THIRD_PARTY_URL: kycManualURL,
            })
          );
          setShowManualPopup(true);
        } else {
          toast.success("Details Fetched.");
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
              VERIFY_KYC_FORM: { ...data },
              CKYC_DETAILS: response,
            })
          );
          setShowCKYCDetailsPopup(true);
        }
      } else {
        dispatch(
          CKYCSlice.actions.BULK_UPDATE({
            ...CKYC,
            VERIFY_KYC_FORM: { ...data },
          })
        );
        setShowManualPopup(true);
      }
    };

    const onError = (err: any) => {
      toast.dismiss(toastId);
      toast.error("Something went wrong");
      setLoader(false);
      setShowManualPopup(true);
      console.log(err);
    };

    setLoader(true);

    let selectedDto = {
      quote_no:
        pageStatus === "TW"
          ? TW?.ADD_FORM_RESPONSE?.quote_no
          : Car?.ADD_FORM_RESPONSE?.quote_no,
      mobile:
        pageStatus === "TW"
          ? TW?.ADD_FORM_RESPONSE?.mobile
          : Car?.OWNER_DETAILS?.mobile?.value,
      email: data?.email?.value,
      cusType: data?.customer_type?.value,
      kycCusName: data?.full_name?.value,
      dobForKyc: data?.dob?.value,
      docNameForKyc: data?.doc_type?.value,
      docIDNoForKyc: data?.doc_id?.value,
      genderForKyc: data?.gender?.value,
      insuranceType: pageStatus, // It will be either "TW" or "CAR"
      correlationId:
        pageStatus === "TW"
          ? TW?.SELECTED_QUOTE_DATA?.quotationDetail?.premiumDetails
              ?.correlationId
          : Car?.SELECTED_QUOTE_DATA?.quotationDetail?.premiumDetails
              ?.correlationId,
    };

    CKYCServcies.VERIFY_NATIONAL_CKYC(onSuccess, onError, selectedDto);
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
                value:
                  CKYC.CKYC_DETAILS.kycCustomerName ||
                  CKYC.CKYC_DETAILS.CorporateName,
                warning: false,
              },
              gender: {
                value: CKYC.VERIFY_KYC_FORM.gender.value,
                warning: false,
              },
              dob: {
                value: CKYC.CKYC_DETAILS.kycDOB,
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
                value:
                  CKYC.CKYC_DETAILS.kycCustomerName ||
                  CKYC.CKYC_DETAILS.CorporateName,
                warning: false,
              },
              gender: {
                value: CKYC.VERIFY_KYC_FORM.gender.value,
                warning: false,
              },
              dob: {
                value: CKYC.CKYC_DETAILS.kycDOB,
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
    <div>
      {isMobile ? (
        <MNationalCKYC
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
        <NationalCKYC
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
    </div>
  );
}

export default NationalCKYCContainer;
