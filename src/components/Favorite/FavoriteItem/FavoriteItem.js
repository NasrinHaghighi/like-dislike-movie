import React from 'react'
import {FavoriteItemContainer, Right, Middle, Left, Summery} from './styles'
import {MovieTit,LastDiv,Year,Vote} from  '../../MovieCard/styles'
import {BsTrash3Fill} from 'react-icons/bs'
import {  useDispatch } from 'react-redux'
import {removeFromDisLikeList} from '../../../features/dislikeSlice'
import {removeFromLikeList} from '../../../features/likeSlice'
const baseImgUrl = "https://image.tmdb.org/t/p"
const size =  "w154"


function FavoriteItem({item,shameItem}) {
  

  const {poster_path:path, title,overview, release_date:date, vote_average:vote} = item

  const dispatch = useDispatch()
  const removeDislikedHandel=(item)=>{
     dispatch(removeFromLikeList(item))
     if(shameItem){
      dispatch(removeFromDisLikeList(item))
     }
  }



  return (
    <FavoriteItemContainer className={shameItem ? 'red' : 'green'}>
      <Left bg={`${baseImgUrl}/${size}${path}`}></Left>
      <Middle>
      <MovieTit>{title}</MovieTit>
      <Summery >
            <span>{overview.length<300 ? overview : overview.substring(0,300)}</span>
      </Summery>
      <LastDiv likePage>
           <Year >Year:{date.split('-')[0]}</Year>
           <Vote>Average vote :{vote}</Vote>
           </LastDiv>
      </Middle>
    <Right onClick={()=>removeDislikedHandel(item)}>
<BsTrash3Fill />
    </Right>
   
    
    </FavoriteItemContainer>
  )
}

export default FavoriteItem