import styled from "styled-components";

export const FavoriteItemContainer =styled.div`
border: 4px solid green;
margin: 30px 0;
padding: 10px;
border-radius: 30px;
display: grid;
grid-template-columns: 0.5fr 3fr .5fr;

grid-column-gap: 20px;
grid-row-gap: 0px;
height: auto;
background-color: ${props=>props.theme.hoverBG}

`

export const Right=styled.div`
font-size: 25px;
display: flex;
justify-content: center;
align-items: center;
color: ${props=>props.theme.linkColor}

`
export const Middle=styled.div`

`
export const Left=styled.div`

background: url(${props => props.bg}) no-repeat top center;
display: flex;
justify-content: left;
align-items: center;
margin-top: 2 0px;
`