import { ADD_JOB } from "./actionTypes";

export const addJob = (data) => {
  return {
    type: ADD_JOB,
    payload: data
  };
};
