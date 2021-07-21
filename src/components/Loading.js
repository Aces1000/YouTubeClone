import React from 'react';
import { ActivityIndicator } from 'react-native';

import { colors } from '../style';

const Loading = ({ size = 'large' }) => {
  return <ActivityIndicator size={size} color={colors.white} />;
};

export default Loading;
