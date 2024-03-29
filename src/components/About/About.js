import React from "react"
import {Container, ButtonScroll, Section, SectionWrapper} from "../Layout/Layout.styles";
import {InformationWrapper, ImageWrapperTwo, ImageWrapperOne} from "./About.styles";
import {useAboutQuery} from "../../hooks/queries/useAboutQuery";
import {getImage} from "gatsby-plugin-image";
import {GatsbyImage} from "gatsby-plugin-image";
import styled from "styled-components";

const About = () => {

    const {wpPage: { ACF_HomePage: {aboutSection : data} }} = useAboutQuery();

    const imageDataOne = getImage(data.images.imageOne.localFile);
    const imageDataTwo = getImage(data.images.imageTwo.localFile);

    return (
        <Section id="/apie-mus/">
            <Container>
                <SectionWrapper>

                        <ImageWrapperOne>
                            <GatsbyImage alt={data.images.imageOne.altText} image={imageDataOne}/>
                        </ImageWrapperOne>

                        <ImageWrapperTwo>
                            <GatsbyImage alt={data.images.imageTwo.altText} image={imageDataTwo}/>
                        </ImageWrapperTwo>
                    

                    <InformationWrapper>
                        <h2>{data.heading}</h2>
                        <p>{data.textArea}</p>


                        <AboutList>
                            {data.headingTwo ? ( <h5>{data.headingTwo}</h5>) : ''}

                            {data.aboutList.length ? (
                                data.aboutList.map( (item, index) => (
                                    <AboutListItem key={index}>{item.aboutListItem}</AboutListItem>
                                ))) : ''}
                        </AboutList>


                        <ButtonScroll to={data.button.url} big="true" >
                            {data.button.title}
                        </ButtonScroll>
                    </InformationWrapper>
                </SectionWrapper>
            </Container>
        </Section>
    )
};

export default About

const AboutList = styled.div`
  margin-bottom: 2.5rem;
`

const AboutListItem = styled.p`
  margin-bottom: 0px;
`