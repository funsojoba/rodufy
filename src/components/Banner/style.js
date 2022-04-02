import styled from "styled-components";


export const BannerDiv = styled.div`
    width: 100%;
    height: 178px;
    background: #EA7052;
    justify-content: space-between;
    align-items: center;
    display: ${props => props.display ? props.display : 'flex'};
    transition: all ease-in-out 300ms;
`