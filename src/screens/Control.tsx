import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
// import {Text} from 'react-native';
import Search from '../components/Search';
const Control = () => {
  const handleAdviceButtonPress = () => {
    // Handle the logic when the "зөвлөмж" button is pressed
    // For example, navigate to another screen, show a modal, etc.
    console.log('Advice button pressed');
  };
  return (
    <View style={styles.backGround}>
      <SafeAreaView>
        <View style={styles.homeStyle}>
          <Search />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            color="black"
            title="зөвлөмж"
            onPress={handleAdviceButtonPress}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeStyle: {
    backgroundColor: 'grey',
  },
  buttonStyle: {
    backgroundColor: '#F6AE99',
    borderRadius: 50,
    marginLeft: 70,
    marginRight: 70,
    top: 600,
  },
  backGround: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#716F81',
  },
});

export default Control;
