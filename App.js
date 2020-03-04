import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={require('./src/programming-1873854_1280.png')}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    backgroundColor: '#ddd'
  },
});
