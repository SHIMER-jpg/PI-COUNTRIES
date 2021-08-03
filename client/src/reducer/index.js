/*
States to track:

- Array with 9 countries
- Page number
- Country details
- Activities Related
- Activity to add
 */

import {     
    GET_COUNTRY_DETAIL,
    GET_COUNTRY_LIST,
    CREATE_ACTIVITY,
    NEXT_PAGE,
    PREVIOUS_PAGE, 
    } from "../actions";

var initialState = {
    continentList:[],
    activityList:[],
    countryList:[],
    countryDetails:{},
    page:1,
    newActivity:{},
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case GET_COUNTRY_LIST:

            // Compongo las listas de actividades y continentes
            var activityList = []
            var continentList = []
            action.payload.forEach(country =>{
                if(!continentList.includes(country.continent)){
                    continentList.push(country.continent)
                }
                country.activities.forEach(activity =>{
                    if(!activityList.includes(activity.name)){
                        activityList.push(activity.name)
                    }
                })
            })
            return {
                ...state,
                countryList: action.payload,
                activityList: activityList,
                continentList: continentList
            }

        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetails: action.payload
            }

        case NEXT_PAGE:
            return {
                ...state,
                page: state.page+1
            }

        case PREVIOUS_PAGE:
            return {
                ...state,
                page: state.page-1
            }
        
        case CREATE_ACTIVITY:
            return{
                ...state,
                newActivity: action.payload
            }
        default:
            return state
    }
}