import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ReydiamIndex from './src/screens/home';
import DrawerNavigator from './routes/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/stack';

const App = () => {
  return (
  //   <NavigationContainer>
   <DrawerNavigator/>
  //  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0927',
    padding: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1f273f',
    padding: 10,
    borderRadius: 10,
  },
  leftSection: {
    flex: 1,
  },
  centerSection: {
    flex: 1,
    alignItems: 'center',
  },
  rightSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  smallIcon: {
    width: 14,
    height: 14,
    tintColor: '#abc4ff80',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: -3,
  },
  versTxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  versTxText: {
    color: '#abc4ff80',
    fontSize: 12,
    marginRight: 5,
  },
  switchButton: {
    padding: 5,
  },
  switchInnerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#39D0D8',
  },
  walletButton: {
    padding: 10,
    borderRadius: 10,
  },
});

export default App;
