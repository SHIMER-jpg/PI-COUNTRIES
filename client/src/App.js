import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import CountryCards from "./components/countryCards/CountryCards"
import NavBar from "./components/navBar/NavBar"


function App() {
  return (
    //ACA VAMOS A HACER EL ROUTING
    <Router>
    <div className="App">
      <Route path="/" component={NavBar}/>
      {/* <Route exact path="/" component={Home}/> */}
      {/* <Route path="/Activity" component={ActivityForm} />
      <Route path="/Country/:id" component={CountryDetails} /> */}
    </div>
    </Router>
  );
}

export default App;
