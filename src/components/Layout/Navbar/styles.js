import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavbarBox =styled.div`
display: none;
position: fixed;
right: 2%;
top: 30%;

@media (max-width: 1400px) {
display: block;
} 
`
export const List =styled.div`
display: flex;
flex-direction: column;

`

export const StyledLink = styled(Link)`
color:#fff;
text-decoration: none;
margin-bottom: 70px;
position: relative;
transform: rotate(-90deg);
font-size:20px;

&.active{
    color: ${props=>props.theme.linkColor};
   
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