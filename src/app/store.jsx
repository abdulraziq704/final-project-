import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/CartSlice"; 
import AdminSlice from "../features/AdminSlice";
export const store = configureStore({
  reducer: {
    allcart:CartSlice, 
    admin: AdminSlice,
  },
});


 