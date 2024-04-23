import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import ScreenNames from '../route';
import ReydiamIndex from '../../src/screens/home';
import Pool from '../../src/screens/Pool';
import styles from './styles';
import Liquidity from '../../src/screens/liquidity';
import Consentrated from '../../src/screens/consentrated';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const drawerItems = [
    { label: 'Swap', icon: require('./../../assets/icons/swap.png'), screen: ScreenNames.SWAP },
    { label: 'Liquidity', icon: require('./../../assets/icons/entry-icon-liquidity.png'), screen: ScreenNames.LIQUIDITY },
    { label: 'Concentrated', icon: require('./../../assets/icons/entry-icon-concentrated-pools.png'), screen: ScreenNames.CONCENTRATED },
    { label: 'Pools', icon: require('./../../assets/icons/entry-icon-pools.png'), screen: ScreenNames.POOL },
    { label: 'Farms', icon: require('./../../assets/icons/entry-icon-farms.png'), screen: ScreenNames.FARMS },
    { label: 'Staking', icon: require('./../../assets/icons/entry-icon-staking.png'), screen: ScreenNames.STAKING},
    { label: 'AcceleRaytor', icon: require('./../../assets/icons/entry-icon-acceleraytor.png'), screen: ScreenNames.ACCELERAYTOR },
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
        <Drawer.Screen name={ScreenNames.SWAP} component={ReydiamIndex} />
        <Drawer.Screen name={ScreenNames.LIQUIDITY} component={Liquidity} />
        <Drawer.Screen name={ScreenNames.CONCENTRATED} component={Consentrated} />

        <Drawer.Screen name={ScreenNames.POOL} component={Pool} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
