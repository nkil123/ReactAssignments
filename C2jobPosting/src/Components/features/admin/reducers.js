import { ADD_JOB } from "./actionTypes";
let data = [
  {
    name: "accc",
    title: "front end developer",
    salary: 34500,
    description: "kdasjfkjsdkfja;sdf",
    location: "Mysore",
    type: "remote"
  },
  {
    name: "tcs",
    title: "back end developer",
    salary: 34343,
    description: "asdfsdf;sdf",
    location: "Banglore",
    type: "from office"
  },
  {
    name: "wipro",
    title: "full stack developer",
    salary: 3500004343,
    description: "adsfa;sdf",
    location: "Delhi",
    type: "remote"
  }
];
const init = { job: data, H: "hello" };
console.log(init.job, "init");

export const reducer = (state = init, { type, payload }) => {
  // let arr = state.job;
  console.log(payload);
  // console.log(payload, state, state.H, "valuesl");
  switch (type) {
    case ADD_JOB:
      // const updated = [...state.job, payload];
      // console.log(updated, "updaed");
      return {
        ...state,
        Job: payload
      };

    default:
      return state;
  }
};
