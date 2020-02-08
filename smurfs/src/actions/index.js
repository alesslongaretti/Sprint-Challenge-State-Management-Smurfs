import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const ADD_SMURFS = "ADD_SMURFS";
export const START_ADD_FAIL = "START_ADD_FAIL";

export const getData = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_SMURFS, payload: res.data });
    })
    .catch(err => {
      console.log("error fetching data from api", err);
    });
};

export const sendData = newSmurf => dispatch => {
  console.log(newSmurf);

  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_SMURFS, payload: res.data });
    })
    .catch(err => {
      console.log("error in posting data to the api", err);
      dispatch({ type: START_ADD_FAIL, payload: err });
    });
};
