import { ADD_CLASS, DELETE_CLASS, UPDATE_CLASS, SET_CURRENT } from "../types";
import { v4 as uuidv4 } from "uuid";
import { useReducer } from "react";
import ClassContext from "./classContext";
import ClassReducer from "./classReducer";

const ClassState = (props) => {
  const initialState = {
    classes: [
      { id: "092238294309384", name: "ARABIC", description: "bla bla bla" },
      { id: "394989850358", name: "ENGLISH", description: "cra cra cra" },
      {
        id: "984378934475874957",
        name: "FRENCH",
        description: "hdkd iffjd jdfj",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(ClassReducer, initialState);

  //add class
  const addClass = (Class) => {
    Class.id = uuidv4();
    dispatch({ type: ADD_CLASS, payload: Class });
  };
  // update class
  const updateClass = (Class) => {
    dispatch({ type: UPDATE_CLASS, payload: Class });
  };
  //   delete class
  const deleteClass = (id) => {
    dispatch({ type: DELETE_CLASS, payload: id });
  };

  // set current contact
  const setCurrent = (Class) => {
    dispatch({ type: SET_CURRENT, payload: Class });
  };
  return (
    <ClassContext.Provider
      value={{
        classes: state.classes,
        current: state.current,
        addClass,
        deleteClass,
        updateClass,
        setCurrent,
      }}
    >
      {props.children}
    </ClassContext.Provider>
  );
};
export default ClassState;
