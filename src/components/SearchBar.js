/*import React from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../style';

const SearchBar = ({ value, updateSearch, style }) => {
  const [query, setQuery] = useState();
  const [error, setError] = useState();
  return (
    <View style={[styles.container, style]}>
      <View style={styles.searchContainer}>
        <View style={styles.vwSearch}>
          <Image style={styles.icSearch} source={require('../../assets/favicon.png')} />
        </View>
        <TextInput
          value={query}
          placeholder="Search"
          style={styles.textInput}
          onChangeText={(text) => {
            setQuery(text);
            updateSearch(text);
          }}
        />
        {query ? (
          <TouchableOpacity
            onPress={() => setQuery('../../assets/favicon.png')}
            style={styles.vwClear}>
            <Image style={styles.icClear} source={require('')} />
          </TouchableOpacity>
        ) : (
          <View style={styles.vwClear} />
        )}
      </View>
      {error && <Text style={styles.txtError}>{error}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.milk,
    flex: 1,
  },
  searchContainer: {
    backgroundColor: colors.white,
    width: '90%',
    height: 40,
  },
  icSearch: {
    height: 18,
    width: 18,
    margin: 5,
  },
  vwSearch: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
  },
  textInput: {
    flex: 1,
  },
  vwClear: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
  },
  txtError: {
    width: '90%',
    marginTop: '2%',
    color: colors.white,
  },
});
export default SearchBar;
*/