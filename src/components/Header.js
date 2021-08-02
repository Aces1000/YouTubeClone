import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../style';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.youtube}>
        <AntDesign style={styles.icon} name="youtube" size={32} color={colors.youtube} />
        <Text style={styles.text}> YouTube</Text>
      </View>
      <View style={styles.headerIcons}>
        <MaterialIcons name="screen-share" size={24} color={colors.black} />
        <Feather name="search" size={24} color={colors.black} />
        <MaterialIcons name="account-circle" size={24} color={colors.black} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    backgroundColor: colors.white,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,
    shadowOffset: {width: 10, height: 10},
    shadowColor: colors.black,
    shadowOpacity: 1.0
    
  },
  youtube: {
    flexDirection: 'row',
    margin: 5,
  },
  text: {
    fontSize: 22,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  icon: {
    marginLeft: 20,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 150,
    margin: 10
  }
});
export default Header;
