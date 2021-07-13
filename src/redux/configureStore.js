import { 
  configureStore,
  combineReducers,
  getDefaultMiddleware
 } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';
// slices
import setRooms from './ducks/roomsSlice';



const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  rooms: setRooms,
})

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware]
})

sagaMiddleware.run(watcherSaga);

export default store;