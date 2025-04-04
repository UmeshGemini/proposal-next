import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  isValid,
  parse,
} from "date-fns";
import { default as Moment, default as moment } from "moment";
import { EMotorCompCode } from "../Enum/EMotorCompCode";
import { EProductId } from "../Services/Enum/EHome";
import { TCarSingleQuoteDetail } from "../types/Car/TCarSingleQuoteDetail";
import { TCashlessGarage } from "../types/Common/TCashlessGarage";
import { TDropdown } from "../types/Common/TDropdown";
import { TNCB } from "../types/Common/TNCB";
import { TTWPremiumDetails } from "../types/TwoWheeler/TTWSingleQuoteDetail";

const formats = [
  "YYYY-MM-DD",
  "DD-MM-YYYY",
  "YYYY/MM/DD",
  "DD/MM/YYYY",
  "DD-M-YYYY",
  "YYYY-MM-DD HH:MM:SS",
  "ddd MMM DD YYYY HH:mm:ss GMTZZZZ (Z)",
];

export function parse_value(value: any): number {
  if (isNaN(parseFloat(value))) {
    return 0;
  } else {
    return parseFloat(value);
  }
}

export const DETERMINE_MOTOR_PLAN_TYPE = (
  product_code: string,
  business_type: string
) => {
  if (business_type === "New") {
    return "Bundle Policy";
  } else {
    if (product_code.startsWith("SA")) {
      return "SAOD";
    } else if (product_code.startsWith("TP")) {
      return "Third Party";
    } else {
      return "Comprehensive";
    }
  }
};

export const isDateInRange = (startDate: Date, endDate: Date): boolean => {
  const currentDate = new Date();
  return currentDate >= startDate && currentDate <= endDate;
};

export const validateChassisNo = (
  value: string,
  company_code: string,
  business_type: string
) => {
  const length = `${value}`.length;

  if (business_type === "New") {
    if (length >= 17) {
      return false;
    } else {
      return true;
    }
  } else {
    if (company_code === EMotorCompCode.HDFC) {
      if (length >= 5) {
        return false;
      } else {
        return true;
      }
    } else if (company_code === EMotorCompCode.Kotak) {
      if (length >= 8) {
        return false;
      } else {
        return true;
      }
    } else {
      if (length >= 6) {
        return false;
      } else {
        return true;
      }
    }
  }
};
export const validateEngineNo = (value: string) => {
  const length = `${value}`.length;

  if (length >= 5) {
    return false;
  } else {
    return true;
  }
};

export const getHostName = (): string => {
  // Check if running in the browser
  if (typeof window !== "undefined") {
    return window.location.hostname;
  }
  // Provide a default value or handle accordingly for SSR
  return "defaultClient"; // Change this to an appropriate default
};

export const validateRSAEngineNo = (value: string) => {
  const length = `${value}`.length;

  if (length >= 6) {
    return false;
  } else {
    return true;
  }
};

export const validateKotakEngineNo = (value: string) => {
  const length = `${value}`.length;

  if (length >= 8) {
    return false;
  } else {
    return true;
  }
};

export const validatePrevPolicyNo = (value: string) => {
  const length = `${value}`.length;

  if (length < 5) {
    return true;
  } else {
    return false;
  }
};

export function formatLicensePlate(licensePlate: string) {
  const patterns = [
    /^[A-Z]{2}[0-9]{2}[A-Z]{0,3}[0-9]{4}$/,
    /^[A-Z]{2}[0-9]{1,2}[A-Z]{0,3}[0-9]{4}$/,
    /^[0-9]{2}BH[0-9]{4}[A-Z]{2}$/,
  ];
  for (const pattern of patterns) {
    if (pattern.test(licensePlate)) {
      return licensePlate.replace(
        /(\w{2})(\d{1,2})(\w{0,3})(\d{4})/,
        "$1 $2 $3 $4"
      );
    }
  }
  return null; // Return null if the input doesn't match any pattern
}

export function validateRegno(reg_no: string): boolean {
  const re = /^[A-Z]{2}[0-9]{2}[A-Z]{0,3}[0-9]{4}$/;
  const re_dl = /^[A-Z]{2}[0-9]{1,2}[A-Z]{0,3}[0-9]{4}$/;
  const re_bharat = /^[0-9]{2}BH[0-9]{4}[A-Z]{2}$/;

  if (`${reg_no}`.startsWith("DL")) {
    return re_dl.test(reg_no);
  }

  return re.test(reg_no) || re_bharat.test(reg_no);
}

export function validateRegNoBharat(pattern: string): boolean {
  const re_bharat = /^[0-9]{2}BH[0-9]{4}[A-Z]{2}$/;
  return re_bharat.test(pattern);
}

/**
 * Validates an email address.
 * @param email - The email address to validate.
 * @returns Returns true if the email is valid, false otherwise.
 */
export function validateEmail(email: string): boolean {
  try {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email.trim().toLowerCase());
  } catch (e) {
    console.log(`Error: ${e} ${email}`);
    return false;
  }
}

export function validateIFSC(ifsc: string): boolean {
  const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
  return ifscRegex.test(ifsc.trim().toUpperCase());
}

/**
 * Validates an Aadhar number.
 * @param aadharNumber - The Aadhar number to validate.
 * @returns Returns true if the Aadhar number is valid, false otherwise.
 */
