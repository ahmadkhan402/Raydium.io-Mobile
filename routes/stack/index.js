
import { createNativeStackNavigator} from "@react-navigation/native-stack";

import ReydiamIndex from "../../src/screens/home";
import ScreenNames from "../route";
import SelectToken from "../../src/screens/selectToken";
import Liquidity from "../../src/screens/liquidity";
import ConnectWallet from "../../src/screens/connectWallet";
const Stack = createNativeStackNavigator();


export default function Routes() {
  return (

    <Stack.Navigator initialRouteName={ScreenNames.SWAP} screenOptions={{
      headerShown: false,
     animation:"fade",
    }}>
      <Stack.Screen name={ScreenNames.SWAP} options={{
        
      
      }} component={ReydiamIndex} />
      <Stack.Screen name={ScreenNames.LIQUIDITY} options={{
      }} component={Liquidity} />
      <Stack.Screen name={"WalletConnect"} options={{
        animation: 'slide_from_bottom',
        animationTypeForReplace: 'pop',
        animationDuration: 2000,
      }} component={ConnectWallet} />
      <Stack.Screen name={ScreenNames.SELECT_TOKEN} options={{
        animation: 'slide_from_bottom',
      }} component={SelectToken} />

      
      </Stack.Navigator>
  );
}
