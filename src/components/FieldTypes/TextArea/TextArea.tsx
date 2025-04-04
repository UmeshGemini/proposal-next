import { EVTextarea } from "@evervent_pvt_ltd/ui-kit";
import * as React from "react";
import "../FieldTypes.scss";

interface Props {
  id: any;
  title: string;
  value: any;
  attrName: any;
  value_update: (attrName: string, value: string) => void;
  warn_status: boolean;
  class_name: string;
  error_message?: string;
  placeholder?: string;
}

const defaultProps: Props = {
  id: "",
  title: "",
  value: "",
  attrName: "",
  value_update: () => {},
  warn_status: false,
  class_name: "inputField",
  error_message: "enter valid value",
  placeholder: "",
};

const TextArea: React.FC<Props> = ({
  id,
  title,
  value,
  value_update,
  attrName,
  warn_status,
  class_name,
  error_message,
  placeholder,
}) => {
  const convertString = (str: string) => {
    return `${str}`?.replace(/\s+/g, "_").toLowerCase();
  };
  return (
    <EVTextarea
      id={convertString(id)}
      title={title}
      value={value}
      attrName={attrName}
      value_update={value_update}
      warn_status={warn_status}
      className={class_name}
      error_message={error_message}
      placeholder={placeholder}
    />
  );
};

TextArea.defaultProps = defaultProps;
export default TextArea;
