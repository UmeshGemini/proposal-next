import { FormControl, FormLabel, RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { COLORS } from "../../../SupportingFiles/colors";

const BorderRadioButtonHealth = ({
  attrName,
  onChange,
  value,
  value_update,
  defaultValue = "",
  disabled = false,
  title = "",
  options,
  variant = "default",
  orientation = "row",
  count = "1",
}: {
  orientation?: "row" | "column";
  attrName?: any;
  onChange?: Function;
  value_update?: Function;
  value: string;
  defaultValue?: string;
  disabled?: boolean;
  options: Array<{ value: string; label: string }>;
  title?: string;
  variant?: "default" | "large";
  count?: "1" | "2" | "3" | "4" | "AUTO";
}) => {
  const checkedLabelColor = "#141414";
  const uncheckedLabelColor = "#595959";
  return (
    <FormControl sx={{ width: "100%" }}>
      {title.length > 0 ? (
        <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
      ) : null}
      <RadioGroup
        row={orientation === "row"}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name={attrName}
        sx={{ gap: "12px" }}>
        {options.map((data, index) => (
          <FormControlLabel
            sx={{
              ".MuiRadio-root": {
                padding: "8px 8px 8px 10px",
              },
              flexGrow: count === "AUTO" ? "0" : "1",
              width:
                count === "1"
                  ? "100%"
                  : count === "2"
                  ? "40%"
                  : count === "3"
                  ? "25%"
                  : count === "4"
                  ? "20%"
                  : "auto",
              borderWidth: "1px",
              borderStyle: "solid",
              borderRadius: "12px",
              padding: variant === "default" ? "5px 16px 5px 4px" : "9px 4px",
              margin: "0px",
              borderColor: data.value === value ? COLORS.primary : "#E0E0E0",
              ".MuiButtonBase-root": {
                position: "relative",
                ".MuiSvgIcon-root": {
                  display: "none",
                },
                "&:before": {
                  content: '""',
                  border: "1px solid",
                  borderColor: COLORS.lightgrey,
                  height: "14px",
                  width: "14px",
                  borderRadius: "20px",
                },
                "&.Mui-checked": {
                  "&:before": {
                    content: '""',
                    backgroundColor: COLORS.warmgold,
                    border: "4px solid #DF9F39",
                    height: "8px",
                    width: "8px",
                    borderRadius: "12px",
                  },
                },
              },
            }}
            value={data.value}
            control={
              <Radio
                onChange={(e) => {
                  console.log("gsss", attrName, e.target.value);
                  if (onChange) onChange(attrName, e.target.value);
                }}
                onClick={(e: any) => {
                  value_update && value_update(attrName, e.target.value);
                }}
                checked={data.value === value}
                disabled={disabled}
              />
            }
            label={
              <span
                style={{
                  color:
                    data.value === value
                      ? checkedLabelColor
                      : uncheckedLabelColor,
                  position: "relative",
                  top: "1px",
                  fontSize: "14px",
                }}
                className="pr-3">
                {data.label}
              </span>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default BorderRadioButtonHealth;
