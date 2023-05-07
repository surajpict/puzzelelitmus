import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        getUsers: (state) => {
                // get code
        }
    }
})

export const { getUsers } = userSlice.actions; 
export default userSlice.reducer;
