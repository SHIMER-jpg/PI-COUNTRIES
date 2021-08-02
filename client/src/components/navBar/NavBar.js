import styles from "./NavBar.module.css"
import SearchBar from "../searchBar/SearchBar"
import { Link } from "react-router-dom"

export default function NavBar(props){
    console.log(props)
    return (
        <div className={styles.navBar}>
            <Link to="/">
            <img className={styles.img} src="https://i.ibb.co/mJN7n3V/logo.png" alt="home button" />
            {/* <img className={styles.img} src="https://picsum.photos/200/300" alt="home button" /> */}
            </Link>
            <SearchBar className={styles.searchBar}/>
        </div>
        )
}