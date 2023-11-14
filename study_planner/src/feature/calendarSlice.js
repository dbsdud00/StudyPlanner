import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";
let nowDate = format(new Date(), "yyyy-MM-dd");
const initialState = [];
export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addDate: (state, action) => {
      console.log("calendarSlice : ", action.payload);
      state.push({ value: action.payload });
    },
    sortDate: (state) => {
      state.sort((a, b) => a.value.localeCompare(b.value));
    },
  },
});
export const { addDate, sortDate } = calendarSlice.actions;
export default calendarSlice.reducer;
