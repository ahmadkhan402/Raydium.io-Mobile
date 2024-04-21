
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import styles from './styles';
import Header from '../../../components/header';
import { LinearGradient } from 'expo-linear-gradient';
import BoxContainer from '../../../components/boxContainer';

export default function ReydiamIndex() {
    const [closed, setClosed] = useState(true)
    const [selectedOption, setSelectedOption] = useState('swap');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    return (
        <View style={styles.container}>
            {/* Header */}
            {closed && <View style={styles.header}>
                <Text style={styles.headerText}>
                    In case you missed it, Raydium V3 Beta is live - check it out{' '}
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://beta.raydium.io')}>
                        here
                    </Text>
                    ! More info in the{' '}
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://x.com/RaydiumProtocol/status/1772563377501724786')}>
                        Tweet
                    </Text>
                    .
                </Text>

                <TouchableOpacity style={styles.closeButton} onPress={() => setClosed(false)}>
                    <Text style={styles.closeButtonText}>×</Text>
                </TouchableOpacity>
            </View>
            }
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

                <BoxContainer />

            </ScrollView>
 </View>
    )
}