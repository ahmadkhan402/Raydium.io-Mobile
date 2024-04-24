import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';

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
    paddingVertical: 8,
    borderRadius: 30,
  },
  radioButtonText: {
    color: '#ABC4FF',
    fontSize: 12,
  },
  checkedRadioButtonText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
};

export default RadioButton;
