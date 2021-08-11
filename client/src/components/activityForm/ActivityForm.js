import styles from "./ActivityForm.module.css";
import slider from "./SliderRound.module.css";
import { connect } from "react-redux";
import { getCountryList, createActivity } from "../../actions";
import { useEffect, useState } from "react";

export function ActivityForm(props) {
  const [activity, setActivity] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    seasonArray: [], //["SPRING","AUTUMN","SUMMER"]
    countries: [], //["USA","AFG"]
  });

  const toggleCheckbox = ({ target }) => {
    var newArr = activity.seasonArray;
    var index = newArr.indexOf(target.name);

    switch (target.name) {
      case "WINTER":
        if (index == -1) newArr.push("WINTER");
        else newArr.splice(index, 1);
        break;
      case "SPRING":
        if (index == -1) newArr.push("SPRING");
        else newArr.splice(index, 1);
        break;
      case "SUMMER":
        if (index == -1) newArr.push("SUMMER");
        else newArr.splice(index, 1);
        break;
      case "AUTUMN":
        if (index == -1) newArr.push("AUTUMN");
        else newArr.splice(index, 1);
        break;

      default:
        break;
    }

    setActivity({
      ...activity,
      seasonArray: newArr,
    });
  };

  useEffect(() => {
    props.getCountryList("");
  }, []);

  const handleChange = ({ target }) => {
    if (target.name == "name") {
      setActivity({
        ...activity,
        name: target.value,
      });
    } else {
      var value = target.value < 0 ? 0 : target.value;
      setActivity({
        ...activity,
        [target.name]: value,
      });
    }
  };

  const handleRemoveCountry = (id) => {
    setActivity({
      ...activity,
      countries: activity.countries.filter((c) => c != id),
    });
  };

  const clear = ({ target }) => {
    target.value = "";
  };

  const handleCountryAddition = ({ target }) => {
    if (props.countryList.find((country) => country.id == target.value)) {
      if (!activity.countries.find((country) => country == target.value)) {
        setActivity({
          ...activity,
          countries: [...activity.countries, target.value],
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity.name == "") {
      alert("Name cannot be empty!");
    } else if (activity.difficulty == 0) {
      alert("Difficulty cannot be 0");
    } else if (activity.duration == 0) {
      alert("Duration cannot be 0");
    } else if (activity.seasonArray.length == 0) {
      alert("Must select at least one seasson");
    } else if (activity.countries.length == 0) {
      alert("Must select at least one country");
    } else {
      props.createActivity(activity);
      props.getCountryList("");
      props.history.push("/");
    }
  };

  return (
    <>
      <div className={styles.detailsContainer}>
        <form onSubmit={handleSubmit}>
          <h2 className={styles.title}>ADD ACITVITY</h2>
          <div className={styles.infoContainer}>
            <div className={styles.formGroup}>
              <label className={styles.text}>Name</label>
              <input
                type="text"
                name="name"
                value={activity.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.text}>Difficulty</label>
              <input
                type="number"
                name="difficulty"
                value={activity.difficulty}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.text}>Season</label>
              <div className={styles.seasonGroup}>
                <div className={styles.sliderGroup}>
                  <span>Winter</span>
                  <label className={slider.switch}>
                    <input
                      type="checkbox"
                      name="WINTER"
                      onChange={toggleCheckbox}
                    />
                    <span className={`${slider.slider} ${slider.round}`}></span>
                  </label>
                </div>
                <div className={styles.sliderGroup}>
                  <span>Spring</span>
                  <label className={slider.switch}>
                    <input
                      type="checkbox"
                      name="SPRING"
                      onChange={toggleCheckbox}
                    />
                    <span className={`${slider.slider} ${slider.round}`}></span>
                  </label>
                </div>
                <div className={styles.sliderGroup}>
                  <span>Summer</span>
                  <label className={slider.switch}>
                    <input
                      type="checkbox"
                      name="SUMMER"
                      onChange={toggleCheckbox}
                    />
                    <span className={`${slider.slider} ${slider.round}`}></span>
                  </label>
                </div>
                <div className={styles.sliderGroup}>
                  <span>Autumn</span>
                  <label className={slider.switch}>
                    <input
                      type="checkbox"
                      name="AUTUMN"
                      onChange={toggleCheckbox}
                    />
                    <span className={`${slider.slider} ${slider.round}`}></span>
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.text}>Duration</label>
              <input
                type="number"
                name="duration"
                value={activity.duration}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.text}>Countries</label>
              <input
                type="text"
                multiple
                list="countries"
                onClick={clear}
                onFocus={clear}
                onChange={handleCountryAddition}
              />
              <datalist id="countries">
                {props.countryList.map((country, key) => {
                  return (
                    <option key={key} value={country.id}>
                      {country.name}
                    </option>
                  );
                })}
              </datalist>
              <button type="submit" className={styles.submitButton}>
                <span className={styles.submitText}>CREATE</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.addedCountries}>
        {props.countryList
          .filter((country) => activity.countries.includes(country.id))
          .map((country) => (
            <p key={country.name} className={styles.addedCountry}>
              <button
                onClick={() => handleRemoveCountry(country.id)}
                className={styles.countryButton}
              >
                X
              </button>
              {country.name}
            </p>
          ))}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    countryList: state.countryList,
  };
}
export default connect(mapStateToProps, { getCountryList, createActivity })(
  ActivityForm
);
