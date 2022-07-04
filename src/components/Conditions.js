import React from 'react';
import { View } from 'react-native';

const Conditions = ({responseObj}) => {
   return (
       <View>
           {responseObj.cod === 200 ?
               <View>
                   <p><strong>{responseObj.name}</strong></p>
                   <p>It is currently {Math.round(responseObj.main.temp)} degrees out with {responseObj.weather[0].description}.</p>
               </View>
           : null
           }
       </View>
   )
}

export default Conditions;