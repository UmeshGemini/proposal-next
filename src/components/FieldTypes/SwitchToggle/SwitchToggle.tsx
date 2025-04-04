import { FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { COLORS } from "../../../SupportingFiles/colors";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 0,
  "& .MuiSwitch-track": {
    backgroundColor: "transparent",
    outline: "1px solid #141414",
    outlineOffset: "-1px",
    borderRadius: 26 / 2,
    opacity: 1,
    width: "44px",
    height: "24px",
  },

  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: "4px",
    background: COLORS.lightgrey,
  },
}));



function SwitchToggle({
  // attrName,
  onChange,
  value,
  defaultValue,
  disabled,
  value_update,
  attrName,
  toggle_status,
}: {
  // attrName: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: boolean;
  defaultValue?: boolean;
  disabled?: boolean;
  value_update: Function | undefined;
  attrName: any;
  toggle_status: boolean | undefined;
}) {
  const [values, setValues] = React.useState<boolean>(false);
  return (
    <FormControlLabel
      name={attrName}
      sx={{
        ".MuiSwitch-root": {
          width: "100%",
          height: "auto",
          padding: 0,
          ".MuiButtonBase-root": {
            padding: 0,
            "&.Mui-checked+": {
              ".MuiSwitch-track": {
                backgroundColor: COLORS.darkgold,
                outline: "none",
                opacity: 1,
              },
            },
            "&.Mui-checked": {
              ".MuiSwitch-thumb": {
                background: COLORS.white,
              },
            },
          },
        },
      }}
      className="mr-0"
      control={
        <Android12Switch
          // disableTouchRipple={true}
          // onChange={onChange}
          // value={toggle_status}
          checked={toggle_status}
          onChange={(e, value) => {
            if (value ==null) return
             value_update?.(attrName, value);
            setValues(value);
          }}
        />
      }
      label=""
    />
  );
}
export default SwitchToggle;
