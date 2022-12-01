import styled from "styled-components";

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

export const HeaderOne = styled.h1`
  color: black;
  display: flex;
  justify-content: center;
  max-width: 1100px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 50px;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const CardItem = styled.article`
  position: relative;
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  padding: 2.4rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: 0.2s all ease-out;
  // justify-content: space-between;
  // flex-direction: column;
  // display: flex;
`;

export const CardImage = styled.div`
  // border-radius: 1.3rem;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const CardTitle = styled.h5`
  font-size: 16px;
  margin-top: 8px;
  // margin-bottom: 4px;
`;

export const CardSubtitle = styled.p`
  font-size: 12px;
  text-align: justify;
  margin-bottom: 25px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: absolute;
  bottom: 15px;
`;

export const Btn = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-top: 10px;
`;

export const BtnLink = styled.a`
  font-size: 13px;
  display: flex;
  align-items: center;
  background: #ffbdbe;
  padding: 8px 30px;
  border-radius: 10px;
  color: white;
  font-size: 12px;
  text-decoration: none;
  font-weight: semi-bold;
  width: 100%;
  text-align: center;
  vertical-align: middle;
`;

export const BtnLink2 = styled.a`
  font-size: 13px;
  display: flex;
  align-items: center;
  border: 2px solid #ffbdbe;
  background-color: none;
  padding: 8px 30px;
  border-radius: 10px;
  color: black;
  font-size: 12px;
  font-weight: semi-bold;
  text-decoration: none;
  width: 100%;
  text-align: center;
  vertical-align: middle;
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CardSubs = styled.p`
  font-size: 10px;
`;
