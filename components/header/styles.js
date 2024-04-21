
import {StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import color from '../../src/utills/Database';

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
    flex:1  
    },
    iconContainer: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'transparent',
      borderWidth:1,
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
      borderWidth:1,
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
  });
  export default styles;