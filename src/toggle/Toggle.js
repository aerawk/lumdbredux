import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleMessage } from "./actions";

const Toggle = ({ messageVisibility, toggleMessage }) => {
  return (
    <div>
      <button onClick={toggleMessage}>Toggle Me</button>
      {messageVisibility && <p>You will see this if redux action is toggled</p>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  messageVisibility: state.toggle.messageVisibility,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleMessage,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
