import React, { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
  const [country, setCountry] = useState("");
  return (
    <div className={styles.container}>
    <form  onSubmit={(e) => {
      e.preventDefault();
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
