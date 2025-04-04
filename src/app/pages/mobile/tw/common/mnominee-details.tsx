import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { TDropdown } from "../../../../types/Common/TDropdown";
import { useAppSelector } from "../../../../redux/hooks";
import RKTextField from "../../../../Component/FieldTypes/RKTextField/RKTextField";
import DatePicker from "../../../../Component/FieldTypes/DatePicker/DatePicker";
import SelectDropdown from "../../../../Component/FieldTypes/SelectDropdown/SelectDropdown";
import TMFooter from "../../../../Component/TMFooter/TMFooter";
import { subYears } from "date-fns";
import SearchDropdown from "../../../../Component/FieldTypes/SearchDropdown/SearchDropdown";

function MNomineeDetails({
  nomineeDetails,
  gender_data,
  relationship_data,
  updateMasterState,
  setNomineeDetails,
  pageStatus,
  validateForm,
}: {
  nomineeDetails: any;
  gender_data: TDropdown[];
  relationship_data: TDropdown[];
  updateMasterState: Function;
  setNomineeDetails: Function;
  pageStatus: number;
  validateForm: Function;
}) {
  const { PAGE_STATUS, DROPDOWN_DATA } = useAppSelector((state) => state.TW);

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
            error_message={"Enter Full Name"}
          />
        </Grid>
        <Grid xs={12}>
          <DatePicker
            class_name="inputField mb-2"
            title={"DOB"}
            value={nomineeDetails?.dob.value}
            attrName={["dob", "value", nomineeDetails, setNomineeDetails]}
            value_update={updateMasterState}
            error_message="Select Dob"
            warn_status={nomineeDetails?.dob.warning}
            date_validation_type="MONTHS"
            min_date={1200}
            max_date={216}
            default_date={subYears(new Date(), 18)}
          />
        </Grid>
        <Grid xs={12}>
          <SearchDropdown
            class_name="inputField mb-2"
            title="Nominee Relationship"
            value={nomineeDetails.relationship.value}
            attrName={[
              "relationship",
              "value",
              nomineeDetails,
              setNomineeDetails,
            ]}
            value_update={updateMasterState}
            data={DROPDOWN_DATA.NOMINEE_RELATIONSHIP}
            warn_status={nomineeDetails.relationship.warning}
            error_message="Select Nominee Relationship"
          />
        </Grid>
      </Grid>
      <TMFooter
        textName={PAGE_STATUS === true ? "Update" : "Continue"}
        value={pageStatus}
        forward={validateForm}
      />
    </Box>
  );
}

export default MNomineeDetails;
