import React, {Component} from 'react';
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

import iconHome from './src/assets/icon/home-active.png';
import iconOrder from './src/assets/icon/order.png';
import iconHelp from './src/assets/icon/help.png';
import iconInbox from './src/assets/icon/inbox.png';
import iconAccount from './src/assets/icon/account.png';
import iconSearch from './src/assets/icon/search.png';
import iconPromo from './src/assets/icon/promo.png';
import iconGopay from './src/assets/icon/gopay.png';

import newsTop from './src/assets/dummy/sepak-bola.jpg';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* search bar */}
          <View style={Platform.OS === 'ios' ? {marginHorizontal: 17,flexDirection: 'row',paddingTop: 45}: {marginHorizontal: 17,flexDirection: 'row',paddingTop: 15}}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput placeholder="What do you want"style={{borderWidth: 1,borderColor: '#E8E8E8',borderRadius: 25,height: 40,fontSize: 13,paddingLeft: 45,paddingRight: 20,backgroundColor: 'white',marginRight: 18,}}/>
              <Image source={iconSearch}style={{position: 'absolute', top: 5, left: 5}}/>
            </View>
            <View style={{width: 35,alignItems: 'center',justifyContent: 'center',}}>
              <Image source={iconPromo} />
            </View>
          </View>
          {/* Gopay */}
          <View style={{marginHorizontal:17,marginTop:8}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#2C5FB8',borderTopLeftRadius:4, borderTopRightRadius:4, padding:14}}>
              <Image source={iconGopay} />
              <Text style={{fontSize:17, fontWeight:'bold', color:'white'}}>Rp.51.000</Text>
            </View>
            <View style={{flexDirection:'row',paddingTop:20, paddingBottom:14, backgroundColor:'#2F65BD',borderBottomLeftRadius:4, borderBottomRightRadius:4}}>
              <View style={{flex:1, alignItems:'center'}}>
                <Image source={require('./src/assets/icon/pay.png')} />
                <Text style={{fontSize:13, fontWeight:'bold', color:'white', marginTop:14}}>Pay</Text>
              </View>
              <View style={{ flex:1, alignItems:'center'}}>
                <Image source={require('./src/assets/icon/nearby.png')} />
                <Text style={{fontSize:13, fontWeight:'bold', color:'white', marginTop:14}}>Nearby</Text>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <Image source={require('./src/assets/icon/topup.png')} />
                <Text style={{fontSize:13, fontWeight:'bold', color:'white', marginTop:14}}>TopUp</Text>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <Image source={require('./src/assets/icon/more.png')} />
                <Text style={{fontSize:13, fontWeight:'bold', color:'white', marginTop:14}}>More</Text>
              </View>
            </View>
          </View>
          {/* Main Feature */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 18 }}>
            <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%', marginBottom: 18}}>
                <View style={{width:`${100/4}%`, alignItems: 'center'}}>
                <View style={{width:58, height:58, borderWidth:1, borderColor:'#EFEFEF', borderRadius:18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./src/assets/icon/go-ride.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign: 'center', marginTop: 6}}> GO-RIDE</Text>
                </View>
                <View style={{width:`${100/4}%`, alignItems: 'center'}}>
                <View style={{width:58, height:58, borderWidth:1, borderColor:'#EFEFEF', borderRadius:18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./src/assets/icon/go-car.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign: 'center', marginTop: 6}}> GO-CAR</Text>
                </View>
                <View style={{width:`${100/4}%`, alignItems: 'center'}}>
                <View style={{width:58, height:58, borderWidth:1, borderColor:'#EFEFEF', borderRadius:18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./src/assets/icon/go-bluebird.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign: 'center', marginTop: 6}}> GO-BLUEBIRD</Text>
                </View>
                <View style={{width:`${100/4}%`, alignItems: 'center'}}>
                <View style={{width:58, height:58, borderWidth:1, borderColor:'#EFEFEF', borderRadius:18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./src/assets/icon/go-send.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign: 'center', marginTop: 6}}> GO-SEND</Text>
                </View>
            </View>
            <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%', marginBottom: 18}}>
                <View style={{width:`${100/4}%`, alignItems: 'center'}}>
                <View style={{width:58, height:58, borderWidth:1, borderColor:'#EFEFEF', borderRadius:18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./src/assets/icon/go-deals.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign: 'center', marginTop: 6}}> GO-DEALS</Text>
                </View>
                <View style={{width:`${100/4}%`, alignItems: 'center'}}>
                <View style={{width:58, height:58, borderWidth:1, borderColor:'#EFEFEF', borderRadius:18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./src/assets/icon/go-pulsa.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign: 'center', marginTop: 6}}> GO-PULSA</Text>
                </View>
                <View style={{width:`${100/4}%`, alignItems: 'center'}}>
                <View style={{width:58, height:58, borderWidth:1, borderColor:'#EFEFEF', borderRadius:18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./src/assets/icon/go-food.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign: 'center', marginTop: 6}}> GO-FOOD</Text>
                </View>
                <View style={{width:`${100/4}%`, alignItems: 'center'}}>
                <View style={{width:58, height:58, borderWidth:1, borderColor:'#EFEFEF', borderRadius:18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./src/assets/icon/go-more.png')} />
                </View>
                <Text style={{fontSize:11, fontWeight:'bold', textAlign: 'center', marginTop: 6}}> MORE</Text>
                </View>
            </View>
          </View>
          
          <View style={{ height: 17, backgroundColor: '#F2F2F4' }}></View>
          {/* News section */}
          <View style={{ paddingTop: 16, paddingHorizontal: 16 }}>
            <View style={{position: 'relative'}}>
              <Image source={newsTop} style={{ height: 170, width: '100%', borderRadius: 6 }} />
              <View style={{ widht: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6}}></View>
              <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}}>
              <Image source={require('./src/assets/logo/white.png')} style={{width: undefined, height: undefined, resizeMode:'contain', flex: 1}} />
              </View>
            </View>
            <View style={{padding: 16,paddingBottom: 20 , borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 20}}>
              <Text style={{fontWeight: 'bold', fontSize: 16, color: '#1c1c1c'}}>GO-NEWS</Text>
              <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11}}>Dimas sedang membawa bola dan mencetak gol horee horee yuhuu menang</Text>
            <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 12, alignSelf: 'flex-end', borderRadius: 4}}>
                <Text style={{fontSize:13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
            </TouchableOpacity>
            </View>
          </View>

          {/* Go-food Baner section  */}
          <View style={{ padding: 16, borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 20 }}>
            <View style={{position: 'relative'}}>
              <Image source={require('./src/assets/dummy/food-banner.jpg')} style={{ height: 170, width: '100%', borderRadius: 6 }}  />
              <View style={{ widht: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 1, borderRadius: 6 }}></View>
              <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}}>
              <Image source={require('./src/assets/logo/white.png')} style={{width: undefined, height: undefined, resizeMode:'contain', flex: 1}} />
              </View>
              <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%',flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, paddingLeft: 16}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white',marginBottom: 8}}>Free Go Food Voucher</Text>
                  <Text style={{fontSize: 12, fontWeight: 'bold', color: 'white'}}>Quick before they run out</Text>
                </View>
                {/* Button */}
                <View>
                    <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 12, alignSelf: 'stretch', borderRadius: 4}}>
                      <Text style={{fontSize:12, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>GET VOUCHER</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Navigation */}
        <View
          style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={iconHome} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Home
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={iconOrder} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Orders
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={iconHelp} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              help
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={iconInbox} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              inbox
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={iconAccount} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Account
            </Text>
          </View>
        </View>
        <Text></Text>
      </View>
    );
  }
}
