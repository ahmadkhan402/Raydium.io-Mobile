import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Import responsive screen dimensions
import RadioButton from '../../../components/RadioButton';

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
                <View style={{ marginVertical: hp('4%') }}>
                    <ChartView />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0c0927',
        justifyContent: 'center',
    },
    header: {
        padding: wp('2%'),
        backgroundColor: '#1f273f',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: wp('1%')
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: RFValue(14), // Use responsive font size
    },
    linkText: {
        color: '#34ade5',
        textDecorationLine: 'underline',
    },
    closeButton: {
        marginLeft: 'auto',
    },
    closeButtonText: {
        color: '#FFFFFF',
        fontSize: RFValue(16), // Use responsive font size
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
    radioButtonText: {
        color: '#ABC4FF',
        fontSize: RFValue(12), // Use responsive font size
    },
    checkedRadioButtonText: {
        fontSize: RFValue(12), // Use responsive font size
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    swapInputContainer: {
        marginBottom: hp('2%'),
    },
    inputSection: {
        // Style for input section
    },
    swapButton: {
        backgroundColor: '#39D0D8',
        borderRadius: wp('5%'),
        paddingVertical: hp('1.5%'),
        alignItems: 'center',
    },
    swapButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    tokenInfoContainer: {
        // Style for token info container
    },
    footer: {
        alignItems: 'center',
    },
    connectWalletButton: {
        backgroundColor: '#34ade5',
        borderRadius: wp('5%'),
        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('10%'),
    },
    connectWalletButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    boxCont: {
        alignItems: "center"
    }

});
