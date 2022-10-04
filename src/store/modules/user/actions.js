import axiosClient from "@/api/axiosClient";
import actionType from "./action_types";

export const actions = {
  [actionType.ACT_SIGNUP]: async (context, userInfo) => {
    return axiosClient.post(userInfo);
  },
};
