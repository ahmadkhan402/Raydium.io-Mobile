import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,Modal,Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../routes/route';
import { AntDesign, } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import color from '../../src/utills/Database';
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
   colors={[  "rgba(59, 208, 216, .2)",'#192f6a']} 
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
      {
        title == ScreenNames.CONCENTRATED || title == ScreenNames.FARMS ? (
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.headerModelContainer}>
            <Text style={styles.headerSelectedText}>{sortValue}</Text>
            <AntDesign name="down" size={14} color="gray" />
          </TouchableOpacity>
        ) :
          (
            <Text style={styles.title}>{
              title ? title : 'Swap'
            }</Text>
          )
      }

      
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
    {/* </View> */}
    </LinearGradient>
  );
}





const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    // backgroundColor: '#0c0927',
    borderRadius: 10,
  },
  linearGradient: {
    flex: 1
  },
  iconContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: color.menuColor,
  },
  icon: {
    width: 15,
    height: 15,
    tintColor: color.menuColor
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  versTxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  versTxText: {
    color: '#abc4ff80',
    fontSize: 12,
    marginRight: 5,
  },
  switchButton: {
    padding: 5,
  },
  switchInnerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#39D0D8',
  },
  walletButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: color.menuColor,
  },
  switchButton: {
    width: 40,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#39D0D8',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  switchButtonOn: {
    width: 40,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#39D0D8',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  switchInnerCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  switchInnerCircleOn: {
    backgroundColor: '#ffffff',
  },
  headerModelContainer: {
    backgroundColor: '#1f273f',

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    margin:5,

    height: 40,
  },
  headerSelectedText: {
    fontSize:16,
    color: 'white',
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
  },
  modalContent: {
    padding: 20,
  },
  modalOption: {
    paddingVertical: 10,
    fontSize: 16,
  },
});