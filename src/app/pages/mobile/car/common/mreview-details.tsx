import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Masonry from "@mui/lab/Masonry";
import { Box, Modal } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Grid from "@mui/material/Unstable_Grid2";
import { addYears, subDays } from "date-fns";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import CustomButton from "../../../../Component/CustomButton/CustomButton";
import RKTextField from "../../../../Component/FieldTypes/RKTextField/RKTextField";
import MFooter from "../../../../Component/MFooter/MFooter";
import MPreviewDetailBox from "../../../../Component/MPreviewDetailBox/MPreviewDetailBox";
import { EMotorCompCode } from "../../../../Enum/EMotorCompCode";
import { useAppSelector } from "../../../../redux/hooks";
import "../../../../SCSS/CommonSCSS/MProposalForms.scss";
import { CAR_ADD_FORM_SERVICES } from "../../../../Services/Car/CarAddFormServices";
import { COMMON_SERVICES } from "../../../../Services/common/CommonServices";
import { CarPremiumCal } from "../../../../SupportingFiles/CarPermiumCal";
import {
  FORMAT_DATE_DD_MM_YYYY,
  GET_CURRENT_DATE,
  addDaysToDate,
  addYearsToDate,
  calculateAgeInDays,
  formatAmountToCurrency,
  formatNumberWithCurrencySymbol,
  isEmpty,
} from "../../../../SupportingFiles/HelpingFunction";
import { CLIENTS } from "../../../../URLCollection/Clients";

