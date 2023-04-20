import React from 'react'
import {MovieListContainer, Title, Icons} from '../MovieList/styles'
import {BsFilm} from 'react-icons/bs';
import {  useDispatch ,useSelector} from 'react-redux'

import {Wrapper} from './style'
import EmptyList from './EmptyList/EmptyList';

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
    return <p>{item.title}</p>
   }) : <EmptyList />}
</Wrapper>
        </MovieListContainer>
  )
}

export default Favorite