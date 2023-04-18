import styled from "styled-components";

export const Container =styled.div`
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Logo =styled.div`
font-size: 45px;
color:${props=>props.theme.linkColor};
`

export const List =styled.div`
display: flex;
`