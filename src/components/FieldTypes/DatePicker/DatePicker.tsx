import { EVDateInput } from "@evervent_pvt_ltd/ui-kit";

const DatePicker = ({
  title,
  value,
  value_update,
  attrName,
  error_message = "Select",
  warn_status,
  class_name = "",
  min_date = 15,
  max_date = 18,
  date_validation_type = "YEARS",
  disabled = false,
  default_date = new Date(),
  tooltip = "",
  id = "",
}: {
  title?: string;
  value: any;
  attrName: any;
  value_update: Function;
  error_message?: string;
  warn_status?: boolean;
  class_name?: string;
  min_date?: number;
  max_date?: number;
  date_validation_type?: "YEARS" | "MONTHS" | "DAYS" | "DATE";
  disabled?: boolean;
  default_date?: Date;
  tooltip?: string;
  id?: string;
}) => {
  const convertString = (str: string) => {
    // Ensure str is a valid string before calling replace
    if (typeof str === "string") {
      return `${str}`.replace(/\s+/g, "_").toLowerCase();
    }
    // Fallback for non-string values
    return "";
  };

  return (
    <EVDateInput
      id={convertString(id || attrName)}
      value={value}
      value_update={value_update}
      attrName={attrName}
      title={title}
      error_message={error_message}
      warn_status={warn_status}
      className={class_name}
      min_date={min_date}
      max_date={max_date}
      date_validation_type={date_validation_type}
      disabled={disabled}
    />
  );
};

export default DatePicker;