export function validateAadharNumber(aadharNumber: string): boolean {
  if (aadharNumber !== undefined) {
    const aadhar = aadharNumber.trim();
    if (aadhar.toString().length === 12) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export function extractNumbersFromString(inputString: string) {
  // Use a regular expression to match and extract numbers from the input string
  const numbersArray = `${inputString}`?.match(/\d+/g);

  if (numbersArray) {
    // Join the matched numbers together to form a single string or convert to numbers as needed
    const extractedNumbers = numbersArray.join(""); // This will give you a string of numbers
    // If you want a number, you can convert it like this:
    // const extractedNumbersAsNumber = parseInt(extractedNumbers, 10);
    return extractedNumbers;
  }

  return null; // Return null if no numbers are found in the input string
}

export const extractDateUnit = (
  value: string | null | undefined,
  unit: "day" | "month" | "year"
): number | string => {
  const date = FORMAT_DATE_DD_MM_YYYY(`${value}`);
  if (!date || isEmpty(date)) {
    console.log("Invalid date:", date);
    return "";
  }

  const parts = date.split("-");
  const [day, month, year] = parts.map((part) => parseInt(part, 10));
  console.log("Date:", day, month, year);

  let formattedValue: string | number;

  switch (unit) {
    case "day":
      formattedValue = isNaN(day) ? 0 : day < 10 ? `0${day}` : `${day}`;
      break;
    case "month":
      formattedValue = isNaN(month) ? 0 : month < 10 ? `0${month}` : `${month}`;
      break;
    case "year":
      formattedValue = isNaN(year) ? 0 : `${year}`;
      break;
    default:
      formattedValue = 0;
  }

  return formattedValue;
};

/**
 * Validates a PAN (Permanent Account Number).
 * @param panNumber - The PAN number to validate.
 * @returns Returns true if the PAN number is valid, false otherwise.
 */
export function validatePAN(panNumber: string): boolean {
  const panRegex = /^[A-Z]{3}[PC][A-Z]{1}[0-9]{4}[A-Z]{1}$/;
  return panRegex.test(panNumber);
}

/**
 * Validates a pincode.
 * @param pincode - The pincode to validate.
 * @returns Returns true if the pincode is valid, false otherwise.
 */
export function validatePincode(value: string | Date | null): boolean {
  const pincode = `${value}`;
  if (pincode === "111111" || pincode === "000000") {
    return false;
  } else if (pincode.charAt(0) === "0") {
    return false;
  } else if (pincode !== undefined) {
    if (pincode.toString().length === 6) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
export function validateInput(inputValue: any) {
  if (inputValue.charAt(0) === "0") {
    return;
  } else {
    return inputValue;
  }
}
export function formatDate(date: Date) {
  try {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 because months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  } catch (error) {
    return "Invalid date format";
  }
}

/**
 * Validates a mobile number.
 * @param mobileNumber - The mobile number to validate.
 * @returns Returns true if the mobile number is valid, false otherwise.
 */
export function validateMobileNumber(
  mobileNumber: string | Date | null
): boolean {
  if (typeof mobileNumber === "string") {
    if (mobileNumber !== undefined && mobileNumber !== null) {
      const mobile = mobileNumber.toString().trim();
      if (
        mobile.toString().length === 10 &&
        parseInt(mobile.substring(0, 1)) >= 6
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export function validateMobileOtp(otp: string | null): boolean {
  if (typeof otp === "string") {
    if (otp !== undefined && otp !== null) {
      const receivedOtp = otp.toString().trim();
      if (receivedOtp.toString().length === 4) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export const CHECK_IS_POLICY_ACTIVE = (date: string) => {
  const currentDate = new Date();
  const inputDate = new Date(date);

  if (inputDate < currentDate) {
    return false;
  } else if (inputDate > currentDate) {
    return true;
  } else {
    return true;
  }
};

export function FORMAT_DD_MMM_YYYY_HH_MM_SS(value: any) {
  let formattedDate = "";

  for (const format of formats) {
    const date = moment(value, format, true);
    if (date.isValid()) {
      formattedDate = date.format("DD-MM-YYYY HH:MM:SS");
      break;
    }
  }

  if (formattedDate === "") {
    return value; // Return original value if no valid format is found
  }

  return formattedDate;
}

export const minLength2 = (value: any) => {
  return value !== null && value !== undefined && `${value}`.trim().length >= 2;
};

export const minLength4 = (value: any) => {
  return value !== null && value !== undefined && `${value}`.trim().length >= 4;
};

/**
 * Validates a full name.
 * @param fullName - The full name to validate.
 * @returns Returns true if the full name is valid, false otherwise.
 */
export function validateFullName(fullName: string | undefined | null): boolean {
  if (fullName !== undefined && fullName !== null) {
    const name = fullName.trim();
    if (name.includes(" ")) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export function calculate_gst(amount: number): number {
  const gst_amount = (amount / 100) * 18;

  return gst_amount;
}

// validate GST
export function validateGST(gstNumber: string): boolean {
  // Updated regular expression to include both uppercase letters and numbers
  const gstRegex =
    /^[0-9]{2}[A-Z0-9]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9A-Z]{1}$/;

  // Convert gstNumber to uppercase
  const gstString = gstNumber.toUpperCase();

  return gstRegex.test(gstString);
}

/**
 * Formats a number to currency format with Indian Rupee symbol and appropriate separators.
 * @param num - The number to format.
 * @returns Returns the formatted number as a currency string.
 */
export function formatToCurrency(num: number): string {
  if (num === undefined || num === null) {
    return "";
  }
  if (num >= 10000000) {
    return (
      (num / 10000000)
        .toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        })
        .replace("₹", "₹ ") + " Crore"
    );
  } else if (num >= 100000) {
    return (
      (num / 100000)
        .toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        })
        .replace("₹", "₹ ") + " Lakh"
    );
  } else {
    return num
      .toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })
      .replace("₹", "₹ ");
  }
}

/**
 * Uploads an image file and calls the provided callback function with base64 image data.
 * @param file - The image file to upload.
 * @param callback - The callback function to be called with the base64 image data.
 */

export function uploadImage(
  file: File,
  callback: (base64Image: string, base64String: string) => void
): void {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    const base64String = reader.result as string;
    const base64Image = base64String.replace(
      /^data:(image\/[a-z]+|application\/pdf);base64,/,
      ""
    );
    callback(base64Image, base64String);
  };
}

/**
 * Adds a specified number of years to a given date.
 * @param date - The date to add years to.
 * @param years - The number of years to add.
 * @returns Returns the new date after adding the years in the format "DD-MM-YYYY".
 */
export function addYearsToDate(date: string, years: number): string {
  const newDate = moment(date, ["DD-MM-YYYY", "YYYY-MM-DD"])
    .add(years, "year")
    .format("DD-MM-YYYY");
  return newDate;
}

export function addYearsToDateForonedaysubtract(
  date: Date,
  years: number
): string {
  const newDate = moment(date).add(years, "years");

  // Check for leap year and adjust the date
  if (
    moment(date).isLeapYear() &&
    moment(date).month() === 1 &&
    moment(date).date() === 29 &&
    !newDate.isLeapYear()
  ) {
    newDate.date(28); // Adjust to February 28th if it's a leap day
  }

  const finalDate = newDate.subtract(1, "day").format("DD-MM-YYYY");
  return finalDate;
}

export function isValid_Passport_num(pass_num: string) {
  let regex = new RegExp(/^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/);

  if (pass_num == null) {
    return false;
  }

  if (regex.test(pass_num) == true) {
    return true;
  } else {
    return false;
  }
}

export const removeNamePrefix = (name: string) => {
  // Define a list of prefixes to remove
  const prefixes = ["Mr", "Mrs"];

  // Iterate through prefixes and remove them if found at the beginning of the name
  for (const prefix of prefixes) {
    if (name.startsWith(prefix)) {
      // Remove the prefix and any following whitespace
      return name.slice(prefix.length).trim();
    }
  }

  // If no prefix found, return the original name
  return name;
};

export function objectHasWarning(obj: any): boolean {
  let warn = false;

  const arr = Object.keys(obj);

  for (let i = 0; i < arr.length; i++) {
    const keyToUse = arr[i];
    console.log("warn  object==>", obj[keyToUse].warning);
    if (obj[keyToUse].warning) {
      warn = true;
      break;
    }
  }

  return warn;
}

export function objectHasWarningv3(obj: any): any[] {
  let warn = false;

  const arr = Object.keys(obj);

  for (let i = 0; i < arr.length; i++) {
    const keyToUse = arr[i];
    if (obj[keyToUse].value === "") {
      if (
        keyToUse !== "nomineeAppointeeName" &&
        (keyToUse as string) !== "nomineeGender"
      ) {
        warn = true;
        obj[keyToUse].warning = true;
      } else if (
        keyToUse === "nomineeAppointeeName" &&
        parseInt(obj["nomineeAge"].value) <= 18
      ) {
        warn = true;
        obj[keyToUse].warning = true;
      }
    }

    if (keyToUse === "nomineeGender" && obj[keyToUse].value === "") {
      warn = false;
      obj[keyToUse].warning = false;
    }
  }

  return [warn, structuredClone(obj)];
}

// export function objectHasWarningv2(obj: any): any[] {
//   let warn = false;

//   const arr = Object.keys(obj);

//   for (let i = 0; i < arr.length; i++) {
//     const keyToUse = arr[i];
//     if (obj[keyToUse].value == "") {
//       console.log("key to use", keyToUse);
//       if (keyToUse !== "nomineeAppointeeName") {
//         warn = true;
//         obj[keyToUse].warning = true;
//       } else if (
//         keyToUse === "nomineeAppointeeName" &&
//         parseInt(obj["nomineeAge"].value) < 18
//       ) {
//         warn = true;
//         obj[keyToUse].warning = true;
//       } else if (
//         keyToUse === "nomineeAppointeeName" &&
//         parseInt(obj["nomineeAge"].value) > 18
//       ) {
//         warn = false;
//         obj[keyToUse].warning = false;
//       } else if (keyToUse.includes("name") || keyToUse.includes("Name")) {
//         console.log("if last", keyToUse);

//         warn = !obj[keyToUse].value || !validateFullName(obj[keyToUse].value);
//         // warn = true;
//         obj[keyToUse].warning = !validateFullName(obj[keyToUse].value);
//       }
//     } else if (keyToUse.includes("name") || keyToUse.includes("Name")) {
//       console.log("run last", keyToUse);
//       if (obj[keyToUse].value == "") {
//         warn = true;
//         obj[keyToUse].warning = true;
//       } else if (keyToUse === "nomineeAppointeeName") {
//         warn = parseInt(obj["nomineeAge"].value) > 18 ? false : true;
//         obj[keyToUse].warning =
//           parseInt(obj["nomineeAge"].value) > 18
//             ? false
//             : !validateFullName(obj[keyToUse].value);
//       } else {
//         console.log("else>>>", validateFullName(obj[keyToUse].value));
//         warn = validateFullName(obj[keyToUse].value) ? false : true;
//         obj[keyToUse].warning = !validateFullName(obj[keyToUse].value);
//       }
//     }

//     // if (obj[keyToUse].value > 18) {
//     //   console.log("kkjkkj");
//     //   obj[keyToUse].warning = false;
//     // }
//     // if (obj[keyToUse].warning) {
//     //   warn = true;
//     //   break;
//     // }
//   }
//   console.log("objjjj", structuredClone(obj), warn);
//   return [warn, structuredClone(obj)];
// }

export function objectHasWarningv2(obj: any): any[] {
  let warn = false;

  const arr = Object.keys(obj);
  for (let i = 0; i < arr.length; i++) {
    const keyToUse = arr[i];
    if (obj[keyToUse].value == "") {
      if (keyToUse !== "nomineeAppointeeName") {
        warn = true;
        obj[keyToUse].warning = true;
      }
      if (keyToUse === "nomineeAppointeeName") {
        console.log("runn run");
        warn =
          parseInt(obj["nomineeAge"].value) > 18
            ? false
            : parseInt(obj["nomineeAge"].value) <= 18 &&
              !validateFullName(obj[keyToUse].value);
        obj[keyToUse].warning =
          parseInt(obj["nomineeAge"].value) > 18
            ? false
            : !validateFullName(obj[keyToUse].value);
      }
    } else if (obj[keyToUse].value !== "") {
      if (keyToUse.includes("name") || keyToUse.includes("Name")) {
        if (keyToUse === "nomineeAppointeeName") {
          warn =
            parseInt(obj["nomineeAge"].value) > 18
              ? false
              : !validateFullName(obj[keyToUse].value);
          obj[keyToUse].warning =
            parseInt(obj["nomineeAge"].value) > 18
              ? false
              : !validateFullName(obj[keyToUse].value);
        } else {
          console.log("else", !validateFullName(obj[keyToUse].value));
          warn = !validateFullName(obj[keyToUse].value);
          obj[keyToUse].warning = !validateFullName(obj[keyToUse].value);
        }
      }
    }
  }
  for (let key in obj) {
    if (obj[key].warning === true) {
      warn = true;
      break;
    }
  }

  // warn = Object.values(obj).some((item) => console.log("item", item));
  // console.log("objjj", structuredClone(obj));
  return [warn, structuredClone(obj)];
}
export function formatIndianCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 10,
  }).format(value);
}

export function calculatePercentageOfNum(
  precentage: number,
  number: number
): number {
  return (precentage / 100) * number;
}
export function hasEmptyProperty(obj: any): boolean {
  return Object.values(obj).some((value) => {
    if (typeof value === "string") {
      return value.trim() === "";
    } else if (typeof value === "number") {
      return value === 0;
    }
    return false;
  });
}

export function generateRandomString() {
  return Math.random().toString(36).slice(2);
}

export function isValid_Pan_Number(pan_num: string) {
  let regex = new RegExp(/^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/);

  if (pan_num == null) {
    return false;
  }

  if (regex.test(pan_num) == true) {
    return true;
  } else {
    return false;
  }
}

export function isValid_Aadhar(aadhar: string) {
  let regex = new RegExp(
    /(^[0-9]{4}[0-9]{4}[0-9]{4}$)|(^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|(^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/
  );

  if (aadhar == null) {
    return false;
  }

  if (regex.test(aadhar) == true) {
    return true;
  } else {
    return false;
  }
}

export function isValid_Driving_License_Number(license_Number: string) {
  // Regex to check valid
  // license_Number
  let regex = new RegExp(
    /^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/
  );

  // if license_Number
  // is empty return false
  if (license_Number == null) {
    return false;
  }

  // Return true if the license_Number
  // matched the ReGex
  if (regex.test(license_Number) == true) {
    return true;
  } else {
    return false;
  }
}

export function FORMAT_YYYY_MM_DD(value: string) {
  let formattedDate = "";

  for (const format of formats) {
    const date = moment(value, format, true);
    if (date.isValid()) {
      formattedDate = date.format("YYYY-MM-DD");
      break;
    }
  }

  if (formattedDate === "") {
    return value; // Return original value if no valid format is found
  }

  return formattedDate;
}

export function GET_CURRENT_DATE() {
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}

export function FORMAT_DD_MM_YYYY(value: any): string {
  let formattedDate = "";

  for (const format of formats) {
    const date = new Date(value);
    const parsedDate = `${date}`;
    if (parsedDate !== "Invalid Date") {
      // Pad day and month with leading zero if necessary
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");

      formattedDate = `${day}-${month}-${date.getFullYear()}`;
      break;
    }
  }

  if (formattedDate === "") {
    return `${value}`; // Return original value if no valid format is found
  }

  return formattedDate === "Invalid Date" ? "" : formattedDate;
}

export function FORMAT_DATE_DD_MM_YYYY(value: any): string {
  console.log("FORMAT_DATE_DD_MM_YYYY", value);
  const date = moment(value);
  try {
    let local_date = `${value}`?.split("-");
    if (local_date?.length >= 3 && local_date[0]?.length === 4) {
      const formattedDate = `${local_date[2]}-${local_date[1]}-${local_date[0]}`;
      return formattedDate;
    } else if (
      local_date?.length >= 3 &&
      local_date[0]?.length === 2 &&
      local_date[1]?.length === 2
    ) {
      return value;
    } else if (date.isValid()) {
      return date.format("DD-MM-YYYY");
    } else {
      return value;
    }
  } catch (e) {
    console.log(`Date formatter error: ${e}`);
    return value;
  }
}

/**
 * Formats a number to currency format with Indian Rupee symbol and appropriate separators.
 * @param num - The number to format.
 * @returns Returns the formatted number as a currency string.
 */
export function formatAmountToCurrency(num: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(num)
    .replace("₹", "₹ ");
}

/**
 * Calculates the difference in days between two dates.
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns Returns the difference in days between the two dates.
 */
export function calculateDateDifferenceInDays(date2: string): number {
  const date1 = new Date().toLocaleDateString("en-GB");
  const formattedDate1 = Moment(date1, "DD-MM-YYYY").format("YYYY-MM-DD");
  const formattedDate2 = Moment(date2, "DD-MM-YYYY").format("YYYY-MM-DD");
  const msDiff =
    new Date(formattedDate1).getTime() - new Date(formattedDate2).getTime();
  const diff = Math.floor(msDiff / (1000 * 60 * 60 * 24));
  return diff;
}

/**
 * Formats a number with a currency symbol
 *
 * @param value - The number to format.
 * @returns The formatted string with the currency symbol and a space added after it.
 */
export const formatNumberWithCurrencySymbol = (
  value: number | string
): string => {
  // Convert the input to a number if it's a string
  let numericValue: number;

  if (typeof value === "string") {
    // Remove leading and trailing whitespace
    const trimmedValue = value.trim();

    // Check if the trimmed value is empty
    if (trimmedValue === "") {
      return "Empty Value";
    }

    numericValue = parseFloat(trimmedValue);

    // Check if parsing failed
    if (isNaN(numericValue)) {
      return "Invalid Number";
    }
  } else if (typeof value === "number") {
    numericValue = value;
  } else {
    return "Invalid Type"; // Handle other data types
  }

  const nf = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    currencyDisplay: "symbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const formattedValue = nf.format(numericValue);

  // Add a space after the currency symbol
  return formattedValue.replace("₹", "₹ ");
};

/**
Calculates the new NCB (No Claim Bonus) based on the provided value.
@param value - The current NCB value.
@returns Returns the new NCB value.
*/
export const CAL_NEW_NCB = (
  value: TNCB,
  claim_made: "Yes" | "No",
  prev_ins?: string,
  policy_expiry_date?: string
): TNCB => {
  if (calculateAgeInDays(`${policy_expiry_date}`) > 90) {
    return "0";
  }

  if (claim_made === "Yes" || prev_ins === "Do not remember") {
    return "0";
  }
  // Convert value to string to ensure switch works correctly
  const valueStr = value?.toString();

  switch (valueStr) {
    case "0":
      return "20";
    case "20":
      return "25";
    case "25":
      return "35";
    case "35":
      return "45";
    case "45":
      return "50";
    case "50":
      return "50";
    default:
      return value;
  }
};

/**
 * Adds the specified number of days to the given date.
 * @param date - The date string in "DD-MM-YYYY" or "YYYY-MM-DD" format.
 * @param days - The number of days to add to the date.
 * @returns The resulting date string after adding the specified number of days.
 */
export function addDaysToDate(date: string, days: number): string {
  const newDate = moment(date, ["DD-MM-YYYY", "YYYY-MM-DD"])
    .add(days, "days")
    .format("DD-MM-YYYY");
  return newDate;
}

export function generateRandomNumberString(length: number): string {
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export function calculate_age(dateString: any) {
  var birthDate = moment(dateString, "DD-MM-YYYY");
  var today = moment();

  if (!birthDate.isValid()) {
    return NaN; // Return NaN if the date is invalid
  }

  let age = today.diff(birthDate, "years");
  return age;
}

export const FIND_LABEL_OF_VALUE = (array: TDropdown[], value: string) => {
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].value === value) {
        return array[i].label;
      }
    }
  }
};

export const isEmpty = (
  value: string | Date | null | undefined | number | boolean
) => {
  return (
    value === null || value === undefined || `${value}`.trim().length === 0
  );
};

export function formatNumberToLakhOrCrores(number: number) {
  if (typeof number !== "number") {
    return "Invalid Input";
  }

  if (number >= 10000000) {
    const formatted = (number / 10000000).toFixed(2);
    return formatted.endsWith(".00")
      ? "₹ " + formatted.slice(0, -3) + " Crore"
      : "₹ " + formatted + " Crore";
  } else if (number >= 100000) {
    const formatted = (number / 100000).toFixed(2);
    return formatted.endsWith(".00")
      ? "₹ " + formatted.slice(0, -3) + " Lakh"
      : "₹ " + formatted + " Lakh";
  } else {
    return "₹ " + number.toString();
  }
}

export function removeLast5Zeros(inputString: string) {
  // Use regular expression to remove the last 5 zeros
  const trimmedString = inputString.replace(/0{5}$/, "");
  return trimmedString;
}
export const hasWarning = (details: any): boolean => {
  return Object.values(details).some(
    (property: any) => property?.warning === true
  );
};

export function valueExistsInObjects(
  value: string,
  array: TDropdown[]
): boolean {
  return array.some((item) => item.value === value);
}

export function calculateAge(dateOfBirth: any) {
  try {
    // Parse the birthdate using date-fns
    const parsedBirthdate = parse(dateOfBirth, "dd-MM-yyyy", new Date());

    // Calculate the difference in days
    const ageInYears = differenceInYears(new Date(), parsedBirthdate);
    console.log(dateOfBirth, "ageInYears", ageInYears);
    if (!isNaN(ageInYears)) {
      console.log("ageInYears", ageInYears);
      return ageInYears;
    } else {
      console.log("Error", parsedBirthdate, dateOfBirth);
      return 0;
    }
  } catch (error) {
    console.error("Error parsing date:", `${error}`, dateOfBirth);
    return 0;
  }
}

export function calculateAgeInDays(birthdate: string): number {
  console.log("birthdate", birthdate);
  try {
    // Parse the birthdate using date-fns
    const parsedBirthdate = parse(birthdate, "dd-MM-yyyy", new Date());

    // Calculate the difference in days
    const ageInDays = differenceInDays(new Date(), parsedBirthdate);
    console.log(ageInDays, "ageInDays");

    if (!isNaN(ageInDays)) {
      return ageInDays;
    } else {
      return NaN;
    }
  } catch (error) {
    return NaN;
  }
}

export function calculateAgeInMonths(birthdate: string): number {
  console.log("birthdate", birthdate);
  try {
    // Parse the birthdate using date-fns
    const parsedBirthdate = parse(birthdate, "dd-MM-yyyy", new Date());

    // Validate the parsed birthdate
    if (!isValid(parsedBirthdate)) {
      throw new Error("Invalid date format");
    }

    // Calculate the difference in months
    const ageInMonths = differenceInMonths(new Date(), parsedBirthdate);
    console.log(ageInMonths, "ageInMonths");

    return ageInMonths;
  } catch (error) {
    console.error("Error calculating age:", error);
    return NaN;
  }
}

export function calculateDaysLeftInPolicyExpire(dateString: string): string {
  try {
    const today = new Date();
    const expireDate = new Date(dateString);
    const timeDiff = expireDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (daysLeft < 0) {
      return "0";
    } else {
      return `${daysLeft}`;
    }
  } catch (error: any) {
    if (error instanceof Error) {
      return `Error: ${error.message}`;
    }
    return `Error: ${String(error)}`;
  }
}

export function getMonthDifference(date2: any) {
  const d1 = new Date();
  const d2 = new Date(date2);

  const monthsDiff =
    (d2.getFullYear() - d1.getFullYear()) * 12 +
    (d2.getMonth() - d1.getMonth());

  return Math.abs(monthsDiff); // Use Math.abs to get the absolute difference
}

export function subtractYears(date: any, years: any) {
  date.setFullYear(date.getFullYear() - years);
  return date;
}

export function COUNT_NUMBER_OF_CASHLESS_GARAGE_IN_AREA(
  garage: TCashlessGarage[] | undefined,
  rto_data: TDropdown[],
  filter_value: string
) {
  let count = 0;

  const selected_rto_data = rto_data.filter((item) => {
    return item.value.includes(filter_value);
  });

  if (selected_rto_data.length > 0 && garage) {
    const rto_name = selected_rto_data[0].label.split("-")[1].trim();

    const filtered_array = garage?.filter((data) => {
      return data.city_name.includes(rto_name);
    });

    count = filtered_array?.length || 0;
  }

  return count;
}

export function CITY_NAME_ON_BASIS_OF_RTO_CODE(
  RTO_DATA: TDropdown[],
  filter_value: string
) {
  if (RTO_DATA) {
    const selected_rto_data = RTO_DATA.filter((item) => {
      return item.value.includes(filter_value);
    });
    const rto_name = selected_rto_data[0].label.split("-")[1].trim();
    return rto_name;
  }

  return "";
}
export const shouldDisplayAddonTW = (
  label: string,
  premiumDetails: TTWPremiumDetails | undefined
) => {
  if (premiumDetails === undefined) return false;
  switch (label) {
    case "Personal Accident Cover":
      return premiumDetails?.paOwnerDriver > 0;
    case "Zero Depreciation":
      return premiumDetails?.depreciationCover > 0;
    case "24x7 Roadside Assistance":
      return premiumDetails?.roadSideAssistance > 0;
    case "Driver Cover":
      return premiumDetails?.driverCover > 0;
    default:
      return false;
  }
};

export function calculate_passenger_cover(
  user_value: any,
  quote_details: TCarSingleQuoteDetail | undefined,
  PLAN_TYPE: string = "Comprehensive"
) {
  const seating_capacity = Number(
    quote_details?.premiumDetails.seatingCapacity
  );
  let calculatedPassengerCover = 0;
  if (quote_details?.CompanyDetails.company_code === EMotorCompCode.ACKO) {
    return parseFloat(`${quote_details.premiumDetails.passerngerCover}`);
  } else {
    if (seating_capacity) {
      if (
        quote_details?.CompanyDetails?.company_code ===
        EMotorCompCode.IffcoTokio
      ) {
        if (PLAN_TYPE === "Bundle Policy") {
          calculatedPassengerCover =
            (parseInt(user_value) / 10000) * 4 * seating_capacity * 3;
        } else {
          calculatedPassengerCover =
            (parseInt(user_value) / 10000) * 4 * seating_capacity;
        }
      } else {
        if (PLAN_TYPE === "Bundle Policy") {
          calculatedPassengerCover =
            (parseInt(user_value) / 10000) * 5 * seating_capacity * 3;
        } else {
          calculatedPassengerCover =
            (parseInt(user_value) / 10000) * 5 * seating_capacity;
        }
      }
    }

    return calculatedPassengerCover;
  }
}

//health care date function
export const DateFun = (originalDate: any) => {
  // Check if originalDate is undefined, null, or not a string
  if (originalDate === null) {
    return;
  }
  if (!originalDate || typeof originalDate !== "string") {
    return "";
  }

  // Split the date string into day, month, and year components
  const [day, month, year] = originalDate?.split("-");

  // Check if day, month, or year is not a valid number
  if (isNaN(parseInt(day)) || isNaN(parseInt(month)) || isNaN(parseInt(year))) {
    return "";
  }

  // Construct a Date object using the components
  const parsedDate = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day)
  );

  // Check if parsedDate is a valid Date object
  if (isNaN(parsedDate.getTime())) {
    return "";
  }

  // Get the month and year from the parsed date
  const formattedMonth = parsedDate.toLocaleString("en-US", {
    month: "2-digit",
  });
  const formattedYear = parsedDate.getFullYear();

  // Format the expected date
  return `${formattedMonth}-${formattedYear}`;
};

