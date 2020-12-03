import { BrowserRouter as Router, Redirect, Route} from "react-router-dom";

import Home from "./pages/Home";
import CityList from './pages/CityList'
import Map from "./pages/Map";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact render={()=><Redirect to="/home"></Redirect>}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/map" component={Map}></Route>
        <Route path="/citylist" component={CityList}></Route>
      </div>
    </Router>
  );
}

export default App;
