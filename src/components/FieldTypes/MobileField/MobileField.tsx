import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import React, { useEffect, useState } from "react";
import CountryFlag from "react-country-flag";

interface Country {
  code: string;
  name: string;
}

function MobileField({
  attrNameCode,
  attrNameMobile,
  valueCode,
  valueMobile,
  updateMasterState,
  warning,
  error_msg,
}: {
  attrNameCode: any;
  attrNameMobile: any;
  valueCode: string | Date | null;
  valueMobile: string | Date | null;
  updateMasterState: Function;
  warning: boolean;
  error_msg: string;
}) {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const countryList = getCountries();
    const formattedCountryList: Country[] = countryList.map((country) => ({
      code: country,
      name: `${getCountryCallingCode(country)} (${country})`,
    }));
    setCountries(formattedCountryList);
  }, []);

  const handleCountryChange = (event: SelectChangeEvent) => {
    updateMasterState(attrNameCode, event.target.value);
  };

  const handleMobileNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    updateMasterState(attrNameMobile, event.target.value);
  };

  return (
    <Box sx={{ position: "relative", padding: "0px" }}>
      <Box className="inputField" sx={{ display: "flex", gap: "12px" }}>
        <FormControl sx={{ width: "200px" }}>
          <InputLabel>Country</InputLabel>
          <Select
            label={"Country"}
            value={`${valueCode}`}
            onChange={handleCountryChange}
          >
            {countries.map((country) => (
              <MenuItem key={country.code} value={country.code}>
                <CountryFlag countryCode={country.code} svg />
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Mobile Number"
          variant="outlined"
          type="tel"
          value={valueMobile}
          onChange={handleMobileNumberChange}
          inputProps={{
            pattern: "[0-9]{10,15}",
          }}
          sx={{ width: "100%" }}
        />
      </Box>
      {warning === true ? (
        <small
          style={{
            color: "#ea4559",
            fontSize: "11px",
            position: "absolute",
            right: "0px",
            bottom: "-18px",
          }}
        >
          {error_msg}
        </small>
      ) : null}
    </Box>
  );
}

export default MobileField;
