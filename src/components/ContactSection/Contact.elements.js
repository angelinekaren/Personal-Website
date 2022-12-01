import styled from "styled-components";

export const Section = styled.div`
  background: #fff;
  padding: 130px 0 80px 0;
  color: #000;
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  z-index: 1;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeadingLine = styled.hr`
  border: none;
  height: 3px;
  width: 80px;
  color: #ffbdbe;
  background-color: #ffbdbe;
`;

export const ContactHeading = styled.h1`
  margin-top: 17px;
  color: #000;
  margin-bottom: 10px;
`;

export const ContactSubheading = styled.p`
  margin-bottom: 24px;
  text-align: center;
`;

export const ContactContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ContactCard = styled.div`
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  width: 350px;
  height: 260px;
  border-radius: 10px;
  &:nth-child(2) {
    margin: 30px;
  }
  &:hover {
    transform: translate(0, -5px);
    transition: all 0.4s ease-out;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const ContactCardDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  height: 250px;
  padding: 24px;
`;

export const ContactCardIcon = styled.div`
  margin: 20px 0;
`;

export const ContactCardTitle = styled.h3`
  margin-bottom: 5px;
`;
