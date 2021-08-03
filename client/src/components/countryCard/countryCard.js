import styles from "./countryCard.module.css"

export default function CountryCard(props){
    return (<div className={styles.cardCointainer}>
        <img src={`${props.flag}`} className={styles.flagImg}></img>
        <h5 className ={styles.text}>{props.name}</h5>
        <h5 className ={styles.text}>{props.continent}</h5>
    </div>)
}