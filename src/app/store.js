import { configureStore } from '@reduxjs/toolkit'
import LikeSlice from '../featuers/likeSlice'
import dislikeSlice from '../featuers/dislikeSlice'


export const store = configureStore({
  reducer: {
   likeList: LikeSlice,
   dislikeList :dislikeSlice
  },
})