import React from 'react'
import {Wrapper, StyledLink,Amount } from '../FavoritesBtn/styles'




function ShameBtn() {
  return (
<>
    <Wrapper>
      <StyledLink  to='/Dislikes'>Wall of shame</StyledLink>
      <Amount shame>0</Amount>
      </Wrapper>
    </>
    
  )
}

export default ShameBtn