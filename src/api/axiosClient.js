import axios from "axios";
import { configs } from "../configs";

const axiosClient = axios.create({
  baseURL: `${configs.domain}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    const access_token = localStorage.getItem("access_token");
    if (access_token && config.headers) {
      config.headers
        ? (config.headers.Authorization = `Bearer ${access_token}`)
        : (config.headers = {
            Authorization: `Bearer ${access_token}`,
          });
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    switch (error.response.status) {
      case 419:
        return error.response.data;
      case 401:
        return localStorage.removeItem("access_token");
      case 402:
        return error.response.data;
      case 403:
        return error.response.data;
      case 502:
        return error;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
