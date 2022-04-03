import { Container, SectionOne, SectionOneContent, Flex, FlexChild } from "./style";
import NavBar from "../../components/NavBar";
import Img from "../../components/Img";
import H1 from "../../components/typography/h1";
import H3 from "../../components/typography/h3";
import Paragraph from "../../components/typography/p";

import Banner from "../../components/Banner";
import ImageOne from "./image-1.png";
import AndroidImage from "./android.svg"
import AppleImage from "./apple.svg"
import TextSpan from "../../components/typography/span";

const Home = ()=>{
    return (
        <>
            <Banner />
            <Container>
                <SectionOne>
                    <NavBar />
                    
                    <SectionOneContent>
                        <div className="text">
                            <H1>
                            Our mission is to <TextSpan>advance</TextSpan> humanity
                            </H1>
                            <Paragraph>We would strive to achieve that through providing education and quality health</Paragraph>
                            <Flex>
                                <FlexChild>
                                    <H3>DOWNLOAD APP</H3>
                                </FlexChild>
                                <FlexChild padding="15px">
                                    <Img src={AndroidImage} style={{width:"75px"}}/>
                                </FlexChild>
                                <FlexChild padding="15px">
                                    <Img src={AppleImage} style={{width:"75px"}}/>
                                </FlexChild>
                            </Flex>
                        </div>

                        <div className="image">
                            <Img src={ImageOne}/>
                        </div>
                    </SectionOneContent>

                </SectionOne>
            </Container>
        </>
    )
}


export default Home