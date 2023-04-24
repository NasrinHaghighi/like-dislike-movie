import React from 'react'
import EmptyList from '../Favorite/EmptyList/EmptyList';
import FavoriteItem from '../Favorite/FavoriteItem/FavoriteItem';
import {MovieListContainer, Title, Icons} from '../MovieList/styles'
import {BsFilm} from 'react-icons/bs';
import {  useSelector} from 'react-redux'
import {Wrapper} from '../Favorite/style'

function Shame() {
    const dislikeList=useSelector((state)=>state.dislikeList.dislikeList)
  return (
    <MovieListContainer>
      {/* change styles by props */}
        <Title favorite>
            <Icons><BsFilm /></Icons>
        Wall of shame
        </Title>
        <Wrapper>
   {dislikeList.length>0 ? dislikeList.map((item) =>{
    return <FavoriteItem item={item} shameItem='shameItem'/>
   }) : <EmptyList />}
</Wrapper>

        </MovieListContainer>
  )
}

export default Shame