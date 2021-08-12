import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions , Text} from 'react-native';
import { colors } from '../style';
import { images } from '../style/global';

const MiniCard = () => {
  return (
    <View style={styles.container}>
      <Image source={images.id[3]} style={styles.img} />
      <View style={styles.right_part}>
        <Text style={styles.header} ellipsizeMode="tail" numberOfLines={3}>
          This is amazing video to watch...
        </Text>
        <Text style={styles.text}>This is text of the video</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    marginBottom: 0
  },
  img: {
    width: '45%',
    height: 100,
  },
  header: {
    fontSize: 20,
    width: Dimensions.get('screen').width / 2,
    color: colors.black
  },
  text: {
    fontSize: 12,
    color: colors.gray
  },
  right_part: {
      padding: 7
  }
});
export default MiniCard;
