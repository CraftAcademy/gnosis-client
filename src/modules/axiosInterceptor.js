import axios from "axios";

export const setupInterceptors = () => {
  axios.interceptors.request.use(request => {
    if (request.url.includes('https://api.opencagedata.com/geocode/')) {
      return request;
    } else {
      request.headers = {
        ...request.headers,
        "access-token": localStorage.getItem(["access-token"]),
        client: localStorage.getItem(["client"]),
        uid: localStorage.getItem(["uid"])
      };
      return request;
    }
  },
    error => Promise.reject(error)
  );
};
