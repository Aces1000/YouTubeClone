import React, { useState } from 'react';
import { View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, Text } from '../components';
import { colors } from '../style';
import { Ionicons } from '@expo/vector-icons';
import MiniCard from '../components/MiniCard';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation()
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="md-arrow-back" size={32} onPress={() => navigation.goBack()} />
        <TextInput
          placeholder="Search..."
          style={styles.text}
          value={value}
          onChangeText={() => setValue(text)}
        />
        <TouchableOpacity onPress={()=>getData()}>
          <Ionicons style={styles.icon} name="md-send" size={24} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 5,
    backgroundColor: colors.white,
  },
  text: {
    width: '70%',
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    marginTop: 3,
  },
  icon: {
    marginTop: 4,
  },
});
export default Search;
