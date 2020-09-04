import {ADD_DATA, RESET_CHECKBOXES, TOGGLE_CHECKBOX} from "../../actionTypes";

const initialState = {
  data: [],
  isId: true,
  isName: true,
  isYear: true,
  isColor: true,
  isValue: true
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_DATA: {
      const newData = action.data;

      return {...state, data: newData};
    }
    case TOGGLE_CHECKBOX: {
      return {
        ...state,
        [action.name]: ![action.name]
      };
    }
    case RESET_CHECKBOXES: {
      return {
        ...state,
        isId: true,
        isColor: true,
        isName: true,
        isValue: true,
        isYear: true
      };
    }
    default:
      return state;
  }
}