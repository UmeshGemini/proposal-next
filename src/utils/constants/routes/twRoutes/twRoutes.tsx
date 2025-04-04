import { EMotorCompCode } from "../../../Enum/EMotorCompCode";
import { useAppSelector } from "../../../Store/hooks";
import { ACKO_ROUTES } from "./proposalRoutes/Acko/AckoRoutes";
import { ACKO_NODE_ROUTES } from "./proposalRoutes/Acko/acko-node-routes";
import { BAJAJ_ROUTES } from "./proposalRoutes/Bajaj/BajajRoutes";
import { BAJAJ_NODE_ROUTES } from "./proposalRoutes/Bajaj/bajaj-node-routes";
import { FutureGenerali_ROUTES } from "./proposalRoutes/FutureGenerali/FutureGeneraliRoutes";
import { FUTURE_GENERALI_NODE_ROUTES } from "./proposalRoutes/FutureGenerali/future-generali-node-routes";
import { GO_DIGIT_ROUTES } from "./proposalRoutes/GoDigit/GoDigitRoutes";
import { GO_DIGIT_NODE_ROUTES } from "./proposalRoutes/GoDigit/go-digit-node-routes";
import { HDFC_ROUTES } from "./proposalRoutes/HDFC/HDFCRoutes";
import { HDFC_NODE_ROUTES } from "./proposalRoutes/HDFC/hdfc-node-routes";
import { ICICI_ROUTES } from "./proposalRoutes/ICICI/ICICIRoutes";
import { ICICI_NODE_ROUTES } from "./proposalRoutes/ICICI/icici-node-routes";
import { IFFCO_TOKIO_ROUTES } from "./proposalRoutes/IffcoTokio/IffcoTokioRoutes";
import { IFFCO_TOKIO_NODE_ROUTES } from "./proposalRoutes/IffcoTokio/iffco-tokio-node-routes";
import { KOTAK_ROUTES } from "./proposalRoutes/Kotak/KotakRoutes";
import { KOTAK_NODE_ROUTES } from "./proposalRoutes/Kotak/kotak-node-routes";
import { MAGMA_ROUTES } from "./proposalRoutes/Magma/MagmaRoutes";
import { MAGMA_NODE_ROUTES } from "./proposalRoutes/Magma/magma-node-routes";
import { RSA_ROUTES } from "./proposalRoutes/RSA/RSARoutes";
import { RSA_NODE_ROUTES } from "./proposalRoutes/RSA/rsa-node-routes";
import { Reliance_ROUTES } from "./proposalRoutes/Reliance/RelianceRoutes";
import { RELIANCE_NODE_ROUTES } from "./proposalRoutes/Reliance/reliance-node-routes";
import { TATA_ROUTES } from "./proposalRoutes/Tata/TataRoutes";
import { TATA_NODE_ROUTES } from "./proposalRoutes/Tata/tata-node-routes";
import { NATIONAL_NODE_ROUTES } from "./proposalRoutes/national/national-node-routes";
import { NATIONAL_ROUTES } from "./proposalRoutes/national/national-routes";

function TWRoutes() {
  const company_code = useAppSelector(
    (state: any) =>
      state.TW.SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code
  );

  const isNodeRoutes = company_code === EMotorCompCode.National;

  return (
    <>
      {company_code && company_code === EMotorCompCode.HDFC
        ? isNodeRoutes
          ? HDFC_NODE_ROUTES
          : HDFC_ROUTES
        : company_code === EMotorCompCode.ICICI
        ? isNodeRoutes
          ? ICICI_NODE_ROUTES
          : ICICI_ROUTES
        : company_code === EMotorCompCode.GO_DIGIT
        ? isNodeRoutes
          ? GO_DIGIT_NODE_ROUTES
          : GO_DIGIT_ROUTES
        : company_code === EMotorCompCode.RSA
        ? isNodeRoutes
          ? RSA_NODE_ROUTES
          : RSA_ROUTES
        : company_code === EMotorCompCode.BAJAJ
        ? isNodeRoutes
          ? BAJAJ_NODE_ROUTES
          : BAJAJ_ROUTES
        : company_code === EMotorCompCode.ACKO
        ? isNodeRoutes
          ? ACKO_NODE_ROUTES
          : ACKO_ROUTES
        : company_code === EMotorCompCode.Kotak
        ? isNodeRoutes
          ? KOTAK_NODE_ROUTES
          : KOTAK_ROUTES
        : company_code === EMotorCompCode.Reliance
        ? isNodeRoutes
          ? RELIANCE_NODE_ROUTES
          : Reliance_ROUTES
        : company_code === EMotorCompCode.FutureGenerali
        ? isNodeRoutes
          ? FUTURE_GENERALI_NODE_ROUTES
          : FutureGenerali_ROUTES
        : company_code === EMotorCompCode.IffcoTokio
        ? isNodeRoutes
          ? IFFCO_TOKIO_NODE_ROUTES
          : IFFCO_TOKIO_ROUTES
        : company_code === EMotorCompCode.TATA
        ? isNodeRoutes
          ? TATA_NODE_ROUTES
          : TATA_ROUTES
        : company_code === EMotorCompCode.Magma
        ? isNodeRoutes
          ? MAGMA_NODE_ROUTES
          : MAGMA_ROUTES
        : company_code === EMotorCompCode.National
        ? NATIONAL_NODE_ROUTES
        : null}
    </>
  );
}

export default TWRoutes;
