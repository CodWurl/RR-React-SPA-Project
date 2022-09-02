//Slices, actions, reducer

import {createSlice} from '@reduxjs/toolkit';



const initialState = {
    name : '',
    age : '',
    address : '',

}

export const profileSlice = createSlice({
    name : 'profile',
    initialState,
    reducers : {
        updateProfile : (state, action) => {
          state = action.payload
        },
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
