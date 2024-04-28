import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Header from '../../../components/header';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../../routes/route';
import color from '../../utills/Database';
import colors from '../../utills/RecommendedColors';
import { ListItem } from './ListItem';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Consentrated() {
  const ScreenName = ScreenNames.CONCENTRATED;
  const [sorted, setSorted] = useState('');
  const sortOptions = ['POOL', 'Option 1', 'Option 2', 'Option 3'];
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSortOptionSelect = (option) => {
    setSorted(option);
    setIsExpanded(false);
  };

  const data = [
    {
      id: 1,
      projectName1: 'SOL',
      projectName2: 'USDC',
      stared: false,
      rewards: [
        {
          reward1: 'SOL',
        },
        {
          reward2: 'USDC',
        },
      ],
      apr: '--',
      fee: '0.00%',
      liquidity: '$0.00',
      volume: '$0.00',
      fees: '$0.00',
    },
    {
      id: 2,
      projectName1: 'SOL',
      projectName2: 'USDC',
      stared: false,
      rewards: [
        {
          reward1: 'SOL',
        },
        {
          reward2: 'USDC',
        },
      ],
      apr: '--',
      fee: '0.00%',
      liquidity: '$0.00',
      volume: '$0.00',
      fees: '$0.00',
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title={ScreenName} />
      <View style={styles.TVL_VolumeContainer}>
        <Text style={styles.TVL_VolumeContainerText}><Text style={styles.TVL_VolumeContainerTextTitle}>TVL</Text> : $0.00</Text>
        <Text style={styles.TVL_VolumeContainerText}><Text style={styles.TVL_VolumeContainerTextTitle}>Volume</Text> : $0.00</Text>
      </View>
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
            {isExpanded &&
              sortOptions.map((option, index) => (
                <TouchableOpacity style={styles.sortDropDown} key={index} onPress={() => handleSortOptionSelect(option)}>
                  <Text style={styles.sortText}>{option}</Text>
                </TouchableOpacity>
              ))
            }
          </View>
          <TouchableOpacity style={styles.threeDotIcon}>
            <AntDesign style={{ transform: [{ rotate: '90deg' }] }} name="ellipsis1" size={wp('5.5%')} color="white" />
          </TouchableOpacity>
        </View>
        {data ? (
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <ListItem item={item} />}
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
    backgroundColor: colors.blueViolet[1200]
  },
  TVL_VolumeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp('5%'),
  },
  expandableContainer: {
    width: '40%',
    marginHorizontal: wp('5%'),
  },
  TVL_VolumeContainerText: {
    color: 'white',
  },
  TVL_VolumeContainerTextTitle: {
    color: 'gray',
  },
  boxCont: {
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('4%'),
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    marginHorizontal: wp('4%'),
    borderRadius: wp('6%'),
    marginBottom: hp('1%'),
  },
  listItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: wp('5%'),
  },
  containerExpand: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('2%'),
    gap: wp('2%'),
    justifyContent: 'space-around',
  },
  imageContainer: {
    marginRight: wp('2%'),
    flexDirection: 'row',
    gap: wp('-3%'),
  },
  projectName: {
    fontWeight: 'bold',
    color: 'gray',
  },
  fee: {
    color: 'gray',
  },
  rewardContainer: {
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    color: 'gray',
  },
  expandedItemText: {
    color: 'white',
    fontSize: wp('3%'),
    fontWeight: 'bold',
    textAlign: 'flex-start',
  },
  contentContainer: {
    flexGrow: 1,
  },
  searchSortBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: hp('-2%'),
  },
  searchBox: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: wp('5%'),
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
    borderRadius: wp('5%'),
    height: hp('5%'),
    width: wp('35%'),
    justifyContent: 'center',
    alignItems: 'center',
    right: wp('1%'),
  },
  sortText: {
    color: 'gray',
  },
  threeDotIcon: {
    marginTop: hp('2.3%'),
    width: wp('10%'),
    right: wp('3.5%'),

  },
});