//BMI
// Function to calculate BMI
export function calculateBMI(
  weightKg: any,
  heightFeet: any,
  heightInches: any
) {
  // Convert height from feet and inches to meters
  const totalHeightInInches =
    parseInt(heightFeet) * 12 + parseInt(heightInches);
  const heightInMeters = totalHeightInInches * 0.0254;

  // Calculate BMI
  const bmi = parseInt(weightKg) / (heightInMeters * heightInMeters);

  return bmi;
}

export function evaluateNivaBupaBMI(bmi: number, age: number) {
  let hasError = false;
  // Check if the age is less than 10
  if (age < 10) {
    return "Not applicable for children under 10";
  }
  let result = "";
  // BMI ranges based on age
  if (age < 15) {
    if (bmi < 12) result = "Decline";
    else if (bmi >= 12 && bmi <= 15) result = "Accept";
    else if (bmi > 15 && bmi <= 18) result = "Accept";
    else if (bmi > 18 && bmi <= 30) result = "Accept";
    else if (bmi > 30 && bmi <= 35) result = "10%";
    else if (bmi > 35 && bmi <= 37) result = "30%";
    else if (bmi > 37) result = "Decline";
  } else if (age >= 15) {
    if (bmi < 12) result = "Decline";
    else if (bmi >= 12 && bmi <= 15) result = "Decline";
    else if (bmi > 15 && bmi <= 18) result = "10%";
    else if (bmi > 18 && bmi <= 30) result = "Accept";
    else if (bmi > 30 && bmi <= 35) result = "10%";
    else if (bmi > 35 && bmi <= 37) result = "30%";
    else if (bmi > 37) result = "Decline";
  }
  return result;
}

