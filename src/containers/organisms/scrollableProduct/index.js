import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import ScrollableItem from "../../../components/moleculs/ScrollableItem";


class ScrollableProducts extends Component {
    render() {
        return (
            <View style={{ padding: 16 }}>
                {/* Logo Go food  */}
                <View style={{ height: 15, width: 60, marginLeft: 12 }}>
                    <Image source={require('../../../assets/logo/go-food.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
                </View>
                {/* Nearby  */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1c1c1c', marginLeft: 12 }}>Nearby Restaurant</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#61A756' }}>See All</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', paddingLeft: 16 }}>
                        <ScrollableItem title="KFC Ala ala" img={require('../../../assets/dummy/go-food-kfc.jpg')} active />
                        <ScrollableItem title="Rummah makan GM" img={require('../../../assets/dummy/go-food-gm.jpg')} />
                        <ScrollableItem title="Rummah makan Banka" img={require('../../../assets/dummy/go-food-banka.jpg')} />
                        <ScrollableItem title="Rummah makan Orins" img={require('../../../assets/dummy/go-food-orins.jpg')} />
                        <ScrollableItem title="Rummah makan Pak Bos" img={require('../../../assets/dummy/go-food-pak-boss.jpg')} />
                    </View>
                </ScrollView>
                <View style={{ marginTop: 16, borderBottomColor: '#E8E9ED', marginHorizontal: 16, borderBottomWidth: 1, marginBottom: 20 }}></View>
            </View>
        )
    }
}

export default ScrollableProducts;