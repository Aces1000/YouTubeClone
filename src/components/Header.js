import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../style';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.youtube}>
          <AntDesign style={styles.icon} name="youtube" size={32} color={colors.youtube} />
          <Text style={styles.text}> YouTube</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.headerIcons}>
        <TouchableOpacity>
          <MaterialIcons name="screen-share" size={24} color={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Feather name="search" size={24} color={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <MaterialIcons name="account-circle" size={24} color={colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    backgroundColor: colors.white,
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: colors.black,
    shadowOpacity: 1.0,
  },
  youtube: {
    flexDirection: 'row',
    marginTop: 5,
  },
  text: {
    fontSize: 22,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 20,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 150,
    margin: 10,
  },
});
export default Header;
