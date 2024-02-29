// const { createSlice } = require("@reduxjs/toolkit");

import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: [],
//     reducers: {
//         add(state, action) {
//             state.push(action.payload);
//         },
//         remove(state, action) {
//             state = state.filter((item) => item.id !== action.payload.id);
//         },
//     }
// });
// export const { add, remove } = cartSlice.actions;
// export default cartSlice.reducer;

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload);
        },
        remove(state,action){
            state = state.filter((item) => item.id !== action.payload.id);
        }
    }
})
console.log(cartSlice.actions)
export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;
