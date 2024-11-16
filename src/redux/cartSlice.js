import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalCost: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (!existingItem) {
                state.items.push({ ...newItem, quantity: 1 });
            } else {
                existingItem.quantity += 1;
            }

            state.totalQuantity += 1;
            state.totalCost += newItem.price;
        },
        incrementItem(state, action) {
            const id = action.payload.id;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
                state.totalQuantity += 1;
                state.totalCost += existingItem.price;
            }
        },
        decrementItem(state, action) {
            const id = action.payload.id;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem && existingItem.quantity > 0) {
                existingItem.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalCost -= existingItem.price;
                if (existingItem.quantity === 0) {
                    state.items = state.items.filter(item => item.id !== id);
                }
            }
        },
        deleteItem(state, action) {
            const id = action.payload.id;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalCost -= existingItem.price * existingItem.quantity;
                state.items = state.items.filter(item => item.id !== id);
            }
        },
    },
});

export const { addItem, incrementItem, decrementItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
