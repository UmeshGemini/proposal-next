import { Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Unstable_Grid2";
import { subDays } from "date-fns";
import { useEffect, useState } from "react";
import CustomCheckbox from "../../../../Component/FieldTypes/CustomCheckbox/CustomCheckbox";
import DatePicker from "../../../../Component/FieldTypes/DatePicker/DatePicker";
import RKTextField from "../../../../Component/FieldTypes/RKTextField/RKTextField";
import SearchDropdownAPI from "../../../../Component/FieldTypes/SearchDropdownAPI/SearchDropdownAPI";
import SelectDropdown from "../../../../Component/FieldTypes/SelectDropdown/SelectDropdown";
import Loader from "../../../../Component/Loader/Loader";
import MFooter from "../../../../Component/MFooter/MFooter";
import { EMotorCompCode } from "../../../../Enum/EMotorCompCode";
import { CAR_SERVICES } from "../../../../Services/Car/CarServices";
import { ECompanyCode } from "../../../../Services/Enum/EHome";
import { CarSlice } from "../../../../redux/slice/Car/CarSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  FORMAT_DATE_DD_MM_YYYY,
  calculateAgeInDays,
  isEmpty,
  validatePAN,
} from "../../../../SupportingFiles/HelpingFunction";
import { TCarPremiumDetails } from "../../../../types/Car/TCarSingleQuoteDetail";
import MPremiumCalculationPopup from "./mprem-cal-popup";

