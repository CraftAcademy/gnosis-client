import axios from "axios";

export const setupInterceptors = () => {
  axios.interceptors.request.use(
    request => {
      request.headers = {
        ...request.headers,
        "access-token": localStorage.getItem(["access-token"]),
        client: localStorage.getItem(["client"]),
        uid: localStorage.getItem(["uid"])
      };
      return request;
    },
    error => Promise.reject(error)
  );
};
