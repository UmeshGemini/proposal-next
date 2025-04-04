import { useAppSelector } from "@/store/hooks";
import { NATIONAL_ROUTES } from "./proposalRoutes/national/national-routes";
import { MOTOR_COMPANY_CODES } from "../../motor-company-codes";

function CarRoutes() {
  const company_code = useAppSelector(
    (state) =>
      state.Car.SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code
  );

  return (
    <>
      {company_code === MOTOR_COMPANY_CODES.National ? NATIONAL_ROUTES : null}
    </>
  );
}

export default CarRoutes;
