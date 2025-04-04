import { Box, FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Unstable_Grid2";
import { useAppSelector } from "../../../../redux/hooks";
import RKTextField from "../../../../Component/FieldTypes/RKTextField/RKTextField";
import {
  isEmpty,
  validatePincode,
} from "../../../../SupportingFiles/HelpingFunction";
import TMFooter from "../../../../Component/TMFooter/TMFooter";

function MAddressDetails({
  permanentAddress,
  handleClick,
  updateMasterState,
  pageStatus,
  setPermanentAddress,
  validateForm,
}: {
  permanentAddress: any;
  handleClick: any;
  updateMasterState: Function;
  pageStatus: number;
  setPermanentAddress: Function;
  validateForm: Function;
}) {
  const { CKYC_DETAILS } = useAppSelector((state) => state.CKYC);
  const { PAGE_STATUS } = useAppSelector((state) => state.TW);
  return (
    <Box className="proposalAddress mt-3">
      <h5 className="sectionTitle">Address Details</h5>
      <Grid container columnSpacing={2} rowSpacing={3} alignItems="center">
        <Grid xs={6}>
          <RKTextField
            disabled={validatePincode(CKYC_DETAILS.kycPincode)}
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
          <Grid xs={6}>
            {permanentAddress.city}, {permanentAddress.state}
          </Grid>
        )}

        <Grid xs={12}>
          <RKTextField
            disabled
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
        <Grid xs={12}>
          <RKTextField
            disabled
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
      <Grid container spacing={2}>
        <Grid xs={12}>
          <FormControlLabel
            className="proposalCheckBoxWrapper mr-0 mb-4 mt-2"
            control={
              <Checkbox
                id="mailingCheckboxAddress"
                defaultChecked={permanentAddress.isMailingAddressSame}
                onClick={handleClick}
              />
            }
            label="Mailing / Correspondence address is same as permanent address."
          />
        </Grid>
      </Grid>

      {/* Mailing Address */}
      {!permanentAddress.isMailingAddressSame ? (
        <Box>
          <Grid container columnSpacing={2} rowSpacing={3} alignItems="center">
            <Grid xs={6}>
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
                    ? "Enter pincode"
                    : "Enter valid pincode"
                }
              />
            </Grid>
            <Grid xs={6}>
              {permanentAddress.mailingCity &&
                ` ${permanentAddress.mailingCity}, ${permanentAddress.mailingState}`}
            </Grid>
            <Grid xs={12}>
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
            <Grid xs={12}>
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
      <TMFooter
        textName={PAGE_STATUS === true ? "Update" : "Continue"}
        value={pageStatus}
        forward={validateForm}
      />
    </Box>
  );
}

export default MAddressDetails;
