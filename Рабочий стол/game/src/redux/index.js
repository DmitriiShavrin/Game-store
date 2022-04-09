import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer';
import gameSlice from './games/reducer';

export const Store = configureStore({
    reducer: {
        cart: cartReducer,
        games: gameSlice
    }
})