import styles from "./Organizer.module.css"
import {useState} from "react"
import { connect } from "react-redux"






export  function Organizer(props){
    const [input,setInput] = useState({
        orderByName:"0",
        minPopulation:0,
        maxPopulation:0,
        filterByContinent:"",
        filterByActivity:props.activityList
    })

    function handleSubmit(e){
        e.preventDefault();
    }

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
    console.log(props.activityList)
    
    return(
    <form onSubmit={handleSubmit}> 
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
                    {props.continentList.map(continent=>{
                        return (<option value={continent}>{continent}</option>)
                    })}
                </select>
            <span className={styles.span}>Filter by Activity</span>
                {/* <select onChange={handleChange} className={styles.selector} name="filterByActivity" value={input.filterByActivity}>
                    {props.activityList.map(activity=>{
                        return (<option value={activity}>{activity}</option>)
                    })}
                </select> */}
                <ul className ="checkboxContainer">
                {props.activityList.map((activity,index)=>{
                    return (
                    <li>
                        <input type="checkbox" value={activity} name={activity}></input> 
                        <label>{activity}</label>
                    </li>)
                    //     <input type="checkbox" id="topping" name="topping" value="Paneer" />Paneer
                })}
                </ul>

                <input className={styles.applyButton} type="submit" value="Apply Filters" />
        </div>
    </ form >
    )
}

function  mapStateToProps (state){
    return{
        activityList: state.activityList,
        continentList: state.continentList
    }
}

export default connect(mapStateToProps,{})(Organizer)