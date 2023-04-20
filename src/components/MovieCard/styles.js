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

&:hover {
    background-color: ${props=>props.theme.hoverBG}
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

export const Bottom =styled.div`
padding:10x ;
text-align: center;
color: ${props=>props.theme.textPurple};
font-size: 14px;
    line-height: 19px;
    font-weight: 500;
    padding: 0 20px;
`



/*wrapper*/

export const MovieTit =styled.h6`
font-size: 20px;
margin-bottom: 10px;
`
export const Summery =styled.p`
font-size: 14px;
padding: 0 10px;
display: flex;
flex-direction: column;

`
export const SummeryTit=styled.span`
margin-bottom: 25px;
`
/***** */
export const BottomTit =styled.p`
font-size:20px;
font-weight: 600;
margin-bottom: 0;
`

export const LastDiv =styled.p`
font-size: 14px;
display: flex;
justify-content: space-between;
margin-bottom: 0;


`
export const Year =styled.p`

`
export const Vote =styled.p`
`



export const IconsDiv =styled.div`
font-size: 24px;
display: flex;
justify-content: space-between;
padding:0 30px;
margin-bottom: 10px;
`
export const Like =styled.div`

&.green{
    color:green;
}
`
export const DisLike =styled.div`
`


