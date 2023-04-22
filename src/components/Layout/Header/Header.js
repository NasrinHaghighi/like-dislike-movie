import React from 'react'
import {Container,Logo, Left,List, StyledLink, Amount, SearchDiv} from './styles'
import { BiCameraMovie } from 'react-icons/bi';

import {useLocation} from 'react-router-dom';
import {  useSelector} from 'react-redux'
import Search from './Search/Search';

function Header() {
  const location = useLocation();
  const pathname=location.pathname
  
  const likeList=useSelector((state)=>state.likeList.likeList)
  const dislikeList=useSelector((state)=>state.dislikeList.dislikeList)
  const amountLikeList=likeList.length
 const amountDislikeList=dislikeList.length
  return (
   <Container>
      <Left>
    <Logo><BiCameraMovie /></Logo>

    <List>
      
    <StyledLink  to='/' className={pathname === '/' ? 'active' : ''}>  Home</StyledLink>
    <StyledLink  to='/likes' className={pathname === '/likes' ? 'active' : ''}><Amount>{amountLikeList}</Amount>Favorite List</StyledLink>
    <StyledLink  to='/dislikes' className={pathname === '/dislikes' ? 'active' : ''}><Amount shame>{amountDislikeList}</Amount>Wall of shame</StyledLink>
   
  
    </List> 
    </Left>
<SearchDiv>
<Search />
</SearchDiv>

   </Container>
  )
}

export default Header