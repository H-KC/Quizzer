import { Fragment } from "react";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Class from "./components/pages/class/Class";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            <Route exact path='/classe' component={Class} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
