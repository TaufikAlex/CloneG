import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

const GoInfo = () => {
    return (
        <View>
            <View style={{ padding: 16 }}>
                <View style={{ height: 15, width: 60, marginLeft: -4 }}>
                    <Image source={require('../../../assets/logo/gojek.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
                </View>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1c1c1c' }}>Complete Your profile</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 16 }}>
                <View style={{ marginLeft: 16 }}>
                    <Image source={require('../../../assets/dummy/facebook-connect.png')} />
                </View>
                <View style={{ flex: 1, padding: 16 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#4A4A4A' }}>Connect With Facebook</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#4A4A4A', width: '100%' }}>Login Faster without vertification code</Text>
                    <View>
                        <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, alignSelf: 'flex-end', paddingVertical: 12, borderRadius: 4, marginTop: 10 }}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>CONNECT</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 16, borderBottomColor: '#E8E9ED', borderBottomWidth: 1 }}></View>
                </View>
            </View>
        </View>
    )
}

export default GoInfo;