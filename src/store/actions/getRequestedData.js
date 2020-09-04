import {ADD_DATA} from "../actionTypes";

export const getRequestedData = (data) => ({
  type: ADD_DATA,
  data
})