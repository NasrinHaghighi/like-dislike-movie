import React from 'react'
import {MovieListContainer, Title, Icons} from '../MovieList/styles'
import {BsFilm} from 'react-icons/bs';
import {  useDispatch ,useSelector} from 'react-redux'

import {Wrapper} from './style'
import EmptyList from './EmptyList/EmptyList';
import FavoriteItem from './FavoriteItem/FavoriteItem';

function Favorite() {
    const dispatch=useDispatch()
    const likeList=useSelector((state)=>state.likeList.likeList)


  return (
    <MovieListContainer>
        <Title >
            <Icons><BsFilm /></Icons>
        Favorite
        </Title>
<Wrapper>
   {likeList.length>0 ? likeList.map((item) =>{
    return <FavoriteItem item={item}/>
   }) : <EmptyList />}
</Wrapper>
        </MovieListContainer>
  )
}

export default Favorite