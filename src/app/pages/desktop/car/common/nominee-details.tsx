import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { subYears } from "date-fns";
import { TNomineeDetails } from "../../../../types/TCarSlice";
import { useAppSelector } from "../../../../redux/hooks";
import RKTextField from "../../../../Component/FieldTypes/RKTextField/RKTextField";
import DatePicker from "../../../../Component/FieldTypes/DatePicker/DatePicker";
import SearchDropdown from "../../../../Component/FieldTypes/SearchDropdown/SearchDropdown";
import Footer from "../../../../Component/Footer/Footer";

function NomineeDetails({
  nomineeDetails,
  updateMasterState,
  setNomineeDetails,
  validateForm,
}: {
  nomineeDetails: TNomineeDetails;
  updateMasterState: Function;
  setNomineeDetails: Function;
  validateForm: Function;
}) {
  const { PAGE_STATUS, DROPDOWN_DATA } = useAppSelector((state) => state.Car);
  return (
    <Box>
      <h5 className="sectionTitle">Nominee Details</h5>
      <Grid container spacing={3}>
        <Grid xs={6}>
          <RKTextField
            id="fullName"
            class_name="inputField"
            title={"Full Name"}
            validation_type="NAME"
            value={nomineeDetails.fullName.value}
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
      </Grid>
      <Grid container spacing={3}>
        <Grid xs={4}>
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
        <Grid xs={4}>
          <SearchDropdown
            id="relationship"
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
      <Footer
        textName={PAGE_STATUS === true ? "Update" : "Continue"}
        attrName={"pageStatus"}
        forward={validateForm}
        value_update={updateMasterState}
      />
    </Box>
  );
}

export default NomineeDetails;
