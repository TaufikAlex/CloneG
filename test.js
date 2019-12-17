// import { Component } from "react";
import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class test extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: 'red', flex: 3}}></View>
        <View style={{flex: 6, flexDirection: 'row'}}>
          <View style={{backgroundColor: 'blue', flex: 3}}></View>
          <View style={{backgroundColor: 'green', flex: 1}}></View>
        </View>
        <View style={{backgroundColor: 'yellow', flex: 1}}></View>
      </View>
    );
  }
}
