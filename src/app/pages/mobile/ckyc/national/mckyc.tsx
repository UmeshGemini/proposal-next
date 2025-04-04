import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import { Box, Link, Modal } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { subYears } from "date-fns";
import { useNavigate } from "react-router-dom";
import { TVerifyCKYCForm } from "../../../../types/CKYC/TCKYC";
import {
  FORMAT_DD_MM_YYYY,
  GET_QUERY_PARAMETERS,
  isEmpty,
  validateEmail,
} from "../../../../SupportingFiles/HelpingFunction";
import "./../../../../SCSS/CommonSCSS/ModalPopup.scss";
import { TW_ROUTES } from "../../../../Router/Path/TWRoutes";
import { CAR_ROUTES } from "../../../../Router/Path/CarRoutes";
import { CKYC_ROUTES } from "../../../../Router/Path/CKYCRoutes";
import { useEffect, useState } from "react";
import CustomButton from "../../../../Component/CustomButton/CustomButton";
import RKTextField from "../../../../Component/FieldTypes/RKTextField/RKTextField";
import DatePicker from "../../../../Component/FieldTypes/DatePicker/DatePicker";
import SearchDropdown from "../../../../Component/FieldTypes/SearchDropdown/SearchDropdown";
import SelectDropdown from "../../../../Component/FieldTypes/SelectDropdown/SelectDropdown";
import Footer from "../../../../Component/Footer/Footer";
import { HEALTH_ROUTE } from "../../../../Router/Path/HealthRoutes";
import {
  pushDataLayer,
  pushMotorDataLayer,
  sendEventToNativeApp,
} from "../../../../utils/analytics";
import { CLIENTS } from "../../../../URLCollection/Clients";
import { useAppSelector } from "../../../../Store/hooks";

