import { configureStore, createSlice } from '@reduxjs/toolkit'


let user = createSlice({ //useState와 비슷한 역할입니다
  name: 'user',
  initialState: 'kim'
})

let cart = createSlice({ //useState와 비슷한 역할입니다
  name: 'cart',
  initialState:
[
  { id: 0, name: 'White and Black', count: 2 },
  { id: 2, name: 'Grey Yordan', count: 1 }
]
})


export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
}) 