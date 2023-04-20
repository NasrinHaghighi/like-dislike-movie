import { configureStore } from '@reduxjs/toolkit'
import LikeSlice from '../featuers/likeSlice'



export const store = configureStore({
  reducer: {
   likeList: LikeSlice
  },
})