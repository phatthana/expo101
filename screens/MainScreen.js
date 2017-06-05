import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class MainScreen extends React.Component {

  _onPressButton = () => {
    this.props.navigator.push('detailScreen');
  }

  render() {
    return (
      <View style={{flex: 1}}>

        <Text>
          This is MainScreen
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={this._onPressButton}>
          <Text style={{color: 'white'}}>Push to DetailScreen</Text>
        </TouchableOpacity>

      </View>
    );

  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    height: 44,
    width: 132,
  },
})
