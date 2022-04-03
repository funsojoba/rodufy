import styled from "styled-components";


const ImgDiv = styled.img`
    width:100%;
`

const Img = ({alt, src, ...rest})=>{
    return <ImgDiv alt={alt} src={src} loading="lazy" {...rest} />
}

export default Img
