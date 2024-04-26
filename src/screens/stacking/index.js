import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Header from '../../../components/header';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import color from '../../utills/Database';
import colors from '../../utills/RecommendedColors';
import { LinearGradient } from 'expo-linear-gradient';
const ListItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity style={{
      borderRadius: wp('5%'),
      width: '100%',
      backgroundColor: colors.blueViolet[1600],
      marginTop: hp('0.5%')
    }} onPress={toggleExpand}>
      <View style={styles.containerExpand}>
        <View style={styles.pendingRewardsContainer}>
          <AntDesign name={'questioncircleo'} size={wp('4%')} color="gray" />
          <Text style={styles.label}>SOL</Text>
        </View>
        {/* reward */}
        <View style={styles.pendingRewardsContainer}>
          <Text style={styles.label}>Pending</Text>
          <View style={styles.rewardContainer}>

            <ActivityIndicator size="small" color="gray" />
          </View>
        </View>
        <View style={styles.pendingRewardsContainer} >
          <Text style={styles.label}>Rewards</Text>
          <View style={styles.rewardContainer}>

            <ActivityIndicator size="small" color="gray" />
          </View>
        </View>
        {/* apr */}
        <View style={styles.pendingRewardsContainer}>
          <Text style={styles.label}>APR</Text>
          <ActivityIndicator size="small" color="gray" />
        </View>
        <View>
          <AntDesign name={expanded ? 'caretup' : 'caretdown'} size={wp('4%')} color="gray" />
        </View>
      </View>
      {expanded && (
        <View style={styles.expandedContainer}>
          <View style={styles.separator} />
          <View style={[styles.stakeContainer, {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: wp('2%')
          }]}>
            <View style={[styles.stackedContainer]}>

              <Text style={[styles.label, {
                color: 'gray',
                fontSize: wp('3%'),
                marginHorizontal: wp('1%')
              }]} >Staked</Text>
              <ActivityIndicator size={'small'} color="gray" />
            </View>
            <View style={[styles.totalStackContainer]}>
              <View style={[styles.stackedContainer]}>

                <Text style={[styles.label, {
                  color: 'gray',
                  fontSize: wp('3%'),
                }]} >Total Staked</Text>
                <ActivityIndicator size={'small'} color="gray" />
              </View>
            </View>
          </View>
          <View style={[styles.buttonsContainer, {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.blueViolet[1600],
          }]}>
            <View style={[styles.DepositContainer, {
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: wp('0.1%'),
              borderColor: 'gray',
              borderRadius: wp('5%'),

            }]}>
              <View style={[styles.coinInfoContainer, {
                marginVertical: hp('1%'),
                marginLeft: wp('1%'),
              }]}>
                <Text style={[styles.label, {
                  color: 'gray',
                  fontSize: wp('3%'),
                }]} >Deposited</Text>
                <Text style={[styles.CoinNameLabel, {
                  color: 'white',
                  fontSize: wp('4%'),
                }]} >SOL</Text>

                <Text style={[styles.coinValue, {
                  color: 'gray',
                  fontSize: wp('3%'),
                  marginLeft: wp('1%')
                }]}>
                  --
                </Text>
              </View>
              <TouchableOpacity style={[styles.ButtonContainer, {

                height: hp('6%'),
                width: '100%',
                borderRadius: wp('5%'),
                alignItems: 'center',
                justifyContent: 'center',

              }]}>
                <LinearGradient
                  colors={['#58f3cd', '#58f3cd']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    width: '50%',
                    marginHorizontal: wp('1%'),
                    borderRadius: wp('2%'), padding: wp('1%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: hp('4%')
                  }}>
                  <Text style={{
                    color: colors.bluishCyan[100],
                    fontWeight: 'bold',
                    fontSize: wp('3%')
                  }}>ConnectWallet</Text>
                </LinearGradient>
              </TouchableOpacity>

            </View>
            <View style={[styles.DepositContainer, {
              flexDirection: 'row',
              justifyContent: 'center',
              borderWidth: wp('0.1%'),
              borderColor: 'gray',
              borderRadius: wp('5%'),


            }]}>
              <TouchableOpacity style={[styles.ButtonContainer, {

                height: hp('8%'),
                width: '100%',
                borderRadius: wp('5%'),
                alignItems: 'center',
                justifyContent: 'center',

              }]}>
                <LinearGradient
                  colors={['#58f3cd', '#58f3cd']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    width: '90%',
                    marginHorizontal: wp('1%'),
                    borderRadius: wp('2%'), padding: wp('1%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: hp('5%')
                  }}>
                  <Text style={{
                    color: colors.bluishCyan[100],
                    fontWeight: 'bold',
                    fontSize: wp('4%')
                  }}>ConnectWallet</Text>
                </LinearGradient>
              </TouchableOpacity>

            </View>

          </View>


        </View>
      )}
    </TouchableOpacity>
  );

};

export default function Staking() {

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
      <Header title={'STAKING'} />
      <View style={[styles.labelLoadingContainer, {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: hp('1%')
      }]}>
        <Text style={[styles.stackLable, {
          color: 'white',
          fontSize: wp('5%'),
          fontWeight: 'bold',
        }]} >Staking</Text>
        <ActivityIndicator size="small" color="gray" />
      </View>

      <View style={styles.boxCont}>

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
    backgroundColor: color.primaryColor,
  },
  boxCont: {
    flex: 1,
    backgroundColor: color.primaryColor,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    borderRadius: wp('5%'),
  },
  containerExpand: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('4%'),
  },
  label: {
    color: 'gray',
    fontSize: wp('3%'),
  },
  rewardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expandedContainer: {
    backgroundColor: colors.blueViolet[1600],
    padding: wp('2%'),
    borderRadius: wp('6%')
  },
  separator: {
    height: 0.5,
    backgroundColor: 'gray',
    marginVertical: hp('1%'),
  },
  ButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('1%'),
    padding: wp('1%'),
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blueViolet[1600],
  },
  DepositContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('1%'),
    padding: wp('1%'),
  },
  coinInfoContainer: {
    marginVertical: hp('1%'),
  },
});
