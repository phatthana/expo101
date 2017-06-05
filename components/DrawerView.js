import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';

export default class DrawerView extends Component {
  routeConfig = {
    navigationBar: {
      visible: true,
      title: 'Main',
      tintColor: '#FFFFFF',
      backgroundColor: '#2971B6',
    }
  }

  _renderHeader = () => {
    return (
      <View style={styles.header}>
      </View>
    );
  };

  _renderTitle = (text: string, isSelected: boolean) => {
    return (
      <Text
        style={[
          styles.buttonTitleText,
          isSelected ? styles.selectedText : null,
        ]}>
        {text}
      </Text>
    );
  };

  _stackNavigation = (initRoute) => {
    return (
      <StackNavigation
        id={initRoute}
        defaultRouteConfig={this.routeConfig}
        initialRoute={initRoute}
      />
    )
  }

  render() {
    return (
      <DrawerNavigation
        drawerPosition="left"
        renderHeader={this._renderHeader}
        drawerWidth={275}
        initialItem="main">

        <DrawerNavigationItem
          id='main'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('main screen', isSelected)}>
          {this._stackNavigation('mainScreen')}
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='about'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('about', isSelected)}>
          {this._stackNavigation('aboutScreen')}
        </DrawerNavigationItem>

      </DrawerNavigation>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 201,
    width: 275,
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerImage: {
    marginTop: 26,
    height: 88,
    width: 88,
    resizeMode: 'cover',
  },
  headerText: {
    marginLeft: 0,
    marginRight: 0,
    color: 'white',
    fontSize: 15,
  },
  buttonTitleText: {
    color: 'black',
    fontWeight: '500',
    marginLeft: 18,
  },
  selectedText: {
    color: 'blue',
  },
  selectedItemStyle: {
    backgroundColor: 'gray',
  },
});
