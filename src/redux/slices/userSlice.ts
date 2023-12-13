import {createSlice, PayloadAction} from '@reduxjs/toolkit'


const initialState: any ={
    currentUser:["Arya"],
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addCurrentUser:(state,action:PayloadAction<any>)=>{
            
            state.currentUser = action.payload
        }
    }
})

export const {addCurrentUser} = userSlice.actions

export default userSlice.reducer