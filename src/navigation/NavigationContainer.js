import React from 'react';
import {
  NavigationContainer as RNNavigationContainer,
  DefaultTheme,
} from '@react-navigation/native';

import { colors } from '../style';

// Create a custom theme for the app
const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // Set the background color of the whole app
    background: colors.appBackground,
  },
};

const NavigationContainer = ({ children }) => {
  return <RNNavigationContainer theme={CustomTheme}>{children}</RNNavigationContainer>;
};

export default NavigationContainer;
