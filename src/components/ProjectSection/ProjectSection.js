import React from "react";

import {
  Section,
  Container,
  Wrapper,
  Heading,
  BtnWrapper,
  Btn,
  BtnLink,
} from "./Project.elements";

const ProjectSection = () => {
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Heading>Check out my portfolio!</Heading>
            <BtnWrapper>
              <Btn>
                <BtnLink to="/portfolio">Click here</BtnLink>
              </Btn>
            </BtnWrapper>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};

export default ProjectSection;
