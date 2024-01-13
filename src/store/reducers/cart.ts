import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Menu } from '../../pages/Home'

type CartState = {
  items: Menu[]
  isOpen: boolean
}
const initialState: CartState = {
  items: [],
  isOpen: false
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      const product = state.items.find((item) => item.id == action.payload.id)
      if (product === undefined) {
        state.items.push(action.payload)
      } else {
        alert('o produto ja esta no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})
export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
