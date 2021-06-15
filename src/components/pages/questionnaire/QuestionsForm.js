import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { Fragment, useContext, useState } from "react";
import QuizContext from "../../../context/quiz/quizContext";

import Paper from "@material-ui/core/Paper";
import QuestionnaireContext from "../../../context/questionnaire/questionnaireContext";

const QuestionsForm = () => {
  const classes = useStyles();
  //ini questionnaire context
  const questionnaireContext = useContext(QuestionnaireContext);
  const { addQuestions } = questionnaireContext;
  //init quiz context
  const quizContext = useContext(QuizContext);
  const { quizes, updateQuiz } = quizContext;
  ///  question num tab
  const [questionState, setValue] = useState({
    value: 0,
    selected: quizes[0] || [],
  });

  const { value, selected } = questionState;
  // top tab state
  const [quizval, setQuizval] = useState({
    quizID: quizes[0].id || 0,
  });
  const { quizID } = quizval;

  const handleChange = (event, newValue) => {
    setValue({
      ...questionState,
      value: newValue,
    });
  };
  const [question, setQuestion] = useState({
    questionsHolder: tempGen(Number(selected.nbrQuestions)) || [],
    quizID: "",
  });
  const { questionsHolder } = question;
  //handle quiz change
  const handleQuizChange = (e, val) => {
    setQuizval({
      ...quizval,
      quizID: val,
    });

    let holder = quizes
      .filter((item) => item.id === val)
      .map((quiz) => quiz)[0];

    setValue({
      ...questionState,
      selected: holder,
      value: 0,
    });
    setQuestion({
      questionsHolder: tempGen(Number(holder.nbrQuestions)) || [],
      quizID: holder.id,
    });
  };

  const handleQuestion = (e, val) => {
    let [name, index] = e.target.name.split("-");
    let holder = questionsHolder[Number(index)];

    holder = {
      ...holder,
      [name]: e.target.value,
    };

    setQuestion({
      ...question,
      questionsHolder: questionsHolder.map((item, i) => {
        if (i === Number(index)) {
          return { ...item, [name]: e.target.value };
        } else {
          return item;
        }
      }),
    });

    // if (
    //   name === "option1" ||
    //   name === "option2" ||
    //   name === "option3" ||
    //   name === "option4" ||
    //   name === "answer"
    // ) {

    // } else {
    //   questionsHolder[e.target.name] = e.target.value;
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const holder = selected;
    holder.state = "ready";
    addQuestions(question);
    updateQuiz(holder);
    setQuestion({
      questionsHolder: tempGen(Number(selected.nbrQuestions)) || [],
      quizID: "",
    });
  };
  return (
    <Fragment>
      <Paper square className='mt-3'>
        <Tabs
          value={quizID}
          indicatorColor='primary'
          textColor='primary'
          onChange={handleQuizChange}
        >
          {quizes
            .filter((item) => item.state === "new")
            .map((item) => {
              return <Tab label={item.name} value={item.id} key={item.id} />;
            })}
        </Tabs>
      </Paper>
      <div className={classes.root} style={{ marginTop: "2px" }}>
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          className={classes.tabs}
        >
          {[...Array(Number(selected.nbrQuestions) || 0)].map((value, i) => (
            <Tab label={"Question " + (i + 1)} {...a11yProps(i)} key={i} />
          ))}
        </Tabs>
        <form onSubmit={handleSubmit}>
          {[...Array(Number(selected.nbrQuestions) || 0)].map((valu, i) => (
            <TabPanel value={value} index={i} key={i}>
              <div className='mb-3 '>
                <label className='form-label'>Question {i + 1} </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder={"Question here" + (i + 1)}
                  required
                  name={"question-" + i}
                  value={questionsHolder[i].question}
                  onChange={handleQuestion}
                />
              </div>
              <div className='row'>
                <div className='input-group mb-1'>
                  <div className='input-group-text'>
                    <input
                      className='form-check-input mt-0'
                      type='radio'
                      value='option1'
                      name={"answer-" + i}
                      required
                      onChange={handleQuestion}
                      checked={questionsHolder[i].answer === "option1"}
                    />
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    value={questionsHolder[i].option1 || ""}
                    name={"option1-" + i}
                    required
                    onChange={handleQuestion}
                    placeholder='Answer 1'
                  />
                </div>
                <div className='input-group mb-1'>
                  <div className='input-group-text'>
                    <input
                      className='form-check-input mt-0'
                      type='radio'
                      value='option2'
                      name={"answer-" + i}
                      required
                      onChange={handleQuestion}
                      checked={questionsHolder[i].answer === "option2"}
                    />
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    value={questionsHolder[i].option2 || ""}
                    name={"option2-" + i}
                    required
                    onChange={handleQuestion}
                    placeholder='Answer 2'
                  />
                </div>
                <div className='input-group mb-1'>
                  <div className='input-group-text'>
                    <input
                      className='form-check-input mt-0'
                      type='radio'
                      value='option3'
                      name={"answer-" + i}
                      required
                      onChange={handleQuestion}
                      checked={questionsHolder[i].answer === "option3"}
                    />
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    value={questionsHolder[i].option3 || ""}
                    name={"option3-" + i}
                    required
                    onChange={handleQuestion}
                    placeholder='Answer 3'
                  />
                </div>
                <div className='input-group'>
                  <div className='input-group-text'>
                    <input
                      className='form-check-input mt-0'
                      type='radio'
                      value='option4'
                      name={"answer-" + i}
                      required
                      onChange={handleQuestion}
                      checked={questionsHolder[i].answer === "option4"}
                    />
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    value={questionsHolder[i].option4 || ""}
                    name={"option4-" + i}
                    required
                    onChange={handleQuestion}
                    placeholder='Answer 4'
                  />
                </div>
              </div>

              {i === Number(selected.nbrQuestions - 1) && (
                <button
                  type='submit'
                  className='btn btn-primary mt-2'
                  style={{ backgroundColor: "#5161ce" }}
                >
                  Submit
                </button>
              )}
            </TabPanel>
          ))}
        </form>
      </div>
    </Fragment>
  );
};

export default QuestionsForm;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Fragment>
      {/* question part */}
      <div
        role='tabpanel'
        className='row col-lg-10'
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    </Fragment>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 324,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

// geret template to the state
const tempGen = (num) => {
  let newArr = [];

  while (num > 0) {
    newArr.push({
      question: "",
      answer: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    });
    num--;
  }
  return newArr;
};
