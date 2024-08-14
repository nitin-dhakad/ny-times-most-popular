import axios from "axios";
import ENV from "../env.json";
import APIs from "./apis";
const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = ENV.BaseUrl;
axiosInstance.defaults.timeout = ENV.APITimeout;
axiosInstance.defaults.params = { "api-key": ENV.NYTimesAPIKey };

const get = async (url: string, params?: object) => {
  try {
    const response = await axiosInstance.get(url, params);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const endPoints = {
  get,
  APIs,
  // Add more methods for other endpoints if needed
};

export default endPoints;
