import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { subDays, subMonths, subYears } from "date-fns";
import { useEffect, useState } from "react";
import { isEmpty } from "../../../SupportingFiles/HelpingFunction";

const FORMAT_MM_YYYY = (date: string) => {
  const d = new Date(date);
  const month = `${d.getMonth() + 1}`.padStart(2, "0");
  const year = d.getFullYear();
  return `${month}-${year}`;
};

/**
 * DatePicker component to display a mobile-friendly date picker for MM-YYYY format.
 *
 * @param title - The title or label for the DatePicker.
 * @param value - The current value of the DatePicker.
 * @param value_update - A function to update the value of the DatePicker.
 * @param attrName - The attribute name used to identify the DatePicker.
 * @param error_message - An optional error message to display when there is an error.
 * @param warn_status - A boolean indicating whether to display a warning status.
 * @param class_name - The CSS class name for styling purposes.
 * @param min_date - The minimum number of months/years to subtract from the current date.
 * @param max_date - The maximum number of months/years to subtract from the current date.
 * @param date_validation_type - The type of date validation (YEARS or MONTHS).
 * @param disabled - A boolean indicating whether the DatePicker is disabled.
 * @param default_date - The default date to show in the DatePicker.
 * @returns The DatePicker component.
 */
const MonthYearPicker = ({
  title,
  value,
  value_update,
  attrName,
  error_message = "Select",
  warn_status,
  class_name,
  min_date = 180,
  max_date = 18,
  date_validation_type = "MONTHS",
  disabled = false,
  default_date = new Date(),
}: {
  title?: string;
  value: any;
  attrName: any;
  value_update: Function;
  error_message?: string;
  warn_status?: boolean;
  class_name: string;
  min_date?: number;
  max_date?: number;
  date_validation_type?: "YEARS" | "MONTHS" | "DAYS" ;
  disabled?: boolean;
  default_date?: Date;
}) => {
  const [minDate, setMinDate] = useState<Date>(new Date());
  const [maxDate, setMaxDate] = useState<Date>(new Date());
  const [dateValidation, setDateValidation] = useState<boolean>(false);

  useEffect(() => {
    if (!isEmpty(min_date) && !isEmpty(max_date)) {
      setDateValidation(true);
    } else {
      setDateValidation(false);
    }
  }, [min_date, max_date]);

  useEffect(() => {
    switch (date_validation_type) {
      case "YEARS":
        setMinDate(subYears(new Date(), min_date));
        setMaxDate(subYears(new Date(), max_date));
        break;
      case "MONTHS":
        setMinDate(subMonths(new Date(), min_date));
        setMaxDate(subMonths(new Date(), max_date));
        break;
        case "DAYS":
        setMinDate(subDays(new Date(), min_date));
        setMaxDate(subDays(new Date(), max_date));
        break;
      default:
        break;
    }
  }, [min_date, max_date, dateValidation]);

  const [localValue, setLocalValue] = useState<Date | null>(null);

  useEffect(() => {
    if (!isEmpty(value)) {
      const dateString = value; // Replace with your date string in MM-YYYY format
      const parts = dateString.split("-");
      if (parts.length === 2) {
        const formattedDateString = `${parts[1]}-${parts[0]}-01`;
        const dateObject = new Date(formattedDateString);
        if (!isNaN(dateObject.getTime())) {
          // Valid date
          setLocalValue(dateObject);
        } else {
          // Invalid date string
          console.error("Invalid date string");
        }
      } else {
        // Invalid format
        console.error("Invalid date format");
      }
    } else {
      // Handle null or empty string case
      setLocalValue(null);
      console.error("Value is null or empty");
    }
  }, [value]);

  return (
    <div className={`datepicker ${class_name}`}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          views={["year", "month"]}
          disabled={disabled}
          label={title}
          value={localValue}
          onChange={(selectedDate: any) => {
            value_update(attrName, FORMAT_MM_YYYY(selectedDate));
          }}
          closeOnSelect
          // defaultCalendarMonth={default_date}
          minDate={dateValidation ? minDate : undefined} // Minimum date validation managed by the props
          maxDate={dateValidation ? maxDate : undefined} // Maximum date validation managed by the props
        />
        {warn_status ? <span className="error">{error_message}</span> : null}
      </LocalizationProvider>
    </div>
  );
};

export default MonthYearPicker;
