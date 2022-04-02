import styled from "styled-components";


export const MyLinkDiv = styled.div`
    a{  
        display: inline-block;
        border-radius: 16px;
        background: ${props => props.background ? props.background : "#EA7052"};
        color: ${props => props.color ? props.color : "#fff"};
        border: ${props => props.border ? props.border : "none"};
        cursor: pointer;
        padding: ${props => props.padding ? props.padding : '10px 30px'};
        transition:all ease-in 300ms;
        width: ${props => props.width ? props.width : "auto"};
        text-decoration:none;
        color: ${props => props.color ? props.color : "#fff"};
        margin:10px;
        font-size: ${props => props.fontSize ? props.fontSize : "16px"};
        text-align: ${props => props.textAlign ? props.textAlign : "center"};

    &:hover{
        transform: scale(1.02);
    }
    }
`