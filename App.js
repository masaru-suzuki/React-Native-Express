import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Counter extends React.Component{
  state = {count: 0}
  componentDidMount() {
    setInterval(() => {
      this.setState({
        count:this.state.count + 1
      })
    }, 1000);
  }
  render(){
    const {count} = this.state
    const {color, size} = this.props
    return(
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  }
}
export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Counter color={'pink'} size={12}/>
        <Counter color={'red'} size={16}/>
        <Counter color={'blue'} size={33}/>
        <Counter color={'gray'} size={122}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
