import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, TouchableOpacity,  ActivityIndicator } from 'react-native';
import { AntDesign} from '@expo/vector-icons';
import Header from '../../../components/header';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../../routes/route';
import color from '../../utills/Database';
import colors from '../../utills/RecommendedColors'
import { ListItem } from './ListItem';

export default function Consentrated() {
  const ScreenName = ScreenNames.CONCENTRATED
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
    }]

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
            <AntDesign style={{
              transform: [{ rotate: '90deg' }],
            }} name="ellipsis1" size={20} color="white" />
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
    backgroundColor: colors.blueViolet[1200]
  },
  TVL_VolumeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  expandableContainer: {
    width: '100%',
    marginHorizontal: 20,
  },
  TVL_VolumeContainerText: {
    color: 'white',
  },
  TVL_VolumeContainerTextTitle: {
    color: 'gray',
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
  listItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 15,
  },
  containerExpand: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    justifyContent: 'space-around'
  },
  imageContainer: {
    marginRight: 10,
    flexDirection: 'row',
    gap: -7
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
    marginBottom: 5,
    color: 'gray',
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  ButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 10,
  },
  connectWalletButton: {
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 40,
    borderRightWidth: 0.1,
    borderLeftWidth: 0.1,
    borderBottomWidth: 0.1,
    borderTopWidth: 0.1,
    borderColor: "#58f3cd",
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  swapButton: {
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 40,
    borderRightWidth: 0.1,
    borderLeftWidth: 0.1,
    borderBottomWidth: 0.1,
    borderTopWidth: 0.1,
    borderColor: "#58f3cd",
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  connectWalletButtonText: {
    color: color.menuColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  expandedItemText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'flex-start',
  },
  contentContainer: {
    flexGrow: 1,
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
    top: 8,
    right: 0,
    width: '10%',
    position: 'absolute',
  },
});
