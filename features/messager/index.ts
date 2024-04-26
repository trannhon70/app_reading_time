import { createSlice } from "@reduxjs/toolkit";

interface MessagerState {
  counter: number;
  fromTo: string,
  sendTo: string
  nameFromto: string
}

const initialState: MessagerState = {
  counter: 0,
  fromTo:'',
  sendTo:'',
  nameFromto:''
};

const messagerSlice = createSlice({
  name: "messager",
  initialState,
  reducers: {
   
    setIdChat(state, action) {
      state.sendTo = action.payload.sendTo;
      state.fromTo = action.payload.fromTo;
      state.nameFromto = action.payload.nameFromto;
    },
  },
});

export const { setIdChat } = messagerSlice.actions;
export default messagerSlice.reducer;