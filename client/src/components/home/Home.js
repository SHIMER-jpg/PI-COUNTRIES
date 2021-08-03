import Organizer from "../organizer/Organizer"
import styles from "./Home.module.css"
import CountryCards from "../countryCards/CountryCards"

export default function Home(props){
    return (
    <div className={styles.container}>
        <CountryCards/>
        <Organizer/>
    </div>
    )
}

