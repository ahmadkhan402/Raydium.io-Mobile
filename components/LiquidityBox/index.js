import React, { useState ,useRef} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
export default function LiquidityBoxContainer() {
const navigation = useNavigation()
    const toggleAdd = () => {

    };
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);

    const handleMaxPress = () => {
        inputRef.current.focus();
    };
    const handleHalfPress = () => {
        inputRef.current.focus();
    }
    const handleMaxPress1 = () => {
        inputRef2.current.focus();
    };
    const handleHalfPress2 = () => {
        inputRef2.current.focus();
    }

    return (
        <LinearGradient
            colors={["rgba(59, 208, 216, .2)", 'rgba(59, 208, 216, 0)', 'rgba(59, 208, 216, 0)', 'rgba(59, 208, 216, 0)', 'rgba(59, 208, 216, 0)']}
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
                            <TouchableOpacity onPress={() => navigation.navigate(ScreenNames.SELECT_TOKEN)} >
                                <AntDesign name="down" size={20} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={handleMaxPress} style={styles.maxButton}>
                            <Text style={styles.maxButtonText}>Max</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleHalfPress} style={styles.maxButton}>
                            <Text style={styles.maxButtonText}>Half</Text>
                        </TouchableOpacity>
                        <View style={styles.inputSection}>
                            <TextInput
                                ref={inputRef}
                                style={styles.input}
                                placeholder=""
                                placeholderTextColor="#FFFFFF"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                    <Text style={styles.infoText}>--</Text>
                </View>
                <View style={styles.swapIconContainer}>
                    <TouchableOpacity >
                        <AntDesign name="plus" size={24} color="#FFFFFF" />
                    </TouchableOpacity>
                    <View style={styles.addContainer}>
                        <View style={styles.row}>
                            <TouchableOpacity style={[styles.iconContainer, {
                                marginLeft: wp('25%'),
                            }]}>
                                <EvilIcons name="search" size={25} color="#FFFFFF" style={styles.swapIcon} />
                            </TouchableOpacity>
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
                            <TouchableOpacity onPress={() => navigation.navigate(ScreenNames.SELECT_TOKEN)} >
                                <AntDesign name="down" size={20} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={handleMaxPress1} style={styles.maxButton}>
                            <Text style={styles.maxButtonText}>Max</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleHalfPress2} style={styles.maxButton}>
                            <Text style={styles.maxButtonText}>Half</Text>
                        </TouchableOpacity>
                        <View style={styles.inputSection}>
                            <TextInput
                                
                                style={styles.input}
                                placeholder=""
                                placeholderTextColor="#FFFFFF"
                                keyboardType="numeric"
                                ref={inputRef2}
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

import { StyleSheet } from "react-native";
import color from "../../src/utills/Database";
import ScreenNames from '../../routes/route';

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: color.primaryColor,
        borderRadius: 20,
        padding: wp('5%'),
        height: hp('58%'),
        width: wp('92%'),
        borderRightWidth: 0.4,
        borderRightColor: color.colorFuchsia,
        elevation: 20,
        borderTopWidth: 3,
        borderTopColor: "rgba(59, 208, 216, .2)",
        justifyContent: "center",
    },
    innerContainer: {
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
    },
    fromContainer: {
        backgroundColor: '#141041',
        borderRadius: 20,
        padding: wp('5%'),
        marginBottom: hp('2%'),
    },
    balanceText: {
        fontSize: wp('3%'),
        color: 'rgba(171,196,255,0.5)',
        alignSelf: 'flex-end',
        marginBottom: hp('1%'),
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    coinAvatar: {
        width: wp('10%'),
        height: wp('10%'),
        backgroundColor: 'rgba(171, 196, 255, 0.2)',
        borderRadius: wp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: wp('2%'),
    },
    avatarImage: {
        width: wp('6%'),
        height: wp('6%'),
        borderRadius: wp('3%'),
    },
    coinInfo: {
        flex: 1,
        flexDirection: "row"
    },
    coinText: {
        color: '#ABC4FF',
        fontSize: wp('4%'),
        fontWeight: 'bold',
        paddingRight: wp('1%'),
    },
    inputSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    maxButton: {
        backgroundColor: '#1B1659',
        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('4%'),
        borderRadius: wp('8%'),
        marginRight: wp('1%'),
    },
    maxButtonText: {
        color: 'rgba(171,196,255,0.5)',
        fontSize: wp('3%'),
        fontWeight: 'bold',
    },
    input: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: wp('4%'),
        textAlign: 'right',
    },
    infoText: {
        fontSize: wp('2%'),
        color: 'rgba(171,196,255,0.5)',
        alignSelf: 'flex-end',
    },
    swapIconContainer: {
        flexDirection: "row",
        marginBottom: hp('2%'),
        paddingHorizontal: wp('4%'),
        alignItems: "space-between",
        marginLeft: wp('30%'),
       
    },
    swapIcon: {
        width: wp('6%'),
        height: wp('6%'),
    },
    connectWalletButton: {
        paddingVertical: hp('2%'),
        borderRadius: wp('5%'),
        elevation: 40,
        borderRightWidth: 0.1,
        borderLeftWidth: 0.1,
        borderBottomWidth: 0.1,
        borderTopWidth: 0.1,
        borderColor: "#58f3cd",
        alignItems: 'center',
    },
    connectWalletButtonText: {
        color: color.menuColor,
        fontWeight: 'bold',
        fontSize: wp('4%'),
    },
    iconContainer: {
        padding: wp('1%'),
        borderRadius: wp('5%'),
        borderWidth: 0.2,
        backgroundColor: "rgba(59, 208, 216, .2);",
        borderColor: color.menuColor,
    },
    addContainer: {
        flex: 1,
        paddingHorizontal: wp('2%'),
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'System',
        fontSize: wp('3.5%'),
        color: '#ABC4FF',
    },
});

