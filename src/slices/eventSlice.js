import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  scrollPosition: 0,
}

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setScrollPosition: (state, action) => {
      state.scrollPosition = action.payload
    },
  },
})

export const { setScrollPosition } = eventSlice.actions

export const selectScrollPosition = state => state.event.scrollPosition

export default eventSlice.reducer
