import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView, Text } from '../components';
import { colors } from '../style';
import Header from '../components/Header';
import MiniCard from '../components/MiniCard';

const LittleCard = ({ name }) => {
  return (
    <View style={styles.containerSmall}>
      <Text style={styles.textSmall}>{name}</Text>
    </View>
  );
};

const UserVideos = () => {
  const [section, setSection] = useState('Trending');
  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <ScrollView style={styles.page}>
        <View style={styles.body}>
          <TouchableOpacity
            onPress={() => {
              setSection('Gaming');
            }}>
            {/* Baca gresku previse Re rendera */}
            <LittleCard name="Gaming" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSection('Music');
            }}>
            <LittleCard name="Music" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSection('Sport');
            }}>
            <LittleCard name="Sport" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSection('Movies');
            }}>
            <LittleCard name="Movies" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSection('Fashion');
            }}>
            <LittleCard name="Fashion" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSection('Trending');
            }}>
            <LittleCard name="Trending" />
          </TouchableOpacity>

          <Text style={styles.section}>{section}</Text>
        </View>
        <View>
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  text: {
    color: colors.black,
  },
  header: {},
  body: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  containerSmall: {
    backgroundColor: colors.youtube,
    width: 180,
    height: 50,
    borderRadius: 4,
    marginTop: 10,
  },
  textSmall: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 22,
    marginTop: 5,
  },
  section: {
    color: colors.black,
    margin: 15,
    fontSize: 26,
    borderWidth: 1,
    width: '90%',
    textAlign: 'center',
    elevation: 4,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: colors.black,
    shadowOpacity: 1.0,
    backgroundColor: colors.white,
  },
  page: {
    flex: 2,
  }
});

export default UserVideos;
