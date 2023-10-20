import {createSlice} from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addToWishList:(state,action)=>{
            state.push(action.payload)
            
        },
           removeFromWishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
           }
    }
})

export const {addToWishList,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer