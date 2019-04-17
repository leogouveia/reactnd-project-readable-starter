import React, { Fragment, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoadingBar } from "react-redux-loading-bar";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";

import "./App.scss";
import Navbar from "./Navbar";
import PostList from "./PostListContainer";
import CategoryList from "./CategoryListContainer";
import NewPost from "./NewPost";

function App({ dispatch, loading }) {
  useLayoutEffect(() => {
    dispatch(handleInitialData());
  });
  return (
    <Router>
      <Fragment>
        <LoadingBar />
        <Navbar />
        <div className="container">
          {loading === true ? null : (
            <Switch>
              <Route
                path={["/", "/categories/:category"]}
                exact
                render={() => (
                  <div className="columns is-widescreen">
                    <div className="column is-four-fifths">
                      <PostList />
                    </div>
                    <div className="column">
                      <CategoryList />
                    </div>
                  </div>
                )}
              />
              <Route path="/new" component={NewPost} />
            </Switch>
          )}
        </div>
      </Fragment>
    </Router>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
  loading: PropTypes.any
};

export default connect()(App);
