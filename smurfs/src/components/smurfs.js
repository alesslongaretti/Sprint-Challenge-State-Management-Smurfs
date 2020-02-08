import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getData, sendData } from "../actions/index";
import Form from "../components/smurfForm";
import Smurf from "../components/smurf";

const Smurfs = props => {
  const getSmurfs = props.getData;
  useEffect(() => {
    getSmurfs();
  }, [getSmurfs]);

  return (
    <div>
      {props.smurfs.map(smurfs => {
        return <Smurf smurfs={smurfs} key={smurfs.id} />;
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

export default connect(mapStateToProps, { getData, sendData })(Smurfs);
