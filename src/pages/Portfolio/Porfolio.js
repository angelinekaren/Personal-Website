import React from "react";

import {
  Section,
  Container,
  CardIcon,
  SubtitleWrapper,
  CardSubs,
  HeaderOne,
  CardWrapper,
  CardItem,
  CardImage,
  CardTitle,
  CardSubtitle,
  BtnWrapper,
  Btn,
  BtnLink,
  BtnLink2,
} from "./Portfolio.elements";

// images
import easyrent from "../../images/easyrent.jpg";
import jobforyou from "../../images/jobforyou.jpg";
import focusplanner from "../../images/focusplanner.jpg";
import publishedpaper from "../../images/publishedpaper.jpg";
import clarifact from "../../images/clarifact.jpg";
import veriflare from "../../images/veriflare.jpg";
import py_to_c from "../../images/py_to_c.png";

import {
  UilGithub,
  UilDocumentInfo,
  UilGlobe,
  UilGitlab,
} from "@iconscout/react-unicons";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";

const Portfolio = () => {
  return (
    <>
      <Section>
        <Container>
          <HeaderOne>PORTFOLIO</HeaderOne>
          <CardWrapper>
            {/* easyrent */}
            <CardItem>
              <CardImage>
                <img
                  src={easyrent}
                  alt="easyrent pic"
                  width="255px"
                  height="130px"
                />
              </CardImage>
              <CardTitle>EasyRent</CardTitle>
              <SubtitleWrapper>
                <CardIcon>
                  <GroupIcon
                    style={{
                      width: "13px",
                      height: "13px",
                      marginRight: "4px",
                      color: "#111930",
                    }}
                  />
                </CardIcon>
                <CardSubs>Group project</CardSubs>
              </SubtitleWrapper>

              <CardSubtitle>
                EasyRent is a website where users can find boarding houses or
                rental rooms to rent in only a few clicks, and landlords may
                post their properties for rent. The project incorporates the
                NodeFlux API for authentication.
              </CardSubtitle>
              <BtnWrapper>
                <Btn>
                  <BtnLink href="https://github.com/angelinekaren/EasyRent-Project">
                    <UilGithub
                      style={{
                        width: "17px",
                        height: "17px",
                      }}
                    />
                    Github
                  </BtnLink>
                </Btn>
                <Btn>
                  <BtnLink2 href="https://easyrent-project-pi.vercel.app/">
                    <UilGlobe
                      style={{
                        width: "17px",
                        height: "17px",
                      }}
                    />
                    Web
                  </BtnLink2>
                </Btn>
              </BtnWrapper>
            </CardItem>

            {/* jobforyou */}
            <CardItem>
              <CardImage>
                <img
                  src={jobforyou}
                  alt="jobforyou pic"
                  width="255px"
                  height="130px"
                />
              </CardImage>
              <CardTitle>JobforYou</CardTitle>
              <SubtitleWrapper>
                <CardIcon>
                  <PersonIcon
                    style={{
                      width: "13px",
                      height: "13px",
                      marginRight: "4px",
                      color: "#111930",
                    }}
                  />
                </CardIcon>
                <CardSubs>Personal project</CardSubs>
              </SubtitleWrapper>

              <CardSubtitle>
                JobforYou is a web-based application that is designed and
                centered on helping people get employed. It is mainly focused on
                providing people to explore job vacancies and give them a handy
                shortcut to apply for a job while companies can also have a
                convenient and time-saving approach to all job seekers.
              </CardSubtitle>

              <BtnWrapper>
                <Btn>
                  <BtnLink href="https://github.com/angelinekaren/PDM_Final_Project">
                    <UilGithub
                      style={{
                        width: "17px",
                        height: "17px",
                      }}
                    />
                    Github
                  </BtnLink>
                </Btn>
                <Btn>
                  <BtnLink2 href="https://docs.google.com/document/d/1T1YrfFKGTHf1B6j-BYsmXxdew3tShvxi/edit?usp=sharing&ouid=107137025266031163472&rtpof=true&sd=true">
                    <UilDocumentInfo
                      style={{
                        width: "17px",
                        height: "17px",
                      }}
                    />
                    Docs
                  </BtnLink2>
                </Btn>
              </BtnWrapper>
            </CardItem>

            {/* focusplanner */}
            <CardItem>
              <CardImage>
                <img
                  src={focusplanner}
                  alt="focusplanner pic"
                  width="240px"
                  height="160px"
                />
              </CardImage>
              <CardTitle>FocusPlanner</CardTitle>
              <SubtitleWrapper>
                <CardIcon>
                  <PersonIcon
                    style={{
                      width: "13px",
                      height: "13px",
                      marginRight: "4px",
                      color: "#111930",
                    }}
                  />
                </CardIcon>
                <CardSubs>Personal project</CardSubs>
              </SubtitleWrapper>

              <CardSubtitle>
                Focus Planner is an android application that is designed and
                centered on helping people, especially youngsters manage their
                schedules. It's mainly focused on helping people to organize,
                divide their prioritization, and set up deadlines.
              </CardSubtitle>

              <BtnWrapper>
                <Btn>
                  <BtnLink href="https://github.com/angelinekaren/OOP_Final_Project">
                    <UilGithub
                      style={{
                        width: "17px",
                        height: "17px",
                      }}
                    />
                    Github
                  </BtnLink>
                </Btn>
                <Btn>
                  <BtnLink2 href="https://docs.google.com/document/d/1nXwLyqVuGQyKVzTTjfEXxFmutN3t6VXA/edit?usp=sharing&ouid=107137025266031163472&rtpof=true&sd=true">
                    <UilDocumentInfo
                      style={{
                        width: "17px",
                        height: "17px",
                      }}
                    />
                    Docs
                  </BtnLink2>
                </Btn>
              </BtnWrapper>
            </CardItem>

            {/* published paper */}
            <CardItem>
              <CardImage>
                <img
                  src={publishedpaper}
                  alt="paper pic"
                  width="240px"
                  height="130px"
                />
              </CardImage>
              <CardTitle>Data Science Paper</CardTitle>
              <SubtitleWrapper>
                <CardIcon>
                  <GroupIcon
                    style={{
                      width: "13px",
                      height: "13px",
                      marginRight: "4px",
                      color: "#111930",
                    }}
                  />
                </CardIcon>
                <CardSubs>Group project</CardSubs>
              </SubtitleWrapper>

              <CardSubtitle>
                ICoDSA 2022 IEEE Xplore Publication - Analyzing the Impact of
                Age and Gender for Targeted Advertisements Prediction Model
              </CardSubtitle>

              <BtnWrapper>
                <Btn>
                  <BtnLink href="https://github.com/VaniaNatalie/DataScienceFinal">
                    <UilGithub
                      style={{
                        width: "17px",
                        height: "17px",
                      }}
                    />
                    Github
                  </BtnLink>
                </Btn>
                <Btn>
                  <BtnLink2 href="https://ieeexplore.ieee.org/document/9862531">
                    <UilDocumentInfo
                      style={{
                        width: "17px",
                        height: "17px",
                      }}
                    />
                    Paper
                  </BtnLink2>
                </Btn>
              </BtnWrapper>
            </CardItem>

            {/* clarifact-ai */}
            <CardItem>
              <CardImage>
                <img
                  src={clarifact}
                  alt="clarifact pic"
                  width="260px"
                  height="140px"
                />
              </CardImage>
              <CardTitle>ClariFact-AI - Ongoing</CardTitle>
              <SubtitleWrapper>
                <CardIcon>
                  <GroupIcon
                    style={{
                      width: "13px",
                      height: "13px",
                      marginRight: "4px",
                      color: "#111930",
                    }}
                  />
                </CardIcon>
                <CardSubs>Group project</CardSubs>
              </SubtitleWrapper>

              <CardSubtitle>
                ClariFact-AI is an application developed by the Faculty of
                Computer Science at Bina Nusantara International University to
                clarify whether information is true or false.
              </CardSubtitle>

              <BtnWrapper>
                <Btn>
                  <BtnLink href="https://gitlab.com/angelinekarenn/clarifact-ai">
                    <UilGitlab
                      style={{
                        width: "17px",
                        height: "17px",
                      }}
                    />
                    Gitlab
                  </BtnLink>
                </Btn>
              </BtnWrapper>
            </CardItem>

            {/* veriflare */}
            <CardItem>
              <CardImage>
                <img
                  src={veriflare}
                  alt="veriflare pic"
                  width="260px"
                  height="140px"
                />
              </CardImage>
              <CardTitle>Veriflare</CardTitle>
              <SubtitleWrapper>
                <CardIcon>
                  <GroupIcon
                    style={{
                      width: "13px",
                      height: "13px",
                      marginRight: "4px",
                      color: "#111930",
                    }}
                  />
                </CardIcon>
                <CardSubs>Group project</CardSubs>
              </SubtitleWrapper>

              <CardSubtitle>
                Veriflare is the first health hoax detector website in
                Indonesia, striving to debunk any healthcare fake information.
                It is a pitching project for GarudaHacks 2.0 submission in 2022.
              </CardSubtitle>

              <BtnWrapper>
                <Btn>
                  <BtnLink href="https://devpost.com/software/veriflare">
                    <UilGlobe
                      style={{
                        width: "17px",
                        height: "17px",
                      }}
                    />
                    Web
                  </BtnLink>
                </Btn>
              </BtnWrapper>
            </CardItem>

            {/* interpreter */}
            <CardItem>
              <CardImage>
                <img
                  src={py_to_c}
                  alt="interpreter pic"
                  width="260px"
                  height="100px"
                />
              </CardImage>
              <CardTitle>Python to C++ Interpreter</CardTitle>
              <SubtitleWrapper>
                <CardIcon>
                  <GroupIcon
                    style={{
                      width: "13px",
                      height: "13px",
                      marginRight: "4px",
                      color: "#111930",
                    }}
                  />
                </CardIcon>
                <CardSubs>Group project</CardSubs>
              </SubtitleWrapper>

              <CardSubtitle>
                A project for Compilation Technique course to implement
                interpreter and translation from Python to C++ language
              </CardSubtitle>

              <BtnWrapper>
                <Btn>
                  <BtnLink href="https://github.com/VaniaNatalie/CompTechFinal">
                    <UilGithub
                      style={{
                        width: "17px",
                        height: "17px",
                      }}
                    />
                    Github
                  </BtnLink>
                </Btn>
              </BtnWrapper>
            </CardItem>
          </CardWrapper>
        </Container>
      </Section>
    </>
  );
};

export default Portfolio;
