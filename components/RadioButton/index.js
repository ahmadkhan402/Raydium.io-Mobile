import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RadioButton = ({ label, selected, navigateTo, gradientColors, style }) => {
  return (
    <TouchableOpacity onPress={() => navigateTo()}>
      {gradientColors ? (
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.radioButton, style]}
        >
          <Text style={[styles.radioButtonText, selected && styles.checkedRadioButtonText]}>
            {label}
          </Text>
        </LinearGradient>
      ) : (
        <View style={[styles.radioButton, style]}>
          <Text style={[styles.radioButtonText, selected && styles.checkedRadioButtonText]}>
            {label}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  navigateTo: PropTypes.func.isRequired,
  gradientColors: PropTypes.array,
  style: PropTypes.object,
};

const styles = {
  radioButton: {
    alignItems: 'center',
    paddingVertical: hp('1.5%'), // Adjusted padding using height percentage
    borderRadius: wp('10%'), // Adjusted border radius using width percentage
  },
  radioButtonText: {
    color: '#ABC4FF',
    fontSize: wp('3%'), // Adjusted font size using width percentage
  },
  checkedRadioButtonText: {
    fontSize: wp('3%'), // Adjusted font size using width percentage
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
};

export default RadioButton;
