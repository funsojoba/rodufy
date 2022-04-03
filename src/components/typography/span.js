import styled from "styled-components";




export const TextSpanDiv = styled.span`
    color: ${props => props.color ? props.color : "#EA7052"};
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

const TextSpan = (props)=>{
    return (
        <TextSpanDiv color={props.color}>
            {props.children}
        </TextSpanDiv>
    )
}

export default TextSpan