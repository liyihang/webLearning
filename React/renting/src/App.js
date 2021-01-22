import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import Home from "./pages/Home";
import CityList from "./pages/CityList";
import Map from "./pages/Map";
import Detail from "./pages/Detail";
import Login from "./pages/Login";

import Rent from "./pages/Rent";
import RentAdd from "./pages/Rent/Add";
import RentSearch from "./pages/Rent/Search";

import AuthRoute from "./components/AuthRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Route
          path="/"
          exact
          render={() => <Redirect to="/home"></Redirect>}
        ></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/map" component={Map}></Route>
        <Route path="/citylist" component={CityList}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
        <Route path="/login" component={Login}></Route>
        {/* 配置登录后才能访问的页面 */}
        <AuthRoute exact path="/rent" component={Rent}></AuthRoute>
        <AuthRoute path="/rent/add" component={RentAdd}></AuthRoute>
        <AuthRoute path="/rent/search" component={RentSearch}></AuthRoute>
      </div>
    </Router>
  );
}

export default App;
