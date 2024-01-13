import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Menu } from '../../pages/Home'

type CartState = {
  menuItems: Menu[]
  isOpen: boolean
}
const initialState: CartState = {
  menuItems: [],
  isOpen: false
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      const existingItem = state.menuItems.find(
        (item) => item.id === action.payload.id
      )

      if (!existingItem) {
        state.menuItems.push({ ...action.payload })
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.menuItems = state.menuItems.filter(
        (item) => item.id !== action.payload
      )
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
