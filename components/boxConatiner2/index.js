import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import { AntDesign,EvilIcons} from '@expo/vector-icons';
import color from '../../src/utills/Database';



export default function BoxContainer2() {

    const toggleAdd = () => {

    };

    return (
        <LinearGradient
            colors={["rgba(59, 208, 216, .2)", 'rgba(59, 208, 216, 0)', 'rgba(59, 208, 216, 0)', 'rgba(59, 208, 216, 0)', 'rgba(59, 208, 216, 0)']} // Define your gradient colors here
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.cardContainer}
        >
            <View style={styles.innerContainer}>
                <View style={styles.fromContainer}>
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
                <View style={styles.swapIconContainer}>
                <TouchableOpacity onPress={() => toggleSwap(true)} >
                <AntDesign name="plus" size={24}  color={color.menuColor}/>     
                </TouchableOpacity>
                    <View style={styles.addContainer}>
                        <View style={styles.row}>
                            <Text style={styles.text}>1 SOL ≈ 88.39 RAY</Text>
                            {/* <View style={styles.clickable}>
                                <Text style={styles.clickableText}>⇋</Text>
                            </View> */}
                        <View style={styles.iconContainer}>
                                        <EvilIcons name="search" size={25} color={color.menuColor}  style={styles.swapIcon}/>
                            </View>
                        </View>
                    </View>
               </View>
              
                <View style={styles.fromContainer}>
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

                        <TouchableOpacity style={styles.maxButton}>
                            <Text style={styles.maxButtonText}>Max</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.maxButton} >
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
                        <Text style={styles.connectWalletButtonText}>Pool Connect</Text>
                    </TouchableOpacity>



                </LinearGradient>

            </View>
        </LinearGradient>

    );
}
