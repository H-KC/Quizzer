import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";
import QuizContext from "../../../context/quiz/quizContext";
import StudentContext from "../../../context/student/studentContext";
import ClassContext from "../../../context/class/classContext";
import TestContext from "../../../context/test/testContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const TestForm = () => {
  // init test context
  const testContext = useContext(TestContext);
  const { addTest } = testContext;
  // init class context
  const classContext = useContext(ClassContext);
  //   const { classes } = classContext;
  //init student context
  const studentContext = useContext(StudentContext);
  const { students, updateStudent } = studentContext;

  //init quiz context
  const quizContext = useContext(QuizContext);
  const { quizes } = quizContext;

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  //test state
  const [test, setTest] = useState({
    selectedStudent: "",
    clses: tempGen(classContext.classes),
    state: "ready",
  });
  const { selectedStudent, clses } = test;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function getSteps() {
    return ["Select a Student", "Select a Class", "Select a Quiz"];
  }
  const handleQuiz = (e) => {
    let holder = clses.map((item) => {
      if (item.classID === e.target.value) {
        item.state = !item.state;
        return item;
      } else {
        return item;
      }
    });
    setTest({
      ...test,
      clses: holder,
    });
  };

  const handleQustion = (e) => {
    const [selectedCl, selectedQue] = e.target.value.split("/");
    // console.log(selectedCl);
    let holder = clses.map((item) => {
      if (item.classID === selectedCl) {
        if (item.qState === true) {
          item.qState = !item.qState;
          item.selectedQuiz = "";
        } else {
          item.qState = !item.qState;
          item.selectedQuiz = selectedQue;
        }

        return item;
      } else {
        return item;
      }
    });

    setTest({
      ...test,
      clses: holder,
    });
  };
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <span className='container mb-4'>
            <select
              name='selectedStudent'
              value={selectedStudent}
              className='custom-select p-3'
              style={{
                width: "70%",
                marginBottom: "10px",
                textAlign: "center",
              }}
              onChange={handleChange}
            >
              <option value='' key='gkj'>
                Select Student
              </option>
              {students
                .filter((i) => i.state === "new")
                .map((item) => {
                  return (
                    <option value={item.studentID} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </span>
        );
      case 1:
        return (
          <div className='form-check form-check-inline mb-2'>
            {clses.map((item, index) => {
              return (
                <span className='m-1'>
                  <input
                    type='checkbox'
                    className='btn-check'
                    key={item.id}
                    name={item.className}
                    id={item.className}
                    value={item.classID}
                    onChange={handleQuiz}
                    checked={item.state}
                  />
                  <label
                    className='btn btn-outline-primary'
                    key={item.id + 9}
                    name={item.name}
                    htmlFor={item.className}
                  >
                    {item.className}
                  </label>
                </span>
              );
            })}
          </div>
        );
      case 2:
        return (
          <div className='container m-2'>
            <div className='row'>
              {clses
                .filter((item) => item.state === true)
                .map((item) => {
                  return quizes
                    .filter(
                      (quiz) =>
                        quiz.classID === item.classID && quiz.state === "ready"
                    )
                    .map((quiz) => {
                      return (
                        <div className='col' key={quiz.classID}>
                          <span className='badge bg-primary m-1'>
                            {item.className}
                          </span>
                          <br />

                          <span className='m-1 mb-2'>
                            <input
                              type='checkbox'
                              className='btn-check'
                              key={quiz.id}
                              name={item.className}
                              id={item.className}
                              value={item.classID + "/" + quiz.id}
                              onChange={handleQustion}
                              checked={item.qState}
                            />
                            <label
                              className='btn btn-outline-primary'
                              key={quiz.id + 9}
                              name={item.className}
                              htmlFor={item.className}
                            >
                              {quiz.name}
                            </label>
                          </span>
                        </div>
                      );
                    });
                })}
              {/* <div className='col'>Column 1</div>
              <div className='col'>Column 2</div> */}
            </div>
          </div>
        );
      default:
        return "Unknown stepIndex";
    }
  }

  const handleChange = (e) => {
    setTest({
      ...test,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const holder = clses
      .filter((item) => item.state && item.qState)
      .map((item) => item);
    let Test = {
      selectedStudent: selectedStudent,
      tests: holder,
      state: "ready",
    };
    const student = students
      .filter((st) => st.studentID === selectedStudent)
      .map((itm) => itm)[0];
    student.state = "ready";
    addTest(Test);
    updateStudent(student);
    setTest({
      selectedStudent: "",
      clses: tempGen(classContext.classes),
      state: "ready",
    });
    setActiveStep(0);
  };
  return (
    <Card style={{ padding: "10px", height: "100%", marginTop: "10px" }}>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                className={classes.button}
                color='primary'
                variant='contained'
              >
                Submit
              </Button>
            </div>
          ) : (
            <div>
              {getStepContent(activeStep)}

              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TestForm;

const tempGen = (arr) => {
  let holder = [];
  if (arr.length === 0) {
    return [];
  } else {
    holder = arr.map((item) => {
      return {
        className: item.name,
        classID: item.id,
        state: false,
        selectedQuiz: "",
        qState: false,
      };
    });
    return holder;
  }
};
