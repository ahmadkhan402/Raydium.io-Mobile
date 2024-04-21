import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
        const [isChecked, setIsChecked] = useState(false);
        const toggleSwitch = () => {
          setIsChecked((prev) => !prev); // Toggle the isChecked state
        };
  return (
   
    <LinearGradient
   colors={[  "rgba(59, 208, 216, .2)",'#192f6a']} // Gradient colors with left and right colors
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 0 }} 
      style={styles.container}>

    {/* <View style={styles.container}> */}
      <TouchableOpacity style={styles.iconContainer} onPress={()=> navigation.openDrawer()}>
        <Image
          source={require('./../../assets/menu.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Swap</Text>
      <View style={styles.rightSection}>
              <View style={styles.versTxContainer}>
                  <Text style={styles.versTxText}>Vers. Tx</Text>
                  <TouchableOpacity
                      style={[styles.switchButton, isChecked && styles.switchButtonOn]}
                      onPress={toggleSwitch}
                  >
                  {/* isChecked && styles.switchInnerCircleOn */}
                      <View style={[styles.switchInnerCircle ]} />
                  </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.walletButton}>
                  <Image
                      source={require('./../../assets/wallet.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    {/* </View> */}
    </LinearGradient>
  );
}
