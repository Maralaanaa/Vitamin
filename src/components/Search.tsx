import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={24}
            color="black"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="black"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 70,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    marginLeft: 30,
    marginRight: 30,
    top: 30,
  },
  searchIcon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'white',
  },
});

export default Search;
