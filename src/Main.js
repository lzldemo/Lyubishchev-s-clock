import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:"fride",
      time:0,
      busy:false,
      finish:[]
    }
  }
  render() {
    let {name, time} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.warning}>
        </View>
        <View style={styles.active}>
          <Text style={styles.task}>{this.state.name}</Text>
          <Text style={styles.task}>{this.state.time}</Text>
          <Button
            title="stop"
            onPress = {this.btnPress}
          />
        </View>
        <View style={styles.taskBanner}>
          <Text style={styles.action} onPress={this.chTask.bind(this,'walk')}>walk</Text>
          <Text style={styles.action} onPress={this.chTask.bind(this, 'eat')}>eat</Text>
          <Text style={styles.action} onPress={this.chTask.bind(this, 'rest')}>rest</Text>
        </View>
      </View>
    );
  }
  componentWillMount() {
  }
  btnPress = () => {
    let str = this.state.name
    this.setState({
      busy:false,
      time:0
    })
  }
  chTask(task){
    if(!this.state.busy){
      this.setState({
        name:task,
        busy:true
      })
    }
  }

}

const styles = StyleSheet.create({
  container: {
    padding:10
  },
  active: {
    height: 50,
    padding:5,
    borderRadius:4,
    backgroundColor:"#ccc",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  task: {
    lineHeight: 40,
    fontSize:20
  },
  warning:{
    height:30
  },
  taskBanner:{
    marginTop:20,
    height:60,
    flexDirection:"row",
    justifyContent:"space-around"
  },
  action:{
    height:60,
    backgroundColor:"#aaa",
    flex:1,
    lineHeight:60,
    fontSize:40,
    margin:4,
    textAlign:"center"
  }
});
