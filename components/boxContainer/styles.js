import { StyleSheet } from "react-native";
import color from "../../src/utills/Database";
import { height, width } from "../../src/utills/Dimention";

const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: color.primaryColor,
      borderRadius: 20,
      padding: 20,
      height: height(58),
      width: width(92),
    },
    innerContainer: {
      marginTop: 20,
      marginBottom: 20,
    },
    fromContainer: {
      backgroundColor: '#141041',
      borderRadius: 20,
      padding: 20,
      marginBottom: 20,
    },
    labelText: {
      fontSize: 12,
      color: 'rgba(171,196,255,0.5)',
      marginBottom: 5,
    },
    balanceText: {
      fontSize: 12,
      color: 'rgba(171,196,255,0.5)',
      alignSelf: 'flex-end',
      marginBottom: 10,
    },
    inputRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    coinAvatar: {
      width: 36,
      height: 36,
      backgroundColor: 'rgba(171, 196, 255, 0.2)',
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    avatarImage: {
      width: 24,
      height: 24,
      borderRadius: 12,
    },
    coinInfo: {
      flex: 1,
    },
    coinText: {
      color: '#ABC4FF',
      fontSize: 14,
      fontWeight: 'bold',
    },
    inputSection: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    maxButton: {
      backgroundColor: '#1B1659',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 16,
    },
    maxButtonText: {
      color: 'rgba(171,196,255,0.5)',
      fontSize: 12,
      fontWeight: 'bold',
    },
    input: {
      flex: 1,
      color: '#FFFFFF',
      fontSize: 16,
      textAlign: 'right',
    },
    infoText: {
      fontSize: 10,
      color: 'rgba(171,196,255,0.5)',
      alignSelf: 'flex-end',
    },
    swapIconContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    swapIcon: {
      width: 24,
      height: 24,
    },
    connectWalletButton: {
      backgroundColor: '#39D0D8',
      paddingVertical: 12,
      borderRadius: 20,
      alignItems: 'center',
    },
    connectWalletButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
    // Styles for disabled state
    maxButtonDisabled: {
      backgroundColor: '#1B1659',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 16,
      opacity: 0.4,
    },
    halfButtonDisabled: {
      backgroundColor: '#1B1659',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 16,
      opacity: 0.4,
    },
    inputDisabled: {
      flex: 1,
      color: '#FFFFFF',
      fontSize: 16,
      textAlign: 'right',
      opacity: 0.4,
    },
  });
  
  export default styles;