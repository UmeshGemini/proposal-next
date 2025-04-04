import Masonry from "@mui/lab/Masonry";
import { Box, Link, Modal } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { toast } from "react-toastify";
import CustomButton from "../../../../Component/CustomButton/CustomButton";
import RKTextField from "../../../../Component/FieldTypes/RKTextField/RKTextField";
import Footer from "../../../../Component/Footer/Footer";
import PreviewDetailBox from "../../../../Component/PreviewDetailBox/PreviewDetailBox";
import TWRedirectPopup from "../../../../Component/TWRedirectPopup/TWRedirectPopup";
import { EMotorCompCode } from "../../../../Enum/EMotorCompCode";
import { useAppSelector } from "../../../../redux/hooks";
import "../../../../SCSS/CommonSCSS/MProposalForms.scss";
import { CAR_ADD_FORM_SERVICES } from "../../../../Services/Car/CarAddFormServices";
import { COMMON_SERVICES } from "../../../../Services/common/CommonServices";
import { isEmpty } from "../../../../SupportingFiles/HelpingFunction";
import { CLIENTS } from "../../../../URLCollection/Clients";

function ReviewDetails({
  PreviewDetails,
  pageStatus,
  updateMasterState,
  CREATE_PROPOSAL,
  loader,
  openRedirectPopup,
  setOpenRedirectPopup,
  paymentForm,
  paymentFormData,
  CIS_DATA,
}: {
  PreviewDetails: any;
  pageStatus: number;
  updateMasterState: Function;
  CREATE_PROPOSAL: Function;
  loader: boolean;
  openRedirectPopup: boolean;
  setOpenRedirectPopup: Function;
  paymentForm: any;
  paymentFormData: any;
  CIS_DATA: any;
}) {
  const { SELECTED_QUOTE_DATA, ADD_FORM_RESPONSE, OWNER_DETAILS } =
    useAppSelector((state) => state.TW);

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
    <>
      <Box className="proposalPreview">
        {/* OTP Modal start */}
        <Modal open={showOTPPopup} className="modalWrapper">
          <Box className="modalContent xsWidth kycPopups">
            <Grid container spacing={2}>
              <Grid xs={12} textAlign="center">
                <img
                  src="../images/enter-otp.svg"
                  width="160px"
                  className="mt-6"
                />
                <h4 className="popup-heading mb-2  mt-6">Enter OTP</h4>
                <p className="grey_p">Enter the OTP to proceed</p>
                <Link
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
                  size="large"
                  onClickFunction={VERIFY_OTP}
                />
              </Grid>
            </Grid>
          </Box>
        </Modal>
        {/* OTP Modal End */}
        <h5 className="sectionTitle">
          Just make sure, all details are correct
        </h5>
        <Masonry columns={2} spacing={3} className="px-0 mx-0">
          {PreviewDetails.map((data: any, index: number) =>
            isEmpty(data?.title) ? null : (
              <PreviewDetailBox
                title={data?.title}
                preViewData={data?.detailView}
                url={data?.url}
                isMailingAddresssame={data?.isMailingAddresssame}
                mailingDetailView={data?.mailingDetailView}
                breakInStatus={false}
              />
            )
          )}
        </Masonry>
        <Footer
          loader={loader}
          attrName={"pageStatus"}
          value={pageStatus}
          value_update={updateMasterState}
          forward={() => {
            if (
              window?.location?.hostname === CLIENTS?.WALNNUT ||
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

      <TWRedirectPopup
        open={openRedirectPopup}
        setOpen={setOpenRedirectPopup}
        form={paymentForm}
        paymentFormData={paymentFormData}
        CIS_DATA={CIS_DATA}
      />
    </>
  );
}

export default ReviewDetails;
