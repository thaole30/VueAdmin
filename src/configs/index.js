export const configs = {
  domain: process.env.VUE_URL || `http://localhost:8000`,
  header: {
    headers: {
      "Content-Type": "multipart/form-data",
      type: "formData",
    },
  },
  staleTime: { staleTime: Infinity },
};
