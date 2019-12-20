import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import GoBanners from './src/components/moleculs/GoBanners';
import GoInfo from './src/components/moleculs/GoInfo';
import GoNews from './src/components/moleculs/GoNews';
import SearchFeature from './src/components/moleculs/SearchFeature';
import HomeGoPay from './src/containers/organisms/HomeGoPay';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import NavBar from './src/containers/organisms/NavbarIcon';
import ScrollableProducts from './src/containers/organisms/scrollableProduct';


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
          {/* search bar */}
          <SearchFeature />
          {/* Gopay */}
          <HomeGoPay />
          {/* Main Feature */}
          <HomeMainFeature />
          {/* News section */}
          <GoNews />
          {/* Go-food Baner section  */}
          <GoBanners />
          {/* Internal information  */}
          <GoInfo />
          {/* GO-Food Nearby  */}
          <ScrollableProducts />
        </ScrollView>
        {/* Navigation */}
        <NavBar />
      </View>
    );
  }
}
