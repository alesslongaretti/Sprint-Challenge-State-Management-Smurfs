import React, { useState } from "react";

const Form = props => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const submit = e => {
    e.preventDefault();
    props.sendData(smurf);
    setSmurf({
      name: "",
      age: "",
      height: ""
    });
  };

  const changes = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input name="name" onChange={changes} value={smurf.name}></input>
        <input name="age" onChange={changes} value={smurf.age}></input>
        <input name="height" onChange={changes} value={smurf.height}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
