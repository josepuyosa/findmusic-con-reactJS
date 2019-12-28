import React, { Component } from "react";
import "./page-home.css";
import logo from "../logo.jpg";
import ReactDOM from "react-dom";
import Modal from "./modal.js";

class PageHome extends Component {
  state = {
    busqueda: "",
    modal: false
  };
  handleSubmit = e => {
    this.props.history.push("/busqueda?" + this.state.busqueda);
    e.preventDefault();
  };
  handleChange = e => {
    this.setState({
      busqueda: e.target.value
    });
  };
  handleClick = e => {
    e.preventDefault();
    this.setState({
      modal: true
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.state.busqueda}
                  placeholder="Buscar"
                  onChange={this.handleChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Buscar un artista similiar
                </button>
                <button className="btng" onClick={this.handleClick}>
                  find music
                </button>
              </div>
            </form>
          </div>
        </div>
        {ReactDOM.createPortal(
          <Modal estado={this.state.modal}>
            <h3>Yo aprendi en escuela dev rock</h3>
          </Modal>,
          document.getElementById("teleport")
        )}
      </div>
    );
  }
}
export default PageHome;
