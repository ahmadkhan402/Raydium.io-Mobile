import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, Image, StyleSheet, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import Header from '../../../components/header';
import ScreenNames from '../../../routes/route';
import { AntDesign } from '@expo/vector-icons';
import ListItem from './ListItem';

const dataList = [
  {
    id: 1,
    image: 'https://example.com/coin1.png',
    name: 'HAWK',
    fullName: 'Hawksight',
    closed: false,
    totalRaise: 60,
    winningTicket: 3000,
    totalDeposited: 6000,
    poolOpen: true,
    poolOpenDateTime: '2024-04-27T12:00:00Z',
    poolCloseDateTime: '2024-04-30T12:00:00Z',
    price : 50
  },
  {
    id: 2,
    image: 'https://example.com/coin2.png',
    name: 'SOLO',
    fullName: 'Solono',
    closed: true,
    totalRaise: 100,
    winningTicket: 5000,
    totalDeposited: 8000,
    poolOpen: false,
    poolOpenDateTime: '2024-04-25T12:00:00Z',
    poolCloseDateTime: '2024-04-28T12:00:00Z',
    price: 0.5,
  },
  // Add more data items as needed
];

export default function AcceleRaytor() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(dataList);

  useEffect(() => {
    // Filter data based on search text
    const filtered = dataList.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.fullName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchText]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title={ScreenNames.ACCELERAYTOR} />
      {/* SVG icon and text */}
      <View style={styles.iconContainer}>
        <SvgUri
          width="200"
          height="80"
          uri="https://raydium.io/logo/accecleraytor-text-logo.svg"
        />
        <Text style={styles.Headlinetext}>LUCHA PAD FOR NEW SOLONA PROJECTS</Text>
      </View>
      {/* Space for label and search box */}
      <View style={styles.searchContainer}>
        <Text style={styles.label}>Closed Pool</Text>
        <View style={styles.input}>
          <AntDesign name="search1" size={24} color="black" />
          <TextInput
            style={{
              flex: 1,
              color: 'white',
              
            }}
            placeholder="Search..."
            onChangeText={text => setSearchText(text)}
            value={searchText}
          />
        </View>
      </View>
      {/* FlatList */}
      <FlatList
        style={styles.flatList}
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <></>}
      />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0927',
  },
  iconContainer: {
    alignItems: 'center',
  },
  Headlinetext: {
    marginLeft: 10,
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 16,

  },
  searchContainer: {
    marginTop: 50,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal:10
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
    fontSize:16
  },
  input: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 5,
    width: '50%',
    
  },
  flatList: {
    flex: 1,
    marginTop: 10,
  },
});
