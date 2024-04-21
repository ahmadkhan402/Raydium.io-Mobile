import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0c0927',
      justifyContent: 'flex-start',
      paddingHorizontal: 15,
    },
    header: {
        padding:15,
      backgroundColor: '#1f273f',
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight:5
    },
    headerText: {
      color: '#FFFFFF',
      fontSize: 14,
    },
    linkText: {
      color: '#34ade5',
      textDecorationLine: 'underline',
    },
    closeButton: {
      marginLeft: 'auto',
    },
    closeButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
    contentContainer: {
      flexGrow: 1,
      paddingBottom: 20,
    },
    radioButtonContainer: {
        alignSelf:"center",
        width:"50%",
      flexDirection: 'row',
      marginVertical:5,
      backgroundColor: '#1f273f',
      borderRadius: 30,
    },
    radioButton: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 8,
      borderRadius: 30,
    },
    // checkedRadioButton: {
    //   backgroundColor: '#3B82F6',
    // },
    radioButtonText: {
      color: '#ABC4FF',
      fontSize:12,
    },
    checkedRadioButtonText: {
        fontSize:12,
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    swapInputContainer: {
      marginBottom: 20,
    },
    inputSection: {
      // Style for input section
    },
    swapButton: {
      backgroundColor: '#39D0D8',
      borderRadius: 20,
      paddingVertical: 12,
      alignItems: 'center',
    },
    swapButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    tokenInfoContainer: {
      // Style for token info container
    },
    footer: {
      alignItems: 'center',
    },
    connectWalletButton: {
      backgroundColor: '#34ade5',
      borderRadius: 20,
      paddingVertical: 12,
      paddingHorizontal: 40,
    },
    connectWalletButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    
  });
  
  
  export default styles;