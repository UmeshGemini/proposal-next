import { Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Unstable_Grid2";
import CKYCDetailsPopup from "../../../../Component/CKYCDetailsPopup/CKYCDetailsPopup";
import DatePicker from "../../../../Component/FieldTypes/DatePicker/DatePicker";
import RKTextField from "../../../../Component/FieldTypes/RKTextField/RKTextField";
import SelectDropdown from "../../../../Component/FieldTypes/SelectDropdown/SelectDropdown";
import Footer from "../../../../Component/Footer/Footer";
// import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { isEmpty } from "../../../../SupportingFiles/HelpingFunction";
import { TDropdown } from "../../../../types/Common/TDropdown";
import { TCarOwnerDetails } from "../../../../types/TCarSlice";
import { useAppSelector } from "../../../../Store/hooks";

function OwnerDetails({
  ownerFields,
  ownerMarital_data,
  updateMasterState,
  handleClick,
  setOwnerFields,
  fieldsUpdateState,
  validateForm,
  kycOpen,
  setKycOpen,
  loader,
}: {
  ownerFields: TCarOwnerDetails;
  ownerMarital_data: TDropdown[];
  updateMasterState: Function;
  handleClick: Function;
  setOwnerFields: Function;
  fieldsUpdateState: Function;
  validateForm: Function;
  kycOpen: boolean;
  setKycOpen: Function;
  loader: boolean;
}) {
  const { PAGE_STATUS, PLAN_TYPE } = useAppSelector((state) => state.Car);
  const { VERIFY_KYC_FORM } = useAppSelector((state) => state.CKYC);
  const { GENDER } = useAppSelector((state) => state.CommonDropdownData);
  return (
    <Box>
      <CKYCDetailsPopup open={kycOpen} setOpen={setKycOpen} loader={loader} />
      <h5 className="sectionTitle">Owner Details</h5>
      <Grid container spacing={3}>
        {PLAN_TYPE === "Bundle Policy" ? null : (
          <Grid xs={12}>
            <FormControlLabel
              className="proposalCheckBoxWrapper"
              control={
                <Checkbox
                  id={"validPuc"}
                  defaultChecked={ownerFields.validPuc}
                  onClick={() => handleClick("validPuc", !ownerFields.validPuc)}
                />
              }
              label="I hold a valid and effective PUC as applicable for the vehicle mentioned herein and undertake to renew the same during the policy period"
            />
          </Grid>
        )}
        {PLAN_TYPE === "Bundle Policy" ||
        PLAN_TYPE === "SAOD" ||
        PLAN_TYPE === "Third Party" ? null : (
          <Grid xs={6}>
            <FormControlLabel
              className="proposalCheckBoxWrapper redBox"
              control={
                <Checkbox
                  id={"isPolicyComprehensive"}
                  defaultChecked={ownerFields.isPolicyComprehensive}
                  onClick={() =>
                    handleClick(
                      "isPolicyComprehensive",
                      !ownerFields.isPolicyComprehensive
                    )
                  }
                />
              }
              label="Previous policy is comprehensive."
            />
          </Grid>
        )}
      </Grid>
      <Grid container spacing={3}>
        <Grid xs={6}>
          <RKTextField
            id="name"
            disabled
            class_name="inputField"
            title={"Full Name as per RC copy"}
            value={ownerFields.name.value}
            attrName={["name", "value", ownerFields, setOwnerFields]}
            value_update={fieldsUpdateState}
            warn_status={ownerFields.name.warning}
            error_message={
              !ownerFields.name.value
                ? "Enter Full Name"
                : "Enter Valid Full Name"
            }
            validation_type="NAME"
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid xs={4}>
          <RKTextField
            id="mobile"
            class_name="inputField"
            title={"Mobile"}
            value={ownerFields.mobile.value}
            attrName={["mobile", "value", ownerFields, setOwnerFields]}
            value_update={fieldsUpdateState}
            warn_status={ownerFields.mobile.warning}
            validation_type="NUMBER"
            max_length={10}
            error_message={
              isEmpty(ownerFields.mobile.value)
                ? "Enter Mobile Number"
                : "Enter Valid Mobile Number"
            }
            disabled
          />
        </Grid>
        <Grid xs={5}>
          <RKTextField
            id="email"
            class_name="inputField"
            title={"Email"}
            value={ownerFields.email.value}
            attrName={["email", "value", ownerFields, setOwnerFields]}
            value_update={fieldsUpdateState}
            warn_status={ownerFields.email.warning}
            error_message={
              !ownerFields.email.value ? "Enter Email" : "Enter Valid Email"
            }
          />
        </Grid>
      </Grid>
      {VERIFY_KYC_FORM.customer_type.value === "Organization" ? (
        <Grid container spacing={3}>
          <Grid xs={4}>
            <RKTextField
              id="gst"
              class_name="inputField"
              title={"GST"}
              value={ownerFields?.gst?.value}
              attrName={["gst", "value", ownerFields, setOwnerFields]}
              alphabet_only={true}
              value_update={fieldsUpdateState}
              error_message={
                !ownerFields?.gst?.value
                  ? " Enter GST Number"
                  : "Enter Valid GST Number"
              }
              warn_status={ownerFields?.gst?.warning}
            />
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid container spacing={3}>
            <Grid xs={4}>
              <DatePicker
                disabled
                class_name="inputField"
                title={"DOB"}
                value={ownerFields.dob.value}
                attrName={["dob", "value", ownerFields, setOwnerFields]}
                value_update={fieldsUpdateState}
                error_message="Select DOB"
                warn_status={ownerFields.dob.warning}
                date_validation_type="MONTHS"
                min_date={1200}
                max_date={216}
              />
            </Grid>
            <Grid xs={5}>
              <SelectDropdown
                class_name="inputField"
                title="Gender"
                value={ownerFields.gender.value}
                attrName={["gender", "value", ownerFields, setOwnerFields]}
                value_update={fieldsUpdateState}
                data={GENDER}
                warn_status={ownerFields.gender.warning}
                error_message="Select Gender"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid xs={4}>
              <SelectDropdown
                class_name="inputField"
                title="Marital Status"
                value={ownerFields.maritalStatus.value}
                attrName={[
                  "maritalStatus",
                  "value",
                  ownerFields,
                  setOwnerFields,
                ]}
                value_update={fieldsUpdateState}
                data={ownerMarital_data}
                warn_status={ownerFields.maritalStatus.warning}
                error_message="Select Marital Status"
              />
            </Grid>
          </Grid>
        </>
      )}
      <Footer
        textName={PAGE_STATUS === true ? "Update" : "Continue"}
        disableButton={
          !ownerFields.isPolicyComprehensive || !ownerFields.validPuc
        }
        forward={validateForm}
      />
    </Box>
  );
}

export default OwnerDetails;
