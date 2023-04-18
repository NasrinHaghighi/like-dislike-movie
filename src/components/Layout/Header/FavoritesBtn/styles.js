import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper=styled.div`
margin: 0 30px;
position: relative;

`

export const StyledLink = styled(Link)`
color:#fff;
text-decoration: none;
font-weight: 600;
`;
export const Amount =styled.span`
position: absolute;
top: -20px;
left:  ${props=>props.shame ? '100px' : '-28px'};
width: 30px;
height: 30px ;
line-height: 30px;
background-color: ${props=>props.shame ? 'red' : 'green'};
text-align: center;
border-radius: 50%;
`