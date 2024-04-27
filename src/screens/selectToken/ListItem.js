import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ScreenNames from '../../../routes/route';
import colors from '../../utills/RecommendedColors';
import color from '../../utills/Database';

export const ListItem = ({ item }) => {
  const nav = useNavigation();

  const address = "dsdasakjfdadasd"

  return (
    <TouchableOpacity
      style={styles.container}
    >
      <Image source={{ uri: item.tokenIcon }} style={styles.tokenIcon} />
      <View style={styles.nameContainer}>
        <Text style={{ color: colors.gray[100], fontSize: wp('3.5%'), fontWeight: 'bold' }}>{item.projectName1}</Text>
        <Text style={{ color: colors.gray[700], fontSize: wp('2.5%') }}>{item.projectFullName}</Text>
      </View>
      <TouchableOpacity style={styles.addressContainer}>
        <Text style={{ color: colors.gray[100], fontSize: wp('2.5%') }}>{address}</Text>

      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: wp('3%') }}>
        <AntDesign onPress={() => { console.log(item.urlLink) }} name="link" size={wp('5%')} color={colors.gray[100]} />

      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp('0.7%'),
    borderRadius: wp('3%'),
    width: '100%',
    backgroundColor: colors.blueViolet[1600],
    height: hp("6.5%"),
    flexDirection: 'row',
    alignItems: 'center',



  },
  tokenIcon: {
    width: wp('7%'),
    height: hp('4%'),
    borderRadius: wp('9%'),
    marginLeft: wp('1.5%'),

  },
  nameContainer: {
    marginLeft: wp('2%'),

  },
  addressContainer: {
    marginLeft: wp('30%'),
    borderRadius: wp('1%'),
    borderWidth: 1,
    borderColor: colors.gray[100],
    padding: wp('0.7%'),

  }
});
