import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Class from "./components/pages/class/Class";
import { student } from "./components/pages/student/Student";
import Quiz from "./components/pages/quiz/Quiz";
import Question from "./components/pages/questionnaire/Question";
import ClassState from "./context/class/ClassState";
import StudentState from "./context/student/StudentState";
import QuizState from "./context/quiz/QuizState";
import QuestionnaireState from "./context/questionnaire/QuestionnaireState";

function App() {
  return (
    <QuestionnaireState>
      <QuizState>
        <StudentState>
          <ClassState>
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
          </ClassState>
        </StudentState>
      </QuizState>
    </QuestionnaireState>
  );
}

export default App;
