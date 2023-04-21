import { configureStore } from '@reduxjs/toolkit'
import LikeSlice from '../features/likeSlice'
import dislikeSlice from '../features/dislikeSlice'
import userSearchTopic from '../features/userSearchTopic'

export const store = configureStore({
  reducer: {
   likeList: LikeSlice,
   dislikeList :dislikeSlice,
   userTopic:userSearchTopic
  },
})