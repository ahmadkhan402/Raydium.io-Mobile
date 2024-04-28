import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import RadioButton from '../../../components/RadioButton';
import Header from '../../../components/header';
import LiquidityBoxContainer from '../../../components/LiquidityBox';
import ScreenNames from '../../../routes/route';
import colors from '../../utills/RecommendedColors';
import color from '../../utills/Database';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
        <View style={styles.LabelContainer}>
          <Text style={styles.LiquidityLabel}>Your Liquidity</Text>
        </View>
        <View style={[styles.LiquidityContainer, { flex: 1 }]}>
          <View style={styles.LiquidityBox}>
            <Text style={styles.LiquidityBoxText}>
              If you staked your LP tokens in a farm, unstake them to see them here
            </Text>
          </View>
        </View>
        <View style={styles.LabelContainer}>
          <Text style={styles.LiquidityLabel}>Create Pool</Text>
        </View>
        <View style={[styles.PoolContainer, { flex: 1 }]}>
          <View style={styles.PoolBox}>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.PoolTextBox}>
                Create a liquidity pool on Raydium that can be traded on swap interface.
              </Text>
            </View>
            <TouchableOpacity style={styles.PoolButton}>
              <LinearGradient
                style={styles.connectWalletButton}
                colors={['rgba(59, 208, 216, .2)', 'rgba(59, 208, 216, 0)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.connectWalletButtonText}>+  Create Pool</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0927',
    justifyContent: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: hp('2%'),
  },
  radioButtonContainer: {
    alignSelf: "center",
    flexDirection: 'row',
    marginVertical: hp('1%'),
    backgroundColor: '#1f273f',
    borderRadius: wp('5%'),
    justifyContent: 'center',
  },
  radioButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: hp('1%'),
    padding: wp('2%'),
    borderRadius: wp('5%'),
  },
  boxCont: {
    alignItems: "center",
    justifyContent: 'center',
    marginTop: hp('2%'),
  },
  LabelContainer: {
    marginVertical: hp('1.5%'),
    marginLeft: wp('6.5%'),
    alignSelf: 'flex-start',
  },
  LiquidityLabel: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    color: 'white',
  },
  LiquidityContainer: {
    alignItems: 'center',
  },
  LiquidityBox: {
    backgroundColor: color.primaryColor,
    borderRadius: wp('5%'),
    padding: hp('2%'),
    width: wp('90%'),
    borderRightWidth: wp('0.4%'),
    borderRightColor: color.colorFuchsia,
    elevation: wp('2%'),
    borderTopWidth: hp('0.3%'),
    borderTopColor: "rgba(59, 208, 216, .2)",
  },
  LiquidityBoxText: {
    color: 'white',
    fontSize: RFValue(12),
  },
  PoolContainer: {
    alignItems: 'center',
  },
  PoolBox: {
    flexDirection: 'row',
    backgroundColor: color.primaryColor,
    borderRadius: wp('5%'),
    padding: hp('2%'),
    width: wp('90%'),
    borderRightWidth: wp('0.4%'),
    borderRightColor: color.colorFuchsia,
    elevation: wp('2%'),
    borderTopWidth: hp('0.3%'),
    borderTopColor: "rgba(59, 208, 216, .2)",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  PoolTextBox: {
    color: 'white',
    fontSize: RFValue(12),
    flex: 1,
  },
  PoolButton: {
    backgroundColor: color.primaryColor,
    borderRadius: wp('5%'),
    marginLeft: wp('1%'),
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectWalletButton: {
    bottom: hp('0.5%'),
    padding: hp('2%'),
    borderRadius: wp('3%'),
    elevation: wp('4%'),
    borderRightWidth: wp('0.1%'),
    borderLeftWidth: wp('0.1%'),
    borderBottomWidth: wp('0.1%'),
    borderTopWidth: wp('0.1%'),
    borderColor: "#58f3cd",
    alignItems: 'center',

  },
  connectWalletButtonText: {
    color: color.menuColor,
    fontWeight: 'bold',
    fontSize: RFValue(16),
  },
});
