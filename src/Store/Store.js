import { configureStore } from "@reduxjs/toolkit";
import wishlist from './Slices/WishlistSlice'
import movies  from "./Slices/Movies";

const store = configureStore({
  reducer: {
    movies,
    wishlist,
    
  },
});

export default store;