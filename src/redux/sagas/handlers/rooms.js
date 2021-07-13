import { call, put } from 'redux-saga/effects';
import { getRooms, setRooms } from '../../ducks/roomsSlice';
// storage 
import storageCalls from '../../../storage/general';

export function* handleGetRooms(action) {
  const { payload } = action;
  try {
    const data = yield storageCalls.getRoomsFromSt() || [];
    const parsedData = data ? JSON.parse(data) : [];
    
    if(payload) {
      storageCalls.saveRoomsToSt([payload, ...parsedData]);
      yield put(setRooms([payload, ...parsedData]));
    } else yield put(setRooms(parsedData));

  } catch (error) {
    console.error();
  }
}

export function* handleEditRooms(action) {
  const { payload } = action;

  try {
    const data = yield storageCalls.getRoomsFromSt() || [];
    let parsedData = data ? JSON.parse(data) : [];

    parsedData = parsedData.map(room => room.id === payload.id ? payload : room);
    storageCalls.saveRoomsToSt(parsedData);

    yield put(setRooms(parsedData));
  } catch (error) {
    console.error();
  }
}

export function* handleDeleteRooms(action) {
  const { payload } = action;
  try {
    const data = yield storageCalls.getRoomsFromSt() || [];
    let parsedData = data ? JSON.parse(data) : [];

    parsedData = parsedData.filter(room => room.id !== payload.id);

    storageCalls.saveRoomsToSt(parsedData);

    yield put(setRooms(parsedData));
  } catch (error) {
    console.error();
  }
}

