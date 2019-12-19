import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

const GoNews = (props) => {
    return (
        <View style={{ paddingTop: 16, paddingHorizontal: 16 }}>
            <View style={{ position: 'relative' }}>
                <Image source={require('../../../assets/dummy/sepak-bola.jpg')} style={{ height: 170, width: '100%', borderRadius: 6 }} />
                <View style={{ widht: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6 }}></View>
                <View style={{ height: 15, width: 60, position: 'absolute', top: 16, left: 16 }}>
                    <Image source={require('../../../assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
                </View>
            </View>
            <View style={{ padding: 16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#1c1c1c' }}>GO-NEWS</Text>
                <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11 }}>Dimas sedang membawa bola dan mencetak gol horee horee yuhuu menang</Text>
                <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 12, alignSelf: 'flex-end', borderRadius: 4 }}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>READ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GoNews;