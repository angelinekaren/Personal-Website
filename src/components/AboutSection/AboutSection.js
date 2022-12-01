import React from "react";
import {
  Section,
  Container,
  AboutRow,
  AboutColumn,
  TextWrapper,
  HeadingLine,
  HeaderOne,
  Subtitle,
  ImgWrapper,
  Card,
  CardDetail,
  HeaderTwo,
  EducationContainer,
  YearTitle,
  DetailText,
  CardContainer,
} from "./About.elements";

import karenImg from "../../images/karenn.png";
import { UisRocket } from "@iconscout/react-unicons-solid";

const AboutSection = () => {
  return (
    <>
      <Section id="about">
        <Container>
          <AboutRow>
            <AboutColumn>
              <ImgWrapper>
                <img
                  className="pic"
                  src={karenImg}
                  alt="main"
                  width="365px"
                  height="400px"
                />
              </ImgWrapper>
            </AboutColumn>
            <AboutColumn>
              <TextWrapper>
                <HeadingLine />
                <HeaderOne>Get to know me!</HeaderOne>
                <Subtitle>
                  Hi, my name is Angeline Karen. I am 20 years old and currently
                  is a 3rd year Computer Science student at BINUS International
                  University Batch 2024. My work ethic would be described as
                  reliable, honest, and persistent. I consider myself to be
                  open-minded and able to work well with others. My persistence
                  reassures me and boosts my confidence in exploring new things.
                </Subtitle>
                <HeaderTwo>Education</HeaderTwo>
                <CardContainer>
                  <Card>
                    <CardDetail>
                      <EducationContainer>
                        <UisRocket
                          style={{
                            width: "20px",
                            height: "20px",
                            marginBottom: "7px",
                            color: "#ffbdbe",
                          }}
                        />
                        <YearTitle>2014 - 2017</YearTitle>
                        <DetailText>SMPK 4 Penabur</DetailText>
                      </EducationContainer>
                    </CardDetail>
                  </Card>
                  <Card>
                    <CardDetail>
                      <EducationContainer>
                        <UisRocket
                          style={{
                            width: "20px",
                            height: "20px",
                            marginBottom: "7px",
                            color: "#ffbdbe",
                          }}
                        />
                        <YearTitle>2017 - 2020</YearTitle>
                        <DetailText>SMAK 5 Penabur</DetailText>
                      </EducationContainer>
                    </CardDetail>
                  </Card>
                  <Card>
                    <CardDetail>
                      <EducationContainer>
                        <UisRocket
                          style={{
                            width: "20px",
                            height: "20px",
                            marginBottom: "7px",
                            color: "#ffbdbe",
                          }}
                        />
                        <YearTitle>2020 - Now</YearTitle>
                        <DetailText>Binus University International</DetailText>
                      </EducationContainer>
                    </CardDetail>
                  </Card>
                </CardContainer>
              </TextWrapper>
            </AboutColumn>
          </AboutRow>
        </Container>
      </Section>
    </>
  );
};

export default AboutSection;
