import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Video } from 'expo-av';
import { colors } from '../style';

const VideoDetails = ({ route }) => {
  console.log(route.params);
  return (
    <View style={styles.background}>
      <View>
        <Text style={styles.text}>{route.params.name}</Text>
        <Video
          style={styles.video}
          source={{
            uri: route.params.videoURL,
          }}
          useNativeControls
          resizeMode="contain"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
  },
  card: {
    marginTop: 250,
  },
  container: {
    marginTop: 300
  },
  text: {
    color: colors.white,
    margin: 10
  },
  video: {
    height: 300,
    width: 300
  }
});

export default VideoDetails;
