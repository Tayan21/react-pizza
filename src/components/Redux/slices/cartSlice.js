import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // setTotalPrice(state, action) {
    //   state.totalPrice = action.payload;
    // },
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload);
    },
    clearItems(state, action) {
      state.items = []
    },    
  },
});

export const { addItem, removeItem, clearItems } =
  cartSlice.actions;
export default cartSlice.reducer;
