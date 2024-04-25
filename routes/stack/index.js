import { View, Text, AppState } from "react-native";
import React, { useEffect, useState } from "react";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";

import ReydiamIndex from "../../src/screens/home";
import ScreenNames from "../route";
import Pool from "../../src/screens/Pool";
import Liquidity from "../../src/screens/liquidity";
import ConnectWallet from "../../src/screens/connectWallet";
const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();


export default function Routes() {
  return (

    <Stack.Navigator initialRouteName={ScreenNames.SWAP} screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      
    
     
    }}>
      <Stack.Screen name={ScreenNames.SWAP} options={{
        animation: 'slide_from_bottom', 
      }} component={ReydiamIndex} />
      <Stack.Screen name={ScreenNames.LIQUIDITY} options={{
      }} component={Liquidity} />
      <Stack.Screen name={"WalletConnect"} options={{
      }} component={ConnectWallet} />

      
      </Stack.Navigator>
  );
}
