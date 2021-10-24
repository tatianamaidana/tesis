import { CSRF_TOKEN } from "../service/csrf_token";
import BASEURL from "./baseurl";
import { DeviceUUID } from "device-uuid";

const handleResponse = async (response) => {
  const data = await response.json();
  if (response.status < 400) {
    return data;
  } else {
    return { error: data };
  }
};

const apiService = (endpoint, method, data, conToken = true, query_params=null) => {
  // D.R.Y. code to make HTTP requests to the REST API backend using fetch
  let finalQueryParams = "";
  if (query_params){
    Object.entries(query_params).forEach((kv, i) => {
      if(i === 0 && !endpoint.includes("?")){
        finalQueryParams += "?" 
      } else {
        finalQueryParams += "&" 
      }
      finalQueryParams += kv[0] + "=" + kv[1]
    })
  }

  let uuid = new DeviceUUID().get();
  const config = {
    method: method || "GET",
    body: data ? JSON.stringify(data) : null,
    headers: {
      "Content-Type": "application/json",
      "X-CSRFTOKEN": CSRF_TOKEN,
      "TFA-Device-uuid": uuid,
    },
  };
  if (conToken) {
    config.headers.Authorization = `Token ${window.localStorage.getItem(
      "authToken"
    )}`;
  }
  return fetch(`${BASEURL}${endpoint}${finalQueryParams}`, config)
    .then(handleResponse)
    .catch((error) => {
      console.log(error);
      return { error: error };
    });
};

export default apiService;