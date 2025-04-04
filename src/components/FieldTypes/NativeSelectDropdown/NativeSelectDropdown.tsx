import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { FormControl, InputLabel, NativeSelect, Tooltip } from "@mui/material";
import * as React from "react";

interface Props {
  title: string;
  value: any;
  attrName: any;
  value_update: Function;
  data: Array<any>;
  warn_status?: boolean;
  class_name?: string;
  error_message?: string;
  info_status?: boolean;
  info_message?: string;
}

const defaultProps: Props = {
  title: "",
  value: "",
  attrName: "",
  warn_status: false,
  value_update: () => {},
  data: [],
  error_message: "select",
  info_status: false,
  info_message: "This is dummy text for select dropdown.",
};

const NativeSelectDropdown: React.FC<Props> = ({
  title,
  value,
  value_update,
  attrName,
  data,
  warn_status,
  class_name,
  error_message,
  info_status,
  info_message,
}) => {
  return (
    <div className={class_name}>
      <FormControl fullWidth>
        <InputLabel>{title}</InputLabel>
        <NativeSelect
          value={value}
          onChange={(e) => {
            value_update(attrName, e.target.value);
          }}
        >
          <option value=""></option>
          {/* <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option> */}
          {data &&
            data.map((data) => (
              <option
                value={title === "Age" ? data.value : data.label || data.key}
              >
                {data.value || data.label}
              </option>
            ))}
        </NativeSelect>
      </FormControl>
      {info_status === true ? (
        <Tooltip title={info_message === undefined ? "" : info_message}>
          <span className="infoMessage">
            <InfoOutlinedIcon />
          </span>
        </Tooltip>
      ) : null}
      {warn_status ? <span className="error">{error_message}</span> : null}
    </div>
  );
};
export default NativeSelectDropdown;
