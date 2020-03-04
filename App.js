import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.boxLarge}/>
        <ScrollView horizontal>
          <View style={styles.boxSmall}/>
          <View style={styles.boxSmall}/>
          <View style={styles.boxSmall}/>
          <View style={styles.boxSmall}/>
          <View style={styles.boxSmall}/>
          <View style={styles.boxSmall}/>
        </ScrollView>
        <View style={styles.boxLarge}/>
        <View style={styles.boxSmall}/>
        <View style={styles.boxLarge}/>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex : 1
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
  boxSmall: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  }
});
