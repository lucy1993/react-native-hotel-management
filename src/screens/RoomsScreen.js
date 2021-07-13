import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, FlatList, SafeAreaView, Button, Alert } from 'react-native';
import uuid from 'react-native-uuid';
// actions 
import { getRooms, editRooms, deleteRooms } from '../redux/ducks/roomsSlice';
// styles
import styles from '../styles/general';
// components
import RoomRow from '../components/RoomRow';
// modals
import AddRoom from '../modals/AddRoom';

const Rooms = () => {
  // dispatch
  const dispatch = useDispatch();
  // state
  const [modalVisible, setModalVisible] = useState(false);
  const [roomNameInitial, setRoomNameInitial] = useState('');
  const [roomCurrent, setRoomCurrent] = useState(null);
  const [oppressionType, setOppressionType] = useState(null);

  const [rooms, setRoomsState] = useState([]);
  // props
  const roomsProps = useSelector(state => state.rooms);

  useEffect(() => {
    dispatch(getRooms())
  }, [])

  useEffect(() => {
    setRoomsState(roomsProps);
  }, [roomsProps])

  // handlers
  const onAddRoom = () => {
    setModalVisible(true)
  }

  const handleModalData = (name) => {
    if(name && oppressionType === 'edit') {
      dispatch(editRooms({
        name,
        id: roomCurrent.id
      }))
    } else if(name) {
      dispatch(getRooms({
        name,
        id: uuid.v4()
      }))
    }

    setRoomCurrent(null);
    setOppressionType(null);
    setModalVisible(false)
  }

  const handleRoomChange = (room, type) => {
    setRoomCurrent(room);
    setOppressionType(type);
    if(type === 'delete') {
      Alert.alert(
        "Are you sure? ",
        "U want to delete the room ? ",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => dispatch(deleteRooms(room)) }
        ]
      );
    } else if (type === 'edit') {
      setModalVisible(true)
      setRoomNameInitial(room.name)
    }
  }

  const renderItem = ({ item }) => (
    <RoomRow
      room={item}
      onDelete={(item) => handleRoomChange(item, 'delete')}
      onEdit={(item) => handleRoomChange(item, 'edit')}
    />
  );

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.page}>
        <AddRoom 
          modalVisible={modalVisible}
          onModal={handleModalData}
          roomNameInitial={roomNameInitial}
        />
        <View style={styles.header}>
          <Text style={styles.headerText}>All Rooms</Text>
          <Button 
            style={styles.headerText}
            title='+'
            onPress={onAddRoom}
          />
        </View>
        {rooms?.length ? <FlatList 
          data={rooms}
          renderItem={renderItem}
          keyExtractor={room => room.id}
        /> : <Button 
          title='Add room'
          onPress={onAddRoom}
        />}
        
      </View>
    </SafeAreaView>
  );
};

export default Rooms;
