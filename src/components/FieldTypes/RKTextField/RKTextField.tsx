import { EVTextField } from "@evervent_pvt_ltd/ui-kit";
import "../FieldTypes.scss";

const RKTextField = ({
  id = "",
  title = "",
  value = "",
  attrName = "",
  value_update = () => {},
  warn_status = false,
  info_status = false,
  alphabet_only = false,
  class_name = "",
  error_message = "Enter value",
  info_message = "Info. message",
  disabled,
  max_length,
  required,
  validation_type,
  placeholder,
}: {
  id?: any;
  title: string;
  value: any;
  attrName: any;
  value_update: Function;
  warn_status?: boolean | undefined;
  info_status?: boolean;
  info_message?: string;
  class_name?: string;
  alphabet_only?: boolean;
  error_message?: string;
  validation_type?:
    | "NUMBER"
    | "NAME"
    | "ALPHANUMERIC"
    | "PASSWORD"
    | "ALL_CAPS"
    | "ALPHANUMERIC_ALL"
    | "NUMBER_WITH_ZERO";
  required?: boolean;
  max_length?: number;
  disabled?: boolean;
  placeholder?: string;
}) => {
  return (
    <EVTextField
      id={title}
      title={title}
      value={value}
      attrName={attrName}
      value_update={value_update}
      warn_status={warn_status}
      info_status={info_status}
      alphabet_only={alphabet_only}
      className={class_name}
      error_message={error_message}
      info_message={info_message}
      disabled={disabled}
      max_length={max_length}
      required={required}
      validation_type={validation_type}
      placeholder={placeholder}
    />
  );
};

export default RKTextField;
