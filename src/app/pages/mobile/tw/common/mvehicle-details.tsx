import { Box, FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Unstable_Grid2";
import DatePicker from "../../../../Component/FieldTypes/DatePicker/DatePicker";
import RKTextField from "../../../../Component/FieldTypes/RKTextField/RKTextField";
import SearchDropdown from "../../../../Component/FieldTypes/SearchDropdown/SearchDropdown";
import SearchDropdownAPI from "../../../../Component/FieldTypes/SearchDropdownAPI/SearchDropdownAPI";
import SelectDropdown from "../../../../Component/FieldTypes/SelectDropdown/SelectDropdown";
import Loader from "../../../../Component/Loader/Loader";
import TMFooter from "../../../../Component/TMFooter/TMFooter";
import { EMotorCompCode } from "../../../../Enum/EMotorCompCode";
import { useAppSelector } from "../../../../redux/hooks";
import {
  FORMAT_DATE_DD_MM_YYYY,
  calculateAgeInDays,
  isEmpty,
  validatePAN,
} from "../../../../SupportingFiles/HelpingFunction";
import { TVehicleDetails } from "../../../../types/TTWSlice";
import MPremiumCalculationPopup from "../MPremiumCalculationPopup/MPremiumCalculationPopup";
import { ECompanyCode } from "../../../../Services/Enum/EHome";

function MVehicleDetails({
  vehicleDetailFields,
  handleClick,
  fieldsUpdateState,
  setVehicleDetailFields,
  pageStatus,
  policyRevisionPopup,
  setPolicyRevisionPopup,
  isLoading,
  validateForm,
  recalculatedPremium,
  setBankdata,
}: {
  vehicleDetailFields: TVehicleDetails;
  handleClick: any;
  fieldsUpdateState: Function;
  updateMasterState: Function;
  setVehicleDetailFields: Function;
  pageStatus: number;
  policyRevisionPopup: boolean;
  setPolicyRevisionPopup: any;
  isLoading: boolean;
  validateForm: Function;
  recalculatedPremium: any;
  setBankdata: Function;
}) {
  const {
    PLAN_TYPE,
    PAGE_STATUS,
    DROPDOWN_DATA,
    ADD_FORM,
    VEHICLE_DETAILS,
    SELECTED_QUOTE_DATA,
  } = useAppSelector((state) => state.TW);
  const { VERIFY_KYC_FORM } = useAppSelector((state) => state.CKYC);

  return (
    <>
      <MPremiumCalculationPopup
        policyRevisionPopup={policyRevisionPopup}
        setPolicyRevisionPopup={setPolicyRevisionPopup}
        recalculatedPremium={recalculatedPremium}
      />
      {isLoading && <Loader />}
      <Box>
        <h5 className="sectionTitle">Vehicle Details</h5>
        <Grid container columnSpacing={2} rowSpacing={3} className="mt-2">
          <Grid xs={6}>
            <RKTextField
              id="chasis_no"
              class_name="inputField"
              title={"Chassis Number"}
              value={vehicleDetailFields.chasis_no.value}
              attrName={[
                "chasis_no",
                "value",
                vehicleDetailFields,
                setVehicleDetailFields,
              ]}
              value_update={fieldsUpdateState}
              warn_status={vehicleDetailFields.chasis_no.warning}
              error_message={
                !isEmpty(vehicleDetailFields?.chasis_no.value)
                  ? ADD_FORM.business_type === "New"
                    ? "Enter min. 17 digit"
                    : `Enter Min. ${
                        SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails
                          .company_code === EMotorCompCode.HDFC
                          ? "5"
                          : "6"
                      } Character`
                  : "Enter Chassis Number"
              }
              validation_type="ALPHANUMERIC"
              max_length={21}
            />
          </Grid>
          <Grid xs={6}>
            <RKTextField
              id="engine_no"
              class_name="inputField"
              title={"Engine Number"}
              value={vehicleDetailFields.engine_no.value}
              attrName={[
                "engine_no",
                "value",
                vehicleDetailFields,
                setVehicleDetailFields,
              ]}
              value_update={fieldsUpdateState}
              warn_status={vehicleDetailFields.engine_no.warning}
              error_message={
                !isEmpty(vehicleDetailFields.engine_no.value)
                  ? SELECTED_QUOTE_DATA?.quotationDetail?.CompanyDetails
                      ?.company_code === ECompanyCode?.RSA
                    ? "Enter At Least 6 Character"
                    : "Enter At Least 5 Character"
                  : "Enter Engine Number"
              }
              validation_type="ALPHANUMERIC"
              max_length={21}
            />
          </Grid>
          {PLAN_TYPE === "Bundle Policy" ? null : (
            <Grid xs={6}>
              <RKTextField
                id="prev_policy_no"
                class_name="inputField"
                title={"Prev. Policy Number"}
                value={vehicleDetailFields.prev_policy_no.value}
                attrName={[
                  "prev_policy_no",
                  "value",
                  vehicleDetailFields,
                  setVehicleDetailFields,
                ]}
                value_update={fieldsUpdateState}
                warn_status={vehicleDetailFields.prev_policy_no.warning}
                error_message={
                  !isEmpty(vehicleDetailFields.prev_policy_no.value)
                    ? "Enter Min. 5 Characters"
                    : "Enter Prev. Policy Number"
                }
                validation_type="ALPHANUMERIC_ALL"
                max_length={30}
              />
            </Grid>
          )}
          <Grid xs={6}>
            <RKTextField
              id="PAN"
              disabled={validatePAN(VERIFY_KYC_FORM.doc_id.value)}
              class_name="inputField"
              title={"PAN"}
              value={
                validatePAN(VERIFY_KYC_FORM.doc_id.value)
                  ? VERIFY_KYC_FORM.doc_id.value
                  : vehicleDetailFields.PAN.value
              }
              attrName={[
                "PAN",
                "value",
                vehicleDetailFields,
                setVehicleDetailFields,
              ]}
              value_update={fieldsUpdateState}
              warn_status={vehicleDetailFields.PAN.warning}
              // error_message={
              //   vehicleDetailFields.PAN.value.length === 0
              //     ? "Enter PAN"
              //     : "Enter valid PAN"
              // }
              error_message={
                isEmpty(vehicleDetailFields.PAN.value)
                  ? "Enter PAN"
                  : "Enter Valid Pan "
              }
              alphabet_only={true}
              max_length={10}
            />
          </Grid>

          {PLAN_TYPE === "Bundle Policy" ? null : (
            <Grid xs={6}>
              <SelectDropdown
                class_name="inputField"
                title="Previous Insurer"
                value={vehicleDetailFields.prev_insurer.value}
                attrName={[
                  "prev_insurer",
                  "value",
                  vehicleDetailFields,
                  setVehicleDetailFields,
                ]}
                value_update={fieldsUpdateState}
                data={DROPDOWN_DATA.PREVIOUS_INSURER_LIST}
                warn_status={vehicleDetailFields.prev_insurer.warning}
                error_message="Select Previous Insurer"
              />
            </Grid>
          )}
          <Grid xs={6}>
            <DatePicker
              class_name="inputField datepicker"
              title={"Mfg. Month-Year"}
              value={vehicleDetailFields.mfg_year.value}
              attrName={[
                "mfg_year",
                "value",
                vehicleDetailFields,
                setVehicleDetailFields,
              ]}
              value_update={fieldsUpdateState}
              min_date={
                calculateAgeInDays(`${vehicleDetailFields.reg_date.value}`) +
                730
              }
              max_date={calculateAgeInDays(
                `${vehicleDetailFields.reg_date.value}`
              )}
              date_validation_type="DAYS"
              error_message=" Select Manufacturing Year"
              warn_status={vehicleDetailFields.mfg_year.warning}
            />
          </Grid>
          {PLAN_TYPE === "Bundle Policy" ? null : (
            <>
              <Grid xs={6}>
                <DatePicker
                  class_name="inputField datepicker"
                  title={"Date of Registration"}
                  value={vehicleDetailFields.reg_date.value}
                  attrName={[
                    "reg_date",
                    "value",
                    vehicleDetailFields,
                    setVehicleDetailFields,
                  ]}
                  value_update={fieldsUpdateState}
                  error_message=" Select Registration Date"
                  warn_status={vehicleDetailFields.reg_date.warning}
                  // min_date={PLAN_TYPE === "SAOD" ? 5 * 12 : 15 * 12}
                  // max_date={PLAN_TYPE === "SAOD" ? 5 * 12 : 3}
                  min_date={15 * 12}
                  max_date={3}
                  date_validation_type="MONTHS"
                />
              </Grid>
              {vehicleDetailFields.prev_insurer.value ===
              "Do not remember" ? null : (
                <Grid xs={6}>
                  <DatePicker
                    class_name="inputField datepicker"
                    title={"Policy Expiry Date"}
                    value={vehicleDetailFields.policy_exp_date.value}
                    attrName={[
                      "policy_exp_date",
                      "value",
                      vehicleDetailFields,
                      setVehicleDetailFields,
                    ]}
                    value_update={fieldsUpdateState}
                    error_message=" Select Policyexpiry Date"
                    warn_status={vehicleDetailFields.policy_exp_date.warning}
                    min_date={
                      calculateAgeInDays(
                        `${FORMAT_DATE_DD_MM_YYYY(new Date())}`
                      ) + 180
                    }
                    max_date={
                      calculateAgeInDays(
                        `${VEHICLE_DETAILS.policy_exp_date.value}`
                      ) > 0
                        ? 1
                        : -90
                    }
                    date_validation_type="DAYS"
                  />
                </Grid>
              )}
            </>
          )}
        </Grid>
        {PLAN_TYPE === "SAOD" && (
          <Grid container columnSpacing={2} rowSpacing={3} className="mt-3">
            <Grid xs={6}>
              <RKTextField
                id="tp_policy"
                class_name="inputField"
                title={"TP Policy Number"}
                value={vehicleDetailFields.tp_policy.value}
                attrName={[
                  "tp_policy",
                  "value",
                  vehicleDetailFields,
                  setVehicleDetailFields,
                ]}
                value_update={fieldsUpdateState}
                warn_status={vehicleDetailFields.tp_policy.warning}
                max_length={21}
                error_message={
                  !isEmpty(vehicleDetailFields?.tp_policy?.value)
                    ? "TP Policy Number"
                    : "Enter TP Policy Number"
                }
                validation_type="ALPHANUMERIC_ALL"
              />
            </Grid>
            <Grid xs={6}>
              {DROPDOWN_DATA?.PREVIOUS_INSURER_LIST?.length > 0 ? (
                <SearchDropdown
                  class_name="inputField"
                  title="TP Insurer"
                  value={vehicleDetailFields.tp_insurer.value}
                  attrName={[
                    "tp_insurer",
                    "value",
                    vehicleDetailFields,
                    setVehicleDetailFields,
                  ]}
                  value_update={fieldsUpdateState}
                  data={DROPDOWN_DATA.PREVIOUS_INSURER_LIST}
                  warn_status={vehicleDetailFields.tp_insurer.warning}
                  error_message="Select TP Insurer "
                  id={"tp_insurer"}
                />
              ) : null}
            </Grid>
            <Grid xs={12}>
              <DatePicker
                class_name="inputField datepicker"
                title={"TP Policy Start Date"}
                value={vehicleDetailFields.tp_policy_start.value}
                attrName={[
                  "tp_policy_start",
                  "value",
                  vehicleDetailFields,
                  setVehicleDetailFields,
                ]}
                value_update={fieldsUpdateState}
                error_message="Select TP Policy Start Date"
                warn_status={vehicleDetailFields.tp_policy_start.warning}
                min_date={
                  calculateAgeInDays(`${vehicleDetailFields.reg_date.value}`) +
                  180
                }
                max_date={1}
                date_validation_type="DAYS"
              />
            </Grid>
          </Grid>
        )}

        <Grid container spacing={2}>
          <Grid xs={12}>
            <FormControlLabel
              className="proposalCheckBoxWrapper redBox mt-4"
              control={
                <Checkbox
                  value={vehicleDetailFields.is_vehicle_on_loan}
                  onClick={handleClick}
                  id="vehicleOnLoan"
                />
              }
              label="This vehicle on loan?"
            />
          </Grid>
        </Grid>
        {vehicleDetailFields.is_vehicle_on_loan ? (
          <Grid container spacing={3} className="my-2">
            <Grid xs={6}>
              <SearchDropdownAPI
                class_name="inputField"
                title={"Name of the Bank/NBFC"}
                value={vehicleDetailFields.bank_name.value}
                attrName={[
                  "bank_name",
                  "value",
                  vehicleDetailFields,
                  setVehicleDetailFields,
                ]}
                data={DROPDOWN_DATA?.VEHICLE_ON_LOAN}
                setBankdata={setBankdata}
                value_update={fieldsUpdateState}
                warn_status={vehicleDetailFields.bank_name.warning}
                error_message="Enter Bank Name"
              />
            </Grid>
            <Grid xs={6}>
              <RKTextField
                id="city"
                class_name="inputField"
                title={"City"}
                value={vehicleDetailFields.city.value}
                attrName={[
                  "city",
                  "value",
                  vehicleDetailFields,
                  setVehicleDetailFields,
                ]}
                value_update={fieldsUpdateState}
                warn_status={vehicleDetailFields.city.warning}
                error_message="Enter City "
              />
            </Grid>
          </Grid>
        ) : null}

        {SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
          EMotorCompCode.RSA && ADD_FORM.business_type !== "New" ? (
          <Grid xs>
            <FormControlLabel
              className="proposalCheckBoxWrapper redBox"
              control={
                <Checkbox
                  id="ownership_changed"
                  defaultChecked={vehicleDetailFields.IS_OWNERSHIP_CHANGED}
                  value={vehicleDetailFields.IS_OWNERSHIP_CHANGED}
                  onClick={() => {
                    fieldsUpdateState(
                      ["IS_OWNERSHIP_CHANGED"],
                      !vehicleDetailFields.IS_OWNERSHIP_CHANGED
                    );
                  }}
                />
              }
              label="Was the ownership changed in the past year?"
            />
          </Grid>
        ) : null}

        <TMFooter
          textName={PAGE_STATUS === true ? "Update" : "Continue"}
          value={pageStatus}
          forward={validateForm}
        />
      </Box>
    </>
  );
}

export default MVehicleDetails;
