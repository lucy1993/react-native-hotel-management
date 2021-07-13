import React, { useState, useEffect } from 'react';
import { SafeAreaView, Button, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// actions 
import { getRooms } from '../redux/ducks/roomsSlice';
// months
import { monthsLong, daysInMonth } from '../storage/static';
// modals
import PikerModal from '../modals/PikerModal';
// components
import CalendarGenerator from '../components/CalendarGenerator'
// styles
import styles from '../styles/general';


const Calendar = () => {
  // dispatch
  const dispatch = useDispatch();
  // state
  const [currentMonth, setCurrentMonth] = useState(null);
  const [monthModal, setMonthModal] = useState(false);
  const [monthModalIndex, setMonthModalIndex] = useState(1);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [roomModal, setRoomModal] = useState(false);
  // props
  const roomsProps = useSelector(state => state.rooms);

  useEffect(() => {
    dispatch(getRooms())
  }, [])

  const handleMonth = (itemValue, itemIndex) => {
    setCurrentMonth(itemValue);
    setMonthModalIndex(itemIndex);
  }

  const handleOpenModal = (type) => {
    if (type === 'monthModal') setMonthModal(true)
    if (type === 'roomModal') setRoomModal(true)
  }

  const handleCloseModal = (type) => {
    if (type === 'monthModal') setMonthModal(false)
    if (type === 'roomModal') setRoomModal(false)

  }

  const handleRoom = (roomId) => {
    const rurRoom = roomsProps.filter(room => room.id === roomId);
    if(rurRoom.length) {
      setCurrentRoom(rurRoom[0])
    }

  }

  console.log(roomsProps, 'roomsProps')

  return (
    <SafeAreaView style={styles.page}>
      <PikerModal 
        data={monthsLong}
        currentMonth={currentMonth}
        onPikerData={handleMonth}
        modalVisible={monthModal}
        onModal={() => handleCloseModal('monthModal')}
      />
      <PikerModal 
        data={roomsProps}
        currentMonth={currentRoom}
        onPikerData={handleRoom}
        modalVisible={roomModal}
        onModal={() => handleCloseModal('roomModal')}
      />
      {/* month */}
      <View style={styles.chosenRows}>
        <Button
          title='choose the month:'
          onPress={() => handleOpenModal('monthModal')}
        />
        <Text style={styles.chosenRowsText}> {currentMonth || '--'} </Text>
      </View>
      {/* rooms */}
      <View style={styles.chosenRows}>
        <Button
          title='choose the room:'
          onPress={() => handleOpenModal('roomModal')}
        />
        <Text style={styles.chosenRowsText}> {currentRoom?.name || '--'} </Text>
      </View>
      
      <CalendarGenerator 
        days={daysInMonth(monthModalIndex)}
        disable={!currentMonth && !currentRoom}
      />
    </SafeAreaView>
  );
};

export default Calendar;
