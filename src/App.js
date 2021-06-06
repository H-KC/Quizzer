import { Fragment } from "react";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Class from "./components/pages/class/Class";
import { student } from "./components/pages/student/Student";
import Quiz from "./components/pages/quiz/Quiz";
import Question from "./components/pages/questionnaire/Question";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            <Route exact path='/classe' component={Class} />
            <Route exact path='/student' component={student} />
            <Route exact path='/quiz' component={Quiz} />
            <Route exact path='/questionnaire' component={Question} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
