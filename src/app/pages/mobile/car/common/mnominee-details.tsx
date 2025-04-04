import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useAppSelector } from "../../../../redux/hooks";
import RKTextField from "../../../../Component/FieldTypes/RKTextField/RKTextField";
import DatePicker from "../../../../Component/FieldTypes/DatePicker/DatePicker";
import SelectDropdown from "../../../../Component/FieldTypes/SelectDropdown/SelectDropdown";
import MFooter from "../../../../Component/MFooter/MFooter";
import { subYears } from "date-fns";

function MNomineeDetails({
  nomineeDetails,
  updateMasterState,
  setNomineeDetails,
  validateForm,
}: {
  nomineeDetails: any;
  updateMasterState: Function;
  setNomineeDetails: Function;
  validateForm: Function;
}) {
  const { DROPDOWN_DATA, PAGE_STATUS } = useAppSelector((state) => state.Car);
  return (
    <Box>
      <h5 className="sectionTitle">Nominee Details</h5>
      <Grid container spacing={2} className="mt-2">
        <Grid xs={12}>
          <RKTextField
            class_name="inputField mb-2"
            title={"Full Name"}
            validation_type="NAME"
            value={nomineeDetails.fullName?.value}
            attrName={["fullName", "value", nomineeDetails, setNomineeDetails]}
            value_update={updateMasterState}
            warn_status={nomineeDetails.fullName.warning}
            error_message={
              nomineeDetails.fullName.value === ""
                ? "Enter Full Name"
                : "Enter Valid Full Name"
            }
          />
        </Grid>
        <Grid xs={12}>
          <DatePicker
            class_name="inputField"
            title={"DOB"}
            value={nomineeDetails.dob.value}
            attrName={["dob", "value", nomineeDetails, setNomineeDetails]}
            value_update={updateMasterState}
            error_message="Select DOB"
            warn_status={nomineeDetails.dob.warning}
            date_validation_type="YEARS"
            min_date={100}
            max_date={18}
            default_date={
              nomineeDetails.dob.value === ""
                ? subYears(new Date(), 18)
                : subYears(new Date(), 0)
            }
          />
        </Grid>
        <Grid xs={12}>
          <SelectDropdown
            class_name="inputField"
            title="Nominee Relationship"
            value={nomineeDetails?.relationship.value}
            attrName={[
              "relationship",
              "value",
              nomineeDetails,
              setNomineeDetails,
            ]}
            value_update={updateMasterState}
            data={DROPDOWN_DATA.NOMINEE_RELATIONSHIP}
            warn_status={nomineeDetails?.relationship.warning}
            error_message="Select Nominee Relationship"
          />
        </Grid>
      </Grid>
      <MFooter
        forward={validateForm}
        textName={PAGE_STATUS ? "Update" : "Continue"}
      />
    </Box>
  );
}

export default MNomineeDetails;
