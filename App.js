import React, { Component } from 'react';
import GlobalFont from 'react-native-global-font';
import MainRout from './src/routes/MainRout';

export default class App extends Component {
  componentDidMount() {
    let fontName = 'Poppins-Regular';
    GlobalFont.applyGlobal(fontName);
  }

  render() {
    return <MainRout />;
  }
}
