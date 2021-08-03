import styles from "./CountryCards.module.css"
import { connect } from "react-redux";
import { getCountryList } from "../../actions";
import { useEffect } from "react";
import CountryCard from "../countryCard/countryCard";
import {Link} from "react-router-dom"



export function CountryCards(props){

    useEffect(()=>{
        props.getCountryList("")
    },[])

    return (<div className={styles.cardsContainer}>
        {props.countryList.map(country=>{
            return (<>
            <Link to={"/country/"+country.id}>
                <CountryCard name={country.name} flag={country.flag} continent={country.continent} id={country.id}/>
            </Link>

            </>)
        })}
    </div>)
}



function mapStateToProps(state) {
    return {
        countryList: state.countryList
    }
}

export default connect(mapStateToProps,{getCountryList})(CountryCards);