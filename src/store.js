import { configureStore, createSlice } from "@reduxjs/toolkit";

let items = createSlice({
  name: "items",
  initialState: [
    {
      id: 0,
      name: "나이키 에어포스",
      count: 1,
    },
    { id: 1, name: "나이키 범고래", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let num = state.findIndex((a) => a.id === action.payload);
      state[num].count++;
    },
    minusCount(state, action) {
      let num = state.findIndex((a) => a.id === action.payload);
      if (state[num].count > 1) state[num].count--;
    },
    deleteCount(state, action) {
      action.payload.remove();
    },
  },
});

export default configureStore({
  reducer: {
    items: items.reducer,
  },
});
