import { configureStore } from '@reduxjs/toolkit'
import eventReducer from '../slices/eventSlice'

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // theme: themeReducer,
    // question: questionReducer,
    // editor: editorReducer,
    event: eventReducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
})
