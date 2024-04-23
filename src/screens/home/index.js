
import React, { useState,useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Linking, SafeAreaView } from 'react-native';
import styles from './styles';
import Header from '../../../components/header';
import { LinearGradient } from 'expo-linear-gradient';
import SwapBoxContainer from '../../../components/SwapBox';
import LiquidityBoxContainer from '../../../components/LiquidityBox';
import { useNavigation } from '@react-navigation/native';

export default function ReydiamIndex() {
    const navigation = useNavigation()
    const [selectedOption, setSelectedOption] = useState('swap');
    useEffect(() => {
        const navUpdate = async () => await setSelectedOption('swap')
        navUpdate();

    }, [navigation])
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <Header />
            {/* Main Content */}
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {/* Radio Buttons */}
                <View style={styles.radioButtonContainer}>
                    {/* Swap Radio Button */}
                    {selectedOption === 'swap' ? (
                        <LinearGradient
                            colors={["#aadefe", "#0993ecd9"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={[
                                styles.radioButton,
                                selectedOption === 'swap' && styles.radioButton,
                            ]}
                        >
                            {/* Liquidity Radio Button */}
                            <TouchableOpacity onPress={() => handleOptionChange('swap')}>
                                <Text
                                    style={[
                                        styles.radioButtonText,
                                        selectedOption === 'swap' && styles.checkedRadioButtonText,
                                    ]}
                                >
                                    Swap
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    ) : (
                        <TouchableOpacity
                            style={[styles.radioButton]}
                            onPress={() => handleOptionChange('swap')}>
                            <Text
                                style={[styles.radioButtonText, selectedOption === 'swap' && styles.checkedRadioButtonText]}>
                                Swap
                            </Text>
                        </TouchableOpacity>
                    )}

                {/* Liquidity Radio Button */}
                    {selectedOption === 'liquidity' ? (
                        <LinearGradient
                            colors={["#aadefe", "#0993ecd9"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={[
                                styles.radioButton,
                                selectedOption === 'liquidity' && styles.radioButton,
                            ]}
                        >
                            {/* Liquidity Radio Button */}
                            <TouchableOpacity onPress={() => handleOptionChange('liquidity')}>
                                <Text
                                    style={[
                                        styles.radioButtonText,
                                        selectedOption === 'liquidity' && styles.checkedRadioButtonText,
                                    ]}
                                >
                                    Liquidity
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    ) : (
                        <TouchableOpacity
                            style={[styles.radioButton]}
                            onPress={() => handleOptionChange('liquidity')}>
                            <Text
                                style={[styles.radioButtonText, selectedOption === 'liquidity' && styles.checkedRadioButtonText]}>
                                Liquidity
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>

                {/* Box Container */}

{selectedOption === 'swap' ? (
    <View style={styles.boxCont}>
    <SwapBoxContainer/>
    </View>
): (
    <View style={styles.boxCont}>
  <LiquidityBoxContainer/>
    </View>
)}
               

            </ScrollView>
 </SafeAreaView>
    )
}