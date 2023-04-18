import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import {MainContainer, InnerContainer} from './styles';
const Layout =({children}) =>{
    return(
        <>
        <MainContainer>
            <InnerContainer>
     <Header />
        <main>{children}</main>
      <Footer />  
      </InnerContainer>
      </MainContainer>
        </>
    )
}

export default Layout;