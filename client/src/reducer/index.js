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
    FILTER_RESULTS,
    ORDER_RESULTS_NAME,
    ORDER_RESULTS_POP,
    } from "../actions";

var initialState = {
    continentList:[],
    activityList:[],
    countryList:[],
    modifiedCountryList:[],
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
                modifiedCountryList: action.payload,
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
        case FILTER_RESULTS:
            //APPLY FILTERING MADE ON ORGANIZER
            var modifiedCountryList=[]
            return{
                ...state,
                modifiedCountryList: modifiedCountryList
            }

        case ORDER_RESULTS_NAME:
            //RE ORDER RESULTS
            
            console.log(state.modifiedCountryList[0])
            var modifiedCountryList = state.modifiedCountryList
            modifiedCountryList= action.payload=="0"? state.modifiedCountryList.sort():state.modifiedCountryList.sort().reverse();
            console.log(modifiedCountryList[0])
            return{
                ...state,
                modifiedCountryList: modifiedCountryList
            }
        
        case ORDER_RESULTS_POP:
            //FILTER ONLY RESULTS WITHIN POPULATION
            const {max,min} =action.payload
            var modifiedCountryList= state.countryList.filter(country=>{
                return max>country.population && min<country.population
            })
            return{
                ...state,
                modifiedCountryList: modifiedCountryList
            }

        default:
            return state
    }
    // FILTER_RESULTS,
    // ORDER_RESULTS_NAME,
    // ORDER_RESULTS_POP,
}