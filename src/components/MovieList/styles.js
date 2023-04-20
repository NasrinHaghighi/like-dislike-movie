import styled from "styled-components";

export const MovieListContainer =styled.div`

padding:50px 0;

`
export const Title =styled.div`
font-size: 22px;
display: flex;
margin-bottom: 50px;

`

export const Icons =styled.div`
font-size: 22px;
font-weight: 600;
color: ${props=>props.theme.linkColor};
margin-right: 25px;
`
export const Wrapper=styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-column-gap: 10px;

grid-row-gap: 40px;
`



