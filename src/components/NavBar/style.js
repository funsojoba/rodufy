import styled from "styled-components";

export const NavBarDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MobileLogo = styled.div`
    @media only screen and (max-width:750px){
        display:none;
    }
`

export const DesktopLogo = styled.div`
    @media only screen and (min-width:750px){
        display:none;
    }
`