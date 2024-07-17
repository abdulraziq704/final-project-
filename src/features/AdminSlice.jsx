import { createSlice } from "@reduxjs/toolkit";
import new_collections from "../assets/new_collections.js";

const initialState = {
  products: new_collections,
  users: [],
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index >= 0) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { addProduct, updateProduct, deleteProduct, setUsers } = adminSlice.actions;

export default adminSlice.reducer;
