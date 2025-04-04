import { EVSelectDropdown } from "@evervent_pvt_ltd/ui-kit";
import React from "react";

interface Props {
  id?: string;
  title?: string;
  value?: any;
  attrName?: any;
  value_update?: Function;
  data?: Array<any>;
  warn_status?: boolean;
  class_name?: string;
  error_message?: string;
  info_status?: boolean;
  info_message?: string;
  sx?: any;
  disabled?: boolean;
  maxSelectedValue?: string;
}

const defaultProps: Props = {
  id: "",
  title: "",
  value: "",
  attrName: "",
  warn_status: false,
  value_update: () => {},
  data: [],
  error_message: "select",
  info_status: false,
  info_message: "This is dummy text for select dropdown.",
  sx: "",
  disabled: false,
  class_name: "",
  maxSelectedValue: "",
};

const SelectDropdown: React.FC<Props> = ({
  id = "",
  title = "",
  value = "",
  attrName = "",
  warn_status = false,
  value_update = () => {},
  data = [],
  error_message = "select",
  info_status = false,
  info_message = "This is dummy text for select dropdown.",
  sx = "",
  disabled = false,
  class_name = "",
  maxSelectedValue = "",
}) => {
  const convertString = (str: string) => {
    return `${str}`?.replace(/\s+/g, "_").toLowerCase();
  };

const filteredData =  attrName === "existingNcb" ?  data?.filter((item) => item?.value <= maxSelectedValue): data;
  return (
    <EVSelectDropdown
      id={convertString(id || title || attrName)}
      title={title}
      value={value}
      attrName={attrName}
      warn_status={warn_status}
      value_update={value_update}
      data={filteredData}
      error_message={error_message}
      info_status={info_status}
      info_message={info_message}
      sx={sx}
      disabled={disabled}
      className={class_name}
    />
  );
};

SelectDropdown.defaultProps = defaultProps;

export default SelectDropdown;
