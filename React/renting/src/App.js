import { BrowserRouter as Router, Redirect, Route} from "react-router-dom";

import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact render={()=><Redirect to="/home"></Redirect>}></Route>
        <Route path="/home" component={Home}></Route>
      </div>
    </Router>
  );
}

export default App;
