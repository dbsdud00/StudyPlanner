import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./feature/counterSlice";
import dateSlice from "./feature/dateSlice";
import calendarSlice from "./feature/calendarSlice";
// import counterReducer from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    date: dateSlice,
    calendar: calendarSlice,
  },
});
