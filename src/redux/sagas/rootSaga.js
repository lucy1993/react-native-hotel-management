import { takeLatest } from 'redux-saga/effects';
// handlers
import { handleGetRooms, handleEditRooms, handleDeleteRooms } from './handlers/rooms';

// slices
import { getRooms, editRooms, deleteRooms } from '../ducks/roomsSlice';



export function* watcherSaga() {
  yield takeLatest(getRooms.type, handleGetRooms);
  yield takeLatest(editRooms.type, handleEditRooms);
  yield takeLatest(deleteRooms.type, handleDeleteRooms);

}