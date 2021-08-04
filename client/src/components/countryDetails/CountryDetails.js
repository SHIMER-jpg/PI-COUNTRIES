
import styles from "./CountryDetails.module.css"
import { connect } from "react-redux"
import { getCountryDetail } from "../../actions"
import { useEffect } from "react"
import ActivityCard from "../activityCard/ActivityCard"

export  function CountryDetails(props){

        /*"name": "Afghanistan",
    "flag": "https://restcountries.eu/data/afg.svg",
    "continent": "Asia",
    "capital": "Kabul",
    "subregion": "Southern Asia",
    "area": 652230,
    "population": 27657145, */
    
    useEffect(()=>{
        props.getCountryDetail(props.match.params.id)
    },[])

    var {name,flag,continent,capital,subregion,area,population,activities} = props.countryDetails
    console.log(props)
    return (
    <>
        <div className={styles.detailsContainer}>
            {/* <h2 className={styles.title}>{name?name.toUpperCase():name} </h2> */}
            <h2 className={styles.title}>{name? name.toUpperCase():"loading"} </h2>
            <img className={styles.flagImg} src={`${flag}`}/>
            <div className={styles.infoContainer}>
                <span className={styles.text}>Capital: {capital}</span>
                <span className={styles.text}>SubRegion: {subregion}</span>
                <span className={styles.text}>Continent: {continent}</span>
                <span className={styles.text}>Population: {new Intl.NumberFormat("de-DE").format(population)}</span>
                <span className={styles.text}>Area: {new Intl.NumberFormat("de-DE").format(area)} km2</span>
            </div>
        </div>
        <div className={styles.activityList}>
                {activities? activities.map(activity =>{
                    return <div><ActivityCard activity={activity} /></div>
                }): <span>Loading... </span>}
        </div>
    </>
    )
}

function mapStateToProps(state){
    return{
        countryDetails: state.countryDetails
    }
}
export default connect(mapStateToProps,{getCountryDetail})(CountryDetails)