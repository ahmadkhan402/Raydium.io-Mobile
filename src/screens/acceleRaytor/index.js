import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, Image, StyleSheet, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import Header from '../../../components/header';
import ScreenNames from '../../../routes/route';
import { AntDesign } from '@expo/vector-icons';
import { ListItem } from './ListItem';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const data = [{
  id: 1,
  iconImage: "https://img.raydium.io/icon/BKipkearSqAUdNKa1WDstvcMjoPsSKBuNyvKDQDDu9WE.png",
  name: "HAWK",
  fullName: "HAWKSIGHT",
  price: 50,
  raise: 1000000,
  total_deposited_Tickets: 359600,
  allocation: 50,
  pool_open: "2024-04-27T12:00:00Z",
  pool_close: "2024-6-30T12:00:00Z",
  coinImage: 'https://miro.medium.com/v2/resize:fit:1400/0*7Sqwmm63VyBf3ZXD',
  fill_percentage: "500%"
},
{
  id: 2,
  iconImage: "https://img.raydium.io/icon/BKipkearSqAUdNKa1WDstvcMjoPsSKBuNyvKDQDDu9WE.png",
  name: "Ray",
  fullName: "Radium",
  price: 50,
  raise: 1000000,
  total_deposited_Tickets: 359600,
  allocation: 50,
  pool_open: "2024-04-27T12:00:00Z",
  pool_close: "2024-6-30T12:00:00Z",
  coinImage: 'https://miro.medium.com/v2/resize:fit:1400/0*7Sqwmm63VyBf3ZXD',
  fill_percentage: "7500%"
},

];
export default function AcceleRaytor() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);



  useEffect(() => {

    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.fullName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchText]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title={ScreenNames.ACCELERAYTOR} />
      <ScrollView>
        {/* SVG icon and text */}
        <View style={styles.iconContainer}>
          <SvgUri
            width={wp('70%')}
            height={hp('10%')}
            uri="https://raydium.io/logo/accecleraytor-text-logo.svg"
          />
          <Text style={styles.Headlinetext}>Launch Pad for new Solana Projects</Text>
        </View>
        {/* Space for label and search box */}
        <View style={styles.searchContainer}>
          <Text style={styles.label}>Closed Pool</Text>
          <View style={styles.input}>
            <AntDesign name="search1" size={wp('5%')} color="white" />
            <TextInput
              style={{
                flex: 1,
                color: 'white',
                marginLeft: wp('2%'), // Adjust the margin here
                fontSize: wp('4%'), // Adjust font size here
              }}
              placeholder="Search..."
              placeholderTextColor="white" // Set the placeholder text color here
              onChangeText={text => setSearchText(text)}
              value={searchText}
            />
          </View>
        </View>

        {
          filteredData.map((item) => (
            <ListItem key={item.id} item={item} />
          ))
        }

      </ScrollView>

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
    marginLeft: wp('5%'),
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: wp('4%'),

  },
  searchContainer: {
    marginTop: hp('6%'),
    padding: wp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp('5%')
  },
  label: {
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    color: 'white',
    fontSize: wp('4%')
  },
  input: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: wp('2%'),
    padding: wp('2%'),
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: wp('2%'),
    width: wp('50%'),

  },
  flatList: {
    flex: 1,
    marginTop: hp('2%'),
  },
});
