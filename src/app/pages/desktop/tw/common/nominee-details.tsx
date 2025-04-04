import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { subYears } from "date-fns";
import DatePicker from "../../../../Component/FieldTypes/DatePicker/DatePicker";
import RKTextField from "../../../../Component/FieldTypes/RKTextField/RKTextField";
import SearchDropdown from "../../../../Component/FieldTypes/SearchDropdown/SearchDropdown";
import Footer from "../../../../Component/Footer/Footer";
import { useAppSelector } from "../../../../redux/hooks";

function NomineeDetails({
  nomineeDetails,
  updateMasterState,
  setNomineeDetails,
  pageStatus,
}: {
  nomineeDetails: any;
  updateMasterState: Function;
  setNomineeDetails: Function;
  pageStatus: number;
}) {
  const { PAGE_STATUS, DROPDOWN_DATA } = useAppSelector((state) => state.TW);
  return (
    <Box>
      <h5 className="sectionTitle">Nominee Details</h5>
      <Grid container spacing={3}>
        <Grid xs={6}>
          <RKTextField
            class_name="inputField"
            title={"Full Name"}
            validation_type="NAME"
            value={nomineeDetails?.fullName?.value}
            attrName={["fullName", "value", nomineeDetails, setNomineeDetails]}
            value_update={updateMasterState}
            warn_status={nomineeDetails?.fullName?.warning}
            error_message={"Enter Full Name"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid xs={4}>
          <DatePicker
            class_name="inputField"
            title={"DOB"}
            value={nomineeDetails?.dob.value}
            attrName={["dob", "value", nomineeDetails, setNomineeDetails]}
            value_update={updateMasterState}
            error_message="Select Dob"
            warn_status={nomineeDetails?.dob.warning}
            date_validation_type="MONTHS"
            min_date={1200}
            max_date={216}
            // default_date={subYears(new Date(), 18)}
          />
        </Grid>
        <Grid xs={4}>
          <SearchDropdown
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
        value={pageStatus}
        value_update={updateMasterState}
      />
    </Box>
  );
}

export default NomineeDetails;
