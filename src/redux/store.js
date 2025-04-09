import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menuSlice'
import cartReducer from './cartSlice'
import reservationReducer from './reservationSlice'

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    reservation: reservationReducer
  }
})
