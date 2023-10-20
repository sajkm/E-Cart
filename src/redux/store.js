import {configureStore} from "@reduxjs/toolkit"
import WishlistSlice from "./slice/WishlistSlice";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
    reducer:{
      wishlistReducer:WishlistSlice,
      cartReducer:cartSlice
    }
})

export default store;