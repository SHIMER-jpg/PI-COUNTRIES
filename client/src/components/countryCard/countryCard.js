import styles from "./countryCard.module.css"
import {Link} from "react-router-dom"


export default function CountryCard(props){
    return (
        <Link style={{textDecoration:"none"}} to={"/country/"+props.id}>
            <div className={styles.cardCointainer}>
            <img src={`${props.flag}`} className={styles.flagImg}></img>
            <h5 className ={styles.text}>{props.name} - {props.continent}</h5>
            </div>
        </Link>
    )
}