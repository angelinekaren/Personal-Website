import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  background: #f8f8f8;
  padding: 90px 0 20px 0;
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

export const Wrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0;
`;

export const Heading = styled.h2`
  margin-bottom: 22px;
  line-height: 1.2;
  font-weight: bold;
  text-align: center;
  color: black;
`;

export const Btn = styled.li`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const BtnLink = styled(Link)`
  background: #ffbdbe;
  padding: 8px 70px;
  border-radius: 20px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;

  @media screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;
