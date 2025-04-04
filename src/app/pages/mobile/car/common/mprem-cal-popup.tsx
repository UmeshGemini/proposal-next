import { Box, Button, Link, Modal } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CAR_ROUTES } from "../../../../Router/Path/CarRoutes";
import { CarSlice } from "../../../../redux/slice/Car/CarSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { CarPremiumCal } from "../../../../SupportingFiles/CarPermiumCal";
import {
  formatNumberWithCurrencySymbol,
  isEmpty,
} from "../../../../SupportingFiles/HelpingFunction";
import { TCarPremiumDetails } from "../../../../types/Car/TCarSingleQuoteDetail";
import CustomButton from "../../../../Component/CustomButton/CustomButton";
import { FRONTEND_DOMAIN } from "../../../../URLCollection/Domain";

const MPremiumCalculationPopup = ({
  policyRevisionPopup,
  setPolicyRevisionPopup,
  recalculatedPremium,
}: {
  policyRevisionPopup: boolean;
  setPolicyRevisionPopup: any;
  recalculatedPremium?: TCarPremiumDetails;
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState<{
    old_premium: number;
    old_idv: number;
    new_premium: number;
    new_idv: number;
  }>({
    old_premium: 0,
    old_idv: 0,
    new_premium: 0,
    new_idv: 0,
  });

  const {
    SELECTED_QUOTE_DATA,
    PAGE_STATUS,
    ADDON_STATUS,
    ADDON_USER_VALUE,
    PLAN_TYPE,
    ADD_FORM,
  } = useAppSelector((state) => state.Car);
  const { VERIFY_KYC_FORM } = useAppSelector((state) => state.CKYC);
  const { ADD_FORM_RESPONSE } = useAppSelector((state) => state.Car);

  const ContinueFun = () => {
    if (SELECTED_QUOTE_DATA.quotationDetail && recalculatedPremium) {
      dispatch(
        CarSlice.actions.SET_SELECTED_QUOTE_DATA({
          ...SELECTED_QUOTE_DATA,
          quotationDetail: {
            ...SELECTED_QUOTE_DATA.quotationDetail,
            premiumDetails: {
              ...recalculatedPremium,
            },
          },
        })
      );
    }
    if (PAGE_STATUS) {
      navigate(`${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.PREVIEW_DEATILS}`);
    } else {
      if (VERIFY_KYC_FORM.customer_type.value === "Organization") {
        navigate(`${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.ADDRESS_DETAILS}`);
      } else {
        navigate(`${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.NOMINEE_DETAILS}`);
      }
    }
  };

  useEffect(() => {
    if (recalculatedPremium && SELECTED_QUOTE_DATA.quotationDetail) {
      const new_data = SELECTED_QUOTE_DATA.quotationDetail?.premiumDetails;
      const old_data = recalculatedPremium;

      const new_premium = CarPremiumCal(
        SELECTED_QUOTE_DATA.quotationDetail,
        ADDON_STATUS,
        ADDON_USER_VALUE.passengerCover.value,
        PLAN_TYPE,
        VERIFY_KYC_FORM.customer_type.value,
        ADD_FORM.reg_date.value
      );
      const old_premium = CarPremiumCal(
        {
          ...SELECTED_QUOTE_DATA.quotationDetail,
          premiumDetails: recalculatedPremium,
        },
        ADDON_STATUS,
        ADDON_USER_VALUE.passengerCover.value,
        PLAN_TYPE,
        VERIFY_KYC_FORM.customer_type.value,
        ADD_FORM.reg_date.value
      );

      setData({
        new_idv: SELECTED_QUOTE_DATA.quotationDetail.premiumDetails.IDV,
        new_premium: new_premium,
        old_idv: recalculatedPremium.IDV,
        old_premium: old_premium,
      });
    }
  }, [recalculatedPremium, SELECTED_QUOTE_DATA]);
  return (
    <>
      {recalculatedPremium ? (
        <Modal open={policyRevisionPopup} className="modalWrapper_m ">
          <Box className="modalInner">
            <Grid container spacing={2}>
              <Grid xs={12}>
                <Link
                  onClick={() => {
                    setPolicyRevisionPopup(false);
                  }}
                  className="close-button"
                ></Link>
              </Grid>
            </Grid>
            <Grid container spacing={2} textAlign="center">
              <Grid xs={12}>
                <img
                  src="../images/revision.svg"
                  alt=""
                  style={{ height: "90px" }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} textAlign="center">
              <Grid xs={12} className="mt-5">
                <h5>Policy Premium is Revised</h5>
              </Grid>

              <Grid xs={12}>
                {/* <p>Your new NCB is 0% and premium has changed</p> */}
                <Box marginBottom="16px">
                  {ADDON_STATUS.driver_cover.value && (
                    <div className="Section_li">
                      <div
                        className={
                          recalculatedPremium?.driverCover === 0 ? "no" : "yes"
                        }
                      >
                        Driver Cover
                      </div>
                    </div>
                  )}
                  {ADDON_STATUS.depreciation_cover.value && (
                    <div className="Section_li">
                      <div
                        className={
                          recalculatedPremium?.depreciationCover === 0
                            ? "no"
                            : "yes"
                        }
                      >
                        Zero Depreciation
                      </div>
                    </div>
                  )}
                  {ADDON_STATUS.pa_owner_cover.value && (
                    <div className="Section_li">
                      <div
                        className={
                          recalculatedPremium?.paOwnerDriver === 0
                            ? "no"
                            : "yes"
                        }
                      >
                        Personal Accident Cover
                      </div>
                    </div>
                  )}
                  {ADDON_STATUS.rsa.value && (
                    <div className="Section_li">
                      <div
                        className={
                          recalculatedPremium?.roadSideAssistance === 0
                            ? "no"
                            : "yes"
                        }
                      >
                        24x7 Roadside Assistance
                      </div>
                    </div>
                  )}

                  {ADDON_STATUS.consumable_cover.value && (
                    <div className="Section_li">
                      <div
                        className={
                          recalculatedPremium?.consumablesCover === 0
                            ? "no"
                            : "yes"
                        }
                      >
                        Consumable Cover
                      </div>
                    </div>
                  )}
                  {ADDON_STATUS.engine_cover.value && (
                    <div className="Section_li">
                      <div
                        className={
                          recalculatedPremium?.engineGearBoxProtection === 0
                            ? "no"
                            : "yes"
                        }
                      >
                        Engine Cover
                      </div>
                    </div>
                  )}
                  {ADDON_STATUS.invoice_cover.value && (
                    <div className="Section_li">
                      <div
                        className={
                          recalculatedPremium?.invoicePriceCover === 0
                            ? "no"
                            : "yes"
                        }
                      >
                        Invoice Cover
                      </div>
                    </div>
                  )}
                  {ADDON_STATUS.key_replacement.value && (
                    <div className="Section_li">
                      <div
                        className={
                          recalculatedPremium?.keyReplacementCover === 0
                            ? "no"
                            : "yes"
                        }
                      >
                        Key Replacement
                      </div>
                    </div>
                  )}
                  {ADDON_STATUS.ncb_cover.value && (
                    <div className="Section_li">
                      <div
                        className={
                          recalculatedPremium?.noClaimBonusSameSlab === 0
                            ? "no"
                            : "yes"
                        }
                      >
                        NCB Cover
                      </div>
                    </div>
                  )}
                  {ADDON_STATUS.tyre_cover.value && (
                    <div className="Section_li">
                      <div
                        className={
                          recalculatedPremium?.tyreSecureCover === 0
                            ? "no"
                            : "yes"
                        }
                      >
                        Tyre Cover
                      </div>
                    </div>
                  )}
                  {ADDON_STATUS.passenger_cover.value &&
                  !isEmpty(ADDON_USER_VALUE.passengerCover.value) ? (
                    <div className="Section_li">
                      <div className={"yes"}>Passenger Cover</div>
                    </div>
                  ) : null}

                  {ADDON_STATUS.cng_kit.value && (
                    <div className="Section_li">
                      <div
                        className={
                          ADDON_STATUS.cng_kit.value === true &&
                          ADDON_USER_VALUE.cngKitValue.value &&
                          ADDON_USER_VALUE.cngKitValue.value === "0"
                            ? "no"
                            : "yes"
                        }
                      >
                        CNG Kit
                      </div>
                    </div>
                  )}
                </Box>
                <p className="premium">
                  Premium{" "}
                  {`${data.old_premium}` !== `${data.new_premium}` ? (
                    <span>
                      {formatNumberWithCurrencySymbol(data.new_premium)}
                    </span>
                  ) : null}
                  {formatNumberWithCurrencySymbol(data.old_premium)}
                </p>
                {PLAN_TYPE === "Third Party" ? null : (
                  <h5 className="Idv_value">
                    IDV
                    <span>
                      {`${data.old_idv}` !== `${data.new_idv}` ? (
                        <>{formatNumberWithCurrencySymbol(data.old_idv)}</>
                      ) : null}
                    </span>
                    {formatNumberWithCurrencySymbol(data.new_idv)}
                  </h5>
                )}
              </Grid>

              <Grid xs={12} style={{ textAlign: "center" }} className="ctaBtn">
                <CustomButton
                  text_name={"Continue"}
                  class_name="primaryBtn"
                  size="large"
                  onClickFunction={() => {
                    setPolicyRevisionPopup(true);
                    ContinueFun();
                  }}
                />
              </Grid>
              <Grid xs={12} style={{ textAlign: "center" }} className="ctaBtn">
                <Link
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    let url = `${FRONTEND_DOMAIN}${CAR_ROUTES.QUOTE}?type=CAR&quote_no=${ADD_FORM_RESPONSE.quote_no}`;

                    // Check if the URL starts with "http:/" but not "http://"
                    if (
                      url.startsWith("http:/") &&
                      !url.startsWith("http://")
                    ) {
                      url = url.replace("http:/", "http://");
                    } else if (
                      !url.startsWith("http://") &&
                      !url.startsWith("https://")
                    ) {
                      url = "https://" + url;
                    }
                    window.location.href = url;
                  }}
                >
                  Go back to Quotes.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      ) : null}
    </>
  );
};

export default MPremiumCalculationPopup;
