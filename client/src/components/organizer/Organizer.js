import styles from "./Organizer.module.css"
import {useState} from "react"
import { connect } from "react-redux"






export  function Organizer(props){
    const [input,setInput] = useState({
        orderByName:"0",
        minPopulation:0,
        maxPopulation:0,
        filterByContinent:"",
        filterByActivity:[]
    })

    function handleChange({target}){
        console.log(props)
        if(target.name == "orderByName"){
            setInput({...input,
                [target.name]: target.value
            })
        }else if(target.name == "maxPopulation" || target.name=="minPopulation"){
            var val =  !target.value? 0 :target.value <0 ? 0: parseInt(target.value);
                setInput({
                    ...input,
                    [target.name]:val
                })
            }
        }

        console.log(input)
    
    return(
    <div className={styles.container}>
        <span className={styles.span}>Order by Name</span>
            <select onChange={handleChange} value={input.orderByName} className={styles.selector} name="orderByName">
                <option value="0">A-Z</option> 
                <option value="1">Z-A</option> 
            </select>
        <span className={styles.span}>Order by Population Size</span>
        <div className ={styles.minmaxcontainer}>
            <span className={styles.span}>Max</span>
            <input onChange={handleChange} className={styles.minmaxInput} type="number" name="maxPopulation" value={input.maxPopulation}/>
            <span className={styles.span}>Min</span>
            <input onChange={handleChange} className={styles.minmaxInput} type="number" name="minPopulation" value={input.minPopulation}/>
        </div>
        <span className={styles.span}>Filter by Continent</span>
            <select className={styles.selector} name="filterByContinent">
                <option>America</option> 
                <option>ETC</option> 
            </select>
        <span className={styles.span}>Filter by Activity</span>
            <select onChange={handleChange} className={styles.selector} name="filterByActivity">
                <option>Hiking</option> 
                <option>ETC</option> 
            </select>
    </div>
    )
}

function  mapStateToProps (state){
    return{
        activityList: state.activityList
    }
}

export default connect(mapStateToProps,{})(Organizer)