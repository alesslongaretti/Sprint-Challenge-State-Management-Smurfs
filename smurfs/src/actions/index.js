import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const ADD_SMURFS = "ADD_SMURFS";

export const getData = () => dispatch => {
  setTimeout(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_SMURFS, payload: res.data });
      })
      .catch(err => {
        console.err("error fetching data from api", err);
      });
  });
};

export const sendData = () => dispatch => {
  setTimeout(() => {
    axios
      .post("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res);
        dispatch({ type: ADD_SMURFS, payload: res.data });
      })
      .catch(err => {
        console.err("error in posting data to the api", err);
      });
  });
};
