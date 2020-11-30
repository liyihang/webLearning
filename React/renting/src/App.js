import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./pages/Home";
import CityList from "./pages/CityList";
import User from "./pages/User";
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/home" component={Home}></Route>
        <Route path="/citylist" component={CityList}></Route>
        <Route path="/user" component={User}></Route>
      </div>
    </Router>
  );
}

export default App;
