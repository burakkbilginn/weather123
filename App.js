import React, {useEffect, useState} from 'react';
// import type {Node} from 'react';
import {ImageBackground, LogBox, StatusBar, StyleSheet, Text, View} from 'react-native';

import Calendar from './src/components/Calendar';
import DayRow from './src/components/DayRow';
import Forecast from './src/components/Forecast';
import BgImage from './src/assets/images/sunny.jpg';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  LogBox.ignoreLogs(['EventEmitter.removeListener']);

  const today = new Date().toLocaleDateString();
  // console.log(today);
  const [month, day, year] = today.split('/');
  // // dd/mm/yyyy
  // console.log(`${day}/${month}/${year}`);

  return (
    <Provider store={store}>
    <StatusBar backgroundColor={"#0D0AE900"} translucent={true} />
      <ImageBackground
        source={BgImage}
        resizeMode={'cover'}
        style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.header}>Kiev</Text>
        <Text style={styles.temperature}>35°</Text>
        <Calendar />
        {/* <Text style={styles.dateText}>Forecast for the date {`${day}/${month}/${year}`} is: </Text>       */}
        <Forecast />
      </ImageBackground>
    </Provider>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '90%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    color: '#ffffff',
  },
  dateText: {
    top: 60,
  },
  temperature: {
    fontSize: 60,
    top: 10,
    color: '#ffffff',
    fontFamily: 'Roboto-Regular',
  },
});

export default App;
