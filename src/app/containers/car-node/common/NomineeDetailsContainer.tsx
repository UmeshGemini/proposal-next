import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NomineeDetails from "../../../Page/Desktop/Car/Common/NomineeDetails";
import MNomineeDetails from "../../../Page/Mobile/Car/Common/MNomineeDetails";
import { CAR_ROUTES } from "../../../Router/Path/CarRoutes";
import { CAR_SERVICES } from "../../../Services/car-node/CarServices";
import { useAppSelector } from "../../../redux/hooks";
import { CarSlice } from "../../../redux/slice/Car/CarSlice";
import {
  FORMAT_DATE_DD_MM_YYYY,
  isEmpty,
  validateFullName,
} from "../../../SupportingFiles/HelpingFunction";
import useIsMobile from "../../../SupportingFiles/MobileProvider";
import { TDropdown } from "../../../types/Common/TDropdown";
import { TNomineeDetails } from "../../../types/TCarSlice";
import { CLIENTS } from "../../../URLCollection/Clients";
import {
  pushMotorDataLayer,
  sendEventToNativeApp,
} from "../../../utils/analytics";

const NomineeDetailsContainer = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    NOMINEE_DETAILS,
    ADD_FORM_RESPONSE,
    PAGE_STATUS,
    SELECTED_QUOTE_DATA,
    REDIRECTED,
  } = useAppSelector((state) => state.Car);
  const [nomineeDetails, setNomineeDetails] =
    useState<TNomineeDetails>(NOMINEE_DETAILS);

  useEffect(() => {
    GET_NOMINEE_RELATIONSHIP_LIST();
  }, []);

  const updateMasterState = (attrName: any, value: any) => {
    console.log(attrName[0], "jjjjjj", value);
    if (attrName === "pageStatus") {
      validateForm();
    } else if (attrName === "backbutton") {
      navigate(-1);
    } else if (attrName[0] === "fullName") {
      setNomineeDetails((prev) => ({
        ...prev,
        [attrName[0]]: {
          value: value,
          warning: !validateFullName(value),
        },
      }));
    } else if (attrName[0] === "dob") {
      setNomineeDetails((prev) => ({
        ...prev,
        [attrName[0]]: {
          value: FORMAT_DATE_DD_MM_YYYY(value),
          warning: false,
        },
      }));
    } else {
      attrName[3]({
        ...attrName[2],
        [attrName[0]]: { ...[attrName[0]], [attrName[1]]: value },
      });
    }
  };

  const validateForm = () => {
    let data: TNomineeDetails = { ...nomineeDetails };

    data = {
      fullName: {
        ...data.fullName,
        warning: !validateFullName(data.fullName.value),
      },
      dob: {
        ...data.dob,
        warning: isEmpty(data?.dob?.value),
      },
      relationship: {
        ...data.relationship,
        warning: isEmpty(data.relationship.value),
      },
    };

    setNomineeDetails(data);
    let hasError =
      data.fullName.warning || data.dob.warning || data.relationship.warning;

    if (!hasError) {
      if (window.location.hostname === CLIENTS.JIO) {
        pushMotorDataLayer(
          "jioinsure_flow_details",
          "nominee",
          "proceed",
          "car",
          REDIRECTED ? "JFS app" : "Insure website"
        );
        const eventProps = {
          action: "nominee",
          click: "continue",
          type: "car",
          EntrySource: REDIRECTED ? "JFS app" : "Insure website",
        };
        sendEventToNativeApp("jioinsure_flow_details", eventProps);
      }

      CAPTURE_DATA();
      dispatch(CarSlice.actions.NOMINEE_DETAILS(data));
    }
  };

  const CAPTURE_DATA = () => {
    let dto: any = {
      quote_no: ADD_FORM_RESPONSE.quote_no,
      nominee_name: nomineeDetails.fullName.value,
      nomineeRelationShip: nomineeDetails.relationship.value,
      nomineeDOB: nomineeDetails.dob.value,
      section: "nominee_details",
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
            `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.ADDRESS_DETAILS}?type=CAR&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`
          );
        }
      }
    };

    const onError = (res: any) => {
      console.log("Error");
    };
    CAR_SERVICES.Capture_data(onSuccess, onError, dto);
  };

  const GET_NOMINEE_RELATIONSHIP_LIST = () => {
    const onSuccess = (res: any) => {
      const results = res?.data;
      const error = results.error;
      if (error === false) {
        const response = results.response;
        let data: TDropdown[] = [];
        for (let i = 0; i < response.length; i++) {
          data.push({ label: response[i].title, value: response[i].code });
        }

        dispatch(
          CarSlice.actions.UPDATE_DROPDOWN_MASTER({
            key: "NOMINEE_RELATIONSHIP",
            value: data,
          })
        );
      }
    };

    const onError = (err: any) => {
      console.log("error", err);
    };
    let param = {
      product_id: `${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.product_code}`,
    };

    CAR_SERVICES.GET_NOMINEE_RELATIONSHIP_LIST(onError, onSuccess, param);
  };
  return (
    <>
      {isMobile ? (
        <MNomineeDetails
          nomineeDetails={nomineeDetails}
          updateMasterState={updateMasterState}
          setNomineeDetails={setNomineeDetails}
          validateForm={validateForm}
        />
      ) : (
        <NomineeDetails
          nomineeDetails={nomineeDetails}
          updateMasterState={updateMasterState}
          setNomineeDetails={setNomineeDetails}
          validateForm={validateForm}
        />
      )}
    </>
  );
};

export default NomineeDetailsContainer;
