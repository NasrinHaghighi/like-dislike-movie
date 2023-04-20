import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import {MainContainer, InnerContainer, Main} from './styles';
const Layout =({children}) =>{
    return(
        <>
        <MainContainer>
            <InnerContainer>
     <Header />
        <Main>{children}</Main>
      <Footer />  
      </InnerContainer>
      </MainContainer>
        </>
    )
}

export default Layout;