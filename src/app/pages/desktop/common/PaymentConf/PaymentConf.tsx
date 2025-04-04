import { Box, CircularProgress, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { TPaymentResponse } from "../../../../Container/Common/PaymentConfContainer";
import { isEmpty } from "../../../../SupportingFiles/HelpingFunction";
import "./PaymentConf.scss";
import Navbar from "../../../../Component/Navbar/Navbar";
import CustomButton from "../../../../Component/CustomButton/CustomButton";
import { useAppSelector } from "../../../../redux/hooks";
import { FRONTEND_DOMAIN } from "../../../../URLCollection/Domain";

function PaymentConf({
  paymentStatus,
  paymentResponse,
  DOWNLOAD_POLICY,
}: {
  paymentStatus: boolean;
  paymentResponse: TPaymentResponse;
  DOWNLOAD_POLICY: Function;
}) {
  const { SELECTED_QUOTE_DATA } = useAppSelector((state) => state.Health);
  const Health_Code = ["G025", "G012", "G016", "G002"];
  const product_id = [2111, 2763, 2767];

  const isHealthInsurance =
    product_id.includes(SELECTED_QUOTE_DATA.productDetails.id) ||
    Health_Code.includes(SELECTED_QUOTE_DATA.CompanyDetails.company_code);

  const windowURL = window.location.search;
  const params = new URLSearchParams(windowURL);
  const type = params.get("insurance_type");
  return (
    <>
      {isEmpty(paymentResponse.customer_name) ? (
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
        <div>
          <Box className="policyConfirmWrapper">
            <Navbar />
            <Grid container columnSpacing={3}>
              <Grid xs={12}>
                <Box className="pc-innerwrapper">
                  <Grid container columnSpacing={0}>
                    <Grid xs={12} textAlign="center" marginBottom={"20px"}>
                      {paymentStatus ? (
                        <img src="../images/policy-confirmation.svg" alt="" />
                      ) : (
                        <img src="../images/oops-error.svg" alt="" />
                      )}
                    </Grid>
                    <Grid xs={12} textAlign="center">
                      {paymentStatus ? (
                        <>
                          <h3 className="mb-4">
                            Dear {paymentResponse.customer_name}
                          </h3>
                          <p className="mb-5">
                            <span>GREAT !!</span> Congratulations on buying your{" "}
                            {isHealthInsurance || type === "HP"
                              ? "Health"
                              : "Vehicle"}{" "}
                            Insurance Policy.
                            <br />
                            Thank you for choosing us.
                          </p>
                          {!isEmpty(paymentResponse.policy_no) ? (
                            <p className="dwnld_p mb-8">
                              Policy no. {paymentResponse.policy_no}
                            </p>
                          ) : (
                            <p className="dwnld_p mb-8">
                              Proposal no. {paymentResponse.proposal_no}
                            </p>
                          )}

                          {isEmpty(paymentResponse?.document_url) &&
                          !`${paymentResponse?.document_url}`.includes(
                            "https"
                          ) ? (
                            <p className="dwnld_p mb-8">
                              PDF will generate after some time or try after
                              some time
                            </p>
                          ) : (
                            <p className="dwnld_p mb-8">
                              You can{" "}
                              <Link
                                onClick={() => DOWNLOAD_POLICY()}
                                style={{ cursor: "pointer" }}
                              >
                                Download
                              </Link>{" "}
                              and manage your policy documents.
                            </p>
                          )}
                        </>
                      ) : (
                        <h3 className="mb-4">Payment Failed</h3>
                      )}
                    </Grid>
                    <Grid xs={12} textAlign="center">
                      <div className="ctaBtn">
                        {paymentStatus ? (
                          <CustomButton
                            onClickFunction={() => {
                              window.location.href = FRONTEND_DOMAIN;
                            }}
                            text_name={"Go to Home"}
                            class_name="mediumPrimaryBtn"
                          />
                        ) : (
                          <CustomButton
                            text_name={"Try Again"}
                            class_name="mediumPrimaryBtn"
                            onClickFunction={() => {
                              window.location.href = FRONTEND_DOMAIN;
                            }}
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

export default PaymentConf;
