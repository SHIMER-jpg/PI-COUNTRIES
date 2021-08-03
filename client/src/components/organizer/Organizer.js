import styles from "./Organizer.module.css"

export default function Organizer(porps){
    return(
    <div className={styles.container}>
        <span className={styles.span}>Order by Name</span>
            <select className={styles.selector} name="byName">
                <option>A-Z</option> 
                <option>Z-A</option> 
            </select>
        <span className={styles.span}>Order by Population Size</span>
        <div className ={styles.minmaxcontainer}>
            <span className={styles.span}>Max</span>
            <input className={styles.minmaxInput} type="number" name="maxPopulation"/>
            <span className={styles.span}>Min</span>
            <input className={styles.minmaxInput} type="number" name="minPopulation"/>
        </div>
        <span className={styles.span}>Filter by Continent</span>
            <select className={styles.selector} name="byContinent">
                <option>America</option> 
                <option>ETC</option> 
            </select>
        <span className={styles.span}>Filter by Activity</span>
            <select className={styles.selector} name="byActivity">
                <option>Hiking</option> 
                <option>ETC</option> 
            </select>
    </div>
    )
}
