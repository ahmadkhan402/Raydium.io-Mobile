import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../../routes/route';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import color from '../../utills/Database';
import colors from '../../utills/RecommendedColors';
import { ListItem } from './ListItem';
import Header from '../../../components/header';

export default function Farms() {
  //get screen name
  const ScreenName = ScreenNames.FARMS;
  const [sorted, setSorted] = useState("");
  const sortOptions = ["POOL", "Option 1", "Option 2", "Option 3"];
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSortOptionSelect = (option) => {
    setSorted(option);
    setIsExpanded(false);
  };

  const data = [{
    id: 1, projectName1: "SOL", projectName2: "USDC", stared: false, rewards: [{
      reward1: "SOL",
    }, {
      reward2: "USDC",
    }],
    apr: "--",
    fee: "0.00%",
    liquidity: "$0.00",
    volume: "$0.00",
    fees: "$0.00",
  },
    {
      id: 1, projectName1: "SOL", projectName2: "USDC", stared: false, rewards: [{
        reward1: "SOL",
      }, {
        reward2: "USDC",
      }],
      apr: "--",
      fee: "0.00%",
      liquidity: "$0.00",
      volume: "$0.00",
      fees: "$0.00",
    }];

  return (
    <SafeAreaView style={styles.container}>
      <Header title={ScreenName} />
      <View style={styles.boxCont}>
        <View style={styles.searchSortBox}>
          <View style={styles.searchBox}>
            <TextInput
              placeholder="Search"
              placeholderTextColor="gray"
              style={styles.searchInput}
            />
          </View>
          <View style={styles.expandableContainer}>
            <TouchableOpacity style={styles.sortDropDown} onPress={() => setIsExpanded(true)}>
              <Text style={styles.sortText}>Sort by: {sorted}</Text>
            </TouchableOpacity>
            {
              isExpanded ?
                sortOptions.map((option, index) => (
                  <TouchableOpacity style={styles.sortDropDown} key={index} onPress={() => handleSortOptionSelect(option)}>
                    <Text style={styles.sortText}>{option}</Text>
                  </TouchableOpacity>
                )) : null
            }
          </View>
          <TouchableOpacity style={styles.threeDotIcon}>
            <AntDesign name="ellipsis1" size={wp('6%')} color="white" />
          </TouchableOpacity>
        </View>
        {data ? (
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <ListItem item={item} />} // Using ListItem component here
          />
        ) : (
          <ActivityIndicator style={{ flex: 1 }} size="large" color="white" />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0927',
  },
  boxCont: {
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('3%'),
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    marginHorizontal: wp('5%'),
    borderRadius: wp('6%'),
    marginVertical: hp('2%'),

  },
  searchSortBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: wp('2%'),
    marginBottom: hp('2%'),
    borderRadius:wp('3%'),
  },
  searchBox: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: wp('3%'),
    height: hp('5%'),
    width: wp('35%'),
  },
  searchInput: {
    color: 'gray',
    padding: wp('2%'),
  },
  sortDropDown: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: wp('3%'),
    height: hp('5%'),
    width: wp('35%'),
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  sortText: {
    color: 'gray',
  },
  threeDotIcon: {

    transform: [{ rotate: '90deg' }],
  },
});
