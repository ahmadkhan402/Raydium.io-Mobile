import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../utills/RecommendedColors';
import ScreenNames from '../../../routes/route';

export const ListItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const nav = useNavigation();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleExpand}>
      <View style={styles.contentContainer}>
        <View>
          <AntDesign name={'star'} size={wp('4%')} color="yellow" />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.imageContainer}>
            <AntDesign name={'questioncircleo'} size={wp('4%')} color="gray" />
            <AntDesign name={'questioncircleo'} size={wp('4%')} color="gray" />
          </View>
          <View>
            <Text style={styles.projectName}>{item.projectName1}-{item.projectName2}</Text>
            <Text style={styles.fee}>{item.fee}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.label}>TVL</Text>
          <ActivityIndicator size="small" color="gray" />
        </View>
        <View>
          <Text style={styles.label}>APR(7D)</Text>
          <Text style={styles.label}>{item.apr}</Text>
        </View>
        <View>
          <AntDesign name={expanded ? 'caretup' : 'caretdown'} size={wp('4%')} color="gray" />
        </View>
      </View>
      {expanded && (
        <View style={styles.expandedContainer}>
          <View style={styles.twoBoxContainer}>
            <View style={[styles.depositContainer, {
              flexDirection: 'row',
              borderWidth: wp('0.2%'),
              marginHorizontal: wp('1%'),
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: wp('3%'),
              height: hp('7%'),
            }]}>
              <View style={[styles.labelValueContainer, {
                marginLeft: wp('2%'),
              }]}>
                <Text style={styles.label}>Deposit</Text>
                <Text style={styles.value}>$0.00</Text>
              </View>
              <TouchableOpacity onPress={() => nav.navigate(ScreenNames.WALLET_CONNECT)} style={[styles.ButtonContainer, {

                height: hp('7%'),

                borderRadius: wp('5%'),
                alignItems: 'center',
                justifyContent: 'center',

              }]}>
                <LinearGradient
                  colors={['rgba(59, 208, 216, .2)', 'rgba(59, 208, 216, 0)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 2 }}
                  style={{
                    width: '50%',
                    marginHorizontal: wp('1%'),
                    borderRadius: wp('1%'), padding: wp('1%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{
                    color: colors.bluishCyan[100],
                    fontWeight: 'bold',
                    fontSize: wp('3%')
                  }}>Connect Wallet</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={[styles.pendingRewardsContainer, {
              borderWidth: wp('0.2%'),
              marginHorizontal: wp('1%'),
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: wp('3%'),
              height: hp('16%'),
              marginTop: hp('1%')
            }]}>
              <View style={[styles.labelValueContainer, {
                marginTop: hp('1%'),
                marginRight: wp('16%')
              }]}>
                <Text style={styles.label}>Pending Rewards</Text>
                <Text style={styles.value}>$0.00</Text>
              </View>
              <TouchableOpacity
                onPress={() => nav.navigate(ScreenNames.WALLET_CONNECT)} style={[styles.ButtonContainer, {
                alignItems: 'flex-end',

                height: hp('8%'),

              }
              ]}>
                <LinearGradient
                  colors={['rgba(59, 208, 216, .2)', 'rgba(59, 208, 216, 0)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.connectWalletButton}>
                  <Text style={[styles.connectWalletButtonText, {
                    fontSize: wp('3.5%'),
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: colors.bluishCyan[100],
                  }]}>Connect Wallet</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

          </View>
          <View style={[styles.ThreeIconButtonContainer, {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: wp('1%'),
            marginVertical: hp('1%'),
            gap: wp('1%'),
          }]}>
            <TouchableOpacity style={styles.swapButton}>
              <AntDesign name="link" size={wp('4%')} color={colors.bluishCyan[100]} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.swapButton}>
              <AntDesign name="plus" size={wp('4%')} color={colors.bluishCyan[100]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nav.navigate(ScreenNames.SWAP)} style={[styles.swapButton,]}>
              <AntDesign style={{
                transform: [{ rotate: '90deg' }]
              }} name="swap" size={wp('4%')} color={colors.bluishCyan[100]} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: hp('1%'),
    borderRadius: wp('2%'),
    backgroundColor: colors.blueViolet[1600],
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('2%'),
    justifyContent: 'space-around',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: wp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectName: {
    fontWeight: 'bold',
    color: 'gray',
  },
  fee: {
    color: 'gray',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    color: 'gray',
  },
  expandedContainer: {
    padding: wp('2%'),
  },
  labelValueContainer: {
    flexDirection: 'column',
  },
  ButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('1%'),
    padding: wp('2%'),
  },
  connectWalletButton: {
    paddingVertical: hp('2%'),
    borderRadius: wp('3%'),
    elevation: 40,
    borderWidth: wp('0.1%'),

    borderColor: colors.bluishCyan[100],
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  swapButton: {
    marginHorizontal: wp('1%'),
    paddingVertical: hp('2%'),
    borderRadius: wp('3%'),
    elevation: 40,
    borderWidth: wp('0.1%'),
  
    borderColor: colors.bluishCyan[100],
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  connectWalletButtonText: {
    color: colors.menuColor,
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
});

