import React from 'react'
import Icons from './Icons/Icons'
import {MovieItem,Top, Bottom,ImageContainer, TextWrapper, MovieTit,Summery, BottomTit, SummeryTit, Year,Vote,LastDiv, IconsDiv} from './styles'



const baseImgUrl = "https://image.tmdb.org/t/p"
const size = "w300"



function MovieCard({item}) {
   
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
           <IconsDiv>

            <Icons item={item}/>
            {/* <Like ><BiLike/></Like>
            <DisLike><BiDislike/></DisLike> */}
           </IconsDiv>
          
           
        </Bottom>
    </MovieItem>
  )
}

export default MovieCard