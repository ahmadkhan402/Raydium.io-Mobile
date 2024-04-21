import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function BoxContainer() {
    return (
        <View style={styles.cardContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.fromContainer}>
              <Text style={styles.labelText}>From</Text>
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
                </View>
                <View style={styles.inputSection}>
                  <TouchableOpacity style={styles.maxButton}>
                    <Text style={styles.maxButtonText}>Max</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.halfButton}>
                    <Text style={styles.halfButtonText}>Half</Text>
                  </TouchableOpacity>
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
              <Image
                style={styles.swapIcon}
                source={require('./../../assets/swap.png')}
              />
            </View>
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
                <View style={styles.inputSection}>
                  <TouchableOpacity style={styles.maxButtonDisabled} disabled>
                    <Text style={styles.maxButtonText}>Max</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.halfButtonDisabled} disabled>
                    <Text style={styles.halfButtonText}>Half</Text>
                  </TouchableOpacity>
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
            <TouchableOpacity style={styles.connectWalletButton}>
            <Text style={styles.connectWalletButtonText}>Connect Wallet</Text>
          </TouchableOpacity>
          </View>
          
        </View>
      );
}
