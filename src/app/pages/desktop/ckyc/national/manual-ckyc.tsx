import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import { Button, Link, Modal, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import { subYears } from "date-fns";
import { useState } from "react";
import { toast } from "react-toastify";
import CustomButton from "../../../../Component/CustomButton/CustomButton";
import DatePicker from "../../../../Component/FieldTypes/DatePicker/DatePicker";
import RKTextField from "../../../../Component/FieldTypes/RKTextField/RKTextField";
import SearchDropdown from "../../../../Component/FieldTypes/SearchDropdown/SearchDropdown";
import SelectDropdown from "../../../../Component/FieldTypes/SelectDropdown/SelectDropdown";
import Footer from "../../../../Component/Footer/Footer";
import { useAppSelector } from "../../../../Store/hooks";
import {
  FORMAT_DD_MM_YYYY,
  isEmpty,
  validateEmail,
} from "../../../../SupportingFiles/HelpingFunction";
import { TManualCKYCForm } from "../../../../types/CKYC/TCKYC";

function NationalManualKYC({
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
}) {
  const { GENDER } = useAppSelector((state) => state.CommonDropdownData);
  const { CKYC_DETAILS } = useAppSelector((state) => state.CKYC);
  const [imageName, setImageName] = useState<{
    address_image: string;
    id_image: string;
  }>({ address_image: "", id_image: "" });
  return (
    <Box>
      <Modal open={showCKYCDetailsPopup} className="modalWrapper">
        <Box className="modalContent xl-width kycPopups">
          <Grid container spacing={2}>
            <Grid xs={12}>
              <h4 className="popup-heading mb-2">CKYC Details </h4>
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
                <span>{`${CKYC_DETAILS.firstName} ${CKYC_DETAILS.lastName}`}</span>
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
      <h5 className="sectionTitle">Manual CKYC/eKYC Details</h5>
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
              { value: "GSTIN", label: "GST IN" },
            ]}
            warn_status={formDetails.doc_type_id_proof.warning}
            error_message="Select Document For ID Proof"
          />
        </Grid>
        {/* <Grid xs={6}>
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
        </Grid> */}
        {/* <Grid xs={6}>
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
        </Grid> */}
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
        {/* <Grid xs={6}>
          <SearchDropdown
            id="doc_type_address_proof"
            class_name="inputField"
            title="Document For Address Proof"
            value={formDetails.doc_type_address_proof.value}
            attrName={"doc_type_address_proof"}
            value_update={updateMasterState}
            data={[
              { value: "AADHAAR", label: "Aadhar Card" },
              { value: "DL", label: "Driving License" },
              { value: "PASSPORT", label: "Passport" },
              { value: "VOTERID", label: "Voter ID" },
            ]}
            warn_status={formDetails.doc_type_address_proof.warning}
            error_message="Select Document For ID Proof"
          />
        </Grid> */}
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
      </Grid>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <h6 className="mb-0 question">Attach Required Documents</h6>
        </Grid>
        <Grid xs={6}>
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
                    toast.error("File size exceeds the maximum limit of 5 MB.");
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
        <Grid xs={6}>
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
                    toast.error("File size exceeds the maximum limit of 5 MB.");
                  } else {
                    setImageName((prev) => ({
                      ...prev,
                      id_image: file.name,
                    }));
                    updateMasterState("doc_id_proof_image", e.target.files[0]);
                  }
                }}
              />
            </Button>
          </Box>
        </Grid>
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
}

export default NationalManualKYC;
