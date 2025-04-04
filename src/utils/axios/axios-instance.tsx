import axios, { Canceler } from "axios";
import { SESSION_CONSTANTS } from "../constants/session-constants";

/**
 * Axios API instance wrapper with cancellation and error handling.
 */
export default class AxiosInstance {
  public api: any;
  public cancelApi: Canceler;
  private ongoingRequests: Set<string> = new Set();

  constructor() {
    const token = sessionStorage.getItem(SESSION_CONSTANTS.ACCESS_TOKEN);
    const session_id = sessionStorage.getItem(SESSION_CONSTANTS.SESSION_ID);
    if (!token) {
      // Redirect the user to the login page or handle unauthorized access
      // window.location.pathname = ALL_ROUTES.PROPOSAL_PAGE;
    }

    this.api = axios.create({
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // AccessToken: `${token}`,
        // UserSessionId: session_id,
      },
    });

    // Request interceptor
    this.api.interceptors.request.use(
      (config: any) => {
        const { url } = config;
        if (this.ongoingRequests.has(url)) {
          // If the request is already in progress, cancel it
          return Promise.reject({ canceled: true });
        }
        this.ongoingRequests.add(url);
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.api.interceptors.response.use(
      (response: any) => {
        const { config } = response;
        const { url } = config;
        this.ongoingRequests.delete(url);
        return response;
      },
      (error: any) => {
        const { config } = error;
        const { url } = config;
        this.ongoingRequests.delete(url);
        return Promise.reject(error);
      }
    );

    this.cancelApi = () => {
      // Clear the ongoingRequests set to cancel all ongoing requests
      this.ongoingRequests.clear();
    };
  }
}

/**
 * Utility class for making POST requests using Axios.
 */
export class PostAPI {
  /**
   * Makes a POST request to the specified URL.
   * @param url - The URL to make the request to.
   * @param dto - The data to send in the request body.
   * @param onSuccess - The callback function to execute on successful response.
   * @param config - Additional Axios request configuration.
   * @param onError - The callback function to execute on error.
   * @param onFinal - The callback function to execute after the request is completed (success or error).
   * @returns The canceler function to cancel the request.
   */
  static call(
    url: string,
    dto: any,
    onSuccess: Function = () => {},
    config: Object = {},
    onError: Function = () => {},
    onFinal: Function = () => {}
  ): Canceler {
    const api = new AxiosInstance();
    api.api
      .post(url, dto, config)
      .then((res: any) => {
        onSuccess(res);
      })
      .catch((err: any) => {
        onError(err);
        // Handle the error using React Toastify
        // toast.error(err);
      })
      .finally(() => {
        onFinal();
      });
    return api.cancelApi;
  }
}

/**
 * Utility class for making GET requests using Axios.
 */
export class GetAPI {
  /**
   * Makes a GET request to the specified URL.
   * @param url - The URL to make the request to.
   * @param onSuccess - The callback function to execute on successful response.
   * @param config - Additional Axios request configuration.
   * @param onError - The callback function to execute on error.
   * @param onFinal - The callback function to execute after the request is completed (success or error).
   * @returns The canceler function to cancel the request.
   */
  static call(
    url: string,
    onSuccess: Function = () => {},
    config: Object = {},
    onError: Function = () => {},
    onFinal: Function = () => {}
  ): Canceler {
    const api = new AxiosInstance();
    api.api
      .get(url, config)
      .then((res: any) => {
        onSuccess(res);
      })
      .catch((err: any) => {
        onError(err);
        // Handle the error using React Toastify
        // toast.error(err.response.data.message ?? err);
      })
      .finally(() => {
        onFinal();
      });
    return api.cancelApi;
  }
}

export class PutAPI {
  static call(
    url: string,
    dto: any,
    onSuccess: Function = () => {},
    config: Object = {},
    onError: Function = () => {},
    onFinal: Function = () => {}
  ): Canceler {
    const api = new AxiosInstance();
    api.api
      .put(url, dto, config)
      .then((res: any) => {
        onSuccess(res);
      })
      .catch((err: any) => {
        onError(err);
      })
      .finally(() => {
        onFinal();
      });
    return api.cancelApi;
  }
}

export class PatchAPI {
  static call(
    url: string,
    dto: any,
    onSuccess: Function = () => {},
    config: Object = {},
    onError: Function = () => {},
    onFinal: Function = () => {}
  ): Canceler {
    const api = new AxiosInstance();
    api.api
      .patch(url, dto, config)
      .then((res: any) => {
        onSuccess(res);
      })
      .catch((err: any) => {
        onError(err);
      })
      .finally(() => {
        onFinal();
      });
    return api.cancelApi;
  }
}

export class DeleteAPI {
  static call(
    url: string,
    onSuccess: Function = () => {},
    config: Object = {},
    onError: Function = () => {},
    onFinal: Function = () => {}
  ): Canceler {
    const api = new AxiosInstance();
    api.api
      .delete(url, config)
      .then((res: any) => {
        onSuccess(res);
      })
      .catch((err: any) => {
        onError(err);
      })
      .finally(() => {
        onFinal();
      });
    return api.cancelApi;
  }
}
