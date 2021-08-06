import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

const Button = ({ loading, onPress, containerStyle, textStyle, text }) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress} disabled={loading}>
      {loading ? <ActivityIndicator size="small" color='white' /> : <Text style={textStyle}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
