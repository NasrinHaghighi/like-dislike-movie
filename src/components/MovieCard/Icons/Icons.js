import React, { useState, useEffect } from 'react'
import {Like, DisLike} from '../styles'
import { BiDislike, BiLike } from "react-icons/bi";
import {addToLikeList} from '../../../featuers/likeSlice'
import {  useDispatch ,useSelector} from 'react-redux'


function Icons({item}) {
 
    const dispatch=useDispatch()
    const likeList=useSelector((state)=>state.likeList.likeList)
    const [liked ,setLiked] =useState(false)

let tempo=likeList.find((b)=>b.id === item.id)
useEffect(() => {

if(tempo){
    setLiked(true)
}
}, [likeList])



    const addLikeHandel=(item)=>{
        dispatch(addToLikeList(item))
    }
  return (
   <>
      <Like onClick={()=>addLikeHandel(item)} className={liked ? 'green' : null}><BiLike/></Like>
      <DisLike><BiDislike/></DisLike>
   
   </>
  )
}

export default Icons
