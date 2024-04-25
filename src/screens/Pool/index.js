import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, Modal, Pressable, ActivityIndicator } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import Header from '../../../components/header';
import { FlatList } from 'react-native-gesture-handler';

export default function Pool() {
  const [sorted, setSorted] = useState("");
  const sortOptions = ["POOL", "Option 1", "Option 2", "Option 3"]; // Add your sort options here
  const [isExpanded, setIsExpanded] = useState(false);
  const handleSortOptionSelect = (option) => {
    setSorted(option);
    setIsExpanded(false);
  };
  const data  = null;// Add your data here
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
            <AntDesign name="ellipsis1" size={24} color="white" />
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
    width: '100%',
    marginHorizontal: 20,
  },
  boxCont: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 20,
    borderRadius: 25,
    marginTop: 0,
    marginBottom: 15,
  },
  TVL_VolumeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
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
  },
  searchBox: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: '40%',
  },
  searchInput: {
    color: 'gray',
    padding: 5,
  },
  sortDropDown: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    right: 5,
  },
  sortText: {
    color: 'gray',
  },
  threeDotIcon: {
    top:5,
    right:0,
    width: '10%',
    position: 'absolute',
    transform: [{rotate:'90deg'}]
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
  },
  modalContent: {
    padding: 20,
  },
  modalOption: {
    paddingVertical: 10,
    fontSize: 16,
  },
});
