import Organizer from "../organizer/Organizer"
import styles from "./Home.module.css"
import CountryCards from "../countryCards/CountryCards"
import PageSelector  from "../pageSelector/pageSelector"

export default function Home(){
    return (
    <div className={styles.container}>
        <PageSelector/>
        <CountryCards/>
        <Organizer/>
    </div>
    )
}

