import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';



export default function SwapBoxContainer() {

    const [isSwapped, setIsSwapped] = useState(false);

    const toggleSwap = () => {
        setIsSwapped((prev)=> !prev);
    };

    return (
        <LinearGradient
        colors={["rgba(59, 208, 216, .2)",'rgba(59, 208, 216, 0)','rgba(59, 208, 216, 0)','rgba(59, 208, 216, 0)', 'rgba(59, 208, 216, 0)']} // Define your gradient colors here
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.cardContainer}
      >  
      <View style={styles.innerContainer}>
                {isSwapped ? (
                    <>
                        <View style={styles.fromContainer}>
                            <Text style={styles.labelText}>{isSwapped ? 'From' : 'To'}</Text>
                            <Text style={styles.balanceText}>Balance: (Wallet not connected)</Text>
                            <View style={styles.inputRow}>
                                <View style={styles.coinAvatar}>
                                    <Image
                                        style={styles.avatarImage}
                                        source={{ uri: 'https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png' }}
                                    />
                                </View>
                                <View style={styles.coinInfo}>
                                    <Text style={styles.coinText}>SOL</Text>
                                    <TouchableOpacity >
                                        <AntDesign name="down" size={20} color="#FFFFFF" />
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity style={styles.maxButton}>
                                    <Text style={styles.maxButtonText}>Max</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.maxButton}>
                                    <Text style={styles.maxButtonText}>Half</Text>
                                </TouchableOpacity>
                                <View style={styles.inputSection}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="0.0"
                                        placeholderTextColor="#FFFFFF"
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>
                            <Text style={styles.infoText}>--</Text>
                        </View>
                        <TouchableOpacity onPress={() => toggleSwap(true)} style={styles.swapIconContainer}>
                            <Image
                                style={styles.swapIcon}
                                source={require('./../../assets/swap.png')}
                            />
                        </TouchableOpacity>
                        <View style={styles.fromContainer}>
                            <Text style={styles.labelText}>To</Text>
                            <Text style={styles.balanceText}>Balance: (Wallet not connected)</Text>
                            <View style={styles.inputRow}>
                                <View style={styles.coinAvatar}>
                                    <Image
                                        style={styles.avatarImage}
                                        source={{ uri: 'https://img.raydium.io/icon/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R.png' }}
                                    />
                                </View>
                                <View style={styles.coinInfo}>
                                    <Text style={styles.coinText}>RAY</Text>
                                    <TouchableOpacity >
                                        <AntDesign name="down" size={20} color="#FFFFFF" />
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity style={styles.maxButtonDisabled} disabled>
                                    <Text style={styles.maxButtonText}>Max</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.maxButtonDisabled} disabled>
                                    <Text style={styles.maxButtonText}>Half</Text>
                                </TouchableOpacity>
                                <View style={styles.inputSection}>
                                    <TextInput
                                        style={styles.inputDisabled}
                                        placeholder="0.0"
                                        placeholderTextColor="#FFFFFF"
                                        keyboardType="numeric"
                                        editable={false}
                                    />
                                </View>
                            </View>
                            <Text style={styles.infoText}>--</Text>
                        </View>
                        <LinearGradient
                            colors={["rgba(59, 208, 216, .2)", 'rgba(59, 208, 216, 0)']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.connectWalletButton}
                        >
                            <TouchableOpacity >
                                <Text style={styles.connectWalletButtonText}>Connect Wallet</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </>
                ) : (
                    <>
                    <View style={styles.fromContainer}>
                            <Text style={styles.labelText}>To</Text>
                            <Text style={styles.balanceText}>Balance: (Wallet not connected)</Text>
                            <View style={styles.inputRow}>
                                <View style={styles.coinAvatar}>
                                    <Image
                                        style={styles.avatarImage}
                                        source={{ uri: 'https://img.raydium.io/icon/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R.png' }}
                                    />
                                </View>
                                <View style={styles.coinInfo}>
                                    <Text style={styles.coinText}>RAY</Text>
                                </View>

                                <TouchableOpacity style={styles.maxButtonDisabled} disabled>
                                    <Text style={styles.maxButtonText}>Max</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.maxButtonDisabled} disabled>
                                    <Text style={styles.maxButtonText}>Half</Text>
                                </TouchableOpacity>
                                <View style={styles.inputSection}>
                                    <TextInput
                                        style={styles.inputDisabled}
                                        placeholder="0.0"
                                        placeholderTextColor="#FFFFFF"
                                        keyboardType="numeric"
                                        editable={false}
                                    />
                                </View>
                            </View>
                            <Text style={styles.infoText}>--</Text>
                        </View>
                        <TouchableOpacity onPress={() => toggleSwap(true)} style={styles.swapIconContainer}>
                            <Image
                                style={styles.swapIcon}
                                source={require('./../../assets/swap.png')}
                            />
                        </TouchableOpacity>
                        <View style={styles.fromContainer}>
                                <Text style={styles.labelText}>
                                  {  !isSwapped ? 'From' : 'To'}
                            </Text>
                            <Text style={styles.balanceText}>Balance: (Wallet not connected)</Text>
                            <View style={styles.inputRow}>
                                <View style={styles.coinAvatar}>
                                    <Image
                                        style={styles.avatarImage}
                                        source={{ uri: 'https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png' }}
                                    />
                                </View>
                                <View style={styles.coinInfo}>
                                    <Text style={styles.coinText}>SOL</Text>
                                    <TouchableOpacity >
                                        <AntDesign name="down" size={20} color="#FFFFFF" />
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity style={styles.maxButton}>
                                    <Text style={styles.maxButtonText}>Max</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.maxButton}>
                                    <Text style={styles.maxButtonText}>Half</Text>
                                </TouchableOpacity>
                                <View style={styles.inputSection}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="0.0"
                                        placeholderTextColor="#FFFFFF"
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>
                            <Text style={styles.infoText}>--</Text>
                        </View>
                       
                        <LinearGradient
                            colors={["rgba(59, 208, 216, .2)", 'rgba(59, 208, 216, 0)']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.connectWalletButton}
                        >
                            <TouchableOpacity >
                                <Text style={styles.connectWalletButtonText}>Connect Wallet</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </>
                )}
            </View>

        </LinearGradient>
    );
}
