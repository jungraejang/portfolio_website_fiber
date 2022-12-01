import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  scrollPosition: 0,
  appReady: false,
}

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setScrollPosition: (state, action) => {
      state.scrollPosition = action.payload
    },
    setAppReady: (state, action) => {
      state.appReady = action.payload
    },
  },
})

export const { setScrollPosition, setAppReady } = eventSlice.actions

export const selectScrollPosition = state => state.event.scrollPosition

export default eventSlice.reducer
