import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

const Control = () => {
  return (
    <SafeAreaView>
      <View style={styles.homeStyle}>
        <TextInput
          // eslint-disable-next-line react-native/no-inline-styles
          style={{backgroundColor: 'white', padding: 10}}
          placeholder="type here ..."
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeStyle: {
    backgroundColor: 'black',
  },
});

export default Control;
