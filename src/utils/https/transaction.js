import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const getHistories = (token, controller) => {
  const url = `${baseUrl}transaction/history?page=1&limit=4&filter=MONTH`;
  return axios.get(url, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getUsers = (token, params, controller) => {
  const url = `${baseUrl}user?page=${params.page}&limit=${params.limit}&search=${params.search}`;
  // console.log(url);
  return axios.get(url, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};
