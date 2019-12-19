import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Platform,
  TouchableOpacity
} from 'react-native';

const MainFeature = (props) => {
  return (
    <View style={{ width: `${100 / 4}%`, alignItems: 'center', marginBottom: 18 }}>
      <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={props.img} />
      </View>
      <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}> {props.title}</Text>
    </View>
  )
}

export default MainFeature