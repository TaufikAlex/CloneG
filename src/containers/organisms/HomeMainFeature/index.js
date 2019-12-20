import React from "react";
import { View, Text, Image } from "react-native";
import MainFeature from '../../../components/moleculs/MainFeature';

const HomeMainFeature = props => {
    return (
        <View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 18 }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap' }}>
                  <MainFeature title="Go-RIDE" img={require('../../../assets/icon/go-ride.png')} />
                  <MainFeature title="Go-CAR" img={require('../../../assets/icon/go-car.png')} />
                  <MainFeature title="Go-BLUEBIRD" img={require('../../../assets/icon/go-bluebird.png')} />
                  <MainFeature title="Go-SEND" img={require('../../../assets/icon/go-send.png')} />
                  <MainFeature title="Go-DEALS" img={require('../../../assets/icon/go-deals.png')} />
                  <MainFeature title="Go-PULSA" img={require('../../../assets/icon/go-pulsa.png')} />
                  <MainFeature title="Go-FOOD" img={require('../../../assets/icon/go-food.png')} />
                  <MainFeature title="Go-MORE" img={require('../../../assets/icon/go-more.png')} />
                </View>
            </View>
            <View style={{ height: 17, backgroundColor: '#F2F2F4' }}></View>
        </View>
     );
};

export default HomeMainFeature;