//mindays health mhs
export const TotalMaxDays = () => {
  // Get the current date
  const currentDate: any = new Date();

  // Calculate maximum birthdate (18 years from current date)
  const maxBirthDate: any = new Date();
  maxBirthDate.setFullYear(maxBirthDate.getFullYear() - 18);

  // Calculate the difference in milliseconds
  const differenceMs = maxBirthDate - currentDate;

  // Convert milliseconds to days
  const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  return differenceDays;
};

//max days in mhs in adult
export const TotalMinDays = () => {
  // Get the current date
  const currentDate: any = new Date();

  // Calculate minimum birthdate (45 years and 11 months ago from current date)
  const minBirthDate: any = new Date();
  minBirthDate.setFullYear(minBirthDate.getFullYear() - 45);
  minBirthDate.setMonth(minBirthDate.getMonth() - 11);
  minBirthDate.setDate(minBirthDate.getDate() - 30);

  // Calculate the difference in milliseconds
  const differenceMs: any = currentDate - minBirthDate;

  // Convert milliseconds to days
  const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  return differenceDays;
};

// to make firs letter capitalize
export function capitalizeWords(input: string | undefined | null) {
  // If input is undefined or null, return an empty string or handle accordingly
  if (!input) {
    return "";
  }

  return input
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Formats a number to currency format with Indian Rupee symbol and appropriate separators.
 * @param num - The number to format.
 * @returns Returns the formatted number as a currency string.
 */
export function amountToCurrencyFormat(num: string): string {
  const number = parseFloat(num);

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(number)
    .replace("₹", "");
}

export function convertToNumberFormat(input: any) {
  // Remove commas from the string and convert it to a number
  const cleanedInput = input.replace(/,/g, "");

  // Convert the cleaned string to a number
  const number = parseInt(cleanedInput, 10);

  // Check if the result is a valid number
  if (isNaN(number)) {
    return "0";
  }

  return number;
}

// Function to get NCB value based on vehicle age

export const calculateVehicleAgeInDays = (registrationDate: string) => {
  // Ensure the date is in the correct format (DD-MM-YYYY)
  const [day, month, year] = registrationDate.split("-").map(Number);

  // Convert to a valid Date format (YYYY, MM - 1, DD)
  const regDate = new Date(year, month - 1, day);

  if (isNaN(regDate.getTime())) {
    throw new Error("Invalid date format. Please use DD-MM-YYYY.");
  }

  const today = new Date();
  return Math.floor(
    (today.getTime() - regDate.getTime()) / (1000 * 60 * 60 * 24)
  );
};

export const GET_MAX_NCB_VALUE = (
  registrationDate: string,
  policyExpiryDate: string
) => {
  const vehicleAgeInDays = calculateVehicleAgeInDays(registrationDate);

  // const policyExpiryDateDifference = isEmpty(policyExpiryDate)
  //   ? 0
  //   : calculateVehicleAgeInDays(policyExpiryDate);

  // if (policyExpiryDateDifference > 90) {
  //   return "0";
  // }

  if (vehicleAgeInDays <= 455) {
    return "0";
  } else if (vehicleAgeInDays <= 820) {
    return "20";
  } else if (vehicleAgeInDays <= 1185) {
    return "25";
  } else if (vehicleAgeInDays <= 1550) {
    return "35";
  } else if (vehicleAgeInDays <= 1915) {
    return "45";
  } else if (vehicleAgeInDays <= 2280) {
    return "50";
  } else {
    return "50"; // Capped at 50%
  }
};

/**
 * This function returns the entry source of the user.
 * It checks the utm_source parameter in the URL and returns
 * "MyJio app" if it is "myjio" or "Insure website" otherwise.
 * If the parameter is not present, it defaults to "default".
 */
export const getEntrySource = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utm_source = urlParams.get("utm_source") || "default";
  return utm_source === "myjio"
    ? "MyJio app"
    : urlParams.get("redirected") === "true" || utm_source === "JFS"
    ? "JFS app"
    : "Insure website";
};

