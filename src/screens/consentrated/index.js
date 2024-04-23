import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, Modal, Pressable, ActivityIndicator } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import Header from '../../../components/header';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../../routes/route';
import { LinearGradient } from 'expo-linear-gradient';
import color from '../../utills/Database';
// ListItem Component
const ListItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={toggleExpand}>
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
          <Text style={styles.label}>Rewards</Text>
          <View style={styles.rewardContainer}>
            {/* Reward image */}
            <AntDesign name={'questioncircleo'} size={18} color="gray" />
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
          <View style={styles.separator} />
          <View style={styles.rowContainer}>
            <View style={styles.columnContainer}>
              <Text style={styles.label}>Liquidity</Text>
              <Text style={styles.label}>{item.liquidity}</Text>
            </View>
            <View style={styles.columnContainer}>
              <Text style={styles.label}>Volume</Text>
              <Text style={styles.label} >{item.volume}</Text>
            </View>
            <View style={styles.columnContainer}>
              <Text style={styles.label}>Fees</Text>
              <Text style={styles.label} >{item.fees}</Text>
            </View>
          </View>
          <View style={{
            marginVertical: 10,
            alignItems: 'center',
            width: '100%',
          }} >
            <Text style={{
              color: 'gray',
              fontSize: 16,
              marginBottom: 10,
              fontWeight: 'bold',
            }}>Want to open new position?</Text>
            <View style={styles.ButtonContainer}>
              <LinearGradient
                colors={["rgba(59, 208, 216, .2)", 'rgba(59, 208, 216, 0)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.connectWalletButton}
              >
                <TouchableOpacity >
                  <Text style={styles.connectWalletButtonText}>Create position</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>

        </View>
      )}
    </TouchableOpacity>
  );

};

export default function Consentrated() {
  //get screen name
  const ScreenName = ScreenNames.CONCENTRATED
  const [sorted, setSorted] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const sortOptions = ["POOL", "Option 1", "Option 2", "Option 3"];

  const handleSortOptionSelect = (option) => {
    setSorted(option);
    setModalVisible(false);
  };

  const data = [{
    id: 1, projectName1: "SOL", projectName2: "USDC", stared: false, rewards: [{
      reward1: "SOL",
    }, {
      reward2: "USDC",
    }],
    apr: "0.00%",
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
          <TouchableOpacity style={styles.sortDropDown} onPress={() => setModalVisible(true)}>
            <Text style={styles.sortText}>Sort by: {sorted}</Text>
          </TouchableOpacity>
          <View style={styles.threeDotIcon}>
            <EvilIcons name="navicon" size={24} color="white" />
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <Pressable style={styles.modalBackdrop} onPress={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                {sortOptions.map((option, index) => (
                  <Pressable key={index} onPress={() => handleSortOptionSelect(option)}>
                    <Text style={styles.modalOption}>{option}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          </Pressable>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0927',
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
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
  listItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 15,
  },
  listItemTitle: {
    color: 'white',
  },
  expandedContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 10,
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
    flexDirection:'row'
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
  expandedContainer: {
    padding: 10,
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
  connectWalletButtonText: {
    color: color.menuColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
