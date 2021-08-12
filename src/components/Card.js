import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../style';
import { images } from '../style/global';

const Card = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <View style={styles.body}>
        <MaterialIcons name="account-circle" size={40} color={colors.black} />
        <View style={styles.title}>
          <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
            {item.name}
          </Text>
          <Text>{item.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    elevation: 4,
    marginBottom: 10
  },
  image: {
    width: 200,
    height: 200,
  },
  body:{
    flexDirection: 'row',
    margin: 5
  },
  title: {
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    
  }
});

export default Card;
