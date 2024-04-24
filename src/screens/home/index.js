import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import RadioButton from '../../../components/RadioButton';
import styles from './styles';
import Header from '../../../components/header';
import SwapBoxContainer from '../../../components/SwapBox';
import ChartView from '../../../components/chartView';
import ScreenNames from '../../../routes/route';

export default function ReydiamIndex() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        if (isFocused) {
            setSelectedOption('swap');
        }
    }, [isFocused]);

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <Header />
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
                        navigateTo={() => {
                            setSelectedOption('liquidity');
                            navigation.navigate(ScreenNames.LIQUIDITY);
                        }}
                        gradientColors={selectedOption === 'liquidity' ? ["#aadefe", "#0993ecd9"] : null}
                        style={styles.radioButton}
                    />
                </View>

                {/* Box Container */}
                <View style={styles.boxCont}>
                    <SwapBoxContainer /> 
                </View>

                {/* Chart */}
                <View style={{ marginVertical: 30 }}>
                    <ChartView />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
