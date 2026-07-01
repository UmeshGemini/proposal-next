import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { EMotorCompCode } from "../../../Enum/EMotorCompCode";
import ReviewDetails from "../../../Page/Desktop/Car/Common/ReviewDetails";
import MReviewDetails from "../../../Page/Mobile/Car/Common/MReviewDetails";
import { CKYC_ROUTES } from "../../../Router/Path/CKYCRoutes";
import { CAR_ROUTES } from "../../../Router/Path/CarRoutes";
import { CAR_SERVICES } from "../../../Services/car-node/CarServices";
import { CarSlice } from "../../../redux/slice/Car/CarSlice";
import { PaymentGatewaySlice } from "../../../redux/slice/PaymentGateway/PaymentGatewaySlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { CAR_CREATE_PROPOSAL_REQUEST } from "../../../SupportingFiles/CarHelper";
import {
  FORMAT_DATE_DD_MM_YYYY,
  calculateAgeInDays,
} from "../../../SupportingFiles/HelpingFunction";
import useIsMobile from "../../../SupportingFiles/MobileProvider";
import { isSbiCarPosBreakinProduct } from "@/utils/motorBreakinHelpers";

const ReviewDetailsContainer = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [pageStatus, setPageStatus] = useState<number>(7);
  const { Car, CKYC } = useAppSelector((state) => state);
  const {
    OWNER_DETAILS,
    ADDRESS_DETAILS,
    VEHICLE_DETAILS,
    NOMINEE_DETAILS,
    ADD_FORM_RESPONSE,
    SELECTED_QUOTE_DATA,
    PLAN_TYPE,
    ADD_FORM,
  } = useAppSelector((state) => state.Car);
  const { VERIFY_KYC_FORM } = useAppSelector((state) => state.CKYC);
  const [paymentForm, setPaymentForm] = useState<any>("");
  const [paymentFormData, setPaymentFormData] = useState<any>();
  const [openRedirectPopup, setOpenRedirectPopup] = useState(false);
  const [CIS_DATA, setCIS_DATA] = useState<any>({});

  const PreviewDetails = [
    {
      title: "Owner Details",
      url: `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.OWNER_DETAILS}?type=CAR&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`,
      detailView: [
        {
          label: "Full Name",
          label_value: OWNER_DETAILS.name.value,
        },
        {
          label: "Email",
          label_value: OWNER_DETAILS.email.value,
        },
        {
          label: "Mobile",
          label_value: OWNER_DETAILS.mobile.value,
        },
        ...(VERIFY_KYC_FORM.customer_type.value !== "Organization"
          ? [
              {
                label: "Gender",
                label_value:
                  OWNER_DETAILS.gender.value === "M" ? "Male" : "Female",
              },
              {
                label: "DOB",
                label_value: OWNER_DETAILS.dob.value,
              },
              {
                label: "Marital Status",
                label_value: OWNER_DETAILS.maritalStatus.value,
              },
            ]
          : [
              {
                label: "GST",
                label_value: OWNER_DETAILS?.gst?.value,
              },
            ]),
        ...(OWNER_DETAILS.includePAOwner
          ? [
              {
                label: "pacover",
                label_value: OWNER_DETAILS.pacover.value,
              },
            ]
          : OWNER_DETAILS.vehicleRegistered
          ? []
          : []),
      ],
    },
    {
      title: "Vehicle Details",
      url: `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.VEHICLE_DETAILS}?type=CAR&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`,
      detailView:
        ADD_FORM.business_type === "New"
          ? [
              {
                label: "Chassis No",
                label_value: VEHICLE_DETAILS.chasis_no.value,
              },
              {
                label: "Engine No",
                label_value: VEHICLE_DETAILS.engine_no.value,
              },
              {
                label: "Manufacturing Date",
                label_value: FORMAT_DATE_DD_MM_YYYY(
                  VEHICLE_DETAILS.mfg_year.value
                ),
              },
              {
                label: "Invoice Date",
                label_value: ADD_FORM.reg_date.value,
              },
              {
                label: "PAN",
                label_value: VEHICLE_DETAILS.pan_no.value,
              },
              ...(VEHICLE_DETAILS.is_vehicle_on_loan
                ? [
                    {
                      label: "Bank Name",
                      label_value: VEHICLE_DETAILS.bank_name.value,
                    },
                    {
                      label: "City",
                      label_value: VEHICLE_DETAILS.city.value,
                    },
                  ]
                : []),
            ]
          : [
              {
                label: "Chassis No",
                label_value: VEHICLE_DETAILS.chasis_no.value,
              },
              {
                label: "Engine No",
                label_value: VEHICLE_DETAILS.engine_no.value,
              },
              {
                label: "Previous Policy No",
                label_value: VEHICLE_DETAILS.prev_policy_no.value,
              },
              {
                label: "Previous Insurer",
                label_value: VEHICLE_DETAILS.prev_insurer.value,
              },
              {
                label: "Manufacturing Date",
                label_value: FORMAT_DATE_DD_MM_YYYY(
                  VEHICLE_DETAILS.mfg_year.value
                ),
              },
              {
                label: "Registration Date",
                label_value: VEHICLE_DETAILS.reg_date.value,
              },
              {
                label: "PAN",
                label_value: VEHICLE_DETAILS.pan_no.value,
              },
              {
                label: "Policy Expiry Date",
                label_value: VEHICLE_DETAILS.policy_exp_date.value,
              },
              ...(VEHICLE_DETAILS.is_vehicle_on_loan
                ? [
                    {
                      label: "Bank Name",
                      label_value: VEHICLE_DETAILS.bank_name.value,
                    },
                    {
                      label: "City",
                      label_value: VEHICLE_DETAILS.city.value,
                    },
                  ]
                : []),
            ],
    },
    VERIFY_KYC_FORM.customer_type.value === "Organization"
      ? null
      : {
          title: "Nominee Details",
          url: `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.NOMINEE_DETAILS}?type=CAR&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`,

          detailView: [
            {
              label: "Nominee Name",
              label_value: NOMINEE_DETAILS.fullName?.value,
            },
            {
              label: "Relationship",
              label_value: NOMINEE_DETAILS.relationship?.value,
            },
            {
              label: "DOB",
              label_value: NOMINEE_DETAILS.dob?.value,
            },
          ],
        },
    {
      title: "Address Details",
      url: `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.ADDRESS_DETAILS}?type=CAR&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`,
      isMailingAddresssame: ADDRESS_DETAILS.isMailingAddressSame,
      detailView: [
        {
          label: "H.No./Building",
          label_value: ADDRESS_DETAILS.addressLineOne.value,
        },
        {
          label: "Street/Area",
          label_value: ADDRESS_DETAILS.addressLineTwo.value,
        },
        {
          label: "City",
          label_value: `${ADDRESS_DETAILS.city}`,
        },
        {
          label: "State",
          label_value: ADDRESS_DETAILS.state,
        },
        {
          label: "Pincode",
          label_value: ADDRESS_DETAILS.pincode.value,
        },
      ],
      mailingDetailView:
        ADDRESS_DETAILS.isMailingAddressSame === false
          ? [
              {
                label: "H.No./Building",
                label_value: ADDRESS_DETAILS.mailingAddressLineOne.value,
              },
              {
                label: "Street/Area",
                label_value: ADDRESS_DETAILS.mailingAddressLineTwo.value,
              },

              {
                label: "City",
                label_value: `${ADDRESS_DETAILS.mailingCity}`,
              },
              {
                label: "MailinState",
                label_value: ADDRESS_DETAILS.mailingState,
              },
              {
                label: "Pincode",
                label_value: ADDRESS_DETAILS.mailingPinCode.value,
              },
            ]
          : null,
    },
  ];
  const updateMasterState = (attrName: any, value: any) => {
    if (attrName === "pageStatus") {
    } else if (attrName === "backbutton") {
      navigate(-1);
    }
  };

  const [loader, setLoader] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const CREATE_PROPOSAL = () => {
    const companyCode =
      SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code;
    const productCode =
      SELECTED_QUOTE_DATA.quotationDetail?.productDetails?.product_code;
    const isSbiPosBreakin = isSbiCarPosBreakinProduct(companyCode, productCode);

    const onSuccess = (res: any) => {
      const results = res;
      const error = results.error;

      setLoader(false);
      if (error) {
        const message = results.message;
        if (
          isSbiPosBreakin &&
          (message === "Inspection status pending" ||
            message === "Inspection not recommended")
        ) {
          const breakinId =
            results.BreakinId || results.response?.BreakinId || "";
          if (breakinId) {
            dispatch(
              CarSlice.actions.BULK_UPDATE({
                ...Car,
                create_proposal_response: { BreakinId: breakinId, message },
              })
            );
            navigate(`${CAR_ROUTES.INSPECTION_CONFIRMATION}`);
            return;
          }
        }
        toast.error(`${message}`);
        setLoader(false);
      } else {
        const make_payment = (results: any) => {
          const response = results.response;

          const paymentRequest = response["paymentRequest"];
          const actionURL = paymentRequest["actionURL"];
          const actionMethod = paymentRequest["actionMethod"];

          let payment_gateway_url = "";

          if (actionMethod === "POST") {
            let form = document.createElement("form");
            form.action = actionURL;
            form.method = actionMethod;

            Object.entries(paymentRequest).forEach(([key, value]) => {
              if (key !== "actionURL" && key !== "actionMethod") {
                const input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = `${value}`;
                form.appendChild(input);
              }
            });

            document.body.appendChild(form);
            form.submit();
          } else {
            payment_gateway_url = actionURL;
            window.location.href = actionURL;
          }
          dispatch(
            PaymentGatewaySlice.actions.UPDATE_DATA({
              METHOD: actionMethod,
              PAYMENT_URL: payment_gateway_url,
            })
          );
        };
        if (
          SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
          EMotorCompCode.TATA
        ) {
          const response = results.response;
          const policyId = response.policyId;
          const paymentId = response.paymentId;
          if (Car.SELECTED_QUOTE_DATA.quotationDetail) {
            dispatch(
              CarSlice.actions.BULK_UPDATE({
                ...Car,
                SELECTED_QUOTE_DATA: {
                  ...Car.SELECTED_QUOTE_DATA,
                  quotationDetail: {
                    ...Car.SELECTED_QUOTE_DATA.quotationDetail,
                    premiumDetails: {
                      ...Car.SELECTED_QUOTE_DATA.quotationDetail
                        ?.premiumDetails,
                      paymentId: paymentId,
                    },
                  },
                },
                create_proposal_response: response,
                policyId: policyId,
              })
            );
          }
          if (breakInStatus) {
            make_payment(results);
          } else {
            navigate(
              `${CAR_ROUTES.PROPOSAL_PAGE}/${CKYC_ROUTES.CKYC}?type=CAR&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}&companyCode=${SELECTED_QUOTE_DATA?.quotationDetail?.CompanyDetails?.company_code}`
            );
          }
        } else if (
          SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
          EMotorCompCode.HDFC
        ) {
          if (
            calculateAgeInDays(ADD_FORM.policy_expiry_date.value) > 0 &&
            !breakInStatus
          ) {
            const response = results.response;
            dispatch(
              CarSlice.actions.BULK_UPDATE({
                ...Car,
                create_proposal_response: response,
              })
            );
            navigate(`${CAR_ROUTES.INSPECTION_CONFIRMATION}`);
          } else {
            make_payment(results);
          }

          setPaymentFormData(results?.response);
        } else if (
          PLAN_TYPE === "Third Party" ||
          PLAN_TYPE === "Bundle Policy"
        ) {
          make_payment(results);
        } else if (breakInStatus) {
          make_payment(results);
        } else if (
          calculateAgeInDays(ADD_FORM.policy_expiry_date.value) > 0 &&
          SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code !==
            EMotorCompCode.ACKO
        ) {
          const response = results.response;

          dispatch(
            CarSlice.actions.BULK_UPDATE({
              ...Car,
              create_proposal_response: response,
            })
          );
          navigate(`${CAR_ROUTES.INSPECTION_CONFIRMATION}`);
        } else {
          make_payment(results);
        }
      }
    };
    const onError = (err: any) => {
      setLoader(false);
      console.log("err", err);
    };
    let param = CAR_CREATE_PROPOSAL_REQUEST(Car, CKYC, ADD_FORM_RESPONSE);

    setLoader(true);

    if (
      SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
      EMotorCompCode.BAJAJ
    ) {
      navigate(
        `${CAR_ROUTES.PROPOSAL_PAGE}/${CKYC_ROUTES.CKYC}?type=CAR&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`
      );
    } else {
      if (PLAN_TYPE === "Third Party") {
        CAR_SERVICES.CREATE_PROPOSAL(onSuccess, onError, param);
      } else if (
        SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
        EMotorCompCode.TATA
      ) {
        if (
          (calculateAgeInDays(ADD_FORM.policy_expiry_date.value) > 0 &&
            !breakInStatus) ||
          !VEHICLE_DETAILS.prev_cng_cover ||
          !VEHICLE_DETAILS.prev_depth_cover ||
          (!VEHICLE_DETAILS.prev_rti_cover && PLAN_TYPE)
        ) {
          CAR_SERVICES.CREATE_INSPECTION(onSuccess, onError, param);
        } else {
          CAR_SERVICES.CREATE_PROPOSAL(onSuccess, onError, param);
        }
      } else if (isSbiPosBreakin) {
        if (
          calculateAgeInDays(ADD_FORM.policy_expiry_date.value) > 0 &&
          !breakInStatus
        ) {
          CAR_SERVICES.CREATE_INSPECTION(onSuccess, onError, param);
        } else {
          CAR_SERVICES.CREATE_PROPOSAL(onSuccess, onError, param);
        }
      } else if (
        calculateAgeInDays(ADD_FORM.policy_expiry_date.value) > 0 &&
        !breakInStatus
      ) {
        if (
          SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
          EMotorCompCode.ACKO
        ) {
          CAR_SERVICES.CREATE_PROPOSAL(onSuccess, onError, param);
        } else {
          CAR_SERVICES.CREATE_INSPECTION(onSuccess, onError, param);
        }
      } else {
        CAR_SERVICES.CREATE_PROPOSAL(onSuccess, onError, param);
      }
    }
  };

  const [breakInStatus, setBreakInStatus] = useState<boolean>(false);
  useEffect(() => {
    const windowURL = window.location.search;
    const params = new URLSearchParams(windowURL);
    const break_In_Status = params.get("breakInStatus");
    if (break_In_Status) {
      setBreakInStatus(`${break_In_Status}`.toLowerCase() === "approved");
    }
  }, []);

  return (
    <>
      {isMobile ? (
        <MReviewDetails
          PreviewDetails={PreviewDetails}
          updateMasterState={updateMasterState}
          pageStatus={pageStatus}
          CREATE_PROPOSAL={CREATE_PROPOSAL}
          loader={loader}
          breakInStatus={breakInStatus}
        />
      ) : (
        <ReviewDetails
          PreviewDetails={PreviewDetails}
          updateMasterState={updateMasterState}
          pageStatus={pageStatus}
          CREATE_PROPOSAL={CREATE_PROPOSAL}
          loader={loader}
          breakInStatus={breakInStatus}
          openRedirectPopup={openRedirectPopup}
          setOpenRedirectPopup={setOpenRedirectPopup}
          paymentForm={paymentForm}
          paymentFormData={paymentFormData}
          CIS_DATA={CIS_DATA}
        />
      )}
    </>
  );
};

export default ReviewDetailsContainer;
