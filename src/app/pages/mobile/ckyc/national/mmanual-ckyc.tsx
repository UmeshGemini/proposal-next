import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import { Box, Button, Link, Modal, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { subYears } from "date-fns";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CustomButton from "../../../../Component/CustomButton/CustomButton";
import DatePicker from "../../../../Component/FieldTypes/DatePicker/DatePicker";
import RKTextField from "../../../../Component/FieldTypes/RKTextField/RKTextField";
import SearchDropdown from "../../../../Component/FieldTypes/SearchDropdown/SearchDropdown";
import SelectDropdown from "../../../../Component/FieldTypes/SelectDropdown/SelectDropdown";
import Loader from "../../../../Component/Loader/Loader";
import MFooter from "../../../../Component/MFooter/MFooter";
import { useAppSelector } from "../../../../Store/hooks";
import {
  FORMAT_DD_MM_YYYY,
  isEmpty,
  uploadImage,
  validateEmail,
} from "../../../../SupportingFiles/HelpingFunction";
import { TManualCKYCForm } from "../../../../types/CKYC/TCKYC";
import "./../../../../SCSS/CommonSCSS/ModalPopup.scss";
import ScheduleCallPopup from "../../../../Component/ScheduleCallPopup/ScheduleCallPopup";
import { useLocation } from "react-router-dom";

const MNationalManualCKYC = ({
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
  formDetails: TManualCKYCForm;
  validateForm: Function;
  CONTINUE_TO_PROPOSAL: Function;
  showManualPopup: boolean;
  setShowManualPopup: Function;
  showCKYCDetailsPopup: boolean;
  setShowCKYCDetailsPopup: Function;
  loader: boolean;
}) => {
  const { GENDER, CUSTOMER_TYPE } = useAppSelector(
    (state) => state.CommonDropdownData
  );
  const { CKYC_DETAILS } = useAppSelector((state) => state.CKYC);
  const [imageName, setImageName] = useState<{
    address_image: string;
    id_image: string;
  }>({ address_image: "", id_image: "" });

  const [pageStatus, setPageStatus] = useState<string>("");
  const [openSchedulePopup, setOpenSchedulePopup] = useState(false);
  useEffect(() => {
    const windowURL = window.location.search;
    const params = new URLSearchParams(windowURL);
    const type = params.get("type");

    if (type) {
      setPageStatus(type);
    }
  }, []);
  const [utm_source, setUtm_source] = useState<string>("");
  const [iscrm, setIscrm] = useState<string>("");
  const location = useLocation();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const userType = urlParams.get("user_type");
    if (userType) {
      // Decode the current `user_type` value
      const decodedUserType = atob(userType);
      setIscrm(decodedUserType);
    }
  }, [location]);

  useEffect(() => {
    // Access the query parameters directly from the URL
    const searchParams = new URLSearchParams(window.location.search);
    const utm_sourceFromQuery = searchParams.get("utm_source");
    setUtm_source(`${utm_sourceFromQuery}`);
  }, []);

  return (
    <>
      {loader && <Loader />}

      <Box>
        <Modal
          open={showCKYCDetailsPopup}
          className="modalWrapperMobile mwMobile-kyc"
        >
          <Box className="modalContent">
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
                  {CKYC_DETAILS?.CKYCNo}
                </span>
              </Grid>
            </Grid>
            <Grid container spacing={2} textAlign="center">
              <Grid xs={6}>
                <h6>
                  Full Name:
                  <span>{`${CKYC_DETAILS.firstName} ${
                    CKYC_DETAILS.middleName || ""
                  }  ${CKYC_DETAILS.lastName || ""}`}</span>
                </h6>
              </Grid>
              <Grid xs={6}>
                <h6>
                  DOB:
                  <span>{FORMAT_DD_MM_YYYY(CKYC_DETAILS?.DateOfBirth)}</span>
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
            <Grid container spacing={2}>
              <Grid xs={6} style={{ textAlign: "center" }} className="ctaBtn">
                <CustomButton
                  onClickFunction={() => {
                    setShowCKYCDetailsPopup(false);
                  }}
                  text_name={
                    <>
                      <SentimentDissatisfiedOutlinedIcon className="mr-2" />{" "}
                      It's not me
                    </>
                  }
                  class_name="redSmBtn"
                />
              </Grid>
              <Grid xs={6} style={{ textAlign: "center" }} className="ctaBtn">
                <CustomButton
                  onClickFunction={() => {
                    CONTINUE_TO_PROPOSAL();
                  }}
                  text_name={"Continue"}
                  class_name="mediumPrimaryBtn"
                />
              </Grid>
            </Grid>
            {iscrm !== "agent" && utm_source !== "SCRM" && (
              <Box
                sx={{
                  position: "fixed",
                  right: "24px",
                  bottom: "80px",
                }}
              >
                <CustomButton
                  text_name={
                    <>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1"
                      >
                        <path
                          d="M20 10H19V9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9V10H4C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H5C5.53043 18 6.03914 17.7893 6.41421 17.4142C6.78929 17.0391 7 16.5304 7 16V9C7 7.67392 7.52678 6.40215 8.46447 5.46447C9.40215 4.52678 10.6739 4 12 4C13.3261 4 14.5979 4.52678 15.5355 5.46447C16.4732 6.40215 17 7.67392 17 9V19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H13C12.7348 20 12.4804 20.1054 12.2929 20.2929C12.1054 20.4804 12 20.7348 12 21C12 21.2652 12.1054 21.5196 12.2929 21.7071C12.4804 21.8946 12.7348 22 13 22H16C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19V18H20C20.5304 18 21.0391 17.7893 21.4142 17.4142C21.7893 17.0391 22 16.5304 22 16V12C22 11.4696 21.7893 10.9609 21.4142 10.5858C21.0391 10.2107 20.5304 10 20 10Z"
                          fill=""
                        />
                      </svg>
                      Need help?
                    </>
                  }
                  class_name={"secondaryBtn schedulPopup-btn"}
                  onClickFunction={() => {
                    setOpenSchedulePopup(true);
                  }}
                  fullWidth={true}
                />
                <ScheduleCallPopup
                  open={openSchedulePopup}
                  setOpen={setOpenSchedulePopup}
                />
              </Box>
            )}
          </Box>
        </Modal>

        <Modal
          open={showManualPopup}
          className="modalWrapperMobile mwMobile-kyc"
        >
          <Box className="modalContent">
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
                  class_name="secondaryBtn"
                  size="medium"
                />
              </Grid>
              <Grid xs={12} style={{ textAlign: "center" }} className="ctaBtn">
                <CustomButton
                  text_name={"Manual KYC"}
                  class_name="primaryBtn"
                  size="medium"
                />
              </Grid>
            </Grid>
            {iscrm !== "agent" && utm_source !== "SCRM" && (
              <Box
                sx={{
                  position: "fixed",
                  right: "24px",
                  bottom: "80px",
                }}
              >
                <CustomButton
                  text_name={
                    <>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1"
                      >
                        <path
                          d="M20 10H19V9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9V10H4C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H5C5.53043 18 6.03914 17.7893 6.41421 17.4142C6.78929 17.0391 7 16.5304 7 16V9C7 7.67392 7.52678 6.40215 8.46447 5.46447C9.40215 4.52678 10.6739 4 12 4C13.3261 4 14.5979 4.52678 15.5355 5.46447C16.4732 6.40215 17 7.67392 17 9V19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H13C12.7348 20 12.4804 20.1054 12.2929 20.2929C12.1054 20.4804 12 20.7348 12 21C12 21.2652 12.1054 21.5196 12.2929 21.7071C12.4804 21.8946 12.7348 22 13 22H16C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19V18H20C20.5304 18 21.0391 17.7893 21.4142 17.4142C21.7893 17.0391 22 16.5304 22 16V12C22 11.4696 21.7893 10.9609 21.4142 10.5858C21.0391 10.2107 20.5304 10 20 10Z"
                          fill=""
                        />
                      </svg>
                      Need help?
                    </>
                  }
                  class_name={"secondaryBtn schedulPopup-btn"}
                  onClickFunction={() => {
                    setOpenSchedulePopup(true);
                  }}
                  fullWidth={true}
                />
                <ScheduleCallPopup
                  open={openSchedulePopup}
                  setOpen={setOpenSchedulePopup}
                />
              </Box>
            )}
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
              initiative is to have a structure in place which allows investors
              to complete their KYC only once before interacting with various
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
            <SearchDropdown
              id="doc_type_id_proof"
              class_name="inputField"
              title="Document For ID Proof"
              value={formDetails.doc_type_id_proof.value}
              attrName={"doc_type_id_proof"}
              value_update={updateMasterState}
              data={[
                { value: "aadhaar", label: "Aadhar Card" },
                { value: "DL", label: "Driving License" },
                { value: "PASSPORT", label: "Passport" },
                { value: "VOTERID", label: "Voter ID" },
                { value: "VOTERID", label: "Voter ID" },
                { value: "GSTIN", label: "GST IN" },
              ]}
              warn_status={formDetails.doc_type_id_proof.warning}
              error_message="Select Document For ID Proof"
            />
          </Grid>
          <Grid xs={6}>
            <RKTextField
              id="doc_no_id_proof"
              class_name="inputField"
              title={"Document no. of ID Proof"}
              value={formDetails.doc_no_id_proof.value}
              attrName={"doc_no_id_proof"}
              value_update={updateMasterState}
              warn_status={formDetails.doc_no_id_proof.warning}
              validation_type="ALPHANUMERIC"
              max_length={50}
              error_message="Enter Document no. of ID Proof"
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
          <Grid xs={12}>
            <SelectDropdown
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
        </Grid>
        <Grid container spacing={3}>
          <Grid xs={12}>
            <h6 className="mb-0 question">Attach Required Documents</h6>
          </Grid>
          <Grid xs={12}>
            <Box className="fieldbox">
              <TextField
                fullWidth
                id="address_image"
                label="Upload Front Proof Document"
                variant="outlined"
                className="uploadField inputField"
                value={imageName.address_image}
              />
              <Button
                variant="contained"
                className="browsebtn"
                component="label"
                id={"address_proof"}
              >
                Browse{" "}
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={(e: any) => {
                    const file = e.target.files[0];
                    const fileSizeInMB = file.size / (1024 * 1024);

                    if (fileSizeInMB > 6) {
                      toast.error(
                        "File size exceeds the maximum limit of 5 MB."
                      );
                    } else {
                      setImageName((prev) => ({
                        ...prev,
                        address_image: file.name,
                      }));
                      updateMasterState(
                        "doc_address_proof_image",
                        e.target.files[0]
                      );
                    }
                  }}
                />
              </Button>
            </Box>
          </Grid>
          <Grid xs={12}>
            <Box className="fieldbox">
              <TextField
                fullWidth
                id="id_image"
                label="Upload Back Proof Document"
                variant="outlined"
                className="uploadField inputField"
                value={imageName.id_image}
              />
              <Button
                variant="contained"
                className="browsebtn"
                component="label"
                id={"id_proof"}
              >
                Browse{" "}
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={(e: any) => {
                    const file = e.target.files[0];
                    const fileSizeInMB = file.size / (1024 * 1024);

                    if (fileSizeInMB > 6) {
                      toast.error(
                        "File size exceeds the maximum limit of 5 MB."
                      );
                    } else {
                      setImageName((prev) => ({
                        ...prev,
                        id_image: file.name,
                      }));
                      updateMasterState(
                        "doc_id_proof_image",
                        e.target.files[0]
                      );
                    }
                  }}
                />
              </Button>
            </Box>
          </Grid>
        </Grid>
        {/* <Footer
        loader={loader}
        attrName={"pageStatus"}
        forward={validateForm}
        // backward={() => {
        //   window.history.back();;
        // }}
      /> */}
        <MFooter
          loader={loader}
          attrName={"pageStatus"}
          forward={validateForm}
        />
      </Box>
    </>
  );
};

export default MNationalManualCKYC;
