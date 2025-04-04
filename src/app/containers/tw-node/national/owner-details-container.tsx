import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OwnerDetails from "../../../Page/Desktop/TW/HDFC/OwnerDetails";
import MOwnerDetails from "../../../Page/Mobile/TW/HDFC/MOwnerDetails";
import { TW_ROUTES } from "../../../Router/Path/TWRoutes";
import { TW_SERVICES } from "../../../Services/tw-node/TWServices";
import { CKYCSlice } from "../../../redux/slice/CKYC/CKYCSlice";
import { TWSlice } from "../../../redux/slice/TwoWheeler/TWSlice";
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
import { TOwnerDetails } from "../../../types/TTWSlice";
import {
  pushMotorDataLayer,
  sendEventToNativeApp,
} from "../../../utils/analytics";
import { CKYCServcies } from "../../../Services/ckyc-node/CKYCServices";
import { toast } from "react-toastify";

const OwnerDetailsContainer = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    OWNER_DETAILS,
    PAGE_STATUS,
    ADD_FORM_RESPONSE,
    SELECTED_QUOTE_DATA,
    ADDON_STATUS,
    REDIRECTED,
  } = useAppSelector((state) => state.TW);
  const { VERIFY_KYC_FORM } = useAppSelector((state) => state.CKYC);
  const [pageStatus, setPageStatus] = useState<number>(1);
  const { CKYC, TW } = useAppSelector((state) => state);
  const ownerMarital_data = [
    { label: "Married", value: "Married" },
    { label: "Single", value: "Single" },
  ];

  const [ownerFields, setOwnerFields] = useState<TOwnerDetails>(OWNER_DETAILS);
  const [loader, setLoader] = useState<boolean>(false);

  const updateMasterState = (attrName: string, value: any) => {
    if (attrName === "pageStatus") {
      validateForm();
      setPageStatus(value);
    } else if (attrName === "backbutton") {
      navigate(-1);
    } else if (attrName === "includePAOwner") {
      setOwnerFields((prev) => ({
        ...prev,
        includePAOwner: !prev.includePAOwner,
      }));
    }
  };

  const validateForm = () => {
    let data: TOwnerDetails = { ...ownerFields };

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
    if (!data.includePAOwner) {
      data = {
        ...data,
        pacover: {
          ...data.pacover,
          warning: isEmpty(data.pacover.value),
        },
      };
    }
    if (CKYC.VERIFY_KYC_FORM.customer_type.value === "Organization") {
      data = {
        ...data,
        GST: {
          ...data.GST,
          warning: !validateGST(data.GST.value),
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
      hasError = hasError || data.GST.warning || data.email.warning;
    }

    setOwnerFields(data);

    if (!hasError) {
      if (window.location.hostname === CLIENTS.JIO) {
        pushMotorDataLayer(
          "jioinsure_flow_details",
          "owner",
          "proceed",
          "two wheeler",
          REDIRECTED ? "JFS app" : "Insure website"
        );
        const eventProps = {
          action: "owner",
          click: "continue",
          type: "two wheeler",
          EntrySource: REDIRECTED ? "JFS app" : "Insure website",
        };
        sendEventToNativeApp("jioinsure_flow_details", eventProps);
      }
      dispatch(TWSlice.actions.OWNER_DETAILS(data));
      updateRecords();
    }
  };

  const validateFun = (attrName: string, value: any) => {
    switch (attrName[0]) {
      case "name":
        return attrName[0] === "name" ? !validateFullName(value) : false;
      case "mobile":
        return attrName[0] === "mobile" ? !validateMobileNumber(value) : false;
      case "email":
        return attrName[0] === "email" ? !validateEmail(value) : false;
      case "GST":
        return attrName[0] === "GST" ? !validateGST(value) : false;

      default:
        return isEmpty(value);
    }
  };

  const fieldsUpdateState = (attrName: any, value: any) => {
    attrName[3]({
      ...attrName[2],
      [attrName[0]]: {
        ...[attrName[0]],
        [attrName[1]]: value,
        warning: validateFun(attrName, value),
      },
    });
  };

  const handleClick = (key: any, value: any) => {
    setOwnerFields({
      ...ownerFields,
      [key]: value,
      includePAOwner: key === "vehicleRegistered" && false,
      ...(!ownerFields.vehicleRegistered
        ? {
            dob: { ...ownerFields.dob, warning: false },
            maritalStatus: { ...ownerFields.maritalStatus, warning: false },
            gender: { ...ownerFields.gender, warning: false },
            pacover: { ...ownerFields.pacover, warning: false },
          }
        : {}),
    });
  };

  useEffect(() => {
    setOwnerFields((prev) => ({
      ...prev,
      pacover: { ...prev.pacover, warning: false },
      GST: { ...prev.GST, warning: false },
    }));
  }, []);

  const updateRecords = () => {
    const onSuccess = (res: any) => {
      const results = res;
      const error = results.error;
      if (error === false) {
        const response = results.response;
        if (PAGE_STATUS) {
          navigate(
            `${TW_ROUTES.PROPOSAL_PAGE}/${TW_ROUTES.PREVIEW_DEATILS}?type=TW&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`
          );
        } else {
          navigate(
            `${TW_ROUTES.PROPOSAL_PAGE}/${TW_ROUTES.VEHICLE_DETAILS}?type=TW&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`
          );
        }
      } else {
        toast.error("Something went wrong");
      }
    };

    const onError = (err: any) => {
      console.log("error", err);
    };
    let param = {
      quote_no: ADD_FORM_RESPONSE.quote_no,
      customerName: ownerFields.name.value,
      mobile: ownerFields.mobile.value,
      customerGender: ownerFields.gender.value,
      customerEmail: ownerFields.email.value,
      customerDOB: ownerFields.dob.value,
      customerGSTNo: ownerFields.GST.value,
      vehicleOwned: VERIFY_KYC_FORM.customer_type.value,
      section: "customer_details",
      insurance_type: "TW",
    };

    TW_SERVICES.CAPTURE_RECORD_ON_EVERY_STEP(onSuccess, onError, param);
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

    TW_SERVICES.UPDATE_ADDON_STATUS(
      () => {},
      () => {},
      Params
    );
  }, [ADDON_STATUS]);

  useEffect(() => {
    if (VERIFY_KYC_FORM.customer_type.value === "Organization") {
      dispatch(
        TWSlice.actions.UPDATE_ADDON_STATUS({
          key: "pa_owner_cover",
          value: false,
        })
      );
    }
  }, []);

  const [kycOpen, setKycOpen] = useState<boolean>(false);
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
      const results = res;
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
            value: TW.ADD_FORM.mobile.value,
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
          TWSlice.actions.BULK_UPDATE({
            ...TW,
            OWNER_DETAILS: {
              ...TW.OWNER_DETAILS,
              name: {
                value: response.kycCustomerName,
                warning: false,
              },
              dob: {
                value: response.kycDOB,
                warning: false,
              },
              mobile: {
                value: TW.ADD_FORM.mobile.value,
                warning: false,
              },
            },
            ADDRESS_DETAILS: {
              ...TW.ADDRESS_DETAILS,
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

        setKycOpen(true);
      }
    };
    const onError = () => {
      setLoader(false);
    };

    setKycOpen(true);
    setLoader(true);
    CKYCServcies.GET_CKYC_DETAILS_FROM_HDFC(onSuccess, onError, params);
  };

  return (
    <>
      {isMobile ? (
        <MOwnerDetails
          loader={loader}
          kycOpen={kycOpen}
          setKycOpen={setKycOpen}
          ownerFields={ownerFields}
          pageStatus={pageStatus}
          ownerMarital_data={ownerMarital_data}
          updateMasterState={updateMasterState}
          handleClick={handleClick}
          setOwnerFields={setOwnerFields}
          fieldsUpdateState={fieldsUpdateState}
        />
      ) : (
        <OwnerDetails
          loader={loader}
          kycOpen={kycOpen}
          setKycOpen={setKycOpen}
          ownerFields={ownerFields}
          pageStatus={pageStatus}
          ownerMarital_data={ownerMarital_data}
          updateMasterState={updateMasterState}
          handleClick={handleClick}
          setOwnerFields={setOwnerFields}
          fieldsUpdateState={fieldsUpdateState}
        />
      )}
    </>
  );
};

export default OwnerDetailsContainer;
