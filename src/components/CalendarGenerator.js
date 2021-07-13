import React, { useState } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
// styles
import styles from '../styles/general';


function CalendarGenerator({ days, disable }) {
  const monthDays = new Array(days).fill(0);
  // state
  const [startDay, setStartDay] = useState(0);
  const [endDay, setEndDay] = useState(0);


  const handleElementClick = (num) => {
    if(!startDay && !endDay) {
      setStartDay(num)
    } else if(startDay && !endDay) {
      setEndDay(num)
    } else{
      setStartDay(num)
      setEndDay(0)
    }
  }

  console.log(startDay, endDay)

  return (
    <View style={styles.calendarWrapper}>
      {monthDays && monthDays.map((day, index) => <TouchableHighlight 
        disable={disable}
        style={startDay <= index+1 && index+1 <= endDay? styles.calendarBoxActive : styles.calendarBox}
        onPress={() => handleElementClick(index+1)}
      >
        <Text style={styles.calendarText}>{index+1}</Text>
      </TouchableHighlight>)}
    </View>
  );
}

export default CalendarGenerator;