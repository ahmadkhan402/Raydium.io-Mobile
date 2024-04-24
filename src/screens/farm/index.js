import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, Modal, Pressable, ActivityIndicator } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import Header from '../../../components/header';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../../routes/route';
import { LinearGradient } from 'expo-linear-gradient';
import color from '../../utills/Database';
import colors from '../../utills/RecommendedColors'
// ListItem Component
const ListItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const nav = useNavigation()
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity style={{
      marginVertical: 10,
      borderRadius: 10,
      width: '100%',
      backgroundColor: colors.blueViolet[1600],
    }} onPress={toggleExpand}>
      <View style={styles.containerExpand}>
        <View>
          <AntDesign name={'star'} size={16} color="yellow" />
        </View>
        <View>
          {/* Images */}
          <View style={styles.imageContainer}>
            {/* Placeholder icon if image is not present */}
            <AntDesign name={'questioncircleo'} size={18} color="gray" />
            <AntDesign name={'questioncircleo'} size={18} color="gray" />

          </View>
          {/* projectsName */}
          <View>
            <Text style={styles.projectName}>{item.projectName1}-{item.projectName2}</Text>
            <Text style={styles.fee}>{item.fee}</Text>
          </View>
        </View>
        {/* reward */}
        <View>
          <Text style={styles.label}>TVL</Text>
          <View style={styles.rewardContainer}>
            {/* Reward image */}
            <ActivityIndicator size="small" color="gray" />
          </View>
        </View>
        {/* apr */}
        <View>
          <Text style={styles.label}>APR(7D)</Text>
          <Text style={styles.label} >{item.apr}</Text>
        </View>
        <View>
          <AntDesign name={expanded ? 'caretup' : 'caretdown'} size={18} color="gray" />
        </View>
      </View>
      {expanded && (
        <View style={styles.expandedContainer}>
          <View style={styles.twoBoxContainer}>
            <View style={[styles.depositContainer, {
              flexDirection: 'row',
              borderWidth: 1,
              marginHorizontal: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 15,
              height: 50,
            }]}>
              <View style={[styles.labelVlueContainer, {
                marginLeft: 10,
              }]}>
                <Text style={styles.label}>Deposit</Text>
                <Text style={styles.value}>$0.00</Text>
              </View>
              <TouchableOpacity style={[styles.ButtonContainer, {

                height: 50,

                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',

              }]}>
                <LinearGradient
                  colors={['#58f3cd', '#58f3cd']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    width: '50%',
                    marginHorizontal: 5,
                    borderRadius: 5, padding: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{
                    color: colors.bluishCyan[100],
                    fontWeight: 'bold',
                    fontSize: 12
                  }}>ConnectWallet</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={[styles.pendingRewardsContainer, {
              borderWidth: 1,
              marginHorizontal: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 15,
              height: 120,
              marginTop: 10
            }]}>
              <View style={[styles.labelVlueContainer, {
                marginTop: 5,
                marginRight: 120
              }]}>
                <Text style={styles.label}>Pending Rewards</Text>
                <Text style={styles.value}>$0.00</Text>
              </View>
              <TouchableOpacity style={[styles.ButtonContainer, {
                alignItems: 'flex-end',

                height: 60,

              }
              ]}>
                <LinearGradient
                  colors={['#58f3cd', '#58f3cd']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.connectWalletButton}>
                  <Text style={[styles.connectWalletButtonText, {
                    fontSize: 14,
                    justifyContent: 'center',
                    textAlign: 'center',
                  }]}>ConnectWallet</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

          </View>
          <View style={[styles.ThreeIconButtonContainer, {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
            marginVertical: 10,
            gap: 10,


          }]}>
            <TouchableOpacity style={styles.swapButton}>
              <AntDesign name="link" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.swapButton}>
              <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.swapButton,]}>
              <AntDesign style={{
                transform: [{ rotate: '90deg' }]
              }} name="swap" size={24} color="white" />
            </TouchableOpacity>
          </View>

        </View>
      )}
    </TouchableOpacity>
  );

};

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
  }]

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
          <View style={styles.threeDotIcon}>
            <AntDesign name="ellipsis1" size={24} color="white" />
          </View>
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
    marginVertical: 10,
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
  expandedContainer: {
    flex: 1,
  },

  TVL_VolumeContainerText: {
    color: 'white',
  },
  TVL_VolumeContainerTextTitle: {
    color: 'gray',
  },
  boxCont: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 0,
  },
  expandableContainer: {
    width: '100%',
    marginHorizontal: 20,
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

  listItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 15,
  },
  listItemTitle: {
    color: 'white',
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
  columnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
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
    right: 0,
    width: '10%',
    position: 'absolute',
  },

});
