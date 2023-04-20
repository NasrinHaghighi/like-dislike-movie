import React from 'react'
import {FavoriteItemContainer, Right, Middle, Left} from './styles'
import {MovieTit,Summery,LastDiv,Year,Vote} from  '../../MovieCard/styles'
import {BsTrash3Fill} from 'react-icons/bs'
import {  useDispatch } from 'react-redux'
import {removeFromLikeList} from '../../../featuers/likeSlice'
const baseImgUrl = "https://image.tmdb.org/t/p"
const size =  "w154"


function FavoriteItem({item}) {
  const {poster_path:path, title,overview, release_date:date, vote_average:vote} = item

  const dispatch=useDispatch()
  const removeLikedHandel=(item)=>{
dispatch(removeFromLikeList(item))
  }
  return (
    <FavoriteItemContainer>
      <Left bg={`${baseImgUrl}/${size}${path}`}></Left>
      <Middle>
      <MovieTit>{title}</MovieTit>
      <Summery likePage>
               
                  <span>{overview.length<300 ? overview : overview.substring(0,300)}</span>
      </Summery>
      <LastDiv likePage>
           <Year >Year:{date.split('-')[0]}</Year>
           <Vote>Average vote :{vote}</Vote>
           </LastDiv>
      </Middle>
    <Right onClick={()=>removeLikedHandel(item)}>
<BsTrash3Fill />
    </Right>
   
    
    </FavoriteItemContainer>
  )
}

export default FavoriteItem