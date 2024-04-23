import { View, Text, AppState } from "react-native";
import React, { useEffect, useState } from "react";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ReydiamIndex from "../../src/screens/home";
import ScreenNames from "../route";
import Pool from "../../src/screens/Pool";
import Liquidity from "../../src/screens/liquidity";

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();


export default function Routes() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.SWAP} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNames.SWAP} component={ReydiamIndex} />
        <Stack.Screen name={ScreenNames.LIQUIDITY} component={Liquidity} />
      </Stack.Navigator>
 </NavigationContainer>
  );
}
