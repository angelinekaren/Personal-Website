import React from "react";
import { Fade } from "@mui/material";
import mainImage from "../../images/karen.png";
import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilGitlab,
} from "@iconscout/react-unicons";

import {
  Section,
  Container,
  HomeRow,
  HomeColumn,
  IconsWrapper,
  TextWrapper,
  HeaderOne,
  HeaderTwo,
  HeaderThree,
  HeaderFour,
  BtnWrapper,
  Btn,
  BtnLink,
  DlButton,
  DlLink,
  ImgWrapper,
  IconLink,
} from "./Home.elements";

const HomeSection = () => {
  return (
    <>
      <Section id="home">
        <Container>
          <Fade in timeout={2500}>
            <HomeRow>
              <HomeColumn>
                <TextWrapper>
                  <HeaderOne>Hello, I am</HeaderOne>
                  <HeaderTwo>Angeline Karen</HeaderTwo>
                  <HeaderThree>
                    <strong>3rd year Computer Science student</strong> at Binus
                    International University
                  </HeaderThree>
                  <HeaderFour>
                    Welcome to my portfolio website, where I will showcase my
                    pieces of work❤️.
                  </HeaderFour>
                  <BtnWrapper>
                    <Btn>
                      <BtnLink
                        offset={-50}
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                      >
                        Contact Me
                      </BtnLink>
                    </Btn>
                    <DlButton>
                      <DlLink
                        href="Angeline Karen CV.pdf"
                        download="Angeline Karen CV.pdf"
                      >
                        Download CV
                      </DlLink>
                    </DlButton>
                  </BtnWrapper>
                </TextWrapper>
              </HomeColumn>
              <HomeColumn>
                <ImgWrapper>
                  <img
                    className="pic"
                    src={mainImage}
                    alt="main"
                    width="400px"
                    height="460px"
                  />
                  <IconsWrapper>
                    <IconLink href="https://www.linkedin.com/in/angeline-karen-2409a4240/">
                      <UilLinkedinAlt style={{ color: "#ffbdbe" }} />
                    </IconLink>
                    <IconLink href="https://github.com/angelinekaren">
                      <UilGithubAlt style={{ color: "#ffbdbe" }} />
                    </IconLink>
                    <IconLink href="https://gitlab.com/angelinekarenn">
                      <UilGitlab style={{ color: "#ffbdbe" }} />
                    </IconLink>
                  </IconsWrapper>
                </ImgWrapper>
              </HomeColumn>
            </HomeRow>
          </Fade>
        </Container>
      </Section>
    </>
  );
};

export default HomeSection;
