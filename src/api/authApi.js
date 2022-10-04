import axiosClient from "./axiosClient";

const prefixApi = "auth";

const authApi = {
  signUp(userInfo) {
    const url = `${prefixApi}/signup`;
    return axiosClient.post(url, userInfo);
  },
  login(userInfo) {
    const url = `${prefixApi}/login`;
    return axiosClient.post(url, userInfo);
  },
};

export default authApi;
