import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, CircularProgress, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CustomButton from "../../../../Component/CustomButton/CustomButton";
import Navbar from "../../../../Component/Navbar/Navbar";
import { TPaymentResponse } from "../../../../Container/Common/PaymentConfContainer";
import { isEmpty } from "../../../../SupportingFiles/HelpingFunction";
import { FRONTEND_DOMAIN } from "../../../../URLCollection/Domain";

function PaymentConfNew({
  paymentStatus,
  paymentResponse,
  DOWNLOAD_POLICY,
  loader
}: {
  paymentStatus: boolean;
  paymentResponse: TPaymentResponse;
  DOWNLOAD_POLICY: Function;
  loader: boolean;
}) {
  const windowURL = window.location.search;
  const params = new URLSearchParams(windowURL);
  const type = params.get("insurance_type");
  return (
    <>
      {loader? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            height: "100vh",
            width: "100%",
          }}>
          <CircularProgress />
          <p>Please wait...</p>
        </Box>
      ) : (
        <div>
          <Navbar />
          <Grid
            container
            spacing={3}
            alignItems="center"
            maxWidth="1200px"
            paddingTop="112px"
            paddingBottom="40px"
            minHeight="90vh">
            <Grid xs={6} display="flex" flexDirection="column" gap="40px">
              {paymentStatus ? (
                <img
                  src="./images/policyConfirmation.svg"
                  width="252px"
                  alt=""
                />
              ) : (
                <img src="./images/oops-error.svg" width="252px" alt="" />
              )}
              {paymentStatus ? (
                <Box>
                  <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>
                    Dear {paymentResponse.customer_name}!{" "}
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    <span style={{ fontWeight: "600" }}> GREAT !!</span> 🤝
                    Congratulations on buying your{" "}
                    {type === "HP" ? "Health" : "Vehicle"} Insurance Policy.
                  </p>
                </Box>
              ) : (
                <h2 style={{ fontSize: "28px" }}>Payment Failed</h2>
              )}
              {paymentStatus ? (
                <p style={{ fontSize: "14px" }}>
                  Log in to your account to download your policy documents,
                  track policies, add vehicles, and get reminders before
                  policies expire. Share your feedback on your buying
                  experience.
                </p>
              ) : null}
            </Grid>
            <Grid
              xs={6}
              position="relative"
              sx={{
                "&:before": {
                  background: "#EBEBEB",
                  borderRadius: "20px",
                  content: "''",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  height: "24px",
                  width: "100%",
                  zIndex: "-1",
                },
              }}>
              <Box
                sx={{
                  background: "#F5F5F5",
                  padding: "40px",
                  position: "relative",
                  zIndex: "9",
                  "&:before": {
                    background: "#fff",
                    borderRadius: "40px",
                    content: "''",
                    position: "absolute",
                    left: "-20px",
                    top: "180px",
                    height: "40px",
                    width: "40px",
                    zIndex: "1",
                  },
                  "&:after": {
                    background: "#fff",
                    borderRadius: "40px",
                    content: "''",
                    position: "absolute",
                    right: "-20px",
                    top: "180px",
                    height: "40px",
                    width: "40px",
                    zIndex: "1",
                  },
                }}>
                <h4
                  style={{
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "20px",
                  }}>
                  📄 Policy Details
                </h4>

                {paymentStatus ? (
                  <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    padding="20px 0px"
                    margin="0px"
                    borderBottom="1px dashed #ddd">
                    <Grid xs="auto">
                      <img alt="" src={paymentResponse.logo} height="60px" />
                    </Grid>
                    <Box
                      sx={{
                        background: "#ccc",
                        height: "40px",
                        width: "1px",
                        margin: "0px 16px",
                      }}
                    />
                    {isEmpty(paymentResponse.plan) ? null : (
                      <Grid xs="auto">
                        <p style={{ fontSize: "12px", color: "#777" }}>
                          Plan Name
                          <span
                            style={{
                              fontWeight: "600",
                              color: "#000",
                              display: "block",
                            }}>
                            {paymentResponse.plan}
                          </span>
                        </p>
                      </Grid>
                    )}
                    <Box
                      sx={{
                        background: "#ccc",
                        height: "40px",
                        width: "1px",
                        margin: "0px 16px",
                      }}
                    />
                    <Grid xs="auto">
                      {!isEmpty(paymentResponse.policy_no) ? (
                        <p style={{ fontSize: "12px", color: "#777" }}>
                          Policy Number{" "}
                          <span
                            style={{
                              fontWeight: "600",
                              color: "#000",
                              display: "block",
                            }}>
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
                            }}>
                            {paymentResponse.proposal_no}
                          </span>
                        </p>
                      )}
                    </Grid>
                  </Grid>
                ) : null}

                <Grid
                  container
                  spacing={0}
                  alignItems="center"
                  padding="20px 0px"
                  margin="0px"
                  borderBottom="1px solid #ddd">
                  <Grid xs="auto">
                    {paymentStatus ? (
                      <CustomButton
                        onClickFunction={() => {
                          window.location.href = FRONTEND_DOMAIN;
                        }}
                        text_name={"Go to Home"}
                        class_name="mediumPrimaryBtn mr-4"
                      />
                    ) : (
                      <CustomButton
                        text_name={"Try Again"}
                        class_name="mediumPrimaryBtn mr-4"
                        onClickFunction={() => {
                          window.location.href = FRONTEND_DOMAIN;
                        }}
                      />
                    )}
                  </Grid>
                  <Grid xs>
                    {paymentStatus ? (
                      <>
                        {isEmpty(paymentResponse?.document_url) &&
                        !`${paymentResponse?.document_url}`.includes(
                          "https"
                        ) ? (
                          <p
                            style={{
                              fontSize: "14px",
                            }}>
                            📎 Policy document PDF will generate after some time
                            or try after some time
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
                              fontSize: "14px",
                              padding: "4px 16px",
                              border: "1px dashed transparent",
                              borderRadius: "100px",
                              "&:hover": {
                                background: "#fff",
                                border: "1px dashed #555",
                              },
                            }}>
                            {" "}
                            <CloudDownloadOutlinedIcon />
                            Download Policy Document
                          </Link>
                        )}
                      </>
                    ) : null}
                  </Grid>
                </Grid>

                {/* <Grid
                  container
                  spacing={0}
                  alignItems="center"
                  padding="20px 0px"
                  margin="0px"
                  borderBottom="1px solid #ddd">
                  <Grid xs>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "4px",
                      }}>
                      Complete your pending CKYC
                    </p>
                    <p style={{ color: "#777" }}>
                      CKYC refers to Central KYC (Know Your Customer), an
                      initiative of the Government of India.
                    </p>
                  </Grid>
                  <Grid xs="auto">
                    <CustomButton
                      onClickFunction={() => {
                        window.location.href = FRONTEND_DOMAIN;
                      }}
                      text_name={"Complete CKYC"}
                      class_name="mediumSecondaryBtn ml-3"
                    />
                  </Grid>
                </Grid> */}
                <Grid
                  container
                  spacing={0}
                  alignItems="center"
                  paddingTop="20px"
                  margin="0px">
                  <Grid
                    xs
                    sx={{
                      display: "flex",
                      gap: "8px",
                      fontSize: "12px",
                    }}>
                    <InfoOutlinedIcon
                      sx={{ height: "18px", width: "18px", marginTop: "2px" }}
                    />
                    {paymentStatus ? (
                      <p style={{ color: "#777" }}>
                        <span style={{ color: "#000", display: "block" }}>
                          Note:
                        </span>{" "}
                        You will receive a hard copy of your policy document
                        from the insurer at your provided address. If you do not
                        receive it, you can contact us or the insurer directly.
                      </p>
                    ) : null}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}

export default PaymentConfNew;
