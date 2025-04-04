import { Box } from "@mui/material";
import RKTextField from "../RKTextField/RKTextField";

function DurationPicker({
  attrNameMonth,
  attrNameYear,
  title,
  valueMonth,
  valueUpadte,
  valueYear,
  warning_month,
  warning_year,
}: {
  title: string;
  valueMonth: any;
  valueYear: any;
  attrNameMonth: any;
  attrNameYear: any;
  valueUpadte: Function;
  warning_month: boolean;
  warning_year: boolean;
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "17px" }}>
      <h6>{title}</h6>
      <RKTextField
      id="months"
        title="Months"
        attrName={attrNameMonth}
        value={valueMonth}
        value_update={valueUpadte}
        max_length={2}
        validation_type="NUMBER"
        warn_status={warning_month}
        error_message={"Enter months"}
      />
      <RKTextField
      id="years"
        title="Years"
        attrName={attrNameYear}
        value={valueYear}
        value_update={valueUpadte}
        max_length={3}
        validation_type="NUMBER"
        warn_status={warning_year}
        error_message={"Enter years"}
      />
    </Box>
  );
}

export default DurationPicker;
