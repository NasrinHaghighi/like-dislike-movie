import styled from "styled-components";

export const MovieListContainer =styled.div`

padding:50px 0;

`
export const Title =styled.div`
font-size: 30px;
display: flex;
margin-bottom: 50px;
display: flex;
justify-content: center;

`

export const Icons =styled.div`
font-size: 30px;
font-weight: 600;
color: ${props=>props.theme.linkColor};
margin-right: 25px;
`
export const Wrapper=styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-column-gap: 10px;
grid-row-gap: 40px;
@media (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    display: flex;
    flex-direction: column;
    justify-content: center;
 align-items: center;
        
  }
`



