import { BannerDiv } from "./style";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import Button from "../Button";


const Banner = (props) => {

    const [closeBanner, setCloseBanner] = useState(false);

    return (
        <BannerDiv display={closeBanner}>
            <div>
                <Button background="rgba(255, 255, 255, 0.2)">New</Button>
            </div>
            <div>
                <h3>Announcing our $15 million series A funding!</h3>
            </div>
            <div>
                <div onClick={()=>setCloseBanner(true)}>
                    <FaRegTimesCircle  />
                </div>
            </div>

        </BannerDiv>
    )
}