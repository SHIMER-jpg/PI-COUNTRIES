
import image from "../../countries.png"
import styles from "./LandingPage.module.css"
import firstLogin, { FIRST_LOGIN } from "../../actions/index"
import { useDispatch } from "react-redux"

export default function LandingPage(props){
    const dispatch = useDispatch()
    return (
        <div className={styles.landingContainer}>
            <div className={styles.landingBox}>
                <h1>PI COUNTRIES</h1>
                <h1 style={{fontStyle:"oblique"}}>TRAVELLY</h1>
                <img className={styles.decorationImage} src={image}></img>

                <div className={styles.goButton} onClick={()=>dispatch({type:FIRST_LOGIN})}>
                    <span className={styles.goText}>GO TO PAGE</span>
                </div>
            </div>
        </div>)
}


// export default LandingPage