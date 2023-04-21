import styled,  { keyframes } from 'styled-components';





const fadein = keyframes`
from { opacity: 0;bottom:-35px }
    to { opacity:1;bottom:6px };
    
`;
const fadeout = keyframes`
from { opacity: 1;bottom:0px }
    to { opacity:0;bottom:35px };
    
`;
const secondFadeIn = keyframes`
from { opacity: 0;bottom:35px }
    to { opacity:1;bottom:6px };
    
`;


export const FlyingText=styled.p`
color:${props=>props.theme.linkColor};
position:absolute;
left:75px ;
bottom: -28px; 
opacity:0 ;
font-size:15px ;

&.fadein{
    animation:${fadein} .5s .5s forwards;
 
}
&.usertyping{
    animation:${fadeout} .5s  forwards;
}
&.backspace{
    animation:${secondFadeIn} .5s .8s forwards;
}

`
export const Wrapper=styled.div`
display:flex ;
justify-content:flex-end ;
align-items:center ;

max-width:500px ;
position:relative ;
`

export const IconDiv=styled.div`

position:relative ;
display:flex ;
justify-content:center;
align-items:center ;
width:100px ;
height:64px ;
z-index:1 ;
position:absolute ;
&.rotate{
    &>span{
transform:rotate(45deg) ;
}
}
&.secondrotate{
    &>span{
        transform:rotate(90deg) ;
}
}

`
export const SearchTitle=styled.span`
position:absolute ;
right:80px ;
font-size:20px ;
font-weight:600 ;

&.hide{
    display:none ;
}
`
export const Input=styled.input`
width:0px ;
display:none ;
outline:none ;
border:none ;
border-radius:12px ;
background-color:#f3ff ;
height: 55px;
transition:width 800ms  linear;
padding:0 10px ;
::placeholder,
  ::-webkit-input-placeholder {
    opacity:1 ;
    font-size:20px ;
    color: #000;
  }
  :-ms-input-placeholder {
    opacity:1 ;
    font-size:20px ;
    color: #000;
  }
&.show{
    display:block ;
    width:400px ;
    background-color:white ;

}
&.hide{
    width:160px;
    background-color:transparent ;
   
}  
`
export const LensDiv=styled.div`
width: 20px;
height: 20px;

color: ${props=>props.theme.linkColor}
`
export const Xdiv=styled.div`
width: 20px;
height: 20px;
color: ${props=>props.theme.linkColor}
`