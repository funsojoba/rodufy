import { BannerDiv } from "./style";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import H3 from "../typography/h3";
import Button from "../Button";
import TextSpan from "../typography/span";


const Banner = () => {

    const [closeBanner, setCloseBanner] = useState(true);

    return (
        <BannerDiv display={closeBanner ? "flex" : "none"}>
            <div>
                <Button background="rgba(255, 255, 255, 0.2)">New</Button>
            </div>
            <div>
                <H3><TextSpan color="#fff">Announcing our $15 million series A funding!</TextSpan></H3>
            </div>
            <div>
                <div onClick={()=>setCloseBanner(false)} style={{cursor:"pointer"}}>
                <IconContext.Provider value={{ color: "fff", size:"1.5em"}}>
                    <FaRegTimesCircle  />
                </IconContext.Provider>
                </div>
            </div>

        </BannerDiv>
    )
}

export default Banner