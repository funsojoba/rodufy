import { ButtonDiv } from "./style";

const Button = (props) =>{
    const {background, border, color, width, children, ...rest} = props;
    
    return (
    <ButtonDiv 
            background={background} 
            border={border}
            width={width}
            color={color}
            {...rest} >
        {children}
    </ButtonDiv>)
}

export default Button;