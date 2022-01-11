import { createSlice } from "@reduxjs/toolkit";

// INITIALIZING INITIAL STATE
const initialList = () => {
  let list = localStorage.getItem("wish-list");
  if (list) {
    return JSON.parse(list);
  }
  return [];
};

const initialState = {
  wishList: initialList(),
};

// Creating Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Adding Stock to wishlist and localStorage
    addStock: (state, action) => {
      localStorage.setItem(
        "wish-list",
        JSON.stringify([...state.wishList, action.payload])
      );
      state.wishList = [...state.wishList, action.payload];
    },
    // Deleting Stock from wishlist and localStorage
    deleteStock: (state, action) => {
      state.wishList = state.wishList.filter(
        (list) => list[0] !== action.payload[0]
      );
      localStorage.setItem("wish-list", JSON.stringify(state.wishList));
    },
  },
});

//Giving Access to State
export const selectWishList = (state) => state.user.wishList;
//Exporting reducer
export default userSlice.reducer;
//Exporting Actions
export const { addStock, deleteStock } = userSlice.actions;
