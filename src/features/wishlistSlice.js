import { createSlice } from "@reduxjs/toolkit";

 const initialState = { 
    wishlist : [],
    totalItems : 0 ,
  }

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState ,
    reducers : {
      addToWishlist: (state, action) =>{
        let find = state.wishlist.findIndex((item)=> item.id === action.payload.id)

        if(find >= 0){
          state.wishlist[find].quantity +=1;  
          }else{
            state.wishlist.push(action.payload);
        }
      }
      ,

      removerItem :  (state, action) =>{
        state.wishlist = state.wishlist.filter((item)=> item.id !== action.payload)
      },

        
    }
})

export const {addToWishlist ,removerItem} = wishlistSlice.actions

export default wishlistSlice.reducer