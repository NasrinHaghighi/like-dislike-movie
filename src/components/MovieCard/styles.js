import styled from "styled-components";



export const TextWrapper =styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(100% - 15px);
    height: calc(100% - 15px);
    z-index: 4;
    transform: translate(-50%, -50%);
    background-color: ${props=>props.theme.lightPurple};
    backdrop-filter: blur(15px);
    border-radius: 10px;
    border: 1px solid rgba(33, 9, 95,.9);
    transition: all ease 0.3s;
    opacity:0;
    text-align: center;

`


export const MovieItem =styled.div`
max-width: 250px;
height: 420px;
border-radius: 30px;
padding: 10px;
background-color: transparent;
transition: all ease 0.3s;
background-color: aliceblue;
&:hover {
    ${TextWrapper} {
     opacity: 1;
    }}
`

export const Top =styled.div`
height: 280px;
`

export const ImageContainer =styled.div`
border: none;
position: relative;
border-radius: 30px !important;
height: 280px;
background: url(${props => props.bg}) no-repeat top center;
`

export const TextContainer =styled.div`

`



/*wrapper*/

export const MovieTit =styled.h6`
font-size: 20px;
`
export const Summery =styled.p`
font-size: 14px;
`


