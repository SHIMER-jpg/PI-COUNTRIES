// export const NEXT_PAGE = "NEXT_PAGE"
// export const PREVIOUS_PAGE = "PREVIOUS_PAGE"
// export const GET_PAGE = "GET_COUNTRIES"
import axios from "axios"
export const GET_COUNTRY_LIST = "GET_COUNTRY_LIST"
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL"
export const CREATE_ACTIVITY = "CREATE_ACTIVITY"
export const NEXT_PAGE = "NEXT_PAGE"
export const PREVIOUS_PAGE = "PREVIOUS_PAGE"

export function getCountryList(payload){//receives searchString
    return function(dispatch){
        return axios.get("http://localhost:3001/countries?name=" + payload).then(json=>{
            dispatch({type: GET_COUNTRY_LIST, payload: json.data})})
    }
} 

export function getCountryDetail(payload){//receivesID
    return function(dispatch){
        return axios.get("http://localhost:3001/countries/" + payload).then(json=>{
            dispatch({type: GET_COUNTRY_DETAIL, payload: json.data})})
    }
} 


export function createActivity(payload){//receives OBJECT with activity
    return function(dispatch){
        return axios.post("http://localhost:3001/activity",payload).then(json=>{
            dispatch({type: CREATE_ACTIVITY, payload: json.data})})
    }
} 

export function nextPage(payload){ //Receives page number
    return ({type:NEXT_PAGE,payload})
}
export function previousPage(payload){ //Receives pagenumber
    return ({type:PREVIOUS_PAGE,payload})
}

export default {
    GET_COUNTRY_DETAIL,
    GET_COUNTRY_LIST,
    CREATE_ACTIVITY,
    NEXT_PAGE,
    PREVIOUS_PAGE
}