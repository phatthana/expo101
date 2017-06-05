import React from 'react';
import {
  View,
  StyleSheet,
  WebView,
} from 'react-native';

export default class AboutScreen extends React.Component {

  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  render() {
    return (
      <WebView
        source={{uri: 'https://reactbkk.github.io/2.0.0/'}}
        style={{flex: 1}}/>
    );
  }
}

const styles = StyleSheet.create({

})
