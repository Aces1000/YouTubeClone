import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView, Text } from '../components';
import { colors } from '../style';
//import SearchBar from '../components/SearchBar';

const Search = () => {
  const [value, setValue] = useState();
  const updateSearch = (value) => {
    //do search logic
    console.log(value)
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('../../assets/favicon.png')} />
       {/* <SearchBar value={value} updateSearch={updateSearch} style={styles.searchBar} />*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.milk,
    flex: 1,
  },
  header: {
    height: '30%',
    backgroundColor: colors.youtube,
    borderRadius: 20,
  },
  image: {
    marginTop: '15%',
    marginLeft: '5%',
  },
  searchBar: {
    marginTop: '8%',
  },
});
export default Search;
