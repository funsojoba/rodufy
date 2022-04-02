import { MyLinkDiv } from "./style";
import { Link } from "react-router-dom";


const MyLink = ({ to, fontSize, children, padding, background, color, border}) => {
    return <MyLinkDiv 
                padding={padding}
                fontSize={fontSize}
                background={background}
                color={color}
                border={border}>
        <Link to={to}> {children} </Link>
    </MyLinkDiv>
}

export default MyLink
