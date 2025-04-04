import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import { Box, CircularProgress, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CustomButton from "../../../../Component/CustomButton/CustomButton";
import Navbar from "../../../../Component/Navbar/Navbar";
import { TPaymentResponse } from "../../../../Container/Common/PaymentConfContainer";
import { useAppSelector } from "../../../../redux/hooks";
import { isEmpty } from "../../../../SupportingFiles/HelpingFunction";
import { FRONTEND_DOMAIN, JIO_JFS_APP } from "../../../../URLCollection/Domain";
import "./MPaymentConf.scss";

function MPaymentConf({
  paymentStatus,
  paymentResponse,
  DOWNLOAD_POLICY,
  loader,
}: {
  paymentStatus: boolean;
  DOWNLOAD_POLICY: Function;
  paymentResponse: TPaymentResponse;
  loader: boolean; // Added for loader state
}) {
  const { Car, TW, Health } = useAppSelector((state) => state);
  const windowURL = window.location.search;
  const params = new URLSearchParams(windowURL);
  const type = params.get("insurance_type");

  return (
    <>
      {loader ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            height: "100vh",
            width: "100%",
          }}
        >
          <CircularProgress />
          <p>Please wait...</p>
        </Box>
      ) : (
        <Box className="mpolicyConfirmWrapper ">
          <Navbar />
          {/* <Grid container className="topbar">
        <Grid xs={12} spacing={3}>
          <img
            onClick={() => {
              window.location.href = FRONTEND_DOMAIN;
            }}
            src={logoSrc}
            alt=""
            style={{ height: "35px" }}
          />
        </Grid>
      </Grid> */}
          <Grid container className="innerWrapper">
            <Grid xs={12} spacing={3} className="mb-6 imgsec">
              {paymentStatus ? (
                <img src="./images/policy-confirmation.svg" alt="" />
              ) : (
                <img src="./images/oops-error.svg" alt="" />
              )}
            </Grid>
            <Grid xs={12} spacing={3}>
              {paymentStatus ? (
                <>
                  <h3>Dear {paymentResponse.customer_name}</h3>
                  <p className="mb-6">
                    <span>GREAT !!</span> Congratulations on buying your
                    {type === "HP" ? " health" : " vehicle"} Insurance Policy.
                    <br />
                    Thank you for choosing us
                  </p>
                  {/* {!isEmpty(paymentResponse.proposal_no) ? (
                    <p className="dwnld_p mb-8">
                      Proposal no. {paymentResponse.proposal_no}
                    </p>
                  ) : (
                    <p className="dwnld_p mb-8">
                      Policy no. {paymentResponse.policy_no}
                    </p>
                  )} */}

                  {!isEmpty(paymentResponse.policy_no) ? (
                    <p style={{ fontSize: "12px", color: "#777" }}>
                      Policy Number{" "}
                      <span
                        style={{
                          fontWeight: "600",
                          color: "#000",
                          display: "block",
                        }}
                      >
                        {paymentResponse.policy_no}
                      </span>
                    </p>
                  ) : (
                    <p style={{ fontSize: "12px", color: "#777" }}>
                      Proposal Number{" "}
                      <span
                        style={{
                          fontWeight: "600",
                          color: "#000",
                          display: "block",
                        }}
                      >
                        {paymentResponse.proposal_no}
                      </span>
                    </p>
                  )}
                  {/* <p className="dwnld_p mb-8">
                    You can{" "}
                    <Link onClick={() => DOWNLOAD_POLICY()}>Download</Link> and
                    manage your policy documents.
                  </p> */}

                  {isEmpty(paymentResponse?.document_url) &&
                  !`${paymentResponse?.document_url}`.includes("https") ? (
                    <p
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      📎 Policy document PDF will generate after some time or
                      try after some time
                    </p>
                  ) : (
                    <Link
                      onClick={() => DOWNLOAD_POLICY()}
                      sx={{
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "12px",
                        color: "#000",
                        margin: "16px",
                        fontSize: "14px",
                        padding: "4px 16px",
                        border: "1px dashed transparent",
                        borderRadius: "100px",
                        "&:hover": {
                          background: "#fff",
                          border: "1px dashed #555",
                        },
                      }}
                    >
                      {" "}
                      <CloudDownloadOutlinedIcon />
                      Download Policy Document
                    </Link>
                  )}
                </>
              ) : (
                <h3>Payment Failed</h3>
              )}
            </Grid>
            <Grid xs={12} textAlign="center">
              <div className="ctaBtn">
                {paymentStatus ? (
                  <CustomButton
                    text_name={"Done"}
                    class_name="mediumPrimaryBtn"
                    onClickFunction={() => {
                      window.location.href =
                        TW.REDIRECTED || Health.REDIRECTED || Car.REDIRECTED
                          ? JIO_JFS_APP
                          : FRONTEND_DOMAIN;
                    }}
                  />
                ) : (
                  <CustomButton
                    text_name={"Try Again"}
                    class_name="mediumSecondaryBtn"
                    onClickFunction={() => {
                      window.location.href =
                        TW.REDIRECTED || Health.REDIRECTED || Car.REDIRECTED
                          ? JIO_JFS_APP
                          : FRONTEND_DOMAIN;
                    }}
                  />
                )}
              </div>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

export default MPaymentConf;
