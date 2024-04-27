import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Header from '../../../components/header';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../../routes/route';
import color from '../../utills/Database';
import colors from '../../utills/RecommendedColors'
import { ListItem } from './ListItem';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default function SelectToken() {
  const ScreenName = ScreenNames.CONCENTRATED
  const [sorted, setSorted] = useState("");
  const sortOptions = ["POOL", "Option 1", "Option 2", "Option 3"];
  const [isExpanded, setIsExpanded] = useState(false);
  const navigation = useNavigation();

  const handleSortOptionSelect = (option) => {
    setSorted(option);
    setIsExpanded(false);
  };

  const data = [{
    id: 1, projectName1: "SOL",
    projectFullName: "Solona",
    tokenIcon: "https://solana.com/favicon.ico",
    address: "0x1234567890",
    urlLink : "https://fdfdsfsf.com"
  },
  {
    id: 1, id: 1, projectName1: "SOL",
    projectFullName: "Solana",
    tokenIcon: 'https://img.raydium.io/icon/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R.png',
    urlLink: "https://fdfdsfsf.com"


  }]
  const PopularTokens = [
    {
      id: 1,
      tokenName: "SOL",
      tokenIcon: 'https://img.raydium.io/icon/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R.png'


    },
    {
      id: 2,
      tokenName: "USDC",
      tokenIcon: "https://solana.com/favicon.ico",
    },
    {
      id: 3,
      tokenName: "BTC",
      tokenIcon: "https://solana.com/favicon.ico",
    },
    {
      id: 4,
      tokenName: "ETH",
      tokenIcon: "https://solana.com/favicon.ico",
    },
    {
      id: 5,
      tokenName: "USDT",
      tokenIcon: "https://solana.com/favicon.ico",
    },
    {
      id: 6,
      tokenName: "SOL",
      tokenIcon: "https://solana.com/favicon.ico",
    },
    {
      id: 7,
      tokenName: "USDC",
      tokenIcon: "https://solana.com/favicon.ico",
    },
    {
      id: 8,
      tokenName: "BTC",
      tokenIcon: "https://solana.com/favicon.ico",
    },
    {
      id: 9,
      tokenName: "ETH",
      tokenIcon: "https://solana.com/favicon.ico",
    },
    {
      id: 10,
      tokenName: "USDT",
      tokenIcon: "https://solana.com/favicon.ico",
    }
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>{ScreenNames.SELECT_TOKEN}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.crossIcon}>
          <AntDesign name="close" size={widthPercentageToDP('6%')} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBox}>
        <AntDesign name="search1" size={widthPercentageToDP('5%')} color="gray" style={{ marginLeft: widthPercentageToDP('2%') }} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="gray"
          style={styles.searchInput}
        />
      </View>
      <View style={styles.PopularTokensContainer}>
        <Text style={styles.popularTokenLabel}>Popular Tokens</Text>
        <View style={styles.TopRowContainer}>
          {/* Showing 4 popular containers, the first four */}
          {PopularTokens.slice(0, 4).map((item, index) => (
            <TouchableOpacity style={styles.PopularToken} key={index}>
              <Image
                style={styles.PopularTokenImage}
                source={{ uri: item.tokenIcon }}
              />
              <Text style={styles.PopularTokenText}>{item.tokenName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.boxCont}>
        <View style={styles.labelBox}>
          <Text style={styles.boxLabel}>Token</Text>
          <Text style={styles.boxLabel}>Balance / Address</Text>
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
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: widthPercentageToDP('5%'),
    marginTop: heightPercentageToDP('3%'),
    height: heightPercentageToDP('4%'),
    marginVertical: heightPercentageToDP('2%'),
  },
  HeaderText: {
    color: 'white',
    fontSize: widthPercentageToDP('5%'),
    fontWeight: 'bold',
  },
  crossIcon: {
    marginRight: widthPercentageToDP('3%'),
  },
  searchBox: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    height: heightPercentageToDP('6%'),
    width: widthPercentageToDP('85%'),
    marginHorizontal: widthPercentageToDP('7%'),
    alignItems: 'center',
  },
  searchInput: {
    color: 'gray',
    padding: 5,
  },
  PopularTokensContainer: {
    marginVertical: heightPercentageToDP('0.5%'),
    marginHorizontal: widthPercentageToDP('7%'),
    height: heightPercentageToDP('10%'),
    width: widthPercentageToDP('85%'),
  },
  popularTokenLabel: {
    color: 'gray',
    fontSize: widthPercentageToDP('3%'),
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: heightPercentageToDP('0.2%'),
    marginHorizontal: widthPercentageToDP('1%'),

  },
  TopRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPercentageToDP('1%'),
    marginHorizontal: widthPercentageToDP('5%'),
    right: widthPercentageToDP('3%'),
    gap: widthPercentageToDP('3%'),

  },
  PopularToken: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    width: widthPercentageToDP('18%'),
    height: heightPercentageToDP('5%'),
    marginBottom: heightPercentageToDP('10%'),
  },
  PopularTokenImage: {
    width: widthPercentageToDP('6%'),
    height: heightPercentageToDP('3%'),
    marginHorizontal: widthPercentageToDP('1%'),
  },
  PopularTokenText: {
    color: 'gray',
    fontSize: widthPercentageToDP('3%'),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    height: heightPercentageToDP('0.2%'),
    backgroundColor: 'gray',
    marginVertical: heightPercentageToDP('1%'),
    width: widthPercentageToDP('85%'),
    marginHorizontal: widthPercentageToDP('7%'),
  },
  boxCont: {
    paddingHorizontal: widthPercentageToDP('5%'),
    paddingVertical: widthPercentageToDP('5%'),
    flex: 1,
    marginHorizontal: widthPercentageToDP('5%'),
    borderRadius: widthPercentageToDP('10%'),
    marginTop: 0,
    marginBottom: heightPercentageToDP('1%'),
  },
  labelBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthPercentageToDP("1%")
  },
  boxLabel: {
    color: 'gray',
    fontSize: widthPercentageToDP('3%'),
    fontWeight: 'bold',
  }
});