/**
 * Returns the current environment of the application.
 * Possible values are "prod" or "sit".
 */
export const getAppEnvironment = () => {
  return process.env.REACT_APP_ENV === "PROD" ||
    process.env.REACT_APP_ENV === `"PROD"`
    ? "prod"
    : "sit";
};

export const GET_QUERY_PARAMETERS = (
  parameter:
    | "user_type"
    | "utm_medium"
    | "utm_source"
    | "type"
    | "quote_no"
    | "company_code"
    | "product_code"
    | "companyCode"
    | "breakInStatus"
    | "product_id"
    | "utm_campaign"
    | "utm_content"
    | "utm_term"
    | "agent_name"
): string => {
  // Access the query parameters directly from the URL
  const searchParams = new URLSearchParams(window.location.search);
  const parameterFromQuery = searchParams.get(parameter);
  if (typeof parameterFromQuery === "string") {
    return parameterFromQuery;
  } else {
    return "";
  }
};

export const GET_USER_TYPE = () => {
  const userType = GET_QUERY_PARAMETERS("user_type");
  if (userType) {
    return `&user_type=${userType}`;
  } else {
    return `&user_type=${btoa("user")}`;
  }
};

/**
 * Converts a date string from the format "DD-MM-YYYY" to "DD/MM/YYYY".
 * If the input date string is not in the expected format, returns "Invalid Date Format".
 *
 * @param inputDate - The input date string in "DD-MM-YYYY" format.
 * @returns The date string in "DD/MM/YYYY" format or "Invalid Date Format" if the input format is incorrect.
 */

