import React, { useState } from "react";
import styles from "./SearchBar.module.css"
import { connect } from "react-redux";
import { getCountryList ,setPage} from "../../actions";

export  function SearchBar(props) {
  const [country, setCountry] = useState("");
  return (
    <div className={styles.container}>
    <form  onSubmit={(e) => {
      e.preventDefault();
      props.setPage(1)
      props.getCountryList(country)
      // onSearch(city);
    }}>

      <input className= {styles.searchInput}
        type="text"
        placeholder="Search for a place to go..."
        value={country}
        onChange={e => setCountry(e.target.value)}
      />
      <input className={styles.searchButton} type="submit" value="Go!" />

    </form>
    </div>
  );
}



export default connect(null,{getCountryList,setPage})(SearchBar)