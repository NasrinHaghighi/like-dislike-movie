import { createSlice } from '@reduxjs/toolkit'







const initialState = {
 userSearchTopic:''
}

export const UserSearchTopicSlice = createSlice({
  name: 'UserSearchTopic',
  initialState,

  reducers: {
    UserTopic: (state, action) => {
     state.userSearchTopic=action.payload
        },





       
  },
})

// Action creators are generated for each case reducer function
export const { UserTopic } = UserSearchTopicSlice.actions

export default UserSearchTopicSlice.reducer