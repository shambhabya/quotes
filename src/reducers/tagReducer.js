import { createSlice } from '@reduxjs/toolkit';

const tagSlice = createSlice({
    name: 'tags',
    initialState: [],
    reducers: {
        setTags: (state, action) => action.payload,
    }
});

export const {setTags} = tagSlice.actions;
export default tagSlice.reducer;

