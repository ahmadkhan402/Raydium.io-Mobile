import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ConnectWallet() {
  const [phrase, setPhrase] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
const navigation = useNavigation();
  const handleConnectWallet = () => {
    if (validatePhrase(phrase)) {
      // Here you can save the phrase to SQL database
      // For now, let's just log it
      console.log("Phrase:", phrase);
      navigation.navigate("Main")

      // You can navigate to another screen after saving the phrase if needed
      // navigation.navigate(ScreenNames.SomeOtherScreen);
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
      {/* Header */}
   
      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Phrase Input */}
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
        {/* Connect Wallet Button */}
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
  header: {
    padding: 15,
    backgroundColor: '#1f273f',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputSection: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1f273f',
    color: '#ABC4FF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
  },
  connectWalletButton: {
    backgroundColor: '#34ade5',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
  },
  connectWalletButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorMessage: {
    color: 'red',
    marginTop: 5,
  },
});
