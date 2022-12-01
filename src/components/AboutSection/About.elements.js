import styled from "styled-components";

export const Section = styled.div`
  background: #f8f8f8;
  padding: 130px 0 130px 0;
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

export const AboutRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -20px -20px -20px;
  flex-direction: row;
`;

export const AboutColumn = styled.div`
  margin-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    justify-content: center;
    display: flex;
    flex-basis: 100%;
    max-width: 100%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 550px;
  padding-top: 0;
  padding-bottom: 20px;

  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
    padding-top: 30px;
  }
`;

export const HeadingLine = styled.hr`
  border: none;
  height: 3px;
  width: 80px;
  color: #ffbdbe;
  background-color: #ffbdbe;
  margin-bottom: 10px;
`;

export const HeaderOne = styled.h1`
  color: black;

  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  margin-bottom: 20px;
  text-align: justify;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Card = styled.div`
  background: none;
  width: 100%;
  margin: 0 20px;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000;
`;

export const HeaderTwo = styled.h3`
  color: black;
  margin: 20px 0 30px 0;
`;

export const EducationContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const YearTitle = styled.h3`
  color: black;
`;

export const DetailText = styled.p`
  color: black;
  font-size: 13px;
`;

export const ImgWrapper = styled.div`
  max-width: 650px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 987px) {
    flex-direction: column;
  }
`;
