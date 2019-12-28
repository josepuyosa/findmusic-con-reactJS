import React, { Component } from "react";

function Error(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12 centrar">
          <h1>Escriba un artista/banda ({props.errorMessage}) </h1>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Error;
