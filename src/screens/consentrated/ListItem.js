import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ScreenNames from '../../../routes/route';
import colors from '../../utills/RecommendedColors';
import color from '../../utills/Database';

export const ListItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const nav = useNavigation();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity
      style={{
        marginTop: hp('1%'),
        borderRadius: wp('3%'), 
        width: '100%',
        backgroundColor: colors.blueViolet[1600],
      }}
      onPress={toggleExpand}
    >
      <View style={styles.containerExpand}>
        <View>
          <AntDesign name={'star'} size={wp('4%')} color="yellow" />
        </View>
        <View>
          {/* Images */}
          <View style={styles.imageContainer}>
            {/* Placeholder icon if image is not present */}
            <AntDesign name={'questioncircleo'} size={wp('4%')} color="gray" />
            <AntDesign name={'questioncircleo'} size={wp('4%')} color="gray" />
          </View>
          {/* projectsName */}
          <View>
            <Text style={styles.projectName}>{item.projectName1}-{item.projectName2}</Text>
            <Text style={styles.fee}>{item.fee}</Text>
          </View>
        </View>
        {/* reward */}
        <View style={{ top: hp('1%') }}>
          <Text style={styles.label}>Rewards</Text>
          <View style={styles.rewardContainer}>
            {/* Reward image */}
            <AntDesign name={'questioncircleo'} size={wp('4%')} color="gray" />
          </View>
        </View>
        {/* apr */}
        <View style={{ top: hp('0.1%') }}>
          <Text style={styles.label}>APR(7D)</Text>
          <Text style={styles.label}>{item.apr}</Text>
        </View>
        <View>
          <AntDesign name={expanded ? 'caretup' : 'caretdown'} size={wp('4%')} color="gray" />
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
              <Text style={styles.label}>{item.volume}</Text>
            </View>
            <View style={styles.columnContainer}>
              <Text style={styles.label}>Fees</Text>
              <Text style={styles.label}>{item.fees}</Text>
            </View>
          </View>
          <View style={{ marginVertical: hp('1.5%'), alignItems: 'center', width: '100%' }}>
        
            <Text style={{ color: 'gray', fontSize: wp('4%'), marginBottom: hp('1%'), fontWeight: 'bold' }}>
              Want to open new position?
            </Text>
            <View style={styles.ButtonContainer}>
              <LinearGradient
                colors={['rgba(59, 208, 216, .2)', 'rgba(59, 208, 216, 0)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.connectWalletButton}
              >
                <TouchableOpacity>
                  <Text style={styles.connectWalletButtonText}>Create position</Text>
                </TouchableOpacity>
              </LinearGradient>
              <TouchableOpacity onPress={() => nav.navigate(ScreenNames.SWAP)} style={styles.swapButton}>
                <AntDesign name="swap" size={wp('4%')} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerExpand: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('2%'),
    gap: wp('1%'),
    justifyContent: 'space-around'
  },
  imageContainer: {
    marginRight: wp('2%'), 
    flexDirection: 'row',
    gap: wp('-1.5%')
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
    marginBottom: hp('0.5%'), 
    color: 'gray',
  },
  expandedContainer: {
    padding: wp('2%'),
  },
  separator: {
    height: hp('0.2%'), 
    backgroundColor: 'gray',
    marginVertical: hp('1%'), 
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: wp('1%'),
  },
  columnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: hp('0.5%'),
  },
  ButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('1.5%'), 
    padding: wp('2%'),
  },
  connectWalletButton: {
    paddingVertical: hp('2%'),
    borderRadius: wp('3%'),
    elevation: 40,
    borderRightWidth: wp('0.1%'), 
    borderLeftWidth: wp('0.1%'), 
    borderBottomWidth: wp('0.1%'), 
    borderTopWidth: wp('0.1%'), 
    borderColor: "#58f3cd",
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
  },
  swapButton: {
    marginHorizontal: wp('1%'), 
    paddingVertical: hp('2%'),
    borderRadius: wp('3%'),
    elevation: 40,
    borderRightWidth: wp('0.1%'), 
    borderLeftWidth: wp('0.1%'), 
    borderBottomWidth: wp('0.1%'), 
    borderTopWidth: wp('0.1%'), 
    borderColor: "#58f3cd",
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    transform: [{ rotate: '90deg' }],
  },
  connectWalletButtonText: {
    color: color.menuColor,
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
});
