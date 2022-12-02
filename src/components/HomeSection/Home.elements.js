import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Section = styled.div`
  background: #fff;
  padding: 50px 0 80px 0;
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

export const HomeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -20px -20px -20px;
  flex-direction: row;
`;

export const HomeColumn = styled.div`
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

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  @media screen and (max-width: 987px) {
    flex-direction: row;
    margin-top: 20px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 550px;
  padding-top: 0;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
  }
`;

export const HeaderOne = styled.h5`
  color: #ffbdbe;
  font-size: 20px;
  margin-bottom: -8px;
`;

export const HeaderTwo = styled.h1`
  color: black;
  font-size: 48px;
  margin-bottom: 3px;
`;

export const HeaderThree = styled.p`
  color: black;
  font-size: 14px;
  margin-bottom: 13px;
`;

export const HeaderFour = styled.p`
  color: black;
  margin-bottom: 15px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-top: 0;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Btn = styled.li`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const BtnLink = styled(LinkS)`
  background: #ffbdbe;
  padding: 8px 50px;
  border-radius: 20px;
  color: white;
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  @media screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

export const DlButton = styled.li`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const DlLink = styled.a`
  border: 2px solid #ffbdbe;
  background-color: none;
  padding: 8px 50px;
  border-radius: 20px;
  color: black;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  text-align: center;
  vertical-align: middle;
`;

export const ImgWrapper = styled.div`
  max-width: 650px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 987px) {
    flex-direction: column;
  }
`;

export const IconLink = styled.a`
  margin-right: 15px;
  margin: 10px 0;

  @media screen and (max-width: 987px) {
    margin: 0 10px;
  }
`;
