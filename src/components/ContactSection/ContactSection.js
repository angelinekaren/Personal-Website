import React from "react";

import {
  Section,
  Container,
  HeadingWrapper,
  HeadingLine,
  ContactHeading,
  ContactSubheading,
  ContactContainer,
  ContactCard,
  ContactCardDetail,
  ContactCardIcon,
  ContactCardTitle,
} from "./Contact.elements";

import { UilLine, UilEnvelope, UilInstagram } from "@iconscout/react-unicons";

const ContactSection = () => {
  return (
    <>
      <Section>
        <Container>
          <HeadingWrapper>
            <HeadingLine />
            <ContactHeading>Contact Me</ContactHeading>
            <ContactSubheading>Get in touch with me</ContactSubheading>
          </HeadingWrapper>
          <ContactContainer>
            <ContactCard>
              <ContactCardDetail>
                <ContactCardIcon>
                  <UilEnvelope
                    style={{
                      width: "80px",
                      height: "70px",

                      color: "#ffbdbe",
                    }}
                  />
                </ContactCardIcon>
                <ContactCardTitle>angeline.karen@binus.ac.id</ContactCardTitle>
              </ContactCardDetail>
            </ContactCard>
            <ContactCard>
              <ContactCardDetail>
                <ContactCardIcon>
                  <UilLine
                    style={{
                      width: "80px",
                      height: "70px",

                      color: "#ffbdbe",
                    }}
                  />
                </ContactCardIcon>
                <ContactCardTitle>@angeline.karen</ContactCardTitle>
              </ContactCardDetail>
            </ContactCard>
            <ContactCard>
              <ContactCardDetail>
                <ContactCardIcon>
                  <UilInstagram
                    style={{
                      width: "80px",
                      height: "70px",

                      color: "#ffbdbe",
                    }}
                  />
                </ContactCardIcon>
                <ContactCardTitle>@angelinekarenn</ContactCardTitle>
              </ContactCardDetail>
            </ContactCard>
          </ContactContainer>
        </Container>
      </Section>
    </>
  );
};

export default ContactSection;
