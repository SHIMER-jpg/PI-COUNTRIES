import styles from "./ActivityForm.module.css"
import { connect } from "react-redux"
import {getCountryList,createActivity} from "../../actions"
import { useEffect } from "react"

export function ActivityForm(props){
        
    const clear = (e) => {
        e.target.value = '';
      };

    useEffect(()=>{
        props.getCountryList()
    },[])
    console.log(props)
    return (
    <>
        <div className={styles.detailsContainer}>
            <form>
            <h2 className={styles.title}>ADD ACITVITY</h2>
            <div className={styles.infoContainer}>
                <span>Select the Countries</span>
                <input type="text" list="countries" multiple onChange={null} onClick={clear} onFocus={clear}/>
                <datalist id="countries">
                    {props.countryList.map(country=>{
                        return <option key={country.id} name={country.name}>{country.name}</option>
                    })}
                </datalist>
                {props.countryList
                    // .filter((c) => values.countries.includes(c.id))
                    // .filter((c) => values.countries.includes(c.id))
                    .map((country) => (
                    <p key={country.name} className="country-to-add">
                        <button
                        // onClick={() => handleRemoveCountry(country.id)}
                        className="unstyled-btn"
                        >
                        X
                        </button>
                        {country.name}
                    </p>
                    ))}

            </div>
            </form>
        </div>
    </>
    )
}

function mapStateToProps(state){
    return{
        countryList: state.countryList
    }
}
export default connect(mapStateToProps,{getCountryList})(ActivityForm)


/*
        <div className="form-group">
          <label htmlFor="countries">Paises</label>
          <input
            onChange={handleAddCountries}
            name="countries"
            multiple
            list="countries"
            onClick={clear}
            onFocus={clear}
          />
          <datalist id="countries">
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </datalist>
        </div>
        <div className="Countries-to-add">
          {countries
            .filter((c) => values.countries.includes(c.id))
            .map((country) => (
              <p key={country.name} className="country-to-add">
                <button
                  onClick={() => handleRemoveCountry(country.id)}
                  className="unstyled-btn"
                >
                  X
                </button>
                {country.name}
              </p>
            ))}
        </div>
         */