function MReviewDetails({
  PreviewDetails,
  pageStatus,
  updateMasterState,
  CREATE_PROPOSAL,
  loader,
  breakInStatus,
}: {
  PreviewDetails: any;
  pageStatus: number;
  updateMasterState: Function;
  CREATE_PROPOSAL: Function;
  loader: boolean;
  breakInStatus: boolean;
}) {
  const { VERIFY_KYC_FORM } = useAppSelector((state) => state.CKYC);
  const {
    SELECTED_QUOTE_DATA,
    ADD_FORM,
    PLAN_TYPE,
    ADDON_STATUS,
    ADDON_USER_VALUE,
    ADD_FORM_RESPONSE,
    OWNER_DETAILS,
  } = useAppSelector((state) => state.Car);

  const [policyPeriod, setPolicyPeriod] = React.useState("");
  React.useEffect(() => {
    if (PLAN_TYPE === "Bundle Policy") {
      const value = `${GET_CURRENT_DATE()} To ${FORMAT_DATE_DD_MM_YYYY(
        subDays(addYears(new Date(), 3), 1)
      )}`;
      setPolicyPeriod(value);
    } else {
      if (
        SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
        "G002"
      ) {
        if (calculateAgeInDays(ADD_FORM.policy_expiry_date.value) > 0) {
          const value = ` ${addDaysToDate(
            GET_CURRENT_DATE(),
            2
          )} To ${addYearsToDate(addDaysToDate(GET_CURRENT_DATE(), 1), 1)}`;
          setPolicyPeriod(value);
        } else {
          const value = `${addDaysToDate(
            ADD_FORM.policy_expiry_date.value,
            1
          )} To ${addYearsToDate(ADD_FORM.policy_expiry_date.value, 1)}`;
          setPolicyPeriod(value);
        }
      } else if (
        SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
        EMotorCompCode.RSA
      ) {
        if (calculateAgeInDays(ADD_FORM.policy_expiry_date.value) > 0) {
          const value = ` ${addDaysToDate(
            GET_CURRENT_DATE(),
            2
          )} To ${addYearsToDate(addDaysToDate(GET_CURRENT_DATE(), 1), 2)}`;
          setPolicyPeriod(value);
        } else {
          const value = `${addDaysToDate(
            ADD_FORM.policy_expiry_date.value,
            1
          )} To ${addYearsToDate(ADD_FORM.policy_expiry_date.value, 1)}`;
          setPolicyPeriod(value);
        }
      } else {
        if (calculateAgeInDays(ADD_FORM.policy_expiry_date.value) > 0) {
          const value = ` ${addDaysToDate(
            GET_CURRENT_DATE(),
            1
          )} To ${addYearsToDate(GET_CURRENT_DATE(), 1)}`;
          setPolicyPeriod(value);
        } else {
          const value = `${addDaysToDate(
            ADD_FORM.policy_expiry_date.value,
            1
          )} To ${addYearsToDate(ADD_FORM.policy_expiry_date.value, 1)}`;
          setPolicyPeriod(value);
        }
      }
    }
  }, []);
  const [showOTPPopup, setShowOTPPopup] = useState(false);
  const [otpValue, setOtpValue] = useState("");

  // START GENERATE_OTP***********************************
  const GENERATE_OTP = () => {
    if (
      SELECTED_QUOTE_DATA?.quotationDetail?.CompanyDetails?.company_code ===
      EMotorCompCode?.RSA
    ) {
      const toastLoader = toast.loading("Sending OTP...");
      const onSuccess = (res: any) => {
        toast.dismiss(toastLoader);
        const results = res;
        const error = results?.error;
        if (error) {
          toast.error(`${results?.message}`);
        } else {
          const isVerified = results?.isVerified;
          if (isVerified) {
            CREATE_PROPOSAL();
          } else {
            setShowOTPPopup(true);
            toast.success("OTP sent successfully!");
          }
        }
        console.log("result", results);
      };

      const onError = (err: any) => {
        toast.dismiss(toastLoader);
        console.log("error", err);
      };
      let param = {
        product_id: `${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`,
        customerName: `${OWNER_DETAILS.name.value}`,
        emailId: `${OWNER_DETAILS.email.value}`,
        mobileNo: `${OWNER_DETAILS.mobile.value}`,
        quote_no: `${ADD_FORM_RESPONSE?.quote_no}`,
        quoteId: `${SELECTED_QUOTE_DATA.quotationDetail?.premiumDetails?.RSQUOTEID}`,
      };

      CAR_ADD_FORM_SERVICES.GENERATE_OTP(onSuccess, onError, param);
    } else {
      const toastLoader = toast.loading("Sending OTP...");
      let dto = {
        type: "myAccount",
        pno: `${OWNER_DETAILS.mobile.value}`,
      };
      const onSuccess = (res: any) => {
        toast.dismiss(toastLoader);
        if (res) {
          if (!res.status) {
            setShowOTPPopup(true);
          } else {
            toast.error("Please check your Mobile number");
          }
        }
      };
      const onError = (err: any) => {
        toast.dismiss(toastLoader);
        console.log("err", err);
      };
      COMMON_SERVICES.SEND_OTP(onSuccess, onError, dto);
    }
  };
  // END GENERATE_OTP***********************************

  // START VERIFY_OTP**********************************
  const VERIFY_OTP = () => {
    if (
      SELECTED_QUOTE_DATA?.quotationDetail?.CompanyDetails?.company_code ===
      EMotorCompCode?.RSA
    ) {
      const toastLoader = toast.loading("Verifying OTP...");

      const onSuccess = (res: any) => {
        toast.dismiss(toastLoader);
        toast.success("Successfully Verified!");

        const results = res;
        if (results?.error) {
          toast.error(`${res.results.message}`);
        } else {
          setShowOTPPopup(false);
          CREATE_PROPOSAL();
        }
      };

      const onError = (err: any) => {
        console.log("error", err);
      };
      // Prepare parameters including OTP value
      let param = {
        product_id: `${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`,
        mobileNo: `${OWNER_DETAILS.mobile.value}`,
        quoteId: `${SELECTED_QUOTE_DATA.quotationDetail?.premiumDetails?.RSQUOTEID}`,
        quote_no: `${ADD_FORM_RESPONSE?.quote_no}`,
        message: otpValue,
      };

      // Call API service to generate OTP
      CAR_ADD_FORM_SERVICES.VERIFY_OTP(onSuccess, onError, param);
    } else {
      const toastLoader = toast.loading("Verifying OTP...");
      let dto = {
        pno: `${OWNER_DETAILS.mobile.value}`,
        otp: otpValue,
      };

      const onSuccess = (res: any) => {
        toast.dismiss(toastLoader);
        if (res) {
          if (!res.error && res.message === "Otp verify success") {
            setShowOTPPopup(false);
            toast.success("Successfully Verified!");
            CREATE_PROPOSAL();
          } else {
            toast.error(res.message);
          }
        }
      };

      const onError = (err: any) => {
        toast.dismiss(toastLoader);
        toast.error(err?.response?.data?.message);
        console.log("err", err?.response?.data?.message);
      };

      COMMON_SERVICES.VERIFY_OTP(onSuccess, onError, dto);
    }
  };
  // END VERIFY_OTP***********************************

  return (
    <Box className="proposalPreview">
      {/* OTP Modal start */}
      <Modal open={showOTPPopup} className="modalWrapperMobile mwMobile-kyc">
        <Box className="modalContent">
          <Grid container spacing={2}>
            <Grid xs={12} textAlign="center">
              <img
                src="../images/enter-otp.svg"
                width="140px"
                className="mt-6"
              />
              <h4 className="popup-heading mb-2 mt-6">Enter OTP</h4>
              <p className="grey_p">Enter the OTP to proceed</p>
              <Link
                to={""}
                className="close-button"
                onClick={() => {
                  setShowOTPPopup(false);
                  setOtpValue("");
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} textAlign="center">
            <Grid xs={8} xsOffset={2}>
              <RKTextField
                class_name="inputField"
                title={"Enter OTP"}
                value={otpValue}
                attrName={"otpValue"}
                value_update={(attrName: string, value: string) =>
                  setOtpValue(value)
                }
                error_message={"Enter OTP"}
              />
            </Grid>
          </Grid>
          <Grid container columnSpacing={3} marginTop={"24px"}>
            <Grid xs={12} style={{ textAlign: "center" }}>
              <CustomButton
                text_name="Create Proposal"
                class_name="primaryBtn mb-3"
                size="medium"
                onClickFunction={VERIFY_OTP}
              />
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/* OTP Modal End */}
      <h5 className="sectionTitle">Just make sure, all details are correct</h5>

      <Accordion className="policyDetails mb-5">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p>
            {SELECTED_QUOTE_DATA.quotationDetail?.productDetails.product_name}
          </p>
          <Box display="flex" gap="16px" marginTop="8px">
            <img
              alt=""
              src={SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.logo}
              height="50px"
            />
            <p>
              Premium{" "}
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: "400",
                }}
              >
                (Incl. GST)
              </span>
              <span
                style={{
                  fontSize: "14px",
                  display: "block",
                }}
              >
                {formatNumberWithCurrencySymbol(
                  CarPremiumCal(
                    SELECTED_QUOTE_DATA.quotationDetail,
                    ADDON_STATUS,
                    ADDON_USER_VALUE.passengerCover.value,
                    PLAN_TYPE,
                    VERIFY_KYC_FORM.customer_type.value,
                    ADD_FORM.reg_date.value
                  )
                )}
              </span>
            </p>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            <span>{ADD_FORM.make_model.value},</span> {ADD_FORM.fuel_type.value}
            , {ADD_FORM.variant_cc.value}
          </p>
          <Box display="flex" justifyContent="space-between" marginTop="4px">
            {/* <p>
              Vehicle IDV:{" "}
              <span style={{ display: "block" }}>
                {formatAmountToCurrency(
                  Number(
                    SELECTED_QUOTE_DATA.quotationDetail?.premiumDetails.IDV
                  )
                )}
              </span>
            </p> */}

            <p>
              Vehicle IDV:{" "}
              <span style={{ display: "block" }}>
                {formatAmountToCurrency(
                  !isNaN(
                    Number(
                      SELECTED_QUOTE_DATA.quotationDetail?.premiumDetails.IDV
                    )
                  )
                    ? Number(
                        SELECTED_QUOTE_DATA.quotationDetail?.premiumDetails.IDV
                      )
                    : 0
                )}
              </span>
            </p>
            <p style={{ textAlign: "right" }}>
              Policy Period:{" "}
              <span style={{ display: "block" }}>{policyPeriod}</span>
            </p>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Masonry columns={1} spacing={2} className="px-0 mx-0">
        {/* Personal, Nominee, Address Details Box */}
        {PreviewDetails.map((data: any, index: number) =>
          isEmpty(data?.title) ? null : (
            <MPreviewDetailBox
              title={data?.title}
              preViewData={data.detailView}
              url={data.url}
              isMailingAddresssame={data?.isMailingAddresssame}
              mailingDetailView={data?.mailingDetailView}
            />
          )
        )}
      </Masonry>
      <MFooter
        textName={
          (SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
            EMotorCompCode.BAJAJ ||
            SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
              EMotorCompCode.TATA) &&
          !breakInStatus
            ? "Start CKYC"
            : PLAN_TYPE === "Third Party"
            ? "Continue"
            : breakInStatus
            ? "Continue"
            : calculateAgeInDays(ADD_FORM.policy_expiry_date.value) > 0 &&
              SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails
                .company_code !== EMotorCompCode.ACKO
            ? "Create Inspection"
            : "Continue"
        }
        attrName={"pageStatus"}
        value={pageStatus}
        value_update={updateMasterState}
        loader={loader}
        forward={() => {
          if (
            window?.location?.hostname === CLIENTS?.UNISON ||
            SELECTED_QUOTE_DATA?.quotationDetail?.CompanyDetails
              ?.company_code === EMotorCompCode?.RSA
          ) {
            GENERATE_OTP();
          } else {
            CREATE_PROPOSAL();
          }
        }}
      />
    </Box>
  );
}

export default MReviewDetails;
