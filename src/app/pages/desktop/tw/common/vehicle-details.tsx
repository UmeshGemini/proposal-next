import { Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Unstable_Grid2";
import { MouseEventHandler } from "react";
import { toast } from "react-toastify";
import CustomCheckbox from "../../../../Component/FieldTypes/CustomCheckbox/CustomCheckbox";
import DatePicker from "../../../../Component/FieldTypes/DatePicker/DatePicker";
import RKTextField from "../../../../Component/FieldTypes/RKTextField/RKTextField";
import SearchDropdown from "../../../../Component/FieldTypes/SearchDropdown/SearchDropdown";
import SearchDropdownAPI from "../../../../Component/FieldTypes/SearchDropdownAPI/SearchDropdownAPI";
import Footer from "../../../../Component/Footer/Footer";
import Loader from "../../../../Component/Loader/Loader";
import PremRecalPopUp from "../../../../Container/TW/Common/PremRecalPopUp/PremRecalPopUp";
import { EMotorCompCode } from "../../../../Enum/EMotorCompCode";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { TWSlice } from "../../../../redux/slice/TwoWheeler/TWSlice";
import {
  FORMAT_DATE_DD_MM_YYYY,
  calculateAgeInDays,
  isEmpty,
  validatePAN,
} from "../../../../SupportingFiles/HelpingFunction";
import { TVehicleDetails } from "../../../../types/TTWSlice";
import { TTWPremiumDetails } from "../../../../types/TwoWheeler/TTWSingleQuoteDetail";
import { ECompanyCode } from "../../../../Services/Enum/EHome";

function VehicleDetails({
  vehicleDetailFields,
  handleClick,
  fieldsUpdateState,
  updateMasterState,
  setVehicleDetailFields,
  pageStatus,
  policyRevisionPopup,
  setPolicyRevisionPopup,
  isLoading,
  setBankdata,
  recalculatedPremium,
}: {
  vehicleDetailFields: TVehicleDetails;
  handleClick: MouseEventHandler;
  fieldsUpdateState: Function;
  setBankdata: Function;
  updateMasterState: Function;
  setVehicleDetailFields: Function;
  policyExpiryDate: any;
  pageStatus: number;
  policyRevisionPopup: boolean;
  setPolicyRevisionPopup: any;
  isLoading: boolean;
  recalculatedPremium: TTWPremiumDetails;
}) {
  const {
    PAGE_STATUS,
    DROPDOWN_DATA,
    PLAN_TYPE,
    ADDON_STATUS,
    ADD_FORM,
    SELECTED_QUOTE_DATA,
    VEHICLE_DETAILS,
  } = useAppSelector((state) => state.TW);
  const { VERIFY_KYC_FORM } = useAppSelector((state) => state.CKYC);
  const dispatch = useAppDispatch();

  console.log("vehicleDetailFields", vehicleDetailFields);

  return (
    <>
      <>
        <PremRecalPopUp
          policyRevisionPopup={policyRevisionPopup}
          setPolicyRevisionPopup={setPolicyRevisionPopup}
          recalculatedPremium={recalculatedPremium}
        />
      </>
      {isLoading && <Loader />}
      <Box>
        <h5 className="sectionTitle">Vehicle Details</h5>

        <Grid container spacing={3}>
          <Grid xs={4}>
            <RKTextField
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
                vehicleDetailFields?.chasis_no?.value?.length > 0
                  ? ADD_FORM.business_type === "New"
                    ? "Enter min. 17 digit"
                    : `Enter min. ${
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
          <Grid xs={4}>
            <RKTextField
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
                vehicleDetailFields.engine_no.value.length > 0
                  ? SELECTED_QUOTE_DATA?.quotationDetail?.CompanyDetails
                      ?.company_code === ECompanyCode?.RSA
                    ? "Engine Number At Least 6 Character"
                    : "Engine Number At Least 5 Character"
                  : "Enter Engine Number"
              }
              validation_type="ALPHANUMERIC"
              max_length={21}
            />
          </Grid>
          {PLAN_TYPE === "Bundle Policy" ? null : (
            <Grid xs={4}>
              <RKTextField
                class_name="inputField"
                title={"Previous Policy Number"}
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
                  vehicleDetailFields?.prev_policy_no?.value?.length > 0
                    ? "Minimum Five Character"
                    : "Enter Previous Policy Number"
                }
                validation_type="ALPHANUMERIC_ALL"
                max_length={30}
              />
            </Grid>
          )}
        </Grid>
        <Grid container spacing={3}>
          {PLAN_TYPE === "Bundle Policy" ? null : (
            <Grid xs={3}>
              <SearchDropdown
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
                data={DROPDOWN_DATA?.PREVIOUS_INSURER_LIST}
                warn_status={vehicleDetailFields.prev_insurer.warning}
                error_message="Select Previous Insurer"
              />
            </Grid>
          )}
          <Grid xs={3}>
            <DatePicker
              class_name="inputField"
              title={"Mfg. Month-Year"}
              value={vehicleDetailFields.mfg_year.value}
              attrName={[
                "mfg_year",
                "value",
                vehicleDetailFields,
                setVehicleDetailFields,
              ]}
              value_update={fieldsUpdateState}
              error_message=" Select Manufacturing Year"
              warn_status={vehicleDetailFields.mfg_year.warning}
              min_date={
                calculateAgeInDays(`${vehicleDetailFields.reg_date.value}`) +
                730
              }
              max_date={calculateAgeInDays(
                `${vehicleDetailFields.reg_date.value}`
              )}
              date_validation_type="DAYS"
            />
          </Grid>
          {PLAN_TYPE === "Bundle Policy" ? null : (
            <>
              <Grid xs={3}>
                <DatePicker
                  class_name="inputField"
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
                <Grid xs={3}>
                  <DatePicker
                    class_name="inputField"
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
          <Grid xs={4}>
            <RKTextField
              disabled={
                validatePAN(VERIFY_KYC_FORM.doc_id.value) ||
                validatePAN(VEHICLE_DETAILS?.PAN?.value)
              }
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
              //   vehicleDetailFields?.chasis_no?.value?.length > 0
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
        </Grid>
        {PLAN_TYPE === "SAOD" && (
          <Grid container spacing={3}>
            <Grid xs={3}>
              <RKTextField
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
                  vehicleDetailFields?.tp_policy?.value?.length > 0
                    ? "TP Policy Number"
                    : "Enter TP Policy Number"
                }
                validation_type="ALPHANUMERIC_ALL"
              />
            </Grid>
            <Grid xs={3}>
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
                />
              ) : null}
            </Grid>

            <Grid xs={3}>
              <DatePicker
                class_name="inputField"
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
          <Grid xs="auto">
            {/* <FormControlLabel
              className="proposalCheckBoxWrapper redBox"
              control={<Checkbox onClick={handleClick} id="vehicleOnLoan" />}
              label="This vehicle on loan?"
            /> */}

            <FormControlLabel
              className="proposalCheckBoxWrapper redBox"
              control={
                <Checkbox
                  onClick={handleClick}
                  checked={vehicleDetailFields.is_vehicle_on_loan}
                  id="vehicleOnLoan"
                />
              }
              label="This vehicle on loan?"
            />
          </Grid>
          {SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
            EMotorCompCode.RSA &&
          ADD_FORM.business_type !== "New" &&
          PLAN_TYPE !== "Third Party" ? (
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
        </Grid>
        {vehicleDetailFields.is_vehicle_on_loan ? (
          <Grid container spacing={3}>
            <Grid xs={4}>
              {SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails
                .company_code !== EMotorCompCode.ACKO ? (
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
                  value_update={fieldsUpdateState}
                  setBankdata={setBankdata}
                  warn_status={vehicleDetailFields.bank_name.warning}
                  error_message="Enter Bank Name "
                />
              ) : (
                <RKTextField
                  class_name="inputField"
                  title={"Name of the Bank/NBFC"}
                  value={vehicleDetailFields.bank_name.value}
                  attrName={[
                    "bank_name",
                    "value",
                    vehicleDetailFields,
                    setVehicleDetailFields,
                  ]}
                  value_update={fieldsUpdateState}
                  warn_status={vehicleDetailFields.bank_name.warning}
                  error_message="Enter Bank Name"
                />
              )}
            </Grid>
            <Grid xs={4}>
              <RKTextField
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
                error_message="Enter City"
              />
            </Grid>
          </Grid>
        ) : null}

        {(SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
          EMotorCompCode.TATA &&
          PLAN_TYPE !== "Bundle Policy") ||
        SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
          EMotorCompCode.RSA ? (
          <>
            {ADDON_STATUS.zero_depreciation.value ? (
              <Grid xs="auto">
                <CustomCheckbox
                  label="Do you have Zero Depreciation  in privious Policy?"
                  defaultChecked={VEHICLE_DETAILS.prev_depth_cover}
                  value={VEHICLE_DETAILS.prev_depth_cover}
                  value_update={(e: any, a: any) => {
                    dispatch(
                      TWSlice.actions.UPDATE_VEHICLE_DEATILS_INDIVISUAL({
                        ...VEHICLE_DETAILS,
                        prev_depth_cover: a,
                      })
                    );
                    if (!a) {
                      if (
                        SELECTED_QUOTE_DATA?.quotationDetail?.CompanyDetails
                          ?.company_code !== EMotorCompCode.RSA
                      ) {
                        toast.warning(
                          "If you uncheck 'Zero Depreciation,' your policy will switch to NSTP."
                        );
                      }
                    }
                  }}
                />
              </Grid>
            ) : null}
          </>
        ) : null}
        <Footer
          textName={PAGE_STATUS === true ? "Update" : "Continue"}
          attrName={"pageStatus"}
          value={pageStatus}
          value_update={updateMasterState}
        />
      </Box>
    </>
  );
}

export default VehicleDetails;
