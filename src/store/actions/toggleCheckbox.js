import {TOGGLE_CHECKBOX} from "../actionTypes";

export const toggleCheckbox = (name) => {
  return {
    type: TOGGLE_CHECKBOX,
    name
  }
}