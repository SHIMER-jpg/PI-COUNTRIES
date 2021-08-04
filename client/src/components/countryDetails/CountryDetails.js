
import styles from "./CountryDetails.module.css"
import { connect } from "react-redux"
import { getCountryDetail } from "../../actions"
import { useEffect } from "react"

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
    var {name,flag,continent,capital,subregion,area,population} = props.countryDetails

    return (
        <div className={styles.detailsContainer}>
            <h2>{name} </h2>
            <img className={styles.flagImg} src={`${flag}`}/>
            <span>Capital: {capital}</span>
            <span>SubRegion: {subregion}</span>
            <span>Continent: {continent}</span>
            <span>Population: {population}</span>
            <span>Area: {area}</span>
        </div>
    )
}

function mapStateToProps(state){
    return{
        countryDetails: state.countryDetails
    }
}
export default connect(mapStateToProps,{getCountryDetail})(CountryDetails)