const MNationalCKYC = ({
  updateMasterState,
  formDetails,
  validateForm,
  CONTINUE_TO_PROPOSAL,
  showManualPopup,
  setShowManualPopup,
  showCKYCDetailsPopup,
  setShowCKYCDetailsPopup,
  loader,
}: {
  updateMasterState: Function;
  formDetails: TVerifyCKYCForm;
  validateForm: Function;
  CONTINUE_TO_PROPOSAL: Function;
  showManualPopup: boolean;
  setShowManualPopup: Function;
  showCKYCDetailsPopup: boolean;
  setShowCKYCDetailsPopup: Function;
  loader: boolean;
}) => {
  const navigate = useNavigate();
  const { POV, GENDER, CUSTOMER_TYPE } = useAppSelector(
    (state) => state.CommonDropdownData
  );
  const { CKYC_DETAILS } = useAppSelector((state) => state.CKYC);
  const [pageStatus, setPageStatus] = useState<string>("");
  const { Car, TW, Health } = useAppSelector((state) => state);

  useEffect(() => {
    const windowURL = window.location.search;
    const params = new URLSearchParams(windowURL);
    const type = params.get("type");
    console.log(type, "type");
    if (type) {
      setPageStatus(type);
    }
  }, []);

  return (
    <Box>
      <Modal open={showCKYCDetailsPopup} className="modalWrapper">
        <Box className="modalContent xl-width kycPopups">
          <Grid container spacing={2}>
            <Grid xs={12}>
              <h4 className="popup-heading mb-2">CKYC Details</h4>
              <p className="grey_p">
                We fetch these details as per record, please verify
              </p>
              <Link
                className="close-button"
                onClick={() => {
                  setShowCKYCDetailsPopup(false);
                }}
              />
              <hr />
            </Grid>
          </Grid>
          <Grid container spacing={2} textAlign="center">
            <Grid xs={12} className="">
              <span className="policy_number_box my-4">
                {CKYC_DETAILS.kycNo || CKYC_DETAILS.CKYCNo}
              </span>
            </Grid>
          </Grid>
          <Grid container spacing={2} textAlign="center">
            <Grid xs={6}>
              <h6>
                Full Name:
                <span>
                  {CKYC_DETAILS.kycCustomerName || CKYC_DETAILS?.CorporateName}
                </span>
              </h6>
            </Grid>
            <Grid xs={6}>
              <h6>
                DOB:
                <span>
                  {" "}
                  {!isEmpty(CKYC_DETAILS.kycDOB)
                    ? FORMAT_DD_MM_YYYY(CKYC_DETAILS.kycDOB)
                    : !isEmpty(CKYC_DETAILS?.DateOfRegistration)
                    ? FORMAT_DD_MM_YYYY(CKYC_DETAILS?.DateOfRegistration)
                    : ""}
                </span>
              </h6>
            </Grid>
            {!(
              isEmpty(CKYC_DETAILS?.Address) &&
              isEmpty(CKYC_DETAILS?.City) &&
              isEmpty(CKYC_DETAILS?.State) &&
              isEmpty(CKYC_DETAILS?.PostCode)
            ) && (
              <Grid xs={12}>
                <h6>
                  Address:
                  <span>
                    {[
                      CKYC_DETAILS?.Address,
                      CKYC_DETAILS?.City,
                      CKYC_DETAILS?.State,
                      CKYC_DETAILS?.PostCode,
                    ]
                      .filter(Boolean) // Remove empty values
                      .join(", ")}{" "}
                    {/* Join the non-empty parts with a comma */}
                  </span>
                </h6>
              </Grid>
            )}
            <Grid xs={12}>
              <hr />
            </Grid>
          </Grid>
          <Grid container columnSpacing={3} marginTop={"24px"}>
            <Grid xs={6} style={{ textAlign: "center" }} className="ctaBtn">
              <CustomButton
                onClickFunction={() => {
                  setShowCKYCDetailsPopup(false);
                }}
                text_name={
                  <>
                    <SentimentDissatisfiedOutlinedIcon className="mr-2" /> It's
                    not me
                  </>
                }
                class_name="secondaryBtn"
                size="large"
              />
            </Grid>
            <Grid xs={6} style={{ textAlign: "center" }} className="ctaBtn">
              <CustomButton
                text_name={"Continue"}
                class_name="primaryBtn"
                size="large"
                onClickFunction={() => {
                  CONTINUE_TO_PROPOSAL();
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal open={showManualPopup} className="modalWrapper">
        <Box className="modalContent xl-width kycPopups">
          <Grid container spacing={2}>
            <Grid xs={12}>
              <h4 className="popup-heading mb-2">CKYC Details</h4>
              <Link
                className="close-button"
                onClick={() => {
                  setShowManualPopup(false);
                }}
              />
              <hr />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid xs={12} className="ctaBtn">
              <h6 className="mb-0">
                Sorry,we are not getting any information from insurer side,
                please click below Button to upload or verify with other
                Document
              </h6>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid xs={12} className="ctaBtn mt-5">
              <hr />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid xs={12} style={{ textAlign: "center" }} className="ctaBtn">
              <CustomButton
                text_name={"Verify with other Document"}
                size="medium"
                class_name="secondaryBtn"
                onClickFunction={() => {
                  if (window.location.hostname === CLIENTS.JIO) {
                    pushMotorDataLayer(
                      "jioinsure_flow_details",
                      "ckyc details failure",
                      `verify with other account`,
                      pageStatus === "TW"
                        ? "two wheeler"
                        : pageStatus?.toLocaleLowerCase(),
                      pageStatus === "TW"
                        ? TW.REDIRECTED
                          ? "JFS app"
                          : "Insure website"
                        : Car.REDIRECTED
                        ? "JFS app"
                        : "Insure website"
                    );
                    const eventProps = {
                      action: "ckyc",
                      status: "ckyc details failure",
                      click: "verify with other account",
                      type:
                        pageStatus === "TW"
                          ? "two wheeler"
                          : pageStatus?.toLocaleLowerCase(),
                      EntrySource:
                        pageStatus === "TW"
                          ? TW.REDIRECTED
                            ? "JFS app"
                            : "Insure website"
                          : Car.REDIRECTED
                          ? "JFS app"
                          : "Insure website",
                    };
                    sendEventToNativeApp("jioinsure_flow_details", eventProps);
                  }
                  setShowManualPopup(false);
                }}
              />
            </Grid>
            <Grid xs={12} style={{ textAlign: "center" }} className="ctaBtn">
              <CustomButton
                text_name={"Manual KYC"}
                size="medium"
                class_name="primaryBtn"
                onClickFunction={() => {
                  if (window.location.hostname === CLIENTS.JIO) {
                    pushMotorDataLayer(
                      "jioinsure_flow_details",
                      "ckyc details failure",
                      `manual kyc`,
                      pageStatus === "TW"
                        ? "two wheeler"
                        : pageStatus?.toLocaleLowerCase(),
                      pageStatus === "TW"
                        ? TW.REDIRECTED
                          ? "JFS app"
                          : "Insure website"
                        : Car.REDIRECTED
                        ? "JFS app"
                        : "Insure website"
                    );
                    const eventProps = {
                      action: "ckyc",
                      status: "ckyc details failure",
                      click: "verify with other account",
                      type:
                        pageStatus === "TW"
                          ? "two wheeler"
                          : pageStatus?.toLocaleLowerCase(),
                      EntrySource:
                        pageStatus === "TW"
                          ? TW.REDIRECTED
                            ? "JFS app"
                            : "Insure website"
                          : Car.REDIRECTED
                          ? "JFS app"
                          : "Insure website",
                    };
                    sendEventToNativeApp("jioinsure_flow_details", eventProps);
                  }
                  setShowManualPopup(false);
                  switch (pageStatus) {
                    case "TW":
                      navigate(
                        `${TW_ROUTES.PROPOSAL_PAGE}/${
                          CKYC_ROUTES.MANUAL_CKYC
                        }?type=TW&companyCode=${
                          TW?.SELECTED_QUOTE_DATA.quotationDetail
                            ?.CompanyDetails.company_code
                        }&quote_no=${
                          TW?.ADD_FORM_RESPONSE.quote_no
                        }&product_id=${
                          TW?.SELECTED_QUOTE_DATA.quotationDetail
                            ?.productDetails.id
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
                      break;
                    case "CAR":
                      navigate(
                        `${CAR_ROUTES.PROPOSAL_PAGE}/${
                          CKYC_ROUTES.MANUAL_CKYC
                        }?type=CAR&utm_medium=${GET_QUERY_PARAMETERS(
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
                      break;
                    case "HP":
                      navigate(
                        `${HEALTH_ROUTE.PROPOSAL_PAGE}/${
                          CKYC_ROUTES.MANUAL_CKYC
                        }?type=HP&utm_medium=${GET_QUERY_PARAMETERS(
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
                      break;
                    default:
                      break;
                  }
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <h5 className="sectionTitle">CKYC/eKYC Details</h5>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <h6 className="mb-4 question">Provide CKYC Details for Proposer</h6>
          <p className="textGrey ckyc_p">
            <span className="textBold">
              CKYC refers to Central KYC (Know Your Customer)
            </span>
            , an initiative of the Government of India. The aim of this
            initiative is to have a structure in place which allows investors to
            complete their KYC only once before interacting with various
            entities across the financial sector.
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid xs={6}>
          <RKTextField
            id="full_name"
            class_name="inputField"
            title={"Proposer Full Name"}
            value={formDetails.full_name.value}
            attrName={"full_name"}
            value_update={updateMasterState}
            warn_status={formDetails.full_name.warning}
            validation_type="NAME"
            error_message={
              isEmpty(formDetails?.full_name.value)
                ? "Enter Full Name"
                : "Enter Valid Full Name"
            }
          />
        </Grid>
        {formDetails.customer_type.value === "Organization" ? (
          <Grid xs={6}>
            <DatePicker
              class_name="inputField"
              title={"Proposer DOI"}
              value={formDetails.dob.value}
              attrName={"dob"}
              value_update={updateMasterState}
              error_message="Select DOI"
              warn_status={formDetails.dob.warning}
              date_validation_type="YEARS"
              min_date={100}
              max_date={0}
              default_date={new Date()}
            />
          </Grid>
        ) : (
          <Grid xs={6}>
            <DatePicker
              class_name="inputField"
              title={"Proposer DOB"}
              id="ckycProposerDob"
              value={formDetails.dob.value}
              attrName={"dob"}
              value_update={updateMasterState}
              error_message="Select DOB"
              warn_status={formDetails.dob.warning}
              date_validation_type="YEARS"
              min_date={100}
              max_date={18}
              default_date={subYears(new Date(), 18)}
            />
          </Grid>
        )}

        <Grid xs={6}>
          <SelectDropdown
            id="doc_type"
            class_name="inputField"
            title="Document For Verification"
            value={formDetails.doc_type.value}
            attrName={"doc_type"}
            value_update={updateMasterState}
            data={[
              ...POV,
              {
                value: "GSTIN",
                label: "GST IN",
              },
            ]}
            warn_status={formDetails.doc_type.warning}
            error_message="Select Document For Verification"
          />
        </Grid>
        <Grid xs={6}>
          <RKTextField
            id="doc_id"
            class_name="inputField"
            title={"Document ID"}
            value={formDetails.doc_id.value}
            attrName={"doc_id"}
            value_update={updateMasterState}
            warn_status={formDetails.doc_id.warning}
            validation_type="ALPHANUMERIC"
            max_length={50}
            error_message="Enter Document ID Number"
          />
        </Grid>
        <Grid xs={6}>
          <RKTextField
            class_name="inputField"
            title={"Email"}
            value={formDetails.email.value}
            attrName={"email"}
            value_update={updateMasterState}
            warn_status={formDetails.email.warning}
            error_message={
              isEmpty(formDetails.email.value)
                ? "Enter Email"
                : !validateEmail(formDetails.email.value)
                ? "Enter Valid Email"
                : ""
            }
          />
        </Grid>
        <Grid xs={6}>
          <SelectDropdown
            disabled={window.location.pathname.includes("health")}
            class_name="inputField"
            title="Customer Type"
            value={formDetails.customer_type.value}
            attrName={"customer_type"}
            value_update={updateMasterState}
            data={CUSTOMER_TYPE}
            warn_status={formDetails.customer_type.warning}
            error_message="Select Customer Type"
          />
        </Grid>
        {formDetails.customer_type.value === "Organization" ? null : (
          <Grid xs={6}>
            <SelectDropdown
              class_name="inputField"
              title="Gender"
              value={formDetails.gender.value}
              attrName={"gender"}
              value_update={updateMasterState}
              data={GENDER}
              warn_status={formDetails.gender.warning}
              error_message="Select Gender"
            />
          </Grid>
        )}
      </Grid>
      <Footer
        loader={loader}
        attrName={"pageStatus"}
        forward={validateForm}
        // backward={() => {
        //   window.history.back();;
        // }}
      />
    </Box>
  );
};
export default MNationalCKYC;
