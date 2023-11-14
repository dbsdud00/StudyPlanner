import { createSlice } from "@reduxjs/toolkit";
import React, { useRef, useState } from "react";

import { add, format } from "date-fns";

let nowDate = format(new Date(), "yyyy-MM-dd");
const initialState = {
  value: "",
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state, action) => {
      console.log("dateSlice payload : ", action.payload);
      state.value = action.payload;
      console.log("dateSlice date : ", state.value);
    },
  },
});

export const { setDate } = dateSlice.actions;

export default dateSlice.reducer;
