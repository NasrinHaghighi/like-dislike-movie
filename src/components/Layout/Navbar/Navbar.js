import React from 'react'
import {NavbarBox, List, StyledLink,Amount } from './styles'
import {useLocation} from 'react-router-dom';
import {  useSelector} from 'react-redux'

function Navbar() {
    const location = useLocation();
    const pathname=location.pathname
    const likeList=useSelector((state)=>state.likeList.likeList)
  const dislikeList=useSelector((state)=>state.dislikeList.dislikeList)
  const amountLikeList=likeList.length
 const amountDislikeList=dislikeList.length
  return (
    <NavbarBox>
         <List>
      
      <StyledLink  to='/' className={pathname === '/' ? 'active' : ''}>  Home</StyledLink>
      <StyledLink  to='/likes' className={pathname === '/likes' ? 'active' : ''}>Likes<Amount>{amountLikeList}</Amount></StyledLink>
      <StyledLink  to='/dislikes' className={pathname === '/dislikes' ? 'active' : ''}>Dislikes<Amount shame>{amountDislikeList}</Amount></StyledLink>
     
    
      </List> 
    </NavbarBox>
  )
}

export default Navbar