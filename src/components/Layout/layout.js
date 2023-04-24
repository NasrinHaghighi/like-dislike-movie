import React,{useEffect,useState} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import {MainContainer, InnerContainer, Main} from './styles';
import Navbar from './Navbar/Navbar';



const Layout =({children}) =>{ 
    
   

    return(
        <>
        <MainContainer>
      <InnerContainer>
    
             <Header /> 

             
        <Main>{children}</Main>
            <Navbar />
      
           <Footer />  
      </InnerContainer>
      </MainContainer>
        </>
    )
}

export default Layout;