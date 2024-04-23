import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, useIsFocused, useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import ScreenNames from '../route';
import ReydiamIndex from '../../src/screens/home';
import styles from './styles';

const Drawer = createDrawerNavigator();

function CustomDrawerContent() {
  const navigation = useNavigation();


  const drawerItems = [
    { label: 'Swap', icon: require('./../../assets/icons/swap.png') },
    { label: 'Liquidity', icon: require('./../../assets/icons/entry-icon-liquidity.png') },
    { label: 'Concentrated', icon: require('./../../assets/icons/entry-icon-concentrated-pools.png') },
    { label: 'Pools', icon: require('./../../assets/icons/entry-icon-pools.png') },
    { label: 'Farms', icon: require('./../../assets/icons/entry-icon-farms.png') },
    { label: 'Staking', icon: require('./../../assets/icons/entry-icon-staking.png') },
    { label: 'AcceleRaytor', icon: require('./../../assets/icons/entry-icon-acceleraytor.png') },
  ];


  const renderItem = (item, index) => (
    <TouchableOpacity key={index} style={styles.drawerItem}>
      <View style={styles.itemIconContainer}>
        <Image source={ item.icon } style={styles.itemIcon} />
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
        <Drawer.Screen name={ScreenNames.HOME} component={ReydiamIndex} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
