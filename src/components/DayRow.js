import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function DayRow(props) {
  const {date, weather, temperature} = props;

  const getImage = () => {
    if (weather === "Clear") {
      return require('../assets/images/sun.png');
    }
    if (weather === "Rain") {
      return require('../assets/images/rainy.png');
    }
    if (weather === "Clouds") {
      return require('../assets/images/cloudy.png');
    }
    return require('../assets/images/snowing.png');
  };

  return (
    <View style={styles.container}>
      

      <View style={styles.middleContainer}>
        <Text style={{color:"#ffffff",  fontFamily:"Roboto-Regular", fontWeight:"bold"}}>{date}</Text>
        <Image style={styles.image} source={getImage()} />
        {/* <Text>Weather: {weather}</Text> */}
        <Text style={{color:"#ffffff"}}>
          {temperature}
          {'° '}
        </Text>                
      </View>
    </View>
  );
}

export default DayRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
    padding: 5,
    marginTop: 5,
    borderTopWidth: 1,
    borderColor: '#FFFFFF79',
    borderRadius: 10,
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },

  middleContainer: {
    flex: 1, //bu sola yapıştırıyo
    marginHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily:"Arima-Medium"
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 2,
  },
});
