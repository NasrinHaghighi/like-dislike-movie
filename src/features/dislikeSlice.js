import { createSlice } from '@reduxjs/toolkit'

const items= localStorage.getItem('dislikeList') != null ? JSON.parse(localStorage.getItem('dislikeList')) : []


const initialState = {
    dislikeList:items
}

export const DislikeSlice = createSlice({
  name: 'DislikeList',
  initialState,
  reducers: {
    addToDisLikeList: (state, action) => {
        //state.likeList.push(action.payload)
        let tempo=state.dislikeList.find((b)=>b.id === action.payload.id)
if (tempo){
    return
}else{
    state.dislikeList.push(action.payload)
}
localStorage.setItem("dislikeList", JSON.stringify(state.dislikeList.map((item)=>item)));
        },



     removeFromDisLikeList:(state, action)=>{
const newList =state.dislikeList.filter((item)=>{
  return item.id !== action.payload.id
})
state.dislikeList=newList
localStorage.setItem("dislikeList", JSON.stringify(state.dislikeList.map((item)=>item)));
     }   
       
  },
})

// Action creators are generated for each case reducer function
export const { addToDisLikeList, removeFromDisLikeList } = DislikeSlice.actions

export default DislikeSlice.reducer