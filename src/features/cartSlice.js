import { createSlice } from "@reduxjs/toolkit";
import { data } from "../components/productData";

 const initialState = { 
    cart : [],
    item : data,
    totalQuantity : 0 ,
    totalPrice : 0
  }

export const cartslice = createSlice({
    name: "cart",
    initialState ,
    reducers : {
      addToCart: (state, action) =>{
        let find = state.cart.findIndex((item)=> item.id === action.payload.id)
            console.log(action.payload.attributes);
        if(find >= 0){
           state.cart[find].attributes.quantity +=1;  
          }else{
            state.cart.push(action.payload);
            state.cart = [...state.cart ]
        }
      }
      

      ,

      removerItem :  (state, action) =>{
        state.cart = state.cart.filter((item)=> item.id !== action.payload)

      
      },

    

      decreaseItemQuantity : (state , action) =>{
        state.cart = state.cart.map((item)=>{
          if(item.id===action.payload){
            
            state.cart[0].attributes.quantity -= 1
            
          }
          return item;
        })
      },

      emptycartItem : (state, action)=>{
        state.cart = []
      }
        
    }
})

export const {addToCart  ,removerItem  , decreaseItemQuantity , emptycartItem} = cartslice.actions

export default cartslice.reducer