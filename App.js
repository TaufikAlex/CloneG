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
import GopayFeature from './src/components/moleculs/GopayFeature'
import MainFeature from './src/components/moleculs/MainFeature'
import SearchFeature from './src/components/moleculs/SearchFeature'
import GoNews from './src/components/moleculs/GoNews'

import iconHome from './src/assets/icon/home-active.png';
import iconOrder from './src/assets/icon/order.png';
import iconHelp from './src/assets/icon/help.png';
import iconInbox from './src/assets/icon/inbox.png';
import iconAccount from './src/assets/icon/account.png';
import iconGopay from './src/assets/icon/gopay.png';




export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
          {/* search bar */}
          <SearchFeature />

          {/* Gopay */}
          <View style={{ marginHorizontal: 17, marginTop: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
              <Image source={iconGopay} />
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Rp.1.000.000.000</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2F65BD', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}>
              <GopayFeature title="pay" img={require('./src/assets/icon/pay.png')} />
              <GopayFeature title="Nearby" img={require('./src/assets/icon/nearby.png')} />
              <GopayFeature title="Top Up" img={require('./src/assets/icon/topup.png')} />
              <GopayFeature title="More" img={require('./src/assets/icon/more.png')} />
            </View>
          </View>
          {/* Main Feature */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 18 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap' }}>
              <MainFeature title="Go-RIDE" img={require('./src/assets/icon/go-ride.png')} />
              <MainFeature title="Go-CAR" img={require('./src/assets/icon/go-car.png')} />
              <MainFeature title="Go-BLUEBIRD" img={require('./src/assets/icon/go-bluebird.png')} />
              <MainFeature title="Go-SEND" img={require('./src/assets/icon/go-send.png')} />
              <MainFeature title="Go-DEALS" img={require('./src/assets/icon/go-deals.png')} />
              <MainFeature title="Go-PULSA" img={require('./src/assets/icon/go-pulsa.png')} />
              <MainFeature title="Go-FOOD" img={require('./src/assets/icon/go-food.png')} />
              <MainFeature title="Go-MORE" img={require('./src/assets/icon/go-more.png')} />
            </View>
          </View>

          <View style={{ height: 17, backgroundColor: '#F2F2F4' }}></View>
          {/* News section */}
          <GoNews />

          {/* Go-food Baner section  */}
          <View style={{ padding: 16, paddingTop: 0, borderBottomColor: '#E8E9ED', borderBottomWidth: 1 }}>
            <View style={{ position: 'relative' }}>
              <Image source={require('./src/assets/dummy/food-banner.jpg')} style={{ height: 170, width: '100%', borderRadius: 6 }} />
              <View style={{ widht: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 1, borderRadius: 6 }}></View>
              <View style={{ height: 15, width: 60, position: 'absolute', top: 16, left: 16 }}>
                <Image source={require('./src/assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
              </View>
              <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, paddingLeft: 16 }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8 }}>Free Go Food Voucher</Text>
                  <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>Quick before they run out</Text>
                </View>
                {/* Button */}
                <View>
                  <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 12, alignSelf: 'stretch', borderRadius: 4 }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>GET VOUCHER</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* Internal information  */}
          <View style={{ padding: 16 }}>
            <View style={{ height: 15, width: 60, marginLeft: -4 }}>
              <Image source={require('./src/assets/logo/gojek.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
            </View>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1c1c1c' }}>Complete Your profile</Text>
          </View>
          {/* Image  */}
          <View style={{ flexDirection: 'row', marginBottom: 16 }}>
            <View style={{ marginLeft: 16 }}>
              <Image source={require('./src/assets/dummy/facebook-connect.png')} />
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

          {/* GO-Food Nearby  */}
          <View style={{ padding: 16 }}>
            {/* Logo Go food  */}
            <View style={{ height: 15, width: 60, marginLeft: 12 }}>
              <Image source={require('./src/assets/logo/go-food.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
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
                <View style={{ marginRight: 16 }}>
                  <View style={{ width: 150, height: 150, borderRadius: 8 }}>
                    <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
                  </View>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12 }}>KFC Ala ala</Text>
                </View>
                <View style={{ marginRight: 16 }}>
                  {/* 2 */}
                  <View style={{ width: 150, height: 150, borderRadius: 8 }}>
                    <Image source={require('./src/assets/dummy/go-food-gm.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
                  </View>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12 }}>Rumah makan GM</Text>
                </View>
                <View style={{ marginRight: 16 }}>
                  {/* 3 */}
                  <View style={{ width: 150, height: 150, borderRadius: 8 }}>
                    <Image source={require('./src/assets/dummy/go-food-banka.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
                  </View>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12 }}>Rumah makan Banka</Text>
                </View>
                <View style={{ marginRight: 16 }}>
                  <View style={{ width: 150, height: 150, borderRadius: 8 }}>
                    <Image source={require('./src/assets/dummy/go-food-orins.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
                  </View>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12 }}>Rumah makan Orins</Text>
                </View>
                <View style={{ marginRight: 16 }}>
                  <View style={{ width: 150, height: 150, borderRadius: 8 }}>
                    <Image source={require('./src/assets/dummy/go-food-pak-boss.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
                  </View>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12 }}>Rumah makan pak bos</Text>
                </View>
              </View>
            </ScrollView>
            <View style={{ marginTop: 16, borderBottomColor: '#E8E9ED', marginHorizontal: 16, borderBottomWidth: 1, marginBottom: 20 }}></View>
          </View>
        </ScrollView>

        {/* Navigation */}
        <View
          style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={iconHome} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>
              Home
            </Text>
          </View>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={iconOrder} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>
              Orders
            </Text>
          </View>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={iconHelp} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>
              help
            </Text>
          </View>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={iconInbox} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>
              inbox
            </Text>
          </View>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={iconAccount} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>
              Account
            </Text>
          </View>
        </View>
        <Text></Text>
      </View>
    );
  }
}
