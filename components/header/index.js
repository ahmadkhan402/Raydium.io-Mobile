import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../routes/route';
import { AntDesign } from '@expo/vector-icons';
import color from '../../src/utills/Database';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Header({ title }) {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const toggleSwitch = () => {
    setIsChecked((prev) => !prev); // Toggle the isChecked state
  };
  const [modalVisible, setModalVisible] = useState(false);
  const sortOptions = ["POOL", "Option 1", "Option 2", "Option 3"];
  const [sortValue, setSorted] = useState(sortOptions[0]);

  const handleSortOptionSelect = (option) => {
    setSorted(option);
    setModalVisible(false);
  };

  return (
    <LinearGradient
      colors={["rgba(59, 208, 216, .2)", '#192f6a']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}>

      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.openDrawer()}>
        <Image
          source={require('./../../assets/menu.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      {title == ScreenNames.CONCENTRATED || title == ScreenNames.FARMS ? (
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.headerModelContainer}>
          <Text style={styles.headerSelectedText}>{sortValue}</Text>
          <AntDesign name="down" size={wp('3%')} color="gray" />
        </TouchableOpacity>
      ) :
        (
          <Text style={styles.title}>
            {title ? title : 'Swap'}
          </Text>
        )}

      <View style={styles.rightSection}>
        <View style={styles.versTxContainer}>
          <TouchableOpacity
            style={[styles.switchButton, isChecked && styles.switchButtonOn]}
            onPress={toggleSwitch}
          >
            <View style={[styles.switchInnerCircle]} />
          </TouchableOpacity>
          <Text style={styles.versTxText}>Vers. Tx</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate(ScreenNames.WALLET_CONNECT)} style={styles.walletButton}>
          <Image
            source={require('./../../assets/wallet.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <Pressable style={styles.modalBackdrop} onPress={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                {sortOptions.map((option, index) => (
                  <Pressable key={index} onPress={() => handleSortOptionSelect(option)}>
                    <Text style={styles.modalOption}>{option}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          </Pressable>
        </Modal>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('3%'), // Responsive padding
    borderRadius: wp('1.5%'), // Responsive border radius
    height: hp('9%'), // Responsive height
  },
  iconContainer: {
    padding: wp('2%'), // Responsive padding
    borderRadius: wp('1.5%'), // Responsive border radius
    backgroundColor: 'transparent',
    borderWidth: wp('0.3%'), // Responsive border width
    borderColor: color.menuColor,
  },
  icon: {
    width: wp('4%'), // Responsive width
    height: wp('3.5%'), // Responsive height
    tintColor: color.menuColor,
  },
  title: {
    fontSize: wp('5%'), // Responsive font size
    fontWeight: 'bold',
    color: 'white',
    marginLeft: wp('3%'), // Responsive margin
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  versTxContainer: {
    top: wp('0.5%'), // Responsive margin
    alignItems: 'center',
    marginRight: wp('1%'), // Responsive margin
  },
  versTxText: {
    color: '#abc4ff80',
    fontSize: wp('2%'), // Responsive font size
    top: wp('0.2%'), // Responsive margin
  },
  switchButton: {
    width: wp('7%'), // Responsive width
    height: wp('4%'), // Responsive height
    borderRadius: wp('2%'), // Responsive border radius
    backgroundColor: '#39D0D8',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  switchButtonOn: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  switchInnerCircle: {
    width: wp('5%'), // Responsive width
    height: wp('3.5%'), // Responsive height
    borderRadius: wp('2%'), // Responsive border radius
    backgroundColor: '#ffffff',
  },
  walletButton: {
    padding: wp('2%'), // Responsive padding
    borderRadius: wp('1.5%'), // Responsive border radius
    backgroundColor: 'transparent',
    borderWidth: wp('0.3%'), // Responsive border width
    borderColor: color.menuColor,
    margin: wp('0.5%'), // Responsive margin
  },
  headerModelContainer: {
    backgroundColor: '#1f273f',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: wp('1.5%'), // Responsive border radius
    margin: wp('0.5%'), // Responsive margin
    height: hp('6%'), // Responsive height
  },
  headerSelectedText: {
    fontSize: wp('4%'), // Responsive font size
    color: 'white',
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: wp('1.5%'), // Responsive border radius
    borderTopRightRadius: wp('1.5%'), // Responsive border radius
    width: '100%',
  },
  modalContent: {
    padding: wp('3%'), // Responsive padding
  },
  modalOption: {
    paddingVertical: wp('2%'), // Responsive padding
    fontSize: wp('4%'), // Responsive font size
  },
});
