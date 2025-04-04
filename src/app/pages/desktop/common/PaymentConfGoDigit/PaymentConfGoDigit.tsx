import { Box, CircularProgress, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { TPaymentResponse } from "../../../../Container/Common/PaymentConfContainer";
import { isEmpty } from "../../../../SupportingFiles/HelpingFunction";
import "./PaymentConfGoDigit.scss";
import Navbar from "../../../../Component/Navbar/Navbar";
import CustomButton from "../../../../Component/CustomButton/CustomButton";
import { FRONTEND_DOMAIN } from "../../../../URLCollection/Domain";
import { useAppSelector } from "../../../../redux/hooks";

function PaymentConfGoDigit({
  paymentStatus,
  paymentResponse,
  DOWNLOAD_POLICY,
  KYCStatus,
}: {
  paymentStatus: boolean;
  paymentResponse: TPaymentResponse;
  DOWNLOAD_POLICY: Function;
  KYCStatus: boolean;
}) {
  const { SELECTED_QUOTE_DATA } = useAppSelector((state) => state.Health);

  const Health_Code = ["G033"];
  const product_id = [2760, 2761, 2762];
  const isHealthInsurance =
    product_id.includes(SELECTED_QUOTE_DATA.productDetails.id) ||
    Health_Code.includes(SELECTED_QUOTE_DATA.CompanyDetails.company_code);
  console.log(isHealthInsurance, "isHealthInsurance");
  const windowURL = window.location.search;
  const params = new URLSearchParams(windowURL);
  const type = params.get("insurance_type");
  return (
    <>
      {isEmpty(paymentResponse?.customer_name) ? (
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
      ) : paymentStatus ? (
        <div>
          <Box className="policyConfirmWrapper">
            <Navbar />
            <Grid container columnSpacing={3}>
              <Grid xs={12}>
                <Box className="pc-innerwrapper">
                  <Grid container columnSpacing={0}>
                    <Grid xs={12} textAlign="center" marginBottom={"20px"}>
                      <img src="../images/policy-confirmation.svg" alt="" />
                    </Grid>
                    <Grid xs={12} textAlign="center">
                      <h3 className="mb-4">
                        Dear {paymentResponse.customer_name}
                      </h3>
                      {KYCStatus ? (
                        <p className="mb-5">
                          <span>GREAT !!</span> Congratulations on buying your{" "}
                          {isHealthInsurance || type === "HP"
                            ? "Health"
                            : "Vehicle"}{" "}
                          Insurance Policy.
                          <br />
                          Thank you for choosing us.
                        </p>
                      ) : (
                        <p className="mb-5">
                          Your policy is on hold due to KYC verification failed.
                          Once KYC number is generated your policy will be
                          issued.
                        </p>
                      )}

                      <p className="dwnld_p mb-8">
                        Policy No: {paymentResponse.policy_no}
                      </p>
                      {!KYCStatus ? (
                        <p className="dwnld_p mb-8">
                          Please click{" "}
                          <span
                            style={{
                              textDecoration: "underline",
                              color: "#E6253C",
                            }}
                            onClick={() =>
                              (window.location.href =
                                paymentResponse?.document_url)
                            }
                          >
                            here
                          </span>{" "}
                          to generate KYC number
                        </p>
                      ) : isEmpty(paymentResponse.document_url) &&
                        !paymentResponse.document_url.includes("https") ? (
                        <p className="dwnld_p mb-8">
                          PDF will generate after some time or try after some
                          time
                        </p>
                      ) : (
                        <p className="dwnld_p mb-8">
                          You can{" "}
                          <Link
                            onClick={() => {
                              window.location.href =
                                paymentResponse?.document_url;
                            }}
                          >
                            Download
                          </Link>{" "}
                          and manage your policy documents.
                        </p>
                      )}
                    </Grid>
                    <Grid xs={12} textAlign="center">
                      <div className="ctaBtn">
                        <CustomButton
                          onClickFunction={() => {
                            window.location.href = FRONTEND_DOMAIN;
                          }}
                          text_name={"Go to Home"}
                          class_name="mediumPrimaryBtn"
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      ) : (
        <div>
          <Box className="policyConfirmWrapper">
            <Navbar />
            <Grid container columnSpacing={3}>
              <Grid xs={12}>
                <Box className="pc-innerwrapper">
                  <Grid container columnSpacing={0}>
                    <Grid xs={12} textAlign="center" marginBottom={"20px"}>
                      <img src="../images/oops-error.svg" alt="" />
                    </Grid>
                    <Grid xs={12} textAlign="center">
                      <h3 className="mb-4">
                        Payment{" "}
                        <span style={{ textTransform: "capitalize" }}>
                          {paymentResponse?.payment_status}
                        </span>
                      </h3>
                    </Grid>

                    <Grid xs={12} textAlign="center">
                      <div className="ctaBtn">
                        {isHealthInsurance || type === "HP" ? null : (
                          <CustomButton
                            text_name={"Try Again"}
                            class_name="greenXlBtn"
                          />
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </>
  );
}

export default PaymentConfGoDigit;
