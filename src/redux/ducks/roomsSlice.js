import { createSlice } from '@reduxjs/toolkit'

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: [],
  reducers: {
    getRooms: (state, action) => {
      return action.payload;
    },
    setRooms: (state, action) => {
      return action.payload;
    },
    editRooms: (state, action) => {
      return action.payload;
    },
    deleteRooms: (state, action) => {
      return action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { getRooms, setRooms, editRooms, deleteRooms } = roomsSlice.actions;

export default roomsSlice.reducer;