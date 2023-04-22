import React,{useEffect, useState} from 'react'
import useFetch from '../useFetch';
import MovieCard from '../MovieCard/MovieCard';
import {Title,Icons, MovieListContainer, Wrapper} from './styles'
import {BsFilm} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';

import {generateRandomNum} from '../../utils'


function MovieList() {
const [randomNum, setRandomNum] =useState()

  useEffect(() => {
    setRandomNum(generateRandomNum())
  }, [])
  
  console.log(randomNum)

  const userTopic=useSelector((state=>state.userTopic.userSearchTopic))

let url=`https://api.themoviedb.org/3/discover/movie?api_key=8454841ff275e66490314f04e5aaf36f&page=${randomNum}`

if(userTopic){
   url=`https://api.themoviedb.org/3/search/movie?api_key=8454841ff275e66490314f04e5aaf36f&query=${userTopic}`
}
  
    const {data:movies , loading}= useFetch(url)

    if (loading){
        return  <Loader loading={loading}/>
      }

  return (
    <MovieListContainer>
        <Title >
            <Icons><BsFilm /></Icons>
        Movies
        </Title>
        <Wrapper>
       { movies?.map((item)=>{
        return <MovieCard key={item.id} item={item}/>
     })}
     </Wrapper>
     
    </MovieListContainer>
  )
}

export default MovieList