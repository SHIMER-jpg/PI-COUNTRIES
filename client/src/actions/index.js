// export const NEXT_PAGE = "NEXT_PAGE"
// export const PREVIOUS_PAGE = "PREVIOUS_PAGE"
// export const GET_PAGE = "GET_COUNTRIES"
import axios from "axios";
export const GET_COUNTRY_LIST = "GET_COUNTRY_LIST";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";

export const NEXT_PAGE = "NEXT_PAGE";
export const SET_PAGE = "SET_PAGE";
export const PREVIOUS_PAGE = "PREVIOUS_PAGE";
export const SET_LOADING_ERROR = "SET_LOADING_ERROR";

export const FILTER_RESULTS = "FILTER_RESULTS";

export const ORDER_RESULTS_NAME = "ORDER_RESULTS_NAME";

export const ORDER_RESULTS_POP = "ORDER_RESULTS_POP";

export const FIRST_LOGIN = "FIRST_LOGIN";

export function getCountryList(payload) {
  //receives searchString
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/countries?name=" + payload)
      .then((json) => {
        dispatch({ type: GET_COUNTRY_LIST, payload: json.data });
      })
      .catch((err) => {
        dispatch({ type: SET_LOADING_ERROR });
      });
  };
}

export function getCountryDetail(payload) {
  //receivesID
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/countries/" + payload)
      .then((json) => {
        dispatch({ type: GET_COUNTRY_DETAIL, payload: json.data });
      });
  };
}

export function createActivity(payload) {
  //receives OBJECT with activity
  return function (dispatch) {
    return axios
      .post("http://localhost:3001/activity", payload)
      .then((json) => {
        dispatch({ type: CREATE_ACTIVITY, payload: json.data });
      });
  };
}

export function nextPage() {
  //PAGE+1
  return { type: NEXT_PAGE };
}

export function setPage(payload) {
  //Receives pagenumber
  return { type: SET_PAGE, payload };
}

export function previousPage() {
  //PAGE -1
  return { type: PREVIOUS_PAGE };
}

export function filterResults(payload) {
  //Receives Object with filters
  return { type: FILTER_RESULTS, payload };
}

export function orderResultsByName(payload) {
  //receives either ASC or DESC
  return { type: ORDER_RESULTS_NAME, payload };
}

export function orderResultsByPopulation(payload) {
  //receives two ints
  return { type: ORDER_RESULTS_POP, payload };
}

export function firstLogin() {
  return { type: FIRST_LOGIN };
}

export default {
  GET_COUNTRY_DETAIL,
  GET_COUNTRY_LIST,
  CREATE_ACTIVITY,
  NEXT_PAGE,
  PREVIOUS_PAGE,
};
