import React, { Component } from "react";
import Spinner from "react-spinner-material";
import "./loading.css";

class Loading extends Component {
  render() {
    return (
      <div className="upp">
        <h1>Loading...</h1>
        <Spinner
          size={40}
          spinnerColor={"green"}
          spinnerWidth={5}
          visible={true}
        />
      </div>
    );
  }
}
export default Loading;
