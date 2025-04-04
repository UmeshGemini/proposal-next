import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { addYears, subDays } from "date-fns";
import * as React from "react";
import "../../Component/LeftSidebar/LeftSidebar.scss";

const CarLeftSidebar = () => {
  const {
    ADD_FORM,
    SELECTED_QUOTE_DATA,
    ADDON_STATUS,
    ADDON_USER_VALUE,
    PLAN_TYPE,
    VEHICLE_DETAILS,
  } = useAppSelector((state) => state.Car);
  const { VERIFY_KYC_FORM } = useAppSelector((state) => state.CKYC);
  const [premium, setPremium] = React.useState<number>(0);
  const [newNCB, setNewNCB] = React.useState<string>("");
  const [showEditBtn, setShowEditBtn] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const location = useLocation();

  React.useEffect(() => {
    const premium_details = SELECTED_QUOTE_DATA.quotationDetail;

    if (premium_details) {
      const premium_with_tax = calculate_premium_for_car(
        premium_details,
        ADDON_STATUS,
        ADDON_USER_VALUE.passengerCover.value,
        PLAN_TYPE,
        VERIFY_KYC_FORM.customer_type.value,
        ADD_FORM.reg_date.value
      );
      setPremium(premium_with_tax);

      setNewNCB(
        PLAN_TYPE === "Bundle Policy"
          ? "0"
          : CAL_NEW_NCB(
              ADD_FORM.prev_ncb,
              ADD_FORM.claimed,
              ADD_FORM.previous_insurer.value,
              ADD_FORM.policy_expiry_date.value
            )
      );
    }
  }, [SELECTED_QUOTE_DATA, ADDON_STATUS, VERIFY_KYC_FORM.customer_type.value]);

  const [policyPeriod, setPolicyPeriod] = React.useState("");

  React.useEffect(() => {
    if (PLAN_TYPE === "Bundle Policy") {
      const value = `${GET_CURRENT_DATE()} To ${FORMAT_DATE_DD_MM_YYYY(
        subDays(addYears(new Date(), 3), 1)
      )}`;
      setPolicyPeriod(value);
    } else {
      if (
        SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
          EMotorCompCode.ICICI ||
        SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
          EMotorCompCode.GO_DIGIT
      ) {
        if (
          calculateAgeInDays(
            !isEmpty(VEHICLE_DETAILS.policy_exp_date.value)
              ? VEHICLE_DETAILS.policy_exp_date.value
              : ADD_FORM.policy_expiry_date.value
          ) > 0
        ) {
          const value = ` ${addDaysToDate(
            GET_CURRENT_DATE(),
            2
          )} To ${addYearsToDate(addDaysToDate(GET_CURRENT_DATE(), 1), 1)}`;
          setPolicyPeriod(value);
        } else {
          const value = `${addDaysToDate(
            !isEmpty(VEHICLE_DETAILS.policy_exp_date.value)
              ? VEHICLE_DETAILS.policy_exp_date.value
              : ADD_FORM.policy_expiry_date.value,
            1
          )} To ${addYearsToDate(
            !isEmpty(VEHICLE_DETAILS.policy_exp_date.value)
              ? VEHICLE_DETAILS.policy_exp_date.value
              : ADD_FORM.policy_expiry_date.value,
            1
          )}`;
          setPolicyPeriod(value);
        }
      } else if (
        SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
        EMotorCompCode.BAJAJ
      ) {
        if (
          calculateAgeInDays(
            !isEmpty(VEHICLE_DETAILS.policy_exp_date.value)
              ? VEHICLE_DETAILS.policy_exp_date.value
              : ADD_FORM.policy_expiry_date.value
          ) > 0
        ) {
          const value = ` ${addDaysToDate(
            GET_CURRENT_DATE(),
            1
          )} To ${addYearsToDate(GET_CURRENT_DATE(), 1)}`;
          setPolicyPeriod(value);
        } else {
          const value = `${addDaysToDate(
            !isEmpty(VEHICLE_DETAILS.policy_exp_date.value)
              ? VEHICLE_DETAILS.policy_exp_date.value
              : ADD_FORM.policy_expiry_date.value,
            1
          )} To ${addYearsToDate(
            !isEmpty(VEHICLE_DETAILS.policy_exp_date.value)
              ? VEHICLE_DETAILS.policy_exp_date.value
              : ADD_FORM.policy_expiry_date.value,
            1
          )}`;
          setPolicyPeriod(value);
        }
      } else if (
        SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
        EMotorCompCode.Kotak
      ) {
        if (
          calculateAgeInDays(
            !isEmpty(VEHICLE_DETAILS.policy_exp_date.value)
              ? VEHICLE_DETAILS.policy_exp_date.value
              : ADD_FORM.policy_expiry_date.value
          ) > 0
        ) {
          const value = ` ${addDaysToDate(
            GET_CURRENT_DATE(),
            3
          )} To ${addYearsToDate(addDaysToDate(GET_CURRENT_DATE(), 2), 1)}`;
          setPolicyPeriod(value);
        } else {
          const value = `${addDaysToDate(
            !isEmpty(VEHICLE_DETAILS.policy_exp_date.value)
              ? VEHICLE_DETAILS.policy_exp_date.value
              : ADD_FORM.policy_expiry_date.value,
            1
          )} To ${addYearsToDate(
            !isEmpty(VEHICLE_DETAILS.policy_exp_date.value)
              ? VEHICLE_DETAILS.policy_exp_date.value
              : ADD_FORM.policy_expiry_date.value,
            1
          )}`;
          setPolicyPeriod(value);
        }
      } else if (
        SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code ===
        EMotorCompCode.TATA
      ) {
        if (
          calculateAgeInDays(
            !isEmpty(VEHICLE_DETAILS.policy_exp_date.value)
              ? VEHICLE_DETAILS.policy_exp_date.value
              : ADD_FORM.policy_expiry_date.value
          ) > 0
        ) {
          if (PLAN_TYPE === "Third Party") {
            const value = ` ${addDaysToDate(
              GET_CURRENT_DATE(),
              1
            )} To ${addYearsToDate(addDaysToDate(GET_CURRENT_DATE(), 2), 1)}`;
            setPolicyPeriod(value);
          } else {
            const value = ` ${addDaysToDate(
              GET_CURRENT_DATE(),
              0
            )} To ${addYearsToDate(addDaysToDate(GET_CURRENT_DATE(), 2), 1)}`;
            setPolicyPeriod(value);
          }
        } else {
          const value = `${addDaysToDate(
            !isEmpty(VEHICLE_DETAILS.policy_exp_date.value)
              ? VEHICLE_DETAILS.policy_exp_date.value
              : ADD_FORM.policy_expiry_date.value,
            1
          )} To ${addYearsToDate(
            !isEmpty(VEHICLE_DETAILS.policy_exp_date.value)
              ? VEHICLE_DETAILS.policy_exp_date.value
              : ADD_FORM.policy_expiry_date.value,
            1
          )}`;
          setPolicyPeriod(value);
        }
      } else {
        if (
          calculateAgeInDays(
            !isEmpty(VEHICLE_DETAILS.policy_exp_date.value)
              ? VEHICLE_DETAILS.policy_exp_date.value
              : ADD_FORM.policy_expiry_date.value
          ) > 0
        ) {
          const value = ` ${addDaysToDate(
            GET_CURRENT_DATE(),
            1
          )} To ${addYearsToDate(GET_CURRENT_DATE(), 1)}`;
          setPolicyPeriod(value);
        } else {
          const value = `${addDaysToDate(
            !isEmpty(VEHICLE_DETAILS.policy_exp_date.value)
              ? VEHICLE_DETAILS.policy_exp_date.value
              : ADD_FORM.policy_expiry_date.value,
            1
          )} To ${addYearsToDate(
            !isEmpty(VEHICLE_DETAILS.policy_exp_date.value)
              ? VEHICLE_DETAILS.policy_exp_date.value
              : ADD_FORM.policy_expiry_date.value,
            1
          )}`;
          setPolicyPeriod(value);
        }
      }
    }
  }, [VEHICLE_DETAILS]);

  React.useEffect(() => {
    setShowEditBtn(location.pathname.includes(CAR_ROUTES.PREVIEW_DEATILS));
  }, [location.pathname]); // Dependency on pathname from useLocation

  return (
    <Grid xs className="proposalLeftSidebar">
      <Box className={"carIcon"}></Box>

      <h5 className="vehicle_number mb-4">
        {PLAN_TYPE === "Bundle Policy"
          ? ADD_FORM.rto.value
          : formatLicensePlate(ADD_FORM.reg_no.value)}
      </h5>

      <h5>{`${ADD_FORM.make_model.value}`}</h5>
      <h6 className="mb-6">{`${ADD_FORM.fuel_type.value}, ${ADD_FORM.variant_cc.value}`}</h6>

      <img
        alt=""
        className="insurerLogo"
        src={SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.logo}
      />
      <h6 className="mb-6">
        {SELECTED_QUOTE_DATA.quotationDetail?.productDetails.product_name}
      </h6>

      {PLAN_TYPE === "Third Party" ? null : (
        <Box>
          <h5>
            {formatAmountToCurrency(
              Number(SELECTED_QUOTE_DATA.quotationDetail?.premiumDetails.IDV)
            )}
          </h5>
          <p className="mb-6">{"IDV"}</p>
        </Box>
      )}
      <h5>{policyPeriod}</h5>
      <p className="mb-8">Policy Period</p>
      {PLAN_TYPE === "Third Party" ? null : (
        <Box className="mb-6">
          <h5 className="ncb">{newNCB}%</h5>
          <p>New NCB</p>
        </Box>
      )}
      {/* <h5 className="premium">
        {QUOTE_LOADER ? (
          <img src="../../images/loader.svg" alt="" height="12px" />
        ) : (
          <>{formatNumberWithCurrencySymbol(premium)}</>
        )}
      </h5>
      <p className="mb-8">Premium (Incl. GST)</p> */}

      <Box className="paymentInfo">
        {/* <span className="prevPrice">61,340/yr</span> */}
        <h4>{formatNumberWithCurrencySymbol(Number(premium))}</h4>
        <CustomButton
          text_name={"Price details"}
          class_name="tertiaryBtn"
          size="medium"
          onClickFunction={() => {
            dispatch(CarSlice.actions.PRICE_DETAILS_POPUP(true));
          }}
        />
      </Box>

      {showEditBtn && PLAN_TYPE !== "Third Party" && (
        <CustomButton
          text_name={"Edit Details"}
          class_name="secondaryBtn small mb-3 mt-5"
          size="medium"
          onClickFunction={() => {
            dispatch(CarSlice.actions.UPDATE_EDIT_PLAN_DETAILS_POPUP(true));
          }}
        />
      )}
    </Grid>
  );
};

export default CarLeftSidebar;
