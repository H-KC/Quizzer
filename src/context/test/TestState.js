import { ADD_TEST, DELETE_TEST, UPDATE_TEST, SET_CURRENT } from "../types";
import { v4 as uuidv4 } from "uuid";
import { useReducer } from "react";
import TestContext from "./testContext";
import TestReducer from "./testReducer";

const TestState = (props) => {
  const initialState = {
    tests: [],
    current: null,
  };

  const [state, dispatch] = useReducer(TestReducer, initialState);

  //add test
  const addTest = (test) => {
    test.id = uuidv4();
    dispatch({ type: ADD_TEST, payload: test });
  };
  // update test
  const updateTest = (test) => {
    dispatch({ type: UPDATE_TEST, payload: test });
  };
  //   delete test
  const deleteTest = (id) => {
    dispatch({ type: DELETE_TEST, payload: id });
  };

  // set current contact
  const setCurrent = (test) => {
    dispatch({ type: SET_CURRENT, payload: test });
  };
  return (
    <TestContext.Provider
      value={{
        tests: state.tests,
        current: state.current,
        addTest,
        deleteTest,
        updateTest,
        setCurrent,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};
export default TestState;
