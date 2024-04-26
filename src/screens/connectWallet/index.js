import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function ConnectWallet() {
  const [phrase, setPhrase] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleConnectWallet = () => {
    if (validatePhrase(phrase)) {
      console.log("Phrase:", phrase);
      navigation.navigate("Main");
    } else {
      setErrorMessage('Please enter a valid phrase.');
    }
  };

  const validatePhrase = (phrase) => {
    const words = phrase.trim().split(' ');
    if (words.length < 12 || words.length > 24) {
      return false;
    }
    const isLowerCase = words.every(word => /^[a-z]+$/.test(word));
    return isLowerCase;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.inputSection}>
          <TextInput
            style={styles.input}
            placeholder="Enter 12 to 24 words separated by spaces"
            placeholderTextColor="#ABC4FF"
            onChangeText={text => {
              setPhrase(text);
              setErrorMessage('');
            }}
            value={phrase}
            multiline={true}
            numberOfLines={4}
          />
          {errorMessage !== '' && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        </View>
        <TouchableOpacity
          style={styles.connectWalletButton}
          onPress={handleConnectWallet}
        >
          <Text style={styles.connectWalletButtonText}>Connect Wallet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0927',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: wp('5%'), // Responsive padding
  },
  inputSection: {
    marginBottom: hp('3%'), // Responsive margin
  },
  input: {
    backgroundColor: '#1f273f',
    color: '#ABC4FF',
    borderRadius: wp('10%'), // Responsive border radius
    paddingHorizontal: wp('5%'), // Responsive padding
    paddingVertical: hp('2%'), // Responsive padding
    fontSize: wp('4%'), // Responsive font size
  },
  connectWalletButton: {
    backgroundColor: '#34ade5',
    borderRadius: wp('10%'), // Responsive border radius
    paddingVertical: hp('2%'), // Responsive padding
    alignItems: 'center',
  },
  connectWalletButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: wp('4%'), // Responsive font size
  },
  errorMessage: {
    color: 'red',
    marginTop: hp('1%'), // Responsive margin
    fontSize: wp('4%'), // Responsive font size
  },
});
