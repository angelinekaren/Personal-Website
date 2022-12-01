import styled from "styled-components";

export const Section = styled.div`
  background: #fff;
  padding: 100px 0 120px 0;
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

export const HeaderWrapper = styled.div`
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

export const HeaderOne = styled.h1`
  color: black;
  margin-top: 12px;
  margin-bottom: 5px;
`;

export const HeaderTwo = styled.p`
  color: black;
  margin-bottom: 24px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const SkillsCard = styled.div`
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);

  width: 420px;
  height: 230px;
  border-radius: 10px;

  &:nth-child(2) {
    margin: 30px 30px;
  }

  &:hover {
    transform: translate(0, -5px);
    transition: all 0.4s ease-out;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const SkillsCardDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const SkillsCardTitle = styled.h3`
  text-align: center;
  margin: 40px 0 10px 0;
`;

export const SkillsIconWrapper = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SkillsData = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 10px;
`;

export const SkillsIcon = styled.div`
  align-items: center;
`;

export const SkillsName = styled.p`
  color: black;
  font-weight: bold;
  font-size: 14px;
  align-items: center;
  text-align: center;
`;
