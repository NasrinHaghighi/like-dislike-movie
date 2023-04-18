import React from 'react'
import {Container,Logo, List} from './styles'
import { BiCameraMovie } from 'react-icons/bi';
import FavoritesBtn from './FavoritesBtn/FavoritesBtn';
import ShameBtn from './ShameBtn/ShameBtn';



function Header() {
  return (
   <Container>
    <Logo><BiCameraMovie /></Logo>

    <List>
       <FavoritesBtn />
       <ShameBtn /> 
       
    </List> 


<div>search</div>


   </Container>
  )
}

export default Header