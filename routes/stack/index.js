import { View, Text, AppState } from "react-native";
import React, { useEffect, useState } from "react";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ReydiamIndex from "../../src/screens/home";
import ScreenNames from "../route";

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();



export default function Routes() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.HOME} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNames.HOME} component={ReydiamIndex} />
      </Stack.Navigator>
 </NavigationContainer>
  );
}
