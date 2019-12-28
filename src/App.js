import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PageHome from "./components/page-home";
import PageSearchResult from "./page-search-result";
import PageArtist from "./page-artist";
import Layout from "./components/layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/busqueda" component={PageSearchResult}></Route>
            <Route exact path="/artista" component={PageArtist}></Route>
            <Route path="/" component={PageHome}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
