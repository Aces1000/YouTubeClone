import React from 'react';
import { SafeAreaView as RNSafeAreaView, View } from 'react-native';

import { containers } from '../style';
import Loading from './Loading';

const SafeAreaView = ({ children, center, loading, style, ...otherProps }) => {
  const rootStyle = [containers.fill, center ? containers.fillAndCenter : null, style];

  return (
    <RNSafeAreaView style={rootStyle} {...otherProps}>
      {loading ? (
        <View style={containers.fillAndCenter}>
          <Loading />
        </View>
      ) : (
        children
      )}
    </RNSafeAreaView>
  );
};

export default SafeAreaView;
