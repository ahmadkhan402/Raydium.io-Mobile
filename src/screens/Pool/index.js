import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, Modal, Pressable, ActivityIndicator } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import Header from '../../../components/header';
import { FlatList } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Pool() {
  const [sorted, setSorted] = useState("");
  const sortOptions = ["POOL", "Option 1", "Option 2", "Option 3"]; // Add your sort options here
  const [isExpanded, setIsExpanded] = useState(false);
  const handleSortOptionSelect = (option) => {
    setSorted(option);
    setIsExpanded(false);
  };
  const data = null;// Add your data here
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Pool" />
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
        {
          data ? (
            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View>
                  {/* Your list item */}
                </View>
              )}
            />
          ) : (
            <ActivityIndicator style={{
              flex: 1,
            }} size="large" color="white" />
          )
        }

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0927',
  },
  contentContainer: {
    flexGrow: 1,
  },
  expandableContainer: {
    width: wp('100%'),
    marginHorizontal: wp('4%'),
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
  TVL_VolumeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp('5%'),
  },
  TVL_VolumeContainerText: {
    color: 'white',
  },
  TVL_VolumeContainerTextTitle: {
    color: 'gray',
  },
  searchSortBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top:hp('-2%'),
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
    marginTop: hp('2%'),
    right: 0,
    width: wp('10%'),
    position: 'absolute',
    transform: [{ rotate: '90deg' }]
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: wp('1%'),
    borderTopRightRadius: wp('1%'),
    width: wp('100%'),
  },
  modalContent: {
    padding: wp('5%'),
  },
  modalOption: {
    paddingVertical: wp('2%'),
    fontSize: wp('4%'),
  },
});
