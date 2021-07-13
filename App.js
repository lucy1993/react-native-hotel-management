/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// store 
import { Provider } from 'react-redux';
import store from './src/redux/configureStore';

import BottomTabs from './src/Routes/BottomTabs';

const App = () => {
  return (<Provider store={store}>
    <BottomTabs />
  </Provider>);
};

export default App;
