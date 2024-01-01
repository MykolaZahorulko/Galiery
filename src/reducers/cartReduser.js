import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const indexToRemove = action.payload.index;
            state.items.splice(indexToRemove, 1)
        },
    },
});

export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