export const formatDateInEuropeanDateFormat = (
  inputDate: string | boolean | Date | null | undefined
) => {
  // Check if inputDate is valid (not null or undefined)
  if (!inputDate) {
    return ""; // or handle it as needed
  }

  // If it's a Date object, convert it to a string
  if (inputDate instanceof Date) {
    const day = inputDate.getDate().toString().padStart(2, "0");
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const year = inputDate.getFullYear();

    return `${day}/${month}/${year}`;
  }

  // If it's a string in "yyyy-mm-dd" format, process it
  if (typeof inputDate === "string") {
    const dateParts = inputDate.split("-");

    // Ensure the date is in the expected format (dd-mm-yyyy)
    if (dateParts.length === 3) {
      return `${dateParts[0]}/${dateParts[1]}/${dateParts[2]}`;
    } else {
      return "Invalid Date Format";
    }
  }

  // In case the input is neither a Date nor a valid string
  return "Invalid Date Format";
};
export const isHealthNode = (id: number): boolean => {
  const healthNodes = [
    2943,
    2944,
    2945,
    2946,
    2947,
    EProductId.ICICI_ELEVATE_PLAN,
    EProductId.CARE_SENIOR_CITIZEN,
    EProductId.NIVA_BUPA_SENIOR_FIRST_GOLD_IND,
    EProductId.NIVA_BUPA_Senior_First_Gold_Floater,
    EProductId.NIVA_BUPA_Senior_First_Platinum_Floater,
    EProductId.NIVA_BUPA_Senior_First_Platinum_IND,
    EProductId.ICICI_ELEVATE_PLAN,
    EProductId.STAR_COMP_PRODUCT_ID,
    2111,
    2650,
    2763,
    EProductId.CIGNA_PRIME_ADVANTAGE,
    EProductId.CIGNA_PRIME_ACTIVE,
    EProductId.CIGNA_PRIME_PROTECT,
  ];
  const isNode =
    healthNodes.some((node) => node === id) &&
    process.env.REACT_APP_ENV === "DEV";

  return isNode;
};
export const checkValidPolicyExpireDate = (value: string) => {
  const today = new Date();
  const policyExpireDate = new Date(value);

  // Calculate 60 days from today
  const maxAllowedDate = new Date();
  maxAllowedDate.setDate(today.getDate() + 60);

  if (policyExpireDate > maxAllowedDate) {
    return false;
  }

  return true;
};
