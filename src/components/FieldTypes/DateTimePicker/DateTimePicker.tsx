import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { subDays, subMonths } from "date-fns";
import subYears from "date-fns/subYears";

/**
 * DatePicker component to display a mobile-friendly date picker.
 *
 * @param title - The title or label for the DatePicker.
 * @param value - The current value of the DatePicker.
 * @param value_update - A function to update the value of the DatePicker.
 * @param attrName - The attribute name used to identify the DatePicker.
 * @param error_message - An optional error message to display when there is an error.
 * @param warn_status - A boolean indicating whether to display a warning status.
 * @param class_name - The CSS class name for styling purposes.
 * @param min_date - The minimum number of years to subtract from the current date (default: 100).
 * @param max_date - The maximum number of years to subtract from the current date (default: 18).
 * @param dateValidation - A boolean indicating whether to validate the selected date within a range (default: false).
 * @returns The DatePicker component.
 */
const CustomDateTimePicker = ({
  title,
  value,
  value_update,
  attrName,
  error_message = "Select",
  warn_status,
  class_name,
  min_date = 100,
  max_date = 18,
  dateValidation = false,
  date_validation_type = "YEARS",
  disabled = false,
}: {
  title: string;
  value: any;
  attrName: any;
  value_update: Function;
  error_message?: string;
  warn_status?: boolean;
  class_name: string;
  min_date?: number;
  max_date?: number;
  dateValidation?: boolean;
  date_validation_type?: "YEARS" | "MONTHS" | "DAYS";
  disabled?: boolean;
}) => {
  return (
    <div className={`datepicker ${class_name}`}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDateTimePicker
          disabled={disabled}
          label={title}
          value={value}
          onChange={(e) => {
            value_update(attrName, e);
          }}
          format="dd/MM/yyyy HH:mm:ss"
          closeOnSelect
          defaultValue={
            dateValidation
              ? date_validation_type === "YEARS"
                ? subYears(new Date(), max_date)
                : date_validation_type === "MONTHS"
                ? subMonths(new Date(), max_date)
                : subDays(new Date(), max_date)
              : null
          }
          maxDate={new Date()}
          // minDate={
          //   dateValidation
          //     ? date_validation_type === "YEARS"
          //       ? subYears(new Date(), min_date)
          //       : date_validation_type === "MONTHS"
          //       ? subMonths(new Date(), min_date)
          //       : subDays(new Date(), min_date)
          //     : null
          // } // Minimum date validation managed by the props; using subYears function to subtract a specified number of years from the current date
          // maxDate={
          //   dateValidation
          //     ? date_validation_type === "YEARS"
          //       ? subYears(new Date(), max_date)
          //       : date_validation_type === "MONTHS"
          //       ? subMonths(new Date(), max_date)
          //       : subDays(new Date(), max_date)
          //     : null
          // } // Maximum date validation managed by the props; using subYears function to subtract a specified number of years from the current date
        />
        {warn_status ? <span className="error">{error_message}</span> : null}
      </LocalizationProvider>
    </div>
  );
};

export default CustomDateTimePicker;
