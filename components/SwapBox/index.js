import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const CoinInput = ({ coinInfo }) => {
    const inputRef = useRef(null);

    const handleMaxPress = () => {
        inputRef.current.focus();
    };
    const handleHalfPress = () => {
        inputRef.current.focus();
    }


    return (
        <View style={styles.fromContainer}>
            <Text style={styles.labelText}>{coinInfo.label}</Text>
            <Text style={styles.balanceText}>Balance: (Wallet not connected)</Text>
            <View style={styles.inputRow}>
                <View style={styles.coinAvatar}>
                    <Image
                        style={styles.avatarImage}
                        source={{ uri: coinInfo.avatarUrl }}
                    />
                </View>
                <View style={styles.coinInfo}>
                    <Text style={styles.coinText}>{coinInfo.symbol}</Text>
                    <TouchableOpacity>
                        <AntDesign name="down" size={20} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.maxButton} onPress={handleMaxPress}>
                    <Text style={styles.maxButtonText}>Max</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleHalfPress} style={styles.maxButton}>
                    <Text style={styles.maxButtonText}>Half</Text>
                </TouchableOpacity>
                <View style={styles.inputSection}>
                    <TextInput
                        ref={inputRef}
                        style={styles.input}
                        placeholder="0.0"
                        placeholderTextColor="#FFFFFF"
                        keyboardType="numeric"
                    />
                </View>
            </View>
            <Text style={styles.infoText}>--</Text>
        </View>
    );
};

export default function SwapBoxContainer() {
    const [isSwapped, setIsSwapped] = useState(false);

    const toggleSwap = () => {
        setIsSwapped((prev) => !prev);
    };

    const coinFrom = {
        label: 'From',
        symbol: isSwapped ? 'RAY' : 'SOL',
        avatarUrl: isSwapped
            ? 'https://img.raydium.io/icon/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R.png'
            : 'https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png',
    };

    const coinTo = {
        label: 'To',
        symbol: isSwapped ? 'SOL' : 'RAY',
        avatarUrl: isSwapped
            ? 'https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png'
            : 'https://img.raydium.io/icon/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R.png',
    };

    return (
        <LinearGradient
            colors={['rgba(59, 208, 216, .2)', 'rgba(59, 208, 216, 0)', 'rgba(59, 208, 216, 0)', 'rgba(59, 208, 216, 0)', 'rgba(59, 208, 216, 0)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.cardContainer}
        >
            <View style={styles.innerContainer}>
                <View>
                    <CoinInput coinInfo={coinFrom} />
               </View>
                <View style={styles.swapIconContainer}>
                    <TouchableOpacity onPress={toggleSwap} style={[styles.swapIconContainer, { transform: [{ rotate: '90deg' }] }]}>
                        <AntDesign name="swap" size={24} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
                <View>
                    <CoinInput coinInfo={coinTo} />
                </View>
                <TouchableOpacity>
                <LinearGradient
                    style={styles.connectWalletButton}
                    colors={['rgba(59, 208, 216, .2)', 'rgba(59, 208, 216, 0)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    >
                        <Text style={styles.connectWalletButtonText}>Connect Wallet</Text>
                </LinearGradient>
                    </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import color from "../../src/utills/Database";

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: color.primaryColor,
        borderRadius: wp('5%'), // Responsive border radius
        padding: wp('4%'), // Responsive padding
        height: hp('60%'), // Responsive height
        width: wp('92%'), // Responsive width
        borderRightWidth: wp('0.4%'), // Responsive border width
        borderRightColor: color.colorFuchsia,
        elevation: 20,
        borderTopWidth: wp('0.3%'), // Responsive border width
        borderTopColor: "rgba(59, 208, 216, .2)",
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'space-between',
        marginTop: wp('5%'), // Responsive margin
        marginBottom: wp('5%'), // Responsive margin
    },
    fromContainer: {
        backgroundColor: '#141041',
        borderRadius: wp('5%'), // Responsive border radius
        padding: wp('4%'), // Responsive padding
        marginBottom: wp('4%'), // Responsive margin
    },
    labelText: {
        fontSize: wp('3%'), // Responsive font size
        color: 'rgba(171,196,255,0.5)',
        marginBottom: wp('1%'), // Responsive margin
    },
    balanceText: {
        fontSize: wp('3%'), // Responsive font size
        color: 'rgba(171,196,255,0.5)',
        alignSelf: 'flex-end',
        marginBottom: wp('2%'), // Responsive margin
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    coinAvatar: {
        width: wp('10%'), // Responsive width
        height: wp('10%'), // Responsive height
        backgroundColor: 'rgba(171, 196, 255, 0.2)',
        borderRadius: wp('5%'), // Responsive border radius
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: wp('2%'), // Responsive margin
    },
    avatarImage: {
        width: wp('6%'), // Responsive width
        height: wp('6%'), // Responsive height
        borderRadius: wp('3%'), // Responsive border radius
    },
    coinInfo: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
    },
    coinText: {
        color: '#ABC4FF',
        fontSize: wp('3%'), // Responsive font size
        fontWeight: 'bold',
        paddingRight: wp('1%'), // Responsive padding
    },
    inputSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    maxButton: {
        backgroundColor: '#1B1659',
        paddingVertical: wp('2%'), // Responsive padding
        paddingHorizontal: wp('4%'), // Responsive padding
        borderRadius: wp('8%'), // Responsive border radius
    },
    maxButtonText: {
        color: 'rgba(171,196,255,0.5)',
        fontSize: wp('3%'), // Responsive font size
        fontWeight: 'bold',
    },
    input: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: wp('4%'), // Responsive font size
        textAlign: 'right',
    },
    infoText: {
        fontSize: wp('2%'), // Responsive font size
        color: 'rgba(171,196,255,0.5)',
        alignSelf: 'flex-end',
    },
    swapIconContainer: {
        alignItems: 'center',
    },
    connectWalletButton: {
        bottom: wp('2%'), // Responsive margin
        paddingVertical: wp('4%'), // Responsive padding
        borderRadius: wp('10%'), // Responsive border radius
        elevation: 40,
        borderRightWidth: wp('0.1%'), // Responsive border width
        borderLeftWidth: wp('0.1%'), // Responsive border width
        borderBottomWidth: wp('0.1%'), // Responsive border width
        borderTopWidth: wp('0.1%'), // Responsive border width
        borderColor: "#58f3cd",
        alignItems: 'center',
    },
    connectWalletButtonText: {
        color: color.menuColor,
        fontWeight: 'bold',
        fontSize: wp('4%'), // Responsive font size
    },
    coinInputContainer: {
        alignItems: 'center',
    },
});

