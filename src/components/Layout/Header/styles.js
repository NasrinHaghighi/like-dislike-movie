import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container =styled.div`
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
/* box-shadow: 0 0 10px rgba(219, 241, 241, 0.4); */
padding: 20px 200px;

top :0 ;
left: 0;

z-index: 999px;
background-color: ${props=>props.theme.mainBG}; 
`
export const Logo =styled.div`
font-size: 45px;
color:${props=>props.theme.linkColor};
`

export const List =styled.div`
display: flex;
`

export const StyledLink = styled(Link)`
color:#fff;
text-decoration: none;
font-weight: 700;
font-size:25px;
margin-right: 70px;
position: relative;
&:after {
    width: 100%;
    height: 3px;
    background-color:${props=>props.theme.linkColor};
    position: absolute;
  top: 35px;
    left: 0%;
    content: "";
    opacity: 0;
    transition: all ease 0.3s;


  }
&.active{
    color: ${props=>props.theme.linkColor};
    &:after{
    opacity: 1;
  }
}

`;
export const Amount =styled.span`
position: absolute;
top: -15px;
right:  -20px;
width: 30px;
height: 30px ;
line-height: 30px;
background-color: ${props=>props.shame ? 'red' : 'green'};
text-align: center;
border-radius: 50%;
color: #ffff;
`

