import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoadingBar } from "react-redux-loading-bar";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";

import "./App.scss";
import Navbar from "./Navbar";
import PostList from "./PostList";
import CategoryList from "./CategoryList";

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    loading: PropTypes.any
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Navbar />
          <div className="container">

              {this.props.loading === true ? null : (
                <div className="columns is-widescreen">
                  <div className="column is-four-fifths">
                    <Route path="/" exact component={PostList} />
                    <Route path="/categories/:category" component={PostList} />
                  </div>
                  <div className="column">
                    <CategoryList />
                  </div>
                </div>
              )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
