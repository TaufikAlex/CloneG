import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import NavBarIcon from '../../../components/moleculs/NavBarIcon'

const NavBar = (props) => {
  return (
    <View
          style={{ height: 54, flexDirection: 'row', backgroundColor: 'white', marginBottom: 16 }}>
          <NavBarIcon title="Home" img={require('../../../assets/icon/home-active.png')} active/>
          <NavBarIcon title="Orders" img={require('../../../assets/icon/order.png')} />
          <NavBarIcon title="Help" img={require('../../../assets/icon/help.png')} />
          <NavBarIcon title="Inbox" img={require('../../../assets/icon/inbox.png')} />
          <NavBarIcon title="Acccount" img={require('../../../assets/icon/account.png')} />
    </View>
  );
};

export default NavBar;
