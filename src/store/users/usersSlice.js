import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://randomuser.me/api/?results=5';

export const fetchUsers = createAsyncThunk('users/fetchUsers',
    async(thunkAPI) => {
 //       console.log(thunkAPI)
        try {
            const resp = await axios.get(url);
            return resp.data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue('Something went wrong');
        }
    }
)

const initialState = {
    userList: [],
    isLoading: true,
    error: null,
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchUsers.pending, (state, action)=>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchUsers.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.userList = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default userSlice.reducer;
//export const { actions } = userSlice;