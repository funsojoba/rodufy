
import { NavBarDiv, MobileLogo, DesktopLogo } from "./style";
import BigLogo from "../Logos/BigLogo";
import SmallLogo from "../Logos/SmallLogo";

const NavBar = ()=>{
    return (
        <NavBarDiv>
            <div>
                <MobileLogo>{SmallLogo}</MobileLogo>
                <DesktopLogo>{BigLogo}</DesktopLogo>
            </div>

            <div>
                
            </div>

        </NavBarDiv>
    )
}