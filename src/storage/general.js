import AsyncStorage from '@react-native-async-storage/async-storage';


const saveRoomsToSt  = async (rooms) => {
  let serializedRooms = JSON.stringify(rooms);
  try { 
    await AsyncStorage.setItem('RoomsListSto', serializedRooms)
  } catch (e){
    console.error(e)
  }
}

const getRoomsFromSt = async () => {
  return await AsyncStorage.getItem('RoomsListSto')
}

const storageCalls = {
  saveRoomsToSt,
  getRoomsFromSt
}

export default storageCalls