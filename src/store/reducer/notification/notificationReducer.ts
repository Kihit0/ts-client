import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  message: any;
  status: number | null;
}

export const notificationReducer = createSlice({
  name: "notification",
  initialState: {
    message: "",
    status: null,
  } as initialState,
  reducers: {
    notification(state, action) {
      state.message = action.payload;
      state.status = action.payload.status;
    },
  },
});


export const {notification} = notificationReducer.actions