import styles from "./NavBar.module.css"
import SearchBar from "../searchBar/SearchBar"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function NavBar(props){
    const firstLogin = useSelector((state) => state.firstLogin)
    return (
        <div className={styles.navBar}>
            <Link to="/">
            <img className={styles.img} src="https://i.ibb.co/mJN7n3V/logo.png" alt="home button" />
            </Link>
            {!firstLogin && props.location.pathname=="/" && <SearchBar className={styles.searchBar}/>}
        </div>
        )
}