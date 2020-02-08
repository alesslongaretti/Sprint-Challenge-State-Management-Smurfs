import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getData, sendData } from "../actions/index";
import Form from "../components/smurfForm";

const Smurfs = props => {
  const getSmurfs = props.getData;
  useEffect(() => {
    getSmurfs();
  }, [getSmurfs]);

  return (
    <div>
      {props.smurfs.map(smurfs => {
        return (
          <div key={smurfs.id}>
            <p>name:{smurfs.name}</p>
            <p>age:{smurfs.age}</p>
            <p>height:{smurfs.height}</p>
          </div>
        );
      })}

      <Form sendData={props.sendData} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, 
    { getData, sendData })
    (Smurfs);
