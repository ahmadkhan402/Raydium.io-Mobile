import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
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
                <CoinInput coinInfo={coinFrom} />
                <TouchableOpacity onPress={toggleSwap} style={[styles.swapIconContainer, { transform: [{ rotate: '90deg' }] }]}>
                    <AntDesign name="swap" size={24} color="#FFFFFF" />
                </TouchableOpacity>

                <CoinInput coinInfo={coinTo} />
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
