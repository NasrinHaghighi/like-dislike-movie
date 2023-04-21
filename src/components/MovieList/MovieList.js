import React from 'react'
import useFetch from '../useFetch';
import MovieCard from '../MovieCard/MovieCard';
import {Title,Icons, MovieListContainer, Wrapper} from './styles'
import {BsFilm} from 'react-icons/bs';

import ClipLoader from "react-spinners/ClipLoader";


const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#fff",
};

function MovieList() {

    const {data:movies , loading, error}= useFetch('https://api.themoviedb.org/3/discover/movie?api_key=8454841ff275e66490314f04e5aaf36f')


    if (loading){
        return   <ClipLoader
        color='#fff'
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
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