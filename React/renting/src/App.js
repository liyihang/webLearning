import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import CityList from "./pages/CityList";
import User from "./pages/User";
function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/home">首页</Link>
        <br></br>
        <Link to="/citylist">城市首页</Link>
        <br></br>
        <Link to="/user">个人中心</Link>
        <Route path="/home" component={Home}></Route>
        <Route path="/citylist" component={CityList}></Route>
        <Route path="/user" component={User}></Route>
      </div>
    </Router>
  );
}

export default App;
