import React,{useEffect, useState} from 'react'
import useFetch from '../useFetch';
import MovieCard from '../MovieCard/MovieCard';
import {Title,Icons, MovieListContainer, Wrapper} from './styles'
import {BsFilm} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';

import {generateRandomNum} from '../../utils'

const apiKey = '8454841ff275e66490314f04e5aaf36f'
function MovieList() {

  /*generate random page by each load*/
const [randomNum, setRandomNum] =useState()

  useEffect(() => {
    setRandomNum(generateRandomNum())
  }, [])
  
  //console.log(randomNum)

  const userTopic=useSelector((state=>state.userTopic.userSearchTopic))

let url=`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${randomNum}`

/*chanage url by user type in input*/ 
if(userTopic){
   url=`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${userTopic}`
}
  
    const {data:movies , loading, error}= useFetch(url)
console.log(movies)
    if (loading){
        return  <p>lOADING...</p>
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