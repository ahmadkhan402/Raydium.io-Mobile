import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import ScreenNames from '../route';
import ReydiamIndex from '../../src/screens/home';
import Pool from '../../src/screens/Pool';

import Liquidity from '../../src/screens/liquidity';
import Consentrated from '../../src/screens/consentrated';
import Farms from '../../src/screens/farm';
import Staking from '../../src/screens/stacking';
import AcceleRaytor from '../../src/screens/acceleRaytor';
import Routes from '../stack';
const Drawer = createDrawerNavigator();
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const drawerItems = [
    { label: 'Swap', icon: require('./../../assets/icons/swap.png'), screen: ScreenNames.SWAP },
    { label: 'Liquidity', icon: require('./../../assets/icons/entry-icon-liquidity.png'), screen: ScreenNames.LIQUIDITY },
    { label: 'Concentrated', icon: require('./../../assets/icons/entry-icon-concentrated-pools.png'), screen: ScreenNames.CONCENTRATED },
    { label: 'Pools', icon: require('./../../assets/icons/entry-icon-pools.png'), screen: ScreenNames.POOL },
    { label: 'Farms', icon: require('./../../assets/icons/entry-icon-farms.png'), screen: ScreenNames.FARMS },
    { label: 'Staking', icon: require('./../../assets/icons/entry-icon-staking.png'), screen: ScreenNames.STAKING },
    { label: 'AcceleRaytor', icon: require('./../../assets/icons/entry-icon-acceleraytor.png'), screen: ScreenNames.ACCELERAYTOR, },
  
  ];

  const renderItem = (item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.drawerItem}
      onPress={() => {
        props.navigation.closeDrawer(); 
        props.navigation.navigate(item.screen);
      }}
    >
      <View style={styles.itemIconContainer}>
        <Image source={item.icon} style={styles.itemIcon} />
      </View>
      <Text style={styles.itemText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <DrawerContentScrollView style={styles.drawerContainer}>
      <View style={styles.drawerTopIcon}>
        {/* Your logo or top icon */}
      </View>
      <View style={styles.drawerItemsContainer}>
        {drawerItems.map((item, index) => renderItem(item, index))}
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2c2c6c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen name={"Main"} component={Routes} />
        <Drawer.Screen name={ScreenNames.CONCENTRATED} component={Consentrated} />
        <Drawer.Screen name={ScreenNames.POOL} component={Pool} />
        <Drawer.Screen name={ScreenNames.FARMS} component={Farms} />
        <Drawer.Screen name={ScreenNames.STAKING} component={Staking} />
        <Drawer.Screen name={ScreenNames.ACCELERAYTOR} component={AcceleRaytor} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({




  drawerContainer: {
    flex: 1,
    backgroundColor: '#1f273f',
    paddingVertical: hp('2%'), // Adjusted padding using height percentage
    paddingHorizontal: wp('2%'), // Adjusted padding using width percentage
  },
  drawerTopIcon: {
    // Style for top icon/logo
  },
  drawerItemsContainer: {
    marginTop: hp('2%'), // Adjusted margin using height percentage
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('1.5%'), // Adjusted padding using height percentage
    paddingHorizontal: wp('3%'), // Adjusted padding using width percentage
    borderRadius: wp('6%'), // Adjusted border radius using width percentage
    marginBottom: hp('1%'), // Adjusted margin using height percentage
    backgroundColor: 'rgba(57, 208, 216, 0.1)',
  },
  itemIconContainer: {
    backgroundColor: 'rgba(57, 208, 216, 0.2)',
    borderRadius: wp('8%'), // Adjusted border radius using width percentage
    padding: wp('2%'), // Adjusted padding using width percentage
    marginRight: wp('3%'), // Adjusted margin using width percentage
  },
  itemIcon: {
    width: wp('8%'), // Adjusted icon size using width percentage
    height: wp('8%'), // Adjusted icon size using width percentage
  },
  itemText: {
    fontSize: wp('4%'), // Adjusted font size using width percentage
    color: '#ACE3E5',
  }
});