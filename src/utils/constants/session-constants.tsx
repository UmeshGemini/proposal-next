const hostname = window.location.hostname;

export const SESSION_CONSTANTS = {
  SESSION_ID: `${hostname}_SESSION_ID`,
  ACCESS_TOKEN: `${hostname}_ACCESS_TOKEN`,
} as const;
