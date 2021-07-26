import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import { images } from '../style/global';
import {useNavigation} from '@react-navigation/native'

const ListItem = () => {
  const navigation = useNavigation()
  const [videos, setVideos] = useState([
    { name: 'Top 10 most liked songs', id: '1' },
    { name: 'Best goals from Euro 2020', id: '2' },
    { name: 'React Native Tutorial', id: '3' },
    { name: 'Fantasy Premier League team selection', id: '4', videoURL: '/dsajdja' },
    { name: 'Worst Injuries in UFC History', id: '5' },
    { name: 'The Tragic Story of Nikola Tesla', id: '6' },
    { name: 'Best Viking Music', id: '7' },
    { name: 'How Italia Won the Euro 2020 Final', id: '8' },
  ]);

  return (
    <View style={styles.page}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={videos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('VideoDetails',{name: item.name}) ;
            }}>
            <View style={styles.container}>
              <Image style={styles.image} source={images.id[item.id]} />
              <Text style={styles.item}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
    flex: 1,
    backgroundColor: 'gray',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    flex: 1,
    backgroundColor: 'gray',
    fontSize: 20,
    marginHorizontal: 10,
    marginTop: 24,
  },
  image: {
    width: 280,
    height: 130,
  },
  page: {
    backgroundColor: 'black',
  },
});
export default ListItem;
