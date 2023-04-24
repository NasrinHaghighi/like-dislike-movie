import React, { useState, useEffect } from 'react'
import {Like, DisLike} from '../styles'
import { BiDislike, BiLike } from "react-icons/bi";
import {addToLikeList, removeFromLikeList} from '../../../features/likeSlice'
import { addToDisLikeList, removeFromDisLikeList } from '../../../features/dislikeSlice';
import {  useDispatch ,useSelector} from 'react-redux'


function Icons({item}) {
 
    const dispatch=useDispatch()
    const likeList = useSelector((state)=>state.likeList.likeList)
    const dislikeList = useSelector((state)=>state.dislikeList.dislikeList)


    const [liked ,setLiked] =useState(false)
    const [disliked ,setdisliked] =useState(false)



let tempoLike=likeList.find((b)=>b.id === item.id)
let tempoDislike=dislikeList.find((b)=>b.id === item.id)
useEffect(() => {

if(tempoLike){
    setLiked(true)
}
if(tempoDislike){
    setdisliked(true)
}

}, [likeList,dislikeList])


/*by click on each icon first remove from oposite list*/
    const addLikeHandel=(item)=>{
        dispatch(removeFromDisLikeList(item))
        setdisliked(false)
        dispatch(addToLikeList(item))
    }
    const addDislikeHandel=()=>{
        dispatch(removeFromLikeList(item))
        setLiked(false)
        dispatch(addToDisLikeList(item))
    }
  return (
   <>
      <Like onClick={()=>addLikeHandel(item)} className={liked ? 'green' : null}><BiLike/></Like>
      <DisLike 
      onClick={()=>addDislikeHandel(item)}
      className={disliked ? 'red': ''}
      ><BiDislike/></DisLike>
   
   </>
  )
}

export default Icons
