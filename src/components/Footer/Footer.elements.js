import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #111930;
  display: flex;
  justify-content: center;
  padding: 40px 0 40px 0;
  border-top: 3px solid #ffbdbe;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  align-items: center;
`;

export const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const FooterColumn = styled.div`
  margin-bottom: 10px;
  padding-right: 20px;
  padding-left: 50px;
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

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  // width: 300px;
  margin: 0 20px 0 24px;
`;

export const FooterSocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const IconLink = styled.a`
  margin-right: 10px;
  //   margin: 10px 0;

  @media screen and (max-width: 987px) {
    margin: 30px 0 10px 10px;
  }
`;
