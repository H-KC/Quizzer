import { ADD_CLASS, DELETE_CLASS, UPDATE_CLASS, SET_CURRENT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CLASS:
      return {
        ...state,
        classes: [...state.classes, action.payload],
      };
    case DELETE_CLASS:
      return {
        ...state,
        classes: state.classes.filter((Class) => Class.id !== action.payload),
        current: null,
      };
    case UPDATE_CLASS:
      return {
        ...state,
        classes: state.classes.map((Class) =>
          Class.id === action.payload.id ? action.payload : Class
        ),
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};
