import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class Input extends Component {
  state = {
    text: '',
  }
  onChangeText = text => this.setState({text})
  onSubmitEditing = () => {
    if(!this.state.text) {
      return
    }
    this.props.onSubmitEditing(this.state.text)
    this.setState({text: ''})
  }
  render() {
    return (
      <TextInput
        style={styles.input}
        value={this.state.text}
        onChangeText={this.onChangeText}
        onSubmitEditing = {this.onSubmitEditing}
        placeholder={this.props.placeholder}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
  },
});
