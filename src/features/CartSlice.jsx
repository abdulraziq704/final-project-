import { createSlice } from "@reduxjs/toolkit";
import new_collections from "../assets/new_collections.js";

const initialState = {
  cart: [],
  items: new_collections,
  totalQuantity: 0,
  totalPrice: 0,
};
 

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    Addtoocart: (state, action) => {
      let finditem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (finditem >= 0) {
        state.cart[finditem].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
     
    }, 
    getCartTotal: (state) => {
        let { totalQuantity, totalPrice } = state.cart.reduce(
          (cartTotal, cartItem) => {
            console.log("carttotal", cartTotal);
            console.log("cartitem", cartItem);
            const { new_price, quantity } = cartItem;
            console.log(new_price, quantity);
            const itemTotal = new_price * quantity;
            cartTotal.totalPrice += itemTotal;
            cartTotal.totalQuantity += quantity;
            return cartTotal;
          },
          {
            totalPrice: 0,
            totalQuantity: 0,
          }
        );
        state.totalPrice = parseInt(totalPrice.toFixed(2));
        state.totalQuantity = totalQuantity;
      },
      removeItem: (state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      },
  },
});
export const { Addtoocart ,getCartTotal ,removeItem} = cartSlice.actions;

export default cartSlice.reducer;
