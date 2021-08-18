import React from 'react';
import {View, StyleSheet} from 'react-native';

// import FirstExample from './components/FirstExample';
// import Component, {Component1, Component2} from './components/Multiples';
import MinMax from './components/MinMax';

export default () => (
  <View style={style.App}>
    {/* <FirstExample />
    <Component />
    <Component1 />
    <Component2 /> */}
    <MinMax max={6} min={3} />
  </View>
);

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
