import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class DetailScreen extends React.Component {

  static route = {
    navigationBar: {
      title: 'Detail',
    }
  }

  _onPressButton = () => {
    this.props.navigator.push('detailScreen');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>
          This is DetailScreen
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={this._onPressButton}>
          <Text style={{color: 'white'}}>Push to Next DetailScreen</Text>
        </TouchableOpacity>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    height: 44,
    width: 132,
  },
})
