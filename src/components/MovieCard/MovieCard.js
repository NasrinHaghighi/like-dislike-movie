import React from 'react'
import { BiDislike, BiLike } from "react-icons/bi";
import {MovieItem,Top, Bottom,ImageContainer, TextWrapper, MovieTit,Summery, BottomTit, SummeryTit, Year,Vote,LastDiv, Icons, Like, DisLike} from './styles'



const baseImgUrl = "https://image.tmdb.org/t/p"
const size = "w300"



function MovieCard({item}) {
   console.log(item)
    const {poster_path:path, title,overview, release_date:date, vote_average:vote} = item
    
  return (
    <MovieItem>
        <Top>
            <ImageContainer bg={`${baseImgUrl}/${size}${path}`}>
            <TextWrapper>
                <MovieTit>{title}</MovieTit>
                <Summery>
                <SummeryTit>Summery :</SummeryTit>
                  <span>{overview.length<150 ? overview : overview.substring(0,150)}</span>
                </Summery>

            </TextWrapper>
            </ImageContainer>
            
        </Top>
        <Bottom>
           <BottomTit>{title}</BottomTit>
           <LastDiv>
           <Year>Year:{date.split('-')[0]}</Year>
           <Vote>Average vote :{vote}</Vote>
           </LastDiv>
           <Icons>
            <Like><BiLike/></Like>
            <DisLike><BiDislike/></DisLike>
           </Icons>
          
           
        </Bottom>
    </MovieItem>
  )
}

export default MovieCard