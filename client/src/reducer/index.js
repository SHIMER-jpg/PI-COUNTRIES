import {     
    GET_COUNTRY_DETAIL,
    GET_COUNTRY_LIST,
    CREATE_ACTIVITY,
    NEXT_PAGE,
    PREVIOUS_PAGE, 
    FILTER_RESULTS,
    ORDER_RESULTS_NAME,
    ORDER_RESULTS_POP,
    SET_PAGE,
    } from "../actions";

var initialState = {
    continentList:[],
    activityList:[],
    countryList:[],
    countryCodeList:[],
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
            var countryCodeList = []
            action.payload.forEach(country =>{
                countryCodeList.push(country.id)
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
                countryCodeList: countryCodeList,
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
            var value = state.page== Math.round(state.countryList.length/9) ? Math.round(state.countryList.length/9):state.page+1
            return {
                ...state,
                page: value
            }

        case PREVIOUS_PAGE:
            var value = state.page==1? 1:state.page-1
            return {
                ...state,
                page: value
            }
        
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        
        case CREATE_ACTIVITY:
            return{
                ...state,
                newActivity: action.payload
            }
        case FILTER_RESULTS:
            //APPLY FILTERING MADE ON ORGANIZER
            var continent = action.payload.filterByContinent
            var activityList = action.payload.filterByActivity
            var countryList=state.countryList

            if(continent!=""){
                countryList=countryList.filter(country =>{
                    return country.continent==continent
                })
            }

            if(activityList.length>0){
                countryList=countryList.filter(country=>{
                    var flag = country.activities.length>0?country.activities.reduce((acc,cur)=>{
                        return activityList.includes(cur.name) || acc
                    }):false;
                    return flag;
                })
            }

            return{
                ...state,
                countryList: [...countryList]
            }

        case ORDER_RESULTS_NAME:
            //RE ORDER RESULTS
            var countryList = state.countryList
            if(action.payload==="0")
                countryList.sort((a,b)=> a.name>b.name?1:-1);
            else
                countryList.sort((a,b)=> a.name<b.name?1:-1);
                
            return{
                ...state,
                countryList: [...countryList]
            }
        
        case ORDER_RESULTS_POP: //orders result by population
            var countryList = state.countryList
            if(action.payload==="0")
                countryList.sort((a,b)=> a.population<b.population?1:-1);
            else
                countryList.sort((a,b)=> a.population>b.population?1:-1);
                
            return{
                ...state,
                countryList: [...countryList]
            }

        default:
            return state
    }
    // FILTER_RESULTS,
    // ORDER_RESULTS_NAME,
    // ORDER_RESULTS_POP,
}
