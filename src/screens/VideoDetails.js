import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from '../components/Card';

const VideoDetails = ({ route }) => {
  console.log(route.params);
  return (
    <View style={styles.background}>
      <Text>{route.params.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
  },
  card: {
    marginTop: 250,
  },
});

export default VideoDetails;
