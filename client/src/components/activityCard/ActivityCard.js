
import styles from "./ActivityCard.module.css"

export default function ActivityCard({activity}){


    return(
        <div className={styles.cardContainer}>
            <span className={`${styles.text} ${styles.title}`}>{activity.name?activity.name:""}</span>
            <span className={styles.text}>Difficulty: {activity.difficulty}</span>
            <span className={styles.text}>Duration: {activity.duration} min</span>
            <span className={`${styles.text}`}>{activity.isWinter && "Wint  "}{activity.isSummer && "Sum  "}{activity.isSpring && "Spr  "}{activity.isAutumn && "Aut"}  </span>
        </div>
    )
}