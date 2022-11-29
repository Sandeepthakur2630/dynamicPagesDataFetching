import axios from "axios";
const ENDPOINT = "https://api.flowboard.skyrockets.space";
const LETS_QA_ENDPOINT = "https://api.letsqa.fun";

let TOKEN: any;

export const get = ({
  route,
  data,
  config,
  endpoint,
  token,
}: Params): Promise<any> => {
  return fetch((endpoint || ENDPOINT) + route, {
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json",

      Authorization: "Bearer " + token,
    },
    ...(data ? { body: data } : {}),
  }).then((response) => response.json());
};

export const post = ({
  route,
  data,
  config,
  endpoint,
  token,
}: Params): Promise<any> => {
  return fetch((endpoint || ENDPOINT) + route, {
    method: "POST", // or 'PUT'
    headers: {
      ...config?.headers,
      Authorization: "Bearer " + token,
    },
    body: data,
  }).then((response) => response.json());
};

export const put = ({
  route,
  data,
  config,
  token,
  endpoint,
}: Params): Promise<any> => {
  return fetch((endpoint || ENDPOINT) + route, {
    method: "PUT", // or 'PUT'
    headers: {
      ...config?.headers,
      Authorization: "Bearer " + token,
    },
    body: data,
  }).then((response) => response.json());
};

export const postProgress = ({
  route,
  token,
  data,
  config,
  endpoint,
}: Params) => {
  return axios.post((endpoint || ENDPOINT) + route, data, {
    ...config,
    headers: {
      ...config?.headers,
      Authorization: "Bearer " + token,
    },
  });
};
type Config = {
  headers: object;
};

type Params = {
  route: string;
  config?: Config;
  endpoint?: string;
  token?: string;
  data?: any;
};
