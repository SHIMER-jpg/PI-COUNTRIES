import styles from "./Animation.module.css"
import image from "../../TRAVELLY_FULL.png"

export default function Animation(){
    return (
    <div className={styles.animationContainer}> 
        <img className={styles.animationImage} src={image} />
    </div>
    )
}
