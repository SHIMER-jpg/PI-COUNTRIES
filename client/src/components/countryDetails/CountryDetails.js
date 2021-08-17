import styles from "./CountryDetails.module.css";
import { connect } from "react-redux";
import { getCountryDetail, setPage } from "../../actions";
import { useEffect } from "react";
import ActivityCard from "../activityCard/ActivityCard";

export function CountryDetails(props) {
  useEffect(() => {
    props.getCountryDetail(props.match.params.id);
    props.setPage(1);
  }, []);

  var {
    id,
    name,
    flag,
    continent,
    capital,
    subregion,
    area,
    population,
    activities,
  } = props.countryDetails;

  return (
    <>
      <div className={styles.detailsContainer}>
        {/* <h2 className={styles.title}>{name?name.toUpperCase():name} </h2> */}
        <h2 className={styles.title}>
          {name
            ? name.toUpperCase() + "  (" + id.toUpperCase() + ")"
            : "loading"}{" "}
        </h2>
        <img className={styles.flagImg} src={`${flag}`} />
        <div className={styles.infoContainer}>
          <span className={styles.text}>Capital: {capital}</span>
          <span className={styles.text}>SubRegion: {subregion}</span>
          <span className={styles.text}>Continent: {continent}</span>
          <span className={styles.text}>
            Population: {new Intl.NumberFormat("de-DE").format(population)}
          </span>
          <span className={styles.text}>
            Area: {new Intl.NumberFormat("de-DE").format(area)} km2
          </span>
        </div>
      </div>
      <div className={styles.activityList}>
        {activities ? (
          activities.map((activity) => {
            return (
              <div>
                <ActivityCard activity={activity} />
              </div>
            );
          })
        ) : (
          <span>Loading... </span>
        )}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    countryDetails: state.countryDetails,
  };
}
export default connect(mapStateToProps, { getCountryDetail, setPage })(
  CountryDetails
);
