import React, { Component } from 'react';
import PropTypes from "prop-types";
import './App.scss';
import Navbar from './Navbar';
import { LoadingBar } from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';

import PostList from "./PostList";
class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    loading: PropTypes.any
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch( handleInitialData() );
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <LoadingBar />
        <PostList />
      </div>
    );
  }
}

export default connect()(App);
