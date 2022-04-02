
import { NavBarDiv, MobileLogo, DesktopLogo, NavLinks, NavLinksWrapper, Hambugger } from "./style";
import BigLogo from "../Logos/BigLogo";
import SmallLogo from "../Logos/SmallLogo";
import MyLink from "../MyLink";

import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";


const NavBar = ()=>{
    const [linkState, toggleLinkState] = useState(false);
    return (
        <NavBarDiv>
            <div>
                <MobileLogo><SmallLogo/></MobileLogo>
                <DesktopLogo><BigLogo/></DesktopLogo>
            </div>

            <NavLinksWrapper>
                <Hambugger onClick={()=>toggleLinkState(!linkState)}>
                    <IconContext.Provider value={{ color: "fff"}}>
                        <FaBars value={{ color: "#fff"}} />
                    </IconContext.Provider>
                </Hambugger>
 
                <NavLinks display={linkState}>
                    <MyLink fontSize="2em" to="/">Register</MyLink>
                    <MyLink border="solid 1px #EA7052" fontSize="2em"  background="none" to="/about">Login</MyLink>
                </NavLinks>
            </NavLinksWrapper>

        </NavBarDiv>
    )
}

export default NavBar;