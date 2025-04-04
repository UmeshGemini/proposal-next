interface ClientDomains {
  [key: string]: string;
}

const DEV_DOMAINS: ClientDomains = {
  JIO: "devev.jioinsure.in",
  AMAZE: "dev.bimastreet.com",
  MOTILAL: "devmo.evervent.in",
  MOTILAL_PHP: "devmoquote.evervent.in",
  WALNNUT: "dev2.walnnut.com",
  MUTHOOT: "dev.muthootinsurancebrokers.com",
  POLICYPARIVAAR: "dev2.policyparivaar.com",
  UNISON: "devunison.evervent.live",
  CLICKPOLICY: "dev.1clickpolicy.com",
  AHALIA: "dev2.policyfirst.com",
  BESECURED: "dev2.besecured.in",
  INSTANTBEEMA: "add_domain_here",
  BIMABUY: "add_domain_here",
  JRK: "add_domain_here",
  SAHREINDIA: "add_domain_here",
  GROWWINSURANCE: "dev.aiinsurancebazar.com",
  BANKIT: "dev.bankitbima.in",
  LOCALHOST: "localhost",
};

const STG_DOMAINS: ClientDomains = {
  JIO: "stgev.jioinsure.in",
  AMAZE: "stg.bimastreet.com",
  MOTILAL: "stgmo.evervent.in",
  MOTILAL_PHP: "devmoquote.evervent.in",
  WALNNUT: "stg.walnnut.com",
  MUTHOOT: "stg.muthootinsurancebrokers.com",
  POLICYPARIVAAR: "stg2.policyparivaar.com",
  UNISON: "stgv2.unisoninsurance.net",
  CLICKPOLICY: "stg.1clickpolicy.com",
  AHALIA: "stg.policyfirst.com",
  BESECURED: "stg.besecured.in",
  INSTANTBEEMA: "add_domain_here",
  BIMABUY: "add_domain_here",
  JRK: "add_domain_here",
  SAHREINDIA: "add_domain_here",
  GROWWINSURANCE: "stg.aiinsurancebazar.com",
  LOCALHOST: "localhost",
};

const PROD_DOMAINS: ClientDomains = {
  JIO: "jioinsure.in",
  AMAZE: "bimastreet.com",
  MOTILAL: "insurance.motilaloswal.com",
  MOTILAL_PHP: "devmoquote.evervent.in",
  WALNNUT: "walnnut.com",
  MUTHOOT: "muthootinsurancebrokers.com",
  POLICYPARIVAAR: "policyparivaar.com",
  UNISON: "bima.unisoninsurance.net",
  CLICKPOLICY: "1clickpolicy.com",
  AHALIA: "policyfirst.com",
  BESECURED: "besecured.in",
  INSTANTBEEMA: "add_domain_here",
  BIMABUY: "add_domain_here",
  JRK: "add_domain_here",
  SAHREINDIA: "add_domain_here",
  GROWWINSURANCE: "aiinsurancebazar.com",
  LOCALHOST: "localhost",
};

const DEFAULT_DOMAINS: ClientDomains = {
  JIO: "",
  AMAZE: "",
  MOTILAL: "",
  MOTILAL_PHP: "",
  WALNNUT: "",
  MUTHOOT: "",
  POLICYPARIVAAR: "",
  UNISON: "",
  CLICKPOLICY: "",
  AHALIA: "",
  BESECURED: "",
  INSTANTBEEMA: "",
  BIMABUY: "",
  JRK: "",
  SAHREINDIA: "",
  GROWWINSURANCE: "",
  LOCALHOST: "",
};

const getDomains = (): ClientDomains => {
  switch (process.env.NEXT_PUBLIC_ENV) {
    case "DEV":
      return DEV_DOMAINS;
    case "STG":
      return STG_DOMAINS;
    case "PROD":
      return PROD_DOMAINS;
    default:
      return DEFAULT_DOMAINS;
  }
};

export const CLIENTS = getDomains();
