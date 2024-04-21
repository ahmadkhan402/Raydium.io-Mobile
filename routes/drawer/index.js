import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, useIsFocused, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import ScreenNames from '../route';
import ReydiamIndex from '../../src/screens/home';
import styles from './styles';

const Drawer = createDrawerNavigator();

function CustomDrawerContent() {
  const navigation = useNavigation();

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerTopIcon}>
        <Ionicons name="menu-outline" size={30} color="#fff" />
      </View>
      <View style={styles.drawerHeader}>
        <Text style={styles.nameText}>Your Username</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
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
