import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name: "Wishlist",
    initialState:[] ,
    reducers: {
        addProduct:(state, action) => {
            state.push(action.payload);
    },
    removeProduct: (state, action) => {
       return state.filter((product) => product.id !== action.payload);
         
    }

}
})
export const { addProduct, removeProduct } = WishlistSlice.actions;
export default WishlistSlice.reducer;