import styles from "./CountryCards.module.css";
import { connect } from "react-redux";
import { getCountryList } from "../../actions";
import { useEffect } from "react";
import CountryCard from "../countryCard/countryCard";
import { Link } from "react-router-dom";

export function CountryCards(props) {
  useEffect(() => {
    props.getCountryList("");
  }, []);

  var topIndex = props.page * 9;
  var botIndex = (props.page - 1) * 9;

  return (
    <div className={styles.cardsContainer}>
      {props.countryList.map((country, index) => {
        if (index > botIndex && index <= topIndex) {
          return (
            <>
              <CountryCard
                name={country.name.toUpperCase()}
                flag={country.flag}
                continent={country.continent.toUpperCase()}
                id={country.id}
              />
            </>
          );
        }
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    countryList: state.countryList,
    page: state.page,
  };
}

export default connect(mapStateToProps, { getCountryList })(CountryCards);
