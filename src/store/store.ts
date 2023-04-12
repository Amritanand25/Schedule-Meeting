import {configureStore} from '@reduxjs/toolkit';
import cardSlice from './slices/cardSlice';
import calenderSlice from './slices/calenderSlice';
const store = configureStore({
  reducer: {
    selectTime: cardSlice,
    calender: calenderSlice
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;