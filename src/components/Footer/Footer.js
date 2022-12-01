import React from "react";
import logo from "../../images/my_logo.png";
import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilGitlab,
} from "@iconscout/react-unicons";
import {
  FooterContainer,
  FooterWrapper,
  FooterRow,
  FooterColumn,
  FooterLogo,
  FooterSocialContainer,
  IconLink,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterRow>
          <FooterColumn>
            <FooterLogo>
              <img src={logo} alt="Karen Logo" width="38" height="40" />
            </FooterLogo>
          </FooterColumn>
          <FooterColumn>
            <FooterSocialContainer>
              <IconLink href="https://www.linkedin.com/in/angeline-karen-2409a4240/">
                <UilLinkedinAlt style={{ color: "white" }} />
              </IconLink>
              <IconLink href="https://github.com/angelinekaren">
                <UilGithubAlt style={{ color: "white" }} />
              </IconLink>
              <IconLink href="https://gitlab.com/angelinekarenn">
                <UilGitlab style={{ color: "white" }} />
              </IconLink>
            </FooterSocialContainer>
          </FooterColumn>
        </FooterRow>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
