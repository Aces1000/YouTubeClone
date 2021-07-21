import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

import { colors } from '../style';

const Text = ({ children, style, ...otherProps }) => {
  const rootStyle = [styles.text, style];

  return (
    <RNText style={rootStyle} {...otherProps}>
      {children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
});
