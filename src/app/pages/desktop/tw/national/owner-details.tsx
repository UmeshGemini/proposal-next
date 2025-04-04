import { Box, Collapse } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Unstable_Grid2";
import CKYCDetailsPopup from "../CKYCDetailsPopup/CKYCDetailsPopup";
import { TOwnerDetails } from "../../../../types/TTWSlice";
import { TDropdown } from "../../../../types/Common/TDropdown";
import { useAppDispatch, useAppSelector } from "../../../../Store/hooks";
import RKTextField from "../../../../Component/FieldTypes/RKTextField/RKTextField";
import { isEmpty } from "../../../../SupportingFiles/HelpingFunction";
import DatePicker from "../../../../Component/FieldTypes/DatePicker/DatePicker";
import SelectDropdown from "../../../../Component/FieldTypes/SelectDropdown/SelectDropdown";
import Footer from "../../../../Component/Footer/Footer";
import MedicalQuestion from "../../../../Component/MedicalQuestion/MedicalQuestion";
import { TWSlice } from "../../../../Store/Slice_Reducer/TwoWheeler/TWSlice";
import SearchDropdown from "../../../../Component/FieldTypes/SearchDropdown/SearchDropdown";
import { CLIENTS } from "../../../../URLCollection/Clients";

function OwnerDetails({
  ownerFields,
  pageStatus,
  ownerMarital_data,
  updateMasterState,
  handleClick,
  setOwnerFields,
  fieldsUpdateState,
  loader,
}: {
  ownerFields: TOwnerDetails;
  pageStatus: number;
  ownerMarital_data: TDropdown[];
  updateMasterState: Function;
  handleClick: Function;
  setOwnerFields: Function;
  fieldsUpdateState: Function;
  loader: boolean;
}) {
  const dispatch = useAppDispatch();
  const { PAGE_STATUS, PLAN_TYPE, ADDON_STATUS, DROPDOWN_DATA } =
    useAppSelector((state) => state.TW);
  const { VERIFY_KYC_FORM } = useAppSelector((state) => state.CKYC);
  const { GENDER } = useAppSelector((state) => state.CommonDropdownData);
  return (
    <Box>
      <h5 className="sectionTitle">Owner Details</h5>
      <Grid container spacing={3}>
        {PLAN_TYPE === "Bundle Policy" ? null : (
          <Grid xs={12}>
            <FormControlLabel
              className="proposalCheckBoxWrapper"
              control={
                <Checkbox
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
      {window.location.hostname === CLIENTS.MOTILAL ||
      window.location.hostname === CLIENTS.MOTILAL_PHP
        ? null
        : VERIFY_KYC_FORM.customer_type.value !== "Organization" &&
          PLAN_TYPE !== "SAOD" && (
            <Grid container spacing={3}>
              <Grid xs={12}>
                <MedicalQuestion
                  main_class="medicalQuestion"
                  icon_class="accident"
                  question_name="Do you want to include Personal Accident Cover in this policy?"
                  sub_details={""}
                  input_id_first="mentalone"
                  input_id_second="mentaltwo"
                  input_name="mental"
                  toggle_button_status={ADDON_STATUS.pa_owner_cover.value}
                  attrName="includePAOwner"
                  value_update={(a: any, v: any) => {
                    console.log(v);
                    dispatch(
                      TWSlice.actions.UPDATE_ADDON_STATUS({
                        key: "pa_owner_cover",
                        value: v,
                      })
                    );
                  }}
                  select_disease={
                    <Collapse
                      in={!ADDON_STATUS.pa_owner_cover.value}
                      className="medicalQuestion-SubSection pl-11"
                    >
                      <Grid container spacing={3} className="pr-2 mb-3">
                        <Grid xs={12} lg={6}>
                          <SearchDropdown
                            class_name="inputField"
                            title="Reason for Exemption PA Cover"
                            value={ownerFields.pacover.value}
                            attrName={[
                              "pacover",
                              "value",
                              ownerFields,
                              setOwnerFields,
                            ]}
                            value_update={fieldsUpdateState}
                            data={DROPDOWN_DATA.PA_OWNER_COVER_DATA}
                            warn_status={ownerFields.pacover.warning}
                            error_message="Select Reason for Exemption"
                          />
                        </Grid>
                      </Grid>
                    </Collapse>
                  }
                />
              </Grid>
            </Grid>
          )}
      <Grid container spacing={3}>
        <Grid xs={6}>
          <RKTextField
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
              class_name="inputField"
              title={"GST"}
              value={ownerFields?.GST?.value}
              attrName={["GST", "value", ownerFields, setOwnerFields]}
              alphabet_only={true}
              value_update={fieldsUpdateState}
              error_message={
                !ownerFields?.GST?.value
                  ? " Enter GST Number"
                  : "Enter Valid GST Number"
              }
              warn_status={ownerFields?.GST?.warning}
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
        attrName={"pageStatus"}
        value={pageStatus}
        value_update={updateMasterState}
        disableButton={
          !ownerFields.isPolicyComprehensive || !ownerFields.validPuc
        }
      />
    </Box>
  );
}

export default OwnerDetails;
