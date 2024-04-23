import { StyleSheet } from "react-native";
import { height, width } from "../../src/utills/Dimention";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    chart: {
      marginVertical: 8,
      borderRadius: 16,
    },
    label:{
      paddingTop: 5,
        color: '#FFFFFF',
        fontSize: 12,
  },
  txtContainer: { 
    flex: 1, justifyContent: "space-between", flexDirection: "row", paddingHorizontal: width(23), paddingTop: height(2) 
  },
  coinAvatar: {
    width: 36,
    height: 36,
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
});

  export default styles