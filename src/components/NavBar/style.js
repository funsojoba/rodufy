import styled from "styled-components";

export const NavBarDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MobileLogo = styled.div`
    @media only screen and (min-width:750px){
        display:none;
    }
`

export const DesktopLogo = styled.div`
    @media only screen and (max-width:750px){
        display:none;
    }
`

export const Flex = styled.div`
    display: flex;
`

export const NavLinksWrapper = styled.div`
    position: relative;
`

export const Hambugger = styled.div`
    width: 60px;
    height:60px;
    border-radius: 50%;
    border: solid 1px #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all ease-in 300ms;
    display: none;

    &:hover{
        transform: scale(1.02);
    }

    @media only screen and (max-width:750px){
        display: flex;
    }
`

export const NavLinks = styled.div`
    display: flex;

    @media only screen and (max-width:750px){
        flex-direction: column;
        position:absolute;
        top:50px;
        right:10px;
        align-items:flex-end;
        display: ${props => props.display ? props.display : 'none'};
    }
`