function MVehicleDetails({
  vehicleDetailFields,
  handleClick,
  fieldsUpdateState,
  setVehicleDetailFields,
  policyRevisionPopup,
  setPolicyRevisionPopup,
  validateForm,
  isLoading,
  recalculatedPremium,
  prevDepth,
  setPrevDepth,
  premium,
  policyExpiryDate,
  setBankdata,
  previousInsurance,
}: {
  vehicleDetailFields: any;
  handleClick: any;
  fieldsUpdateState: Function;
  setVehicleDetailFields: Function;
  policyRevisionPopup: boolean;
  setPolicyRevisionPopup: any;
  validateForm: Function;
  isLoading: boolean;
  recalculatedPremium?: TCarPremiumDetails;
  prevDepth: boolean;
  setPrevDepth: Function;
  premium: any;
  policyExpiryDate: any;
  setBankdata: Function;
  previousInsurance: any;
}) {
  const {
    PAGE_STATUS,
    DROPDOWN_DATA,
    PLAN_TYPE,
    SELECTED_QUOTE_DATA,
    ADDON_STATUS,
    ADDON_USER_VALUE,
    ADD_FORM,
    VEHICLE_DETAILS,
    ADD_FORM_RESPONSE,
  } = useAppSelector((state) => state.Car);
  const [localAddonStatus, setLocalAddonStatus] = useState<{
    invoice_cover: boolean;
    depreciation_cover: boolean;
    value: boolean;
  }>({ invoice_cover: false, depreciation_cover: false, value: true });
  const { VERIFY_KYC_FORM } = useAppSelector((state) => state.CKYC);

  useEffect(() => {
    setLocalAddonStatus({
      invoice_cover: ADDON_STATUS.invoice_cover.value,
      depreciation_cover: ADDON_STATUS.depreciation_cover.value,
      value: true,
    });
  }, []);

  const dispatch = useAppDispatch();

  const BULK_UPDATE_ADDON_STATUS = (
    zero_dep: boolean,
    invoice_cover: boolean
  ) => {
    dispatch(
      CarSlice.actions.UPDATE_ADDON_STATUS_ALL({
        updates: [
          { key: "depreciation_cover", value: zero_dep },
          { key: "invoice_cover", value: invoice_cover },
        ],
      })
    );

    CAR_SERVICES.BULK_UPDATE_ADDON_STATUS(
      () => {},
      () => {},
      {
        quote_no: ADD_FORM_RESPONSE.quote_no,
        type: "CAR",
        driver_cover: ADDON_STATUS.driver_cover.value ? 1 : 0,
        pa_owner_driver: 1,
        passernger_cover:
          ADDON_USER_VALUE.passengerCover.value === ""
            ? "0"
            : ADDON_USER_VALUE.passengerCover.value,
        road_side_assistance: ADDON_STATUS.rsa.value ? 1 : 0,
        cng_kit:
          ADDON_USER_VALUE.cngKitValue.value === ""
            ? "0"
            : ADDON_USER_VALUE.cngKitValue.value,
        consumables_cover: ADDON_STATUS.consumable_cover.value ? 1 : 0,
        depreciation_cover: zero_dep ? 1 : 0,
        electric_accessory:
          ADDON_USER_VALUE.electricalAcessories.value === ""
            ? "0"
            : ADDON_USER_VALUE.electricalAcessories.value,
        engine_gear_box_protection: ADDON_STATUS.engine_cover.value ? 1 : 0,
        invoice_cover: invoice_cover ? 1 : 0,
        key_replacement_cover: ADDON_STATUS.key_replacement.value ? 1 : 0,
        no_claim_bonus_same_slab: ADDON_STATUS.ncb_cover.value ? 1 : 0,
        non_electric_accessory:
          ADDON_USER_VALUE.nonElectricalAcessories.value === ""
            ? "0"
            : ADDON_USER_VALUE.nonElectricalAcessories.value,
        personal_belonging: ADDON_STATUS.personalBelonging.value ? 1 : 0,
        tyre_secure_cover: ADDON_STATUS.tyre_cover.value ? 1 : 0,
      }
    );
  };

  return (
    <>
      {" "}
      <MPremiumCalculationPopup
        policyRevisionPopup={policyRevisionPopup}
        setPolicyRevisionPopup={setPolicyRevisionPopup}
        recalculatedPremium={recalculatedPremium}
      />
      {/* {recalculatedPremium?.netPremium ===
        SELECTED_QUOTE_DATA.quotationDetail?.premiumDetails.netPremium &&
      recalculatedPremium?.IDV ===
        SELECTED_QUOTE_DATA.quotationDetail?.premiumDetails.IDV ? (
        <>
          {PAGE_STATUS
            ? navigate(
                `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.PREVIEW_DEATILS}`
              )
            : navigate(
                `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.NOMINEE_DETAILS}`
              )}
        </>
      ) : PLAN_TYPE === "Third Party" ? null : (
        <>
          <MPremiumCalculationPopup
            policyRevisionPopup={policyRevisionPopup}
            setPolicyRevisionPopup={setPolicyRevisionPopup}
            recalculatedPremium={recalculatedPremium}
          />
        </>
      )} */}
      {isLoading && <Loader />}
      <Box>
        <h5 className="sectionTitle">Vehicle Details</h5>
        <Grid container columnSpacing={2} rowSpacing={3} className="mt-2">
          <Grid xs={6}>
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
              max_length={21}
              error_message={
                isEmpty(vehicleDetailFields.chasis_no.value)
                  ? ADD_FORM.business_type === "New"
                    ? "Enter min. 17 digit"
                    : `Enter Min. ${
                        SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails
                          .company_code === EMotorCompCode.HDFC
                          ? "5"
                          : SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails
                              .company_code === EMotorCompCode.Kotak
                          ? "8"
                          : "6"
                      } Character`
                  : "Enter Chassis Number"
              }
              validation_type="ALPHANUMERIC"
            />
          </Grid>
          <Grid xs={6}>
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
              max_length={21}
              error_message={
                vehicleDetailFields.engine_no.value.length > 0
                  ? SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails
                      .company_code === ECompanyCode.KOTAK
                    ? "Min. 8 Character Required"
                    : "Min. 5 Character Required"
                  : "Enter Engine Number "
              }
              validation_type="ALPHANUMERIC"
            />
          </Grid>
          <Grid xs={6}>
            <RKTextField
              disabled={validatePAN(VERIFY_KYC_FORM.doc_id.value)}
              class_name="inputField"
              title={"PAN"}
              value={vehicleDetailFields.pan_no.value}
              attrName={[
                "PAN",
                "value",
                vehicleDetailFields,
                setVehicleDetailFields,
              ]}
              value_update={fieldsUpdateState}
              warn_status={vehicleDetailFields.pan_no.warning}
              error_message={
                isEmpty(vehicleDetailFields.pan_no.value)
                  ? "Enter PAN"
                  : "Enter Valid Pan "
              }
              alphabet_only={true}
              max_length={21}
            />
          </Grid>
          {PLAN_TYPE === "Bundle Policy" ? null : (
            <Grid xs={6}>
              <RKTextField
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
                validation_type="ALPHANUMERIC_ALL"
                max_length={30}
                error_message={
                  vehicleDetailFields.prev_policy_no.value.length > 0
                    ? "Enter Min. 5 Characters"
                    : "Enter Prev. Policy Number"
                }
              />
            </Grid>
          )}

          {PLAN_TYPE === "Bundle Policy" ? null : (
            <>
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
                  data={previousInsurance}
                  warn_status={vehicleDetailFields.prev_insurer.warning}
                  error_message="Select Previous Insurer "
                />
              </Grid>
              <Grid xs={6}>
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
                  error_message="Select MFG Year"
                  warn_status={vehicleDetailFields.mfg_year.warning}
                  min_date={
                    calculateAgeInDays(
                      `${vehicleDetailFields.reg_date.value}`
                    ) + 730
                  }
                  max_date={calculateAgeInDays(
                    `${vehicleDetailFields.reg_date.value}`
                  )}
                  date_validation_type="DAYS"
                />
              </Grid>
              <Grid xs={6}>
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
                  error_message="Select Reg. Date"
                  warn_status={vehicleDetailFields.reg_date.warning}
                  min_date={PLAN_TYPE === "SAOD" ? 3 * 12 : 15 * 12}
                  max_date={PLAN_TYPE === "SAOD" ? 3 * 12 : 3}
                  date_validation_type="MONTHS"
                />
              </Grid>
              <Grid xs={6}>
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
                  error_message="Select policy Expiry Date"
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
            </>
          )}

          {PLAN_TYPE === "Bundle Policy" ? (
            <>
              <Grid xs={6}>
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
                  error_message="Select MFG Year"
                  warn_status={vehicleDetailFields.mfg_year.warning}
                  min_date={
                    calculateAgeInDays(
                      `${vehicleDetailFields.reg_date.value}`
                    ) + 730
                  }
                  max_date={calculateAgeInDays(
                    `${vehicleDetailFields.reg_date.value}`
                  )}
                  date_validation_type="DAYS"
                  disabled={!vehicleDetailFields.mfg_year.value}
                  default_date={subDays(new Date(), 90)}
                />
              </Grid>
            </>
          ) : null}
          {PLAN_TYPE === "SAOD" && (
            <>
              <Grid xs={6}>
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
                  max_length={30}
                  error_message={
                    vehicleDetailFields?.tp_policy?.value?.length > 0
                      ? "TP Policy Number"
                      : "Enter TP Policy Number"
                  }
                  validation_type="ALPHANUMERIC_ALL"
                />
              </Grid>
              <Grid xs={6}>
                {DROPDOWN_DATA.PREVIOUS_INSURER_LIST.length > 0 ? (
                  <SelectDropdown
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
              <Grid xs={6}>
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
                    calculateAgeInDays(
                      `${vehicleDetailFields.reg_date.value}`
                    ) + 180
                  }
                  max_date={1}
                  date_validation_type="DAYS"
                />
              </Grid>
            </>
          )}

          {SELECTED_QUOTE_DATA.quotationDetail &&
          PLAN_TYPE !== "Bundle Policy" &&
          PLAN_TYPE !== "Third Party" ? (
            <Grid container spacing={3}>
              {SELECTED_QUOTE_DATA.quotationDetail.CompanyDetails
                .company_code === EMotorCompCode.GO_DIGIT &&
              (localAddonStatus.depreciation_cover ||
                localAddonStatus.invoice_cover) &&
              SELECTED_QUOTE_DATA.quotationDetail?.premiumDetails
                .invoicePriceCover > 0 &&
              SELECTED_QUOTE_DATA.quotationDetail?.premiumDetails
                .depreciationCover > 0 ? (
                <Grid xs={12}>
                  <FormControlLabel
                    className="proposalCheckBoxWrapper redBox"
                    control={
                      <Checkbox
                        checked={prevDepth}
                        onChange={(e: any, v: any) => {
                          setPrevDepth(v);
                          BULK_UPDATE_ADDON_STATUS(v, v);
                        }}
                      />
                    }
                    label={
                      localAddonStatus.depreciation_cover &&
                      localAddonStatus.invoice_cover
                        ? "Zero depreciation and invoice cover are only applicable if they are included in your existing policy."
                        : localAddonStatus.depreciation_cover
                        ? "Zero depreciation is only applicable if they are included in your existing policy."
                        : localAddonStatus.invoice_cover
                        ? "invoice cover is only applicable if they are included in your existing policy."
                        : ""
                    }
                  />
                </Grid>
              ) : null}
            </Grid>
          ) : null}
          <Grid xs={12}>
            <FormControlLabel
              className="proposalCheckBoxWrapper redBox"
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
          {vehicleDetailFields.is_vehicle_on_loan ? (
            <>
              <Grid xs={12}>
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
              <Grid xs={12}>
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
                  error_message="Enter City "
                />
              </Grid>
            </>
          ) : null}

          {SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
          EMotorCompCode.TATA ? (
            <>
              {ADDON_STATUS.invoice_cover.value ? (
                <Grid xs="auto">
                  <CustomCheckbox
                    label="Do you have invoice Cover in privious Policy?"
                    defaultChecked={VEHICLE_DETAILS.prev_rti_cover}
                    value={VEHICLE_DETAILS.prev_rti_cover}
                    value_update={(e: any, a: any) => {
                      dispatch(
                        CarSlice.actions.UPDATE_VEHICLE_DEATILS_INDIVISUAL({
                          prev_rti_cover: a,
                        })
                      );
                    }}
                  />
                </Grid>
              ) : null}
              {ADDON_STATUS.cng_kit.value ? (
                <Grid xs="auto">
                  <CustomCheckbox
                    label="Do you have CNG Coverage in privious Policy?"
                    defaultChecked={VEHICLE_DETAILS.prev_cng_cover}
                    value={VEHICLE_DETAILS.prev_cng_cover}
                    value_update={(e: any, a: any) => {
                      dispatch(
                        CarSlice.actions.UPDATE_VEHICLE_DEATILS_INDIVISUAL({
                          prev_cng_cover: a,
                        })
                      );
                    }}
                  />
                </Grid>
              ) : null}
              {ADDON_STATUS.depreciation_cover.value ? (
                <Grid xs="auto">
                  <CustomCheckbox
                    label=" Do you have Zero Depreciation in privious Policy?"
                    defaultChecked={VEHICLE_DETAILS.prev_depth_cover}
                    value={VEHICLE_DETAILS.prev_depth_cover}
                    value_update={(e: any, a: any) => {
                      dispatch(
                        CarSlice.actions.UPDATE_VEHICLE_DEATILS_INDIVISUAL({
                          prev_depth_cover: a,
                        })
                      );
                    }}
                  />
                </Grid>
              ) : null}
            </>
          ) : null}
        </Grid>
        <MFooter
          forward={validateForm}
          textName={PAGE_STATUS ? "Update" : "Continue"}
        />
      </Box>
    </>
  );
}

export default MVehicleDetails;
