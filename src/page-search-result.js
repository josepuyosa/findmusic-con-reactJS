import React, { Component } from "react";
import SearchBar from "./components/search-bar";
import SearchReult from "./components/search-result";

class PageSearchResult extends Component {
  state = {
    busqueda: ""
  };
  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");
    this.setState({
      busqueda: search
    });
  }

  handleChange = e => {
    this.setState({ busqueda: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />
        <SearchReult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
