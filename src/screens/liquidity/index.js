import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import RadioButton from '../../../components/RadioButton';
import styles from './styles';
import Header from '../../../components/header';
import LiquidityBoxContainer from '../../../components/LiquidityBox';
import ScreenNames from '../../../routes/route';

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
      </ScrollView>
    </SafeAreaView>
  );
}
