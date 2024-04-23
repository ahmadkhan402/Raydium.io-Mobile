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
      borderRightWidth:0.4,
      borderRightColor:color.colorFuchsia,
      elevation:20,
      borderTopWidth:3,
      borderTopColor:"rgba(59, 208, 216, .2)",
      justifyContent:"center" ,
      
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
      flexDirection:"row"
    },
    coinText: {
      color: '#ABC4FF',
      fontSize: 14,
      fontWeight: 'bold',
      paddingRight:5
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
      width:width(82),
      flexDirection:"row",
      marginBottom: 20,
      paddingHorizontal:16,
      justifyContent:"center",
      alignItems:"center"
    },
    swapIcon: {
      width: 24,
      height: 24,
    },
    connectWalletButton: {
      paddingVertical: 12,
      borderRadius: 10,
      elevation:40,
     borderRightWidth:0.1,
     borderLeftWidth:0.1,
     borderBottomWidth:0.1,
     borderTopWidth:0.1,
      borderColor:"#58f3cd",
      alignItems: 'center',
      
    },
    connectWalletButtonText: {
      color: color.menuColor,
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
    iconContainer: {
      padding: 4,
      borderRadius: 20,
      borderWidth:0.2,
      backgroundColor: "rgba(59, 208, 216, .2);",
      borderColor: color.menuColor,
    },
    addContainer: {
      flex:1,
      paddingHorizontal:10,
      transitionProperty: 'all',
      transitionDuration: 200,
      transitionTimingFunction: 'ease',
      justifyContent: 'center',
    },
    row: {
     flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'System', // You can replace with your desired font
      fontSize: 14,
      color: '#ABC4FF',
    },
    text: {
      fontSize: 14,
      fontWeight: 'bold',
      color:"white"
    },
    clickable: {
      marginLeft: 8,
      padding: 4,
      borderRadius: 4,
      backgroundColor: '#E4E6EB', // Example background color for the clickable area
    },
    clickableText: {
      fontSize: 14,
      fontWeight: 'bold',
      color:"white"
    },
  });
  
  
  export default styles;