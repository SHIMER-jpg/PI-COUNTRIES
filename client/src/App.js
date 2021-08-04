import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import NavBar from "./components/navBar/NavBar"
import Home from "./components/home/Home"
import ActivityForm from "./components/activityForm/ActivityForm"
import CountryDetails from "./components/countryDetails/CountryDetails"
import { PageSelector } from './components/pageSelector/pageSelector';


function App() {
  return (
    //ACA VAMOS A HACER EL ROUTING
    <Router>
    <div className="App">
      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={Home}/>
      <Route path="/activity" component={ActivityForm} />
      <Route path="/country/:id" component={CountryDetails} />
    </div>
    </Router>
  );
}

export default App;
