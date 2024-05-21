import axios from "axios";
const BASE_URL = "http://34.18.44.78:8080";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
export default axios.create({
  baseURL: BASE_URL,
  headers: {
    ...headers,
    "x-ms-principal": "superadmin",
    "x-ms-credential": "superadmin",
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: headers,
});
