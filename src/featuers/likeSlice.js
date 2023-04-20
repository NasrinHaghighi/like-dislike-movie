import { createSlice } from '@reduxjs/toolkit'
import { json } from 'react-router-dom'



const items= localStorage.getItem('likeList') != null ? JSON.parse(localStorage.getItem('likeList')) : []


const initialState = {
 likeList:items
}

export const LikeSlice = createSlice({
  name: 'LikeList',
  initialState,
  reducers: {
    addToLikeList: (state, action) => {
        //state.likeList.push(action.payload)
        let tempo=state.likeList.find((b)=>b.id === action.payload.id)
if (tempo){
    return
}else{
    state.likeList.push(action.payload)
}
localStorage.setItem("likeList", JSON.stringify(state.likeList.map((item)=>item)));
        },



     removeFromLikeList:(state, action)=>{
const newList =state.likeList.filter((item)=>{
  return item.id === action.payload.id
})
state.likeList=newList
localStorage.setItem("likeList", JSON.stringify(state.likeList.map((item)=>item)));
     }   
       
  },
})

// Action creators are generated for each case reducer function
export const { addToLikeList } = LikeSlice.actions

export default LikeSlice.reducer