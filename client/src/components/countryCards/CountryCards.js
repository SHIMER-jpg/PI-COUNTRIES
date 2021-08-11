import styles from "./CountryCards.module.css";
import { connect } from "react-redux";
import { getCountryList } from "../../actions";
import { useEffect } from "react";
import CountryCard from "../countryCard/countryCard";

export function CountryCards(props) {
  useEffect(() => {
    props.getCountryList("");
  }, []);

  var topIndex = props.page * 9 - 1;
  var botIndex = (props.page - 1) * 9;

  return (
    <div className={styles.cardsContainer}>
      {!props.loadingError &&
        props.countryList.map((country, index) => {
          if (index >= botIndex && index <= topIndex) {
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
      {props.loadingError && (
        <div className={styles.loadingError}>Country not Found!</div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    countryList: state.countryList,
    page: state.page,
    loadingError: state.loadingError,
  };
}

export default connect(mapStateToProps, { getCountryList })(CountryCards);
