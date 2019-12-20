import React  from 'react';
import {View,Image,TextInput,Platform} from 'react-native';

const SearchFeature = () => {
    return (
        <View style={Platform.OS === 'ios' ? { marginHorizontal: 17, flexDirection: 'row', paddingTop: 45 } : { marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 }}>
            <View style={{ position: 'relative', flex: 1 }}>
                <TextInput placeholder="What do you want" style={{ borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18, }} />
                <Image source={require('../../../assets/icon/search.png')} style={{ position: 'absolute', top: 5, left: 5 }} />
            </View>
            <View style={{ width: 35, alignItems: 'center', justifyContent: 'center', }}>
                <Image source={require('../../../assets/icon/promo.png')} />
            </View>
        </View>
    )
}

export default SearchFeature;