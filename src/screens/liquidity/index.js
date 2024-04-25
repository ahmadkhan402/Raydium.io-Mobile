import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import RadioButton from '../../../components/RadioButton';
import styles from './styles';
import Header from '../../../components/header';
import LiquidityBoxContainer from '../../../components/LiquidityBox';
import ScreenNames from '../../../routes/route';
import colors from '../../utills/RecommendedColors';
import color from '../../utills/Database';
import { height, width } from "../../utills/Dimention";
import { LinearGradient } from 'expo-linear-gradient';
export default function Liquidity() {
  const ScreenName = ScreenNames.LIQUIDITY;
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    if (isFocused) {
      setSelectedOption('liquidity');
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title={ScreenName} />
      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Radio Buttons */}
        <View style={styles.radioButtonContainer}>
          {/* Swap Radio Button */}
          <RadioButton
            label="Swap"
            selected={selectedOption === 'swap'}
            navigateTo={() => {
              setSelectedOption('swap');
              navigation.navigate(ScreenNames.SWAP);
            }}
            gradientColors={selectedOption === 'swap' ? ["#aadefe", "#0993ecd9"] : null}
            style={styles.radioButton}
          />

          {/* Liquidity Radio Button */}
          <RadioButton
            label="Liquidity"
            selected={selectedOption === 'liquidity'}
            navigateTo={() => setSelectedOption('liquidity')}
            gradientColors={selectedOption === 'liquidity' ? ["#aadefe", "#0993ecd9"] : null}
            style={styles.radioButton}
          />
        </View>

        {/* Box Container */}
        <View style={styles.boxCont}>
          <LiquidityBoxContainer />
        </View>
        <View style={styless.LabelContainer}>
          <Text style={[styless.LiquidityLabel]}>Your Liquidity</Text>
        </View>
        <View style={[styless.LiquidityContainer, { flex: 1 }]}>
          <View style={[styless.LiquidityBox]}>
            <Text style={[styless.LiquidityBoxText]}>
              If you staked your LP tokens in a farm, unstake them to see them here
            </Text>
          </View>
        </View>
        <View style={styless.LabelContainer}>
          <Text style={[styless.LiquidityLabel]}>Create Pool</Text>
        </View>
        <View style={[styless.PoolContainer, { flex: 1 }]}>
          <View style={[styless.PoolBox]}>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={[styless.PoolTextBox]}>
                Create a liquidity pool on Raydium that can be traded on swap interface.
              </Text>
            </View>
            <TouchableOpacity style={styless.PoolButton}>
              <LinearGradient
                style={styless.connectWalletButton}
                colors={['rgba(59, 208, 216, .2)', 'rgba(59, 208, 216, 0)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styless.connectWalletButtonText}>+  Create Pool</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styless = StyleSheet.create({
  boxContainer: {
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    marginTop: 20, // Add any margin as needed
  },
  LiquidityContainer: {
    alignItems: 'center',
  },
  PoolContainer: {
    alignItems: 'center',
  },
  LabelContainer: {
    marginVertical: 15,
    marginLeft: 25,
    alignSelf: 'flex-start',
  },
  LiquidityLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  LiquidityBox: {
    backgroundColor: color.primaryColor,
    borderRadius: 20,
    padding: 20,
    width: "90%",
    borderRightWidth: 0.4,
    borderRightColor: color.colorFuchsia,
    elevation: 20,
    borderTopWidth: 3,
    borderTopColor: "rgba(59, 208, 216, .2)",
  },
  LiquidityBoxText: {
    color: 'white',
    fontSize: 12,
  },
  connectWalletButton: {
    bottom: 10,
    padding: 20,
    borderRadius: 10,
    elevation: 40,
    borderRightWidth: 0.1,
    borderLeftWidth: 0.1,
    borderBottomWidth: 0.1,
    borderTopWidth: 0.1,
    borderColor: "#58f3cd",
    alignItems: 'center',

  },
  PoolBox: {
    flexDirection: 'row',
    backgroundColor: color.primaryColor,
    borderRadius: 20,
    padding: 20,
    width: "90%",
    borderRightWidth: 0.4,
    borderRightColor: color.colorFuchsia,
    elevation: 20,
    borderTopWidth: 3,
    borderTopColor: "rgba(59, 208, 216, .2)",
    alignItems: 'center', // Center vertically
    justifyContent: 'space-between', // Space between horizontally
  },
  PoolTextBox: {
    color: 'white',
    fontSize: 12,
    flex: 1, // Take up available space
  },
  PoolButton: {
    backgroundColor: color.primaryColor, // Same background color as the box
    borderRadius: 20,
    marginLeft:10,
    paddingVertical: 12,
    paddingHorizontal: 20, // Add some padding to the button
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
  },
  connectWalletButtonText: {
    color: color.menuColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
