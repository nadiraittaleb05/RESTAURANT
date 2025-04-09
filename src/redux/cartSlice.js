import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }

      state.total = state.items.reduce((total, item) =>
        total + (item.price * item.quantity), 0)
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload
      const existingItem = state.items.find(item => item.id === itemId)

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
      } else {
        state.items = state.items.filter(item => item.id !== itemId)
      }

      state.total = state.items.reduce((total, item) =>
        total + (item.price * item.quantity), 0)
    },

    clearCart: (state) => {
      state.items = []
      state.total = 0
    }
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
