import React from 'react'
import {MovieItem,Top, TextContainer,ImageContainer, TextWrapper, MovieTit,Summery} from './styles'
const baseImgUrl = "https://image.tmdb.org/t/p"
const size = "w300"

function MovieCard({item}) {
   
    const {poster_path:path, title,overview} = item
    console.log(overview.length)
  return (
    <MovieItem>
        <Top>
            <ImageContainer bg={`${baseImgUrl}/${size}${path}`}>
            <TextWrapper>
                <MovieTit>{title}</MovieTit>
                <Summery>
                  
                </Summery>

            </TextWrapper>
            </ImageContainer>
            
        </Top>
        <TextContainer></TextContainer>
    </MovieItem>
  )
}

export default MovieCard