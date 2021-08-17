import styles from "./Organizer.module.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  orderResultsByName,
  orderResultsByPopulation,
  filterResults,
  getCountryList,
  setPage,
} from "../../actions";

export function Organizer(props) {
  const [input, setInput] = useState({
    filterByContinent: "",
    filterByActivity: [],
  });

  const [filtered, setFiltered] = useState(false);

  // useEffect(() => {
  //   props.getCountryList("");
  // }, [props.activityList]);

  function handleSubmit(e) {
    e.preventDefault();
    props.filterResults(input);
    setFiltered(!filtered);
  }

  function handleChange({ target }) {
    if (target.name == "orderByName") {
      props.orderResultsByName(target.value);
      props.setPage(1);
    } else if (target.name == "orderByPopulation") {
      props.orderResultsByPopulation(target.value);
      props.setPage(1);
    } else if (target.name == "filterByContinent") {
      setInput({ ...input, [target.name]: target.value });
    } else {
      var index = input.filterByActivity.indexOf(target.value);
      index == -1
        ? setInput({
            ...input,
            filterByActivity: [...input.filterByActivity, target.value],
          })
        : setInput({
            ...input,
            filterByActivity: input.filterByActivity.filter(
              (name) => name != target.value
            ),
          });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <span className={styles.span}>Order by Name</span>
        <select
          onChange={handleChange}
          className={styles.selector}
          name="orderByName"
        >
          <option value="0">A-Z</option>
          <option value="1">Z-A</option>
        </select>
        <span className={styles.span}>Order by Population Size</span>
        <select
          onChange={handleChange}
          className={styles.selector}
          name="orderByPopulation"
        >
          <option value="0">Descending</option>
          <option value="1">Ascending</option>
        </select>
        <span className={styles.span}>Filter by Continent</span>
        <select
          disabled={props.loadingError || filtered}
          onChange={handleChange}
          className={styles.selector}
          name="filterByContinent"
        >
          <option value="all">All</option>;
          {props.continentList.map((continent) => {
            return <option value={continent}>{continent}</option>;
          })}
        </select>
        <span disabled={props.loadingError || filtered} className={styles.span}>
          Filter by Activity
        </span>
        <ul className={styles.checkboxContainer}>
          {props.activityList.map((activity, index) => {
            return (
              <li>
                <input
                  type="checkbox"
                  onChange={handleChange}
                  value={activity}
                  name={activity}
                  disabled={props.loadingError || filtered}
                ></input>
                <label>{activity}</label>
              </li>
            );
          })}
        </ul>

        {!filtered && (
          <input
            className={styles.applyButton}
            type="submit"
            value="Apply Filters"
            disabled={props.loadingError}
          />
        )}
        {filtered && (
          <input
            className={styles.applyButton}
            onClick={() => {
              props.getCountryList("");
              setFiltered(!filtered);
            }}
            type="reset"
            value="Remove Filters"
          />
        )}
      </div>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    activityList: state.activityList,
    continentList: state.continentList,
    loadingError: state.loadingError,
  };
}

export default connect(mapStateToProps, {
  orderResultsByPopulation,
  orderResultsByName,
  filterResults,
  getCountryList,
  setPage,
})(Organizer);
