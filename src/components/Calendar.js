import React, { useState } from 'react'
import {View, StyleSheet, Button, Pressable, Text, Image} from 'react-native'
import DatePicker from 'react-native-neat-date-picker'
import AntDesign from "react-native-vector-icons/AntDesign"
import { useDispatch } from 'react-redux'
import { setDateselected } from '../redux/navSlice'

const Calendar = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const dispatch = useDispatch()

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false);
  }

  const onConfirm = date => {
    // You should close the modal in here
    setShowDatePicker(false)
    let abc = new Date(date.date)
    abc.setHours(0,0,0,0)
    console.log("takvimden=",abc.toLocaleDateString())

    // const today = new Date()
    // const k = today.toLocaleDateString()
    // const [month, day, year] = k.split('/')
    // const abbb = (`${today.getFullYear()}-${month}-${day}`)
    // console.log("today = ", abbb)

    let x = new Date(1656928800*1000).toDateString()    
    console.log("localeDateString=", x)
    // abc.setDate(abc.getDate() + 1)
    // console.log("new date = "+ )
    console.log("seleced date = "+ abc)
    // console.log("seleced date timestamp = "+ Math.floor(new Date(abc).getTime()/1000))
    // let timestamp = String(Math.round(new Date(abc).getTime()/1000))
    let timestamp = String(Math.round(abc.getTime()/1000))
    console.log("round timestamp of abc =",timestamp)
    dispatch(setDateselected(timestamp))
  }
  

  return (
    <View>      
      <Pressable style={styles.calenderButton} onPress={openDatePicker}>
        {/* <AntDesign name={"calendar"} size={48} color={"#FFFFFF6C"} /> */}
        <Image style={styles.image} source={require('../assets/images/calendar.png')} />
      </Pressable>
      <DatePicker
        isVisible={showDatePicker}
        mode={'single'}
        onCancel={onCancel}
        onConfirm={onConfirm}
        minDate={new Date(new Date().setDate(new Date().getDate()-1))}
        maxDate={new Date(new Date().setDate(new Date().getDate()+11))}
      />
    </View>
  )
};

const styles = StyleSheet.create({
    calenderButton: {
        position:"relative", borderRadius:25, padding: 10, top: 10, width: "25%",
        alignContent: "center", alignSelf:"center", alignItems:"center",
        // shadowColor: 'rgba(0, 0, 0, 0.1)', borderColor:"#1ABACF", backgroundColor:"#A7A8A85D", 
    // shadowOpacity: 0.8, 
    elevation: 16,
    // shadowRadius: 15 ,
    // shadowOffset : { width: 1, height: 13},
    }
})

export default Calendar;
