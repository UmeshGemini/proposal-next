import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import InspectionConfContainer from "../../../Container/Common/InspectionConfContainer";
import PaymentConfContainer from "../../../Container/Common/PaymentConfContainer";
import PaymentConfContainerNode from "../../../Container/Common/PaymentConfContainerNode";
import { EProductId } from "../../../Services/Enum/EHome";
import { CAR_ROUTES } from "../../Path/CarRoutes";
import { COMMON_ROUTES } from "../../Path/CommonRoutes";
import { GET_QUERY_PARAMETERS } from "../../../SupportingFiles/HelpingFunction";
import { EMotorCompCode } from "../../../Enum/EMotorCompCode";
import PaymentConfMotorContainerNode from "../../../Container/Common/PaymentConfMotorContainerNode";

function CommonRoutes() {
  const { pathname } = useLocation();

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const product_code = queryParams.get("product_code");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Routes>
        {`${product_code}` === "HPMB28" ||
        `${product_code}` === "HPMB29" ||
        `${product_code}` === "HPMB30" ||
        `${product_code}` === "HPS137" ||
        `${product_code}` === "HPIC42" ||
        `${product_code}` === `HPMB27` ||
        `${product_code}` === `HPS036` ||
        `${product_code}` === `HPMB21` ||
        `${product_code}` === `HPMB22` ||
        `${product_code}` === `HPMB23` ||
        `${product_code}` === `HPMB24` ||
        `${product_code}` === `HPHD02` ? (
          <Route
            path={COMMON_ROUTES.PAYMENT_CONFIRMATION_HEALTH}
            element={<PaymentConfContainerNode />}
          />
        ) : (
          <>
            <Route
              path={COMMON_ROUTES.PAYMENT_CONFIRMATION}
              element={<PaymentConfContainer />}
            />
            <Route
              path={COMMON_ROUTES.PAYMENT_CONFIRMATION_HEALTH}
              element={<PaymentConfContainer />}
            />
          </>
        )}
        <Route
          path={COMMON_ROUTES.PAYMENT_CONFIRMATION_CAR}
          element={
            GET_QUERY_PARAMETERS("company_code") ===
            EMotorCompCode?.National ? (
              <PaymentConfMotorContainerNode />
            ) : (
              <PaymentConfContainer />
            )
          }
        />
        <Route
          path={COMMON_ROUTES.PAYMENT_CONFIRMATION_TW}
          element={
            GET_QUERY_PARAMETERS("company_code") ===
            EMotorCompCode?.National ? (
              <PaymentConfMotorContainerNode />
            ) : (
              <PaymentConfContainer />
            )
          }
        />
        <Route
          path={CAR_ROUTES.INSPECTION_CONFIRMATION}
          element={<InspectionConfContainer />}
        />
        {/* <Route
          path={COMMON_ROUTES.PREVIEW_DETAILS_NEW}
          element={<MReviewDetailsQW />}
        /> */}
      </Routes>
    </div>
  );
}

export default CommonRoutes;
