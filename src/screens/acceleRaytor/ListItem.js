import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
        marginTop: hp('0.4%'),
        borderRadius: wp('3%'),
        width: wp('90%'),
        backgroundColor:  colors.purpleViolet[800] ,
        height: expanded ? hp('88%') : hp('22%'),
        marginLeft: wp('5%'),
        marginBottom: hp('2%'),
        borderWidth: 1,
        borderTopColor: colors.purpleMagenta[100],
        borderBlockEndColor: colors.cyan[800],
        borderLeftColor: colors.cyan[800],
        borderRightColor: colors.purpleMagenta[100]
      }}
      onPress={toggleExpand}
    >
      <View style={styles.containerExpand}>
        <View style={styles.filledContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.iconImage }}
              style={{ width: wp('10%'), height: hp('5%') }}
            />
            <View style={styles.namesContainer}>
              <Text style={styles.projectName}>{item.name}</Text>
              <Text style={styles.fullName}>{item.fullName}</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.fillContainer} >
            <Text style={styles.fillText}>{item.fill_percentage}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <LinearGradient
              style={styles.Button}
              colors={['rgba(59, 208, 216, .2)', 'rgba(59, 208, 216, 0)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.ButtonText}>Claim {item.name}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              style={styles.Button}
              colors={['rgba(59, 208, 216, .2)', 'rgba(59, 208, 216, 0)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.ButtonText}>Claim UDSC</Text>
            </LinearGradient>
          </TouchableOpacity>

        </View>
        <View>
          <AntDesign name={expanded ? 'caretup' : 'caretdown'} size={wp('4%')} color="gray" />
        </View>
      </View>
      {
        expanded && (
          <View style={styles.expandedMain}>
            <View style={styles.fullImageContainer}>
              <Image
                source={{ uri: item.coinImage }}
                style={styles.fullImage}
                crossOrigin='anonymous'
                
              />
            </View>
            <View style={styles.InfoContainer}>
              <View style={styles.Info}>
                <Text style={styles.InfoText}>Total Raised</Text>
                <Text style={styles.InfoText}><Text style={styles.InfoValueText}>{item.raise}</Text> {item.name}</Text>
              </View>
              <View style={styles.InfoSeprator} />
              <View style={styles.Info}>
                <Text style={styles.InfoText}>Per {item.name}</Text>
                <Text style={styles.InfoText}><Text style={styles.InfoValueText}>{item.price}</Text> UDSC</Text>
              </View>
              <View style={styles.InfoSeprator} />
              <View style={styles.Info}>
                <Text style={styles.InfoText}>Total tickets deposited</Text>
                <Text style={styles.InfoText}>
                  <Text style={styles.InfoValueText}>{item.total_deposited_Tickets}</Text> UDSC</Text>
              </View>
              <View style={styles.InfoSeprator} />
              <View style={styles.Info}>
                <Text style={styles.InfoText}>Allocation / Winning Ticket</Text>
                <Text style={styles.InfoText}>
                  <Text style={styles.InfoValueText}>{item.allocation}</Text> UDSC</Text>
              </View>
              <View style={styles.InfoSeprator} />
              <View style={styles.Info}>
                <Text style={styles.InfoText}>Pool Open</Text>
                <Text style={styles.InfoText}>
                  <Text style={styles.InfoValueText}>{item.pool_open}</Text> UTC</Text>
              </View>
              <View style={styles.InfoSeprator} />
              <View style={styles.Info}>
                <Text style={styles.InfoText}>Pool Close</Text>
                <Text style={styles.InfoText}>
                  <Text style={styles.InfoValueText}>{item.pool_close}</Text> UTC</Text>
              </View>
              <View style={styles.InfoSeprator} />
              
            </View>
          </View>
        )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerExpand: {
    alignItems: 'center',
    padding: wp('2%'),
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  projectName: {
    fontWeight: 'bold',
    color: 'white',
  },
  fullName: {
    color: 'gray',
    fontSize: wp('3%'),
  },
  filledContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp('80%'),
    marginHorizontal: wp('5%'),
   
  },
  namesContainer: {
    marginLeft: wp('2%'),
    flex: 1,
  },
  separator: {
    height: '100%',
    backgroundColor: 'gray',
    width: 1,
    marginHorizontal: wp('8%'),
  },
  fillContainer: {
    backgroundColor: 'rgba(194, 0, 251, 0.8)',
    borderWidth: 1,
    borderColor: colors.magenta[100],
    borderRadius: wp('6%'),
    width: wp('30%'),
    height: hp('3.5%'),
    marginRight: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  fillText: {
    color: colors.magenta[500],
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('80%'),
    marginHorizontal: wp('10%'),
    marginVertical: hp('4%'),
  },
  Button: {
    width: wp('35%'),
    height: hp('5%'),
    borderRadius: wp('3.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    color: colors.cyan[700],
    fontWeight: 'bold',
  },
  expandedMain: {
    flex:1,
    backgroundColor: '#192f6a',
    borderRadius: wp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  fullImageContainer: {
    borderRadius: wp('3%'),
    alignItems: 'center',
    width: wp('90%'),
    top: hp('-10%'),
  },

  fullImage: {
  
    width: wp('88%'),
    height: hp('15%'),
    borderRadius: wp('3%'),
  },
  InfoContainer: {
    marginTop:hp("1%"),
    justifyContent: 'space-between',
    width: wp('80%'),
    marginHorizontal: wp('5%'),
    bottom: hp('10%'),
  },
  Info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('1%'),
  },
  InfoText: {
    color: 'gray',
    fontSize: wp('4%'),
    fontWeight:'700'
  },
  InfoSeprator: {
    height: 1,
    backgroundColor: 'gray',
    width: wp('80%'),
  },
  InfoValueText: {
    color: 'white',
    fontWeight: '600',
    fontSize: wp('4%'),
  }
});
