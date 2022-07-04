import React, {useEffect, useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import Conditions from './Conditions';
import axios from 'axios';
import daysData from '../assets/data/daysData';
import DayRow from './DayRow';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {selectDateselected} from '../redux/navSlice';

const Forecast = () => {
  const [data, setData] = useState(null);
  const abcd = useSelector(selectDateselected);

  useEffect(() => {
    console.log("redux'tan gelen dateselected = " + abcd)
    if (abcd !== null) {
      fetchData()
    }
  }, [abcd])
  
  let list = null;

  console.log(new Date(1656669600 * 1000).toUTCString().slice(0, 12));

  const axiosOptions = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
    params: {q: 'kiev', cnt: '17', units: 'metric'},
    headers: {
      'X-RapidAPI-Key': 'f379e7d271mshe66b7cacf909dd0p1ac599jsn2adf7d78159c',
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
    },
  }

  
  const fetchData = async () => {
    await axios(axiosOptions)
      .then(response => {
        // setData(response.data)
        list = response.data;
        // console.log('axios data size: ' + Object.keys(data).length);
        // let list = response.data
        let i = 0;
        // while (i < 5) {
        // console.log('timstamp: ' + data.list[i].dt)
        // date = new Date(data.list[i].dt*1000).toUTCString().slice(0,12)
        // setDates(previous => [...previous, new Date(data.list[i].dt*1000).toUTCString().slice(0,12)])
        // console.log(date)
        //   i += 1;
        // }
      })
      .catch(error => console.log('BURDA FETCH ERROR --> ' + error));

    const array = Object.keys(list.list).map(key => {
      return list.list[key];
    });
    console.log('array = ', array);

    let myyIndex = array
      .map(object => new Date(Number(object.dt) * 1000).toLocaleDateString())
      .indexOf(new Date(abcd * 1000).toLocaleDateString());
    console.log('myyIndex = ', myyIndex);

    // let last = []
    // for(let i=Number(myyIndex); i<Number(myyIndex)+5; i++) {
    //   setData(previous => [...previous,  list.list(myyIndex)])
    // }
    setData([
      list.list[myyIndex],
      list.list[myyIndex + 1],
      list.list[myyIndex + 2],
      list.list[myyIndex + 3],
      list.list[myyIndex + 4],
    ]);

    //   function getIndex(value, arr, prop) {
    //     for(var i = 0; i < arr.length; i++) {
    //         if(arr[i][prop] === value) {
    //             return i;
    //         }
    //     }
    //     return "index couldn't be found"
    // }
  };

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#0940D66B',
        borderRadius: 20,
        margin: 20,
        top: 20
      }}>
      {/* {data ? <Text>Here: {data.list[0].dt_txt}</Text> : <Text>Not found</Text>} */}
      {data &&
        console.log(
          'response list object data size: ' + Object.keys(data).length,
        )}
      {data && console.log('data[0].pressure: ' + data[0].pressure)}
      {data && console.log('all is :', data)}
      {/* {data && console.log('first five: ' + Object.fromEntries(Object.entries(data.list).slice(0,5)))} */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'flex-start',
          marginLeft: 15,
        }}>
        <AntDesign
          name={'calendar'}
          size={18}
          color={'#FFFFFF6C'}
          style={{padding: 4}}
        />

        <Text style={styleSheet.pressable_text}> 5 days forecast</Text>
      </View>

      {data &&
        Object.keys(data).map((abc, key) => (
          //console.log(data[abc])
          <DayRow
            date={new Date(data[abc].dt * 1000).toUTCString().slice(0, 12)}
            key={key}
            weather={data[abc].weather[0].main}
            temperature={Number(data[abc].temp.day).toFixed(1)}
          />
        ))}
    </View>
  );
};
export default Forecast;

const styleSheet = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: 'red',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },

  pressable_text: {
    alignSelf: 'flex-start',
    fontSize: 22,
    color: '#FFFFFF6C',
    fontFamily: 'Arima-Medium',
    paddingTop: 6,
  },
});
