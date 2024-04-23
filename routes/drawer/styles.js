import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor:'#1f273f',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  drawerTopIcon: {
    // Style for top icon/logo
  },
  drawerItemsContainer: {
    marginTop: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: 'rgba(57, 208, 216, 0.1)',
  },
  itemIconContainer: {
    backgroundColor: 'rgba(57, 208, 216, 0.2)',
    borderRadius: 999,
    padding: 8,
    marginRight: 12,
  },
  itemIcon: {
    width: 24,
    height: 24,
  },
  itemText: {
    fontSize: 16,
    color: '#ACE3E5',
  },
});
  export default styles