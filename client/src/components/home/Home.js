import Organizer from "../organizer/Organizer"
import styles from "./Home.module.css"
import CountryCards from "../countryCards/CountryCards"
import PageSelector  from "../pageSelector/pageSelector"
import { Link } from "react-router-dom"

const styleLink={
    textDecoration:"none",
    color:"black"
}

export default function Home(){
    return (
    <div className={styles.container}>
        <Link  style={styleLink} to ="/activity">
            <span className={`${styles.addPageButton} {text-decoration:none}`}>+ Add Activity</span>
        </Link>
        <PageSelector/>
        <CountryCards/>
        <Organizer/>
    </div>
    )
}

