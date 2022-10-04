import localStorageUtils from "@/utils/utils_local_storage";

const state = () => ({
  current: localStorageUtils.getCurrentUser() || null,
  profile: null,
  isLogin: true,
  user: null,
});

export default state;
