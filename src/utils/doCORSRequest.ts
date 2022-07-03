import { corsApiUrl } from "./api-address";
import axios, { AxiosResponse, AxiosRequestHeaders } from "axios";

class DoCORSRequest {
  _headers: AxiosRequestHeaders;

  constructor() {
    this._headers = {
      "Content-type": "application/json",
      Accept: "application/json",
    };
  }

  _handleResponse(response: AxiosResponse) {
    return (response.statusText = "OK" ? response.data : Promise.reject(response.status));
  }

  get(url: string) {
    return axios.get(`${corsApiUrl}${url}`, { headers: this._headers }).then(this._handleResponse);
  }
}

const doCORSRequest = new DoCORSRequest();

export default doCORSRequest;
