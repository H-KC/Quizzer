import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useContext, useState, useEffect } from "react";
import ClassContext from "../../../context/class/classContext";
import QuizContext from "../../../context/quiz/quizContext";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["Select a class", "Quiz name", "Number of Questions and Pts"];
}

function QuizForm() {
  // init class context
  const classContext = useContext(ClassContext);

  //init quiz context
  const quizContext = useContext(QuizContext);
  const { addQuiz, current, updateQuiz } = quizContext;
  const [quiz, setQuiz] = useState({
    name: "",
    classID: "",
    nbrQuestions: "",
    nbrPts: "",
    state: "new",
  });
  const { name, classID, nbrQuestions, nbrPts } = quiz;

  //handle change
  const handleChange = (e) =>
    setQuiz({ ...quiz, [e.target.name]: e.target.value });

  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  //handle submit
  const handleSubmit = () => {
    if (
      name.trim() === "" ||
      classID === "" ||
      nbrQuestions.trim() === "" ||
      nbrPts.trim() === ""
    ) {
      alert("NO");
    } else {
      current ? updateQuiz(quiz) : addQuiz(quiz);
    }
  };

  function getStepContent(step, classes) {
    switch (step) {
      case 0:
        return (
          <span className='container my-2'>
            <select
              name='classID'
              value={classID}
              className='custom-select p-3'
              style={{ width: "100%" }}
              onChange={handleChange}
            >
              <option defaultValue value=''>
                Select Class
              </option>
              {classes.map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </span>
        );
      case 1:
        return (
          <span className='container'>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>Name</span>
              </div>
              <input
                type='text'
                className='form-control'
                placeholder='Name of the quiz'
                name='name'
                value={name}
                required
                onChange={handleChange}
              />
            </div>
          </span>
        );
      case 2:
        return (
          <span className='container'>
            <span className='input-group mb-3'>
              <span className='input-group-prepend'>
                <span className='input-group-text' id='basic-addon1'>
                  Q-N
                </span>
              </span>
              <input
                type='text'
                className='form-control'
                placeholder='Number of Questions'
                name='nbrQuestions'
                value={nbrQuestions}
                onChange={handleChange}
                required
              />
            </span>
            <span className='input-group mb-3'>
              <span className='input-group-prepend'>
                <span className='input-group-text'>P-N</span>
              </span>
              <input
                type='text'
                className='form-control'
                placeholder='Numbre of Pts'
                name='nbrPts'
                value={nbrPts}
                onChange={handleChange}
                required
              />
            </span>
          </span>
        );
      default:
        return "Unknown step";
    }
  }

  useEffect(() => {
    if (current !== null) {
      setQuiz(current);
      setActiveStep(1);
    } else {
      setQuiz({
        name: "",
        classID: "",
        nbrQuestions: "",
        nbrPts: "",
        state: "new",
      });
      setActiveStep(0);
    }
  }, [quizContext, current]);
  return (
    <div
      className={classes.root}
      style={{
        marginTop: "20px",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.075)",
      }}
    >
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <>{getStepContent(index, classContext.classes)}</>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
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
        </Paper>
      )}
    </div>
  );
}

export default QuizForm;
