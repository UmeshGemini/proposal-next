import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import "../FieldTypes.scss";

interface Props {
  attrName: any;
  title: string;
  value: string;
  value_update: Function;
  data: Array<any>;
  error_message: string;
  warn_status: boolean;
  class_name: string;
  setBankdata: Function;
}

const SearchDropdownAPI: React.FC<Props> = ({
  attrName,
  title,
  value,
  data,
  class_name,
  error_message,
  warn_status,
  value_update,
  setBankdata,
}) => {
  return (
    <div className={class_name} id={title}>
      <Autocomplete
        id={`${title}-autocomplete`}
        disablePortal
        options={data}
        renderInput={(params) => <TextField {...params} label={title} />}
        value={value}
        isOptionEqualToValue={(option, value) => option.value === value}
        onChange={(event, new_team) => {
          value_update(attrName, new_team && new_team.value);
        }}
        onInputChange={(event, newInputValue) => {
          // Fetch options based on the new input value
          console.log(newInputValue, "nnnnnnnn");
          setBankdata(newInputValue);
        }}
      />
      {warn_status === true ? (
        <span className="error">{error_message}</span>
      ) : null}
    </div>
  );
};

export default SearchDropdownAPI;
