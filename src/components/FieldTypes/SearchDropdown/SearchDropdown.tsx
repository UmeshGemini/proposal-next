import { EVSearchDropdown } from "@evervent_pvt_ltd/ui-kit";
import React from "react";
import "../FieldTypes.scss";

interface Props {
  id?: any;
  attrName: any;
  title: string;
  value: string;
  value_update: Function;
  data: Array<any>;
  error_message: string;
  warn_status: boolean;
  class_name: string;
  disabled?: boolean;
}

const SearchDropdown: React.FC<Props> = ({
  id,
  attrName,
  title,
  value,
  data = [],
  class_name,
  error_message,
  warn_status,
  value_update,
  disabled = false,
}) => {
  const convertString = (str: string) => {
    return `${str}`?.replace(/\s+/g, "_").toLowerCase();
  };
  return (
    <EVSearchDropdown
      id={convertString(id || title || attrName)}
      attrName={attrName}
      title={title}
      value={value}
      data={data}
      className={class_name}
      error_message={error_message}
      warn_status={warn_status}
      value_update={value_update}
    />
  );
};

export default SearchDropdown;
