import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: "blue",
        // justifyContent: "space-between",
      },
      drawerTopIcon:{
        marginTop:20,
        padding:28
      },
      drawerHeader: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        // borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
      },
      content: {
         flex: 1,
        justifyContent:"flex-end",
        marginBottom: 20,
        paddingHorizontal: 16,
      },
      logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      logoutText: {
        marginLeft: 15,
        fontSize: 16,
        color: '#fff',
      },
  });
  export default styles