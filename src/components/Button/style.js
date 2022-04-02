import styled from "styled-components";


export const ButtonDiv = styled.button`
    background-color: ${props => props.background ? props.background : 'none'};
    border-radius:15px;
    border: ${props => props.border ? props.border : 'none'};
    color: ${props => props.color ? props.color : '#fff'};
    padding: 10px 15px;
    width: ${props => props.width ? props.width : 'auto'};
`