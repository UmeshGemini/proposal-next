import { Box, FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Unstable_Grid2";
import { useAppSelector } from "../../../../redux/hooks";
import {
  isEmpty,
  validatePincode,
} from "../../../../SupportingFiles/HelpingFunction";
import RKTextField from "../../../../Component/FieldTypes/RKTextField/RKTextField";
import Footer from "../../../../Component/Footer/Footer";

function AddressDetails({
  permanentAddress,
  handleClick,
  updateMasterState,
  pageStatus,
  setPermanentAddress,
}: {
  permanentAddress: any;
  handleClick: any;
  updateMasterState: Function;
  pageStatus: number;
  setPermanentAddress: Function;
}) {
  const { PAGE_STATUS } = useAppSelector((state) => state.TW);
  const { CKYC_DETAILS } = useAppSelector((state) => state.CKYC);

  console.log("permanentAddress", CKYC_DETAILS?.kyc_details);

  return (
    <Box className="proposalAddress">
      <h5 className="sectionTitle">Address Details</h5>
      <Grid container spacing={3} alignItems="center">
        <Grid xs={4}>
          <RKTextField
            // disabled={
            //   validatePincode(CKYC_DETAILS.kycPincode) ||
            //   validatePincode(
            //     CKYC_DETAILS?.kyc_details?.permanent_address?.pin_code
            //   )
            // }
            class_name="inputField"
            title={"Pincode"}
            value={permanentAddress.pincode.value}
            attrName={[
              "pincode",
              "value",
              permanentAddress,
              setPermanentAddress,
            ]}
            value_update={updateMasterState}
            warn_status={permanentAddress.pincode.warning}
            max_length={6}
            validation_type="NUMBER"
            error_message={
              isEmpty(permanentAddress.pincode.value)
                ? "Enter Pincode"
                : "Enter Valid Pincode"
            }
          />
        </Grid>
        {permanentAddress.city && (
          <Grid xs={8}>
            {permanentAddress.city} ,{permanentAddress.state}
          </Grid>
        )}
      </Grid>
      <Grid container spacing={3}>
        <Grid xs={6} md={5}>
          <RKTextField
            // disabled
            class_name="inputField"
            title={"H.No. / Building"}
            value={permanentAddress.addressLineOne.value}
            attrName={[
              "addressLineOne",
              "value",
              permanentAddress,
              setPermanentAddress,
            ]}
            value_update={updateMasterState}
            warn_status={permanentAddress.addressLineOne.warning}
            error_message="Enter H.No. / Building"
          />
        </Grid>
        <Grid xs={6} md={5}>
          <RKTextField
            // disabled
            class_name="inputField"
            title={"Area / Town / Locality"}
            value={permanentAddress.addressLineTwo.value}
            attrName={[
              "addressLineTwo",
              "value",
              permanentAddress,
              setPermanentAddress,
            ]}
            value_update={updateMasterState}
            warn_status={permanentAddress.addressLineTwo.warning}
            error_message="Enter Area / Town / Locality"
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <FormControlLabel
            className="proposalCheckBoxWrapper"
            control={
              <Checkbox id="mailingCheckboxAddress" onClick={handleClick} />
            }
            label="Mailing / Correspondence address is same as permanent address."
            checked={permanentAddress.isMailingAddressSame}
            value={permanentAddress.isMailingAddressSame}
            defaultChecked={permanentAddress.isMailingAddressSame}
          />
        </Grid>
      </Grid>

      {/* Mailing Address */}
      {!permanentAddress.isMailingAddressSame ? (
        <Box>
          <Grid container spacing={3} alignItems="center">
            <Grid xs={4}>
              <RKTextField
                class_name="inputField"
                title={"Pincode"}
                value={permanentAddress.mailingPinCode.value}
                attrName={[
                  "mailingPinCode",
                  "value",
                  permanentAddress,
                  setPermanentAddress,
                ]}
                value_update={updateMasterState}
                warn_status={permanentAddress.mailingPinCode.warning}
                max_length={6}
                validation_type="NUMBER"
                error_message={
                  isEmpty(permanentAddress.mailingPinCode.value)
                    ? "Enter Pincode"
                    : "Enter Valid Pincode"
                }
              />
            </Grid>
            <Grid xs={8}>
              {permanentAddress.mailingCity &&
                ` ${permanentAddress.mailingCity} ,${permanentAddress.mailingState}`}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid xs={6} md={5}>
              <RKTextField
                class_name="inputField"
                title={"H.No. / Building"}
                value={permanentAddress.mailingAddressLineOne.value}
                attrName={[
                  "mailingAddressLineOne",
                  "value",
                  permanentAddress,
                  setPermanentAddress,
                ]}
                value_update={updateMasterState}
                warn_status={permanentAddress.mailingAddressLineOne.warning}
                error_message="Enter H.No. / Building"
              />
            </Grid>
            <Grid xs={6} md={5}>
              <RKTextField
                class_name="inputField"
                title={"Area / Town / Locality"}
                value={permanentAddress.mailingAddressLineTwo.value}
                attrName={[
                  "mailingAddressLineTwo",
                  "value",
                  permanentAddress,
                  setPermanentAddress,
                ]}
                value_update={updateMasterState}
                warn_status={permanentAddress.mailingAddressLineTwo.warning}
                error_message="Enter Area / Town / Locality"
              />
            </Grid>
          </Grid>
        </Box>
      ) : null}
      <Footer
        textName={PAGE_STATUS === true ? "Update" : "Continue"}
        attrName={"pageStatus"}
        value={pageStatus}
        value_update={updateMasterState}
      />
    </Box>
  );
}

export default AddressDetails;
