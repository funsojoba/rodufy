import styled from "styled-components";


export const Container = styled.div`
    background: #301446;

`

export const SectionOne = styled.div`
    padding: 60px;
`

export const SectionOneContent = styled.div`
    display: flex;
    align-items: center;
    margin-top:60px;

    @media only screen and (max-width:750px){
        flex-direction: column;
    }

    .text{
        flex:1;
        color: #fff;
        padding-right: 20px;
    }

    .image{
        flex: 1;
    }
`

export const TextSpan = styled.span`
    color: #EA7052;
    position: relative;

    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        background: #fff;
        bottom: -5px;
        left:0;
    }
`

export const Flex = styled.div`
    display: flex;
    margin-top: 30px;
    align-items:center;
`

export const FlexChild = styled.div`
    flex: 1;
    padding: ${props => props.padding ? props.padding : '0'};
    margin-right:10px;
`