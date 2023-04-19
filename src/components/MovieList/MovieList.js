import React from 'react'
import useFetch from '../useFetch';
import MovieCard from '../MovieCard/MovieCard';
import {Title,Icons, MovieListContainer, Wrapper} from './styles'
import {BsFilm} from 'react-icons/bs';

function MovieList() {

    const {data:movies , loading, error}= useFetch('https://api.themoviedb.org/3/discover/movie?api_key=8454841ff275e66490314f04e5aaf36f')


    if (loading){
        return <p>loading....</p>
      }



  return (
    <MovieListContainer>
        <Title >
            <Icons><BsFilm /></Icons>
        Movies
        </Title>
        <Wrapper>
       {movies && movies.map((item)=>{
        return <MovieCard key={item.id} item={item}/>
     })}
     </Wrapper>
    </MovieListContainer>
  )
}

export default MovieList