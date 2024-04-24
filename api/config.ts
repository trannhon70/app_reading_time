import axios from "axios";

const baseURL = "https://backend.readingtime.vn/api/v1";
// const token: any | null = localStorage.getItem("token");
// let tokenPasre = JSON.parse(token);
// console.log(tokenPasre, 'ton')

console.log(baseURL, "baseURL");

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${tokenPasre}`
  },
});

instance.interceptors.request.use(
  (config) => {
    // if (tokenPasre) {
    //   config.headers.Authorization = `Bearer ${tokenPasre}`;
    // } else {
    //   console.warn("Authorization header omitted due to missing token");
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
