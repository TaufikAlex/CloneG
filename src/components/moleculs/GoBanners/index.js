import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const GoBanners = () => {
    return (
        <View style={{ padding: 16, paddingTop: 0, borderBottomColor: '#E8E9ED', borderBottomWidth: 1 }}>
            <View style={{ position: 'relative' }}>
              <Image source={require('../../../assets/dummy/food-banner.jpg')} style={{ height: 170, width: '100%', borderRadius: 6 }} />
              <View style={{ widht: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 1, borderRadius: 6 }}></View>
              <View style={{ height: 15, width: 60, position: 'absolute', top: 16, left: 16 }}>
                <Image source={require('../../../assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
              </View>
              <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, paddingLeft: 16 }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8 }}>Free Go Food Voucher</Text>
                  <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>Quick before they run out</Text>
                </View>
                <View>
                  <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 12, alignSelf: 'stretch', borderRadius: 4 }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>GET VOUCHER</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </View>
    )
}

export default GoBanners;