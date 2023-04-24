import styled from "styled-components";

export const FavoriteItemContainer =styled.div`

margin: 30px 0;
padding: 10px;
border-radius: 30px;
display: grid;
grid-template-columns: 0.5fr 3fr .5fr;

grid-column-gap: 20px;
grid-row-gap: 0px;
height: auto;
background-color: ${props=>props.theme.hoverBG};
&.green{
border:4px solid green;
}
&.red{
    border:4px solid red; 
}
@media (max-width: 600px) {
    grid-template-columns:1fr 2fr 1fr;
    grid-column-gap: 5px;
  }

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
export const Summery=styled.div`
font-size: 18px;
padding: 0 10px;
display: flex;
flex-direction: column;
@media (max-width: 900px) {
    display: none;
  }
`