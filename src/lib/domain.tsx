import { getHostName } from "@/utils/helpers";
import { CLIENTS } from "./Clients";

interface DomainConfig {
  nodeDomain: string;
  phpDomain: string;
  frontendDomain: string;
  laravelDomain?: string;
  crmDomain?: string;
}

type Environment = "DEV" | "STG" | "PROD";

interface ClientConfig {
  [key: string]: {
    DEV?: DomainConfig;
    STG?: DomainConfig;
    PROD?: DomainConfig;
    default?: DomainConfig;
  };
}

const configs: ClientConfig = {
  [CLIENTS.GROWWINSURANCE]: {
    DEV: {
      nodeDomain: "https://devnodeapi.aiinsurancebazar.com",
      phpDomain: "https://devapi.aiinsurancebazar.com",
      laravelDomain: "https://devapiv2.aiinsurancebazar.com",
      frontendDomain: "https://dev.aiinsurancebazar.com",
    },
    STG: {
      nodeDomain: "https://stgnodeapi.aiinsurancebazar.com",
      phpDomain: "https://stgapi.aiinsurancebazar.com",
      laravelDomain: "https://stgapiv2.aiinsurancebazar.com",
      frontendDomain: "https://stg.aiinsurancebazar.com",
    },
    PROD: {
      nodeDomain: "https://nodeapi.aiinsurancebazar.com",
      phpDomain: "https://api.aiinsurancebazar.com",
      frontendDomain: "https://aiinsurancebazar.com",
    },
  },
  [CLIENTS.BANKIT]: {
    DEV: {
      nodeDomain: "https://devnodeapi.bankitbima.in",
      phpDomain: "https://devapi.bankitbima.in",
      frontendDomain: "https://dev.bankitbima.in",
    },
    STG: {
      nodeDomain: "https://stgnodeapi.bankitbima.in",
      phpDomain: "https://stgapi.bankitbima.in",
      frontendDomain: "https://stg.bankitbima.in",
    },
    PROD: {
      nodeDomain: "https://nodeapi.bankitbima.in",
      phpDomain: "https://api.bankitbima.in",
      frontendDomain: "https://bankitbima.in",
    },
  },
  [CLIENTS.BESECURED]: {
    DEV: {
      nodeDomain: "https://devnodeapi.besecured.in",
      phpDomain: "https://devapi.besecured.in",
      laravelDomain: "https://devapiv2.besecured.in",
      frontendDomain: "https://dev2.besecured.in",
    },
    STG: {
      nodeDomain: "https://devnodeapi.besecured.in",
      phpDomain: "https://devapi.besecured.in",
      laravelDomain: "https://devapiv2.besecured.in",
      frontendDomain: "https://stg.besecured.in",
    },
    PROD: {
      nodeDomain: "https://devnodeapi.besecured.in",
      phpDomain: "https://devapi.besecured.in",
      laravelDomain: "https://devapiv2.besecured.in",
      frontendDomain: "https://besecured.in",
    },
  },
  [CLIENTS.AMAZE]: {
    DEV: {
      nodeDomain: "https://devnodeapi.bimastreet.com",
      phpDomain: "https://devapi.bimastreet.com",
      laravelDomain: "https://devapiv2.bimastreet.com",
      frontendDomain: "https://dev.bimastreet.com",
    },
    STG: {
      nodeDomain: "https://stgnodeapi.bimastreet.com",
      phpDomain: "https://stgapi.bimastreet.com",
      laravelDomain: "https://stgapiv2.bimastreet.com",
      frontendDomain: "https://stg.bimastreet.com",
    },
    PROD: {
      nodeDomain: "https://nodeapi.bimastreet.com",
      phpDomain: "https://api.bimastreet.com",
      frontendDomain: "https://bimastreet.com",
    },
  },
  [CLIENTS.AHALIA]: {
    DEV: {
      nodeDomain: "https://devnodeapi.policyfirst.com",
      phpDomain: "https://devapi.policyfirst.com",
      laravelDomain: "https://devapiv2.policyfirst.com",
      frontendDomain: "https://dev2.policyfirst.com",
    },
    STG: {
      nodeDomain: "https://stgnodeapi.policyfirst.com",
      phpDomain: "https://stgapi.policyfirst.com",
      laravelDomain: "https://stgapiv2.policyfirst.com",
      frontendDomain: "https://stg.policyfirst.com",
    },
    PROD: {
      nodeDomain: "https://nodeapi.policyfirst.com",
      phpDomain: "https://api.policyfirst.com",
      frontendDomain: "https://policyfirst.com",
    },
  },
  [CLIENTS.POLICYPARIVAAR]: {
    DEV: {
      nodeDomain: "https://devnodeapi.policyparivaar.com",
      phpDomain: "https://devapi.policyparivaar.com",
      laravelDomain: "https://devapiv2.policyparivaar.com",
      frontendDomain: "https://dev2.policyparivaar.com",
    },
    STG: {
      nodeDomain: "https://stgnodeapi.policyparivaar.com",
      phpDomain: "https://stgapi.policyparivaar.com",
      laravelDomain: "https://stgapiv2.policyparivaar.com",
      frontendDomain: "https://stg2.policyparivaar.com",
    },
    PROD: {
      nodeDomain: "https://nodeapi.policyparivaar.com",
      phpDomain: "https://api.policyparivaar.com",
      laravelDomain: "https://apiv2.policyparivaar.com",
      frontendDomain: "https://policyparivaar.com",
    },
  },
  [CLIENTS.UNISON]: {
    DEV: {
      nodeDomain: "https://devnodeapi.evervent.live",
      phpDomain: "https://devapi.evervent.live",
      frontendDomain: "https://devunison.evervent.live",
    },
    STG: {
      nodeDomain: "https://stgnodeapi.unisoninsurance.net",
      phpDomain: "https://stgapi.unisoninsurance.net",
      frontendDomain: "https://stgv2.unisoninsurance.net",
    },
    PROD: {
      nodeDomain: "https://nodeapi.unisoninsurance.net",
      phpDomain: "https://apiv1.unisoninsurance.net",
      frontendDomain: "https://bima.unisoninsurance.net",
    },
  },
  [CLIENTS.CLICKPOLICY]: {
    DEV: {
      nodeDomain: "https://devnodeapi.1clickpolicy.com",
      phpDomain: "https://devapi.1clickpolicy.com",
      laravelDomain: "https://devapiv2.1clickpolicy.com",
      frontendDomain: "https://dev.1clickpolicy.com",
    },
    STG: {
      nodeDomain: "https://stgnodeapi.1clickpolicy.com",
      phpDomain: "https://stgapi.1clickpolicy.com",
      laravelDomain: "https://stgapiv2.1clickpolicy.com",
      frontendDomain: "https://stg.1clickpolicy.com",
    },
    PROD: {
      nodeDomain: "https://nodeapi.1clickpolicy.com",
      phpDomain: "https://api.1clickpolicy.com",
      laravelDomain: "https://apiv2.1clickpolicy.com",
      frontendDomain: "https://1clickpolicy.com",
    },
  },
  [CLIENTS.WALNNUT]: {
    DEV: {
      nodeDomain: "https://devnodeapi.walnnut.com",
      phpDomain: "https://devapi.walnnut.com",
      laravelDomain: "https://devapiv2.walnnut.com",
      frontendDomain: "https://dev2.walnnut.com",
    },
    STG: {
      nodeDomain: "https://stgnodeapi.walnnut.com",
      phpDomain: "https://stgapi.walnnut.com",
      laravelDomain: "https://stgapiv2.walnnut.com",
      frontendDomain: "https://stg.walnnut.com",
    },
    PROD: {
      nodeDomain: "https://nodeapi.walnnut.com",
      phpDomain: "https://api.walnnut.com",
      laravelDomain: "https://apiv2.walnnut.com",
      frontendDomain: "https://walnnut.com",
    },
  },
  [CLIENTS.BESECURED]: {
    DEV: {
      nodeDomain: "https://devnodeapi.besecured.in",
      phpDomain: "https://devapi.besecured.in",
      laravelDomain: "https://devapiv2.besecured.in",
      frontendDomain: "https://dev2.besecured.in",
    },
    STG: {
      nodeDomain: "https://stgnodeapi.besecured.in",
      phpDomain: "https://stgapi.besecured.in",
      laravelDomain: "https://stgapiv2.besecured.in",
      frontendDomain: "https://stg.besecured.in",
    },
    PROD: {
      nodeDomain: "https://nodeapi.besecured.in",
      phpDomain: "https://api.besecured.in",
      laravelDomain: "https://apiv2.besecured.in",
      frontendDomain: "https://besecured.in",
    },
  },
  [CLIENTS.JIO]: {
    DEV: {
      nodeDomain: "https://devnodeapiev.jioinsure.in",
      phpDomain: "https://devapiev.jioinsure.in",
      frontendDomain: "https://devev.jioinsure.in",
      crmDomain: "https://devevcrm.jioinsure.in",
      laravelDomain: "https://devapiv2.jioinsure.in",
    },
    STG: {
      nodeDomain: "https://stgnodeapiev.jioinsure.in",
      phpDomain: "https://stgapiev.jioinsure.in",
      laravelDomain: "https://stgapiev2.jioinsure.in",
      frontendDomain: "https://stgev.jioinsure.in",
      crmDomain: "https://stgevcrm.jioinsure.in",
    },
    PROD: {
      nodeDomain: "https://nodeapiev.jioinsure.in",
      phpDomain: "https://api.jioinsure.in",
      laravelDomain: "https://apiv2.jioinsure.in",
      frontendDomain: "https://jioinsure.in",
      crmDomain: "https://crm.jioinsure.in",
    },
  },
  [CLIENTS.MOTILAL]: {
    DEV: {
      nodeDomain: "https://nodemofsl.evervent.in",
      laravelDomain: "https://devmoapiv2.evervent.in",
      phpDomain: "https://devapimo.evervent.in",
      frontendDomain: "https://devmo.evervent.in",
    },
    STG: {
      nodeDomain: "https://stgmonode.evervent.in",
      laravelDomain: "https://stgmoapiv2.evervent.in",
      phpDomain: "https://stgmoapi.evervent.in",
      frontendDomain: "https://stgmo.evervent.in",
    },
    PROD: {
      nodeDomain: "https://nodeapi.insurance.motilaloswal.com",
      phpDomain: "https://api.insurance.motilaloswal.com",
      frontendDomain: "https://insurance.motilaloswal.com",
    },
  },
  [CLIENTS.MOTILAL_PHP]: {
    default: {
      nodeDomain: "https://nodemofsl.evervent.in",
      laravelDomain: "https://devmoapiv2.evervent.in",
      phpDomain: "https://devapimo.evervent.in",
      frontendDomain: "https://devmo.evervent.in",
    },
  },
  [CLIENTS.MUTHOOT]: {
    DEV: {
      nodeDomain: "https://devnodeapi.muthootinsurancebrokers.com",
      laravelDomain: "https://devapiv2.muthootinsurancebrokers.com",
      phpDomain: "https://devapi.muthootinsurancebrokers.com",
      frontendDomain: "https://dev.muthootinsurancebrokers.com",
    },
    STG: {
      nodeDomain: "https://stgnode.muthootinsurancebrokers.com",
      phpDomain: "https://stgapi.muthootinsurancebrokers.com",
      laravelDomain: "https://stgapiv2.muthootinsurancebrokers.com",
      frontendDomain: "https://stg.muthootinsurancebrokers.com",
    },
    PROD: {
      nodeDomain: "https://nodeapi.muthootinsurancebrokers.com",
      phpDomain: "https://api.muthootinsurancebrokers.com",
      laravelDomain: "https://apiv2.muthootinsurancebrokers.com",
      frontendDomain: "https://muthootinsurancebrokers.com",
    },
  },
  [CLIENTS.LOCALHOST]: {
    DEV: {
      nodeDomain: "https://nodeapi.walnnut.com",
      phpDomain: "https://api.walnnut.com",
      laravelDomain: "https://apiv2.walnnut.com",
      frontendDomain: "https://walnnut.com",
    },
  },
};

const getClientConfig = (
  client: string,
  env: Environment | "default"
): DomainConfig | undefined => {
  return configs[client]?.[env] || configs[client]?.default;
};

const env = (process.env.NEXT_PUBLIC_ENV as Environment) || "default";
const client = getHostName();
const clientConfig = getClientConfig(client, env);

export const NODE_DOMAIN =
  clientConfig?.nodeDomain ?? process.env.NEXT_PUBLIC_BACKEND_DOMAIN;
export const PHP_DOMAIN = clientConfig?.phpDomain ?? "";
export const FRONTEND_DOMAIN = clientConfig?.frontendDomain ?? "";
export const LARAVEL_DOMAIN = clientConfig?.laravelDomain ?? "";
export const CRM_DOMAIN = clientConfig?.crmDomain ?? "";
