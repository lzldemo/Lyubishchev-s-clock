import React, { Component } from 'react';
import {provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
let store = createStore(reducer);

import MainPage from './Main'

export default class App extends Component{
  render () {
    return (
      <Provider store={store}>
        <MainPage/>
      </Provider>
    )
  }
}
