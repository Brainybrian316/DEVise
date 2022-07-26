import styled from "styled-components";


export const Container = styled.div`
  background-color: #fff;
`;

export const Left = styled.div`
  float: left;
  width: 25%;

  background-color: #f5f5f5;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color:#59bfff;

  @media (max-width: 768px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const CardContent = styled.div`
  width: 50%;
  max-width: 500px;
  @media (max-width: 768px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const CardMedia = styled.img`
  width: 50%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const Right = styled.div`
  float: right;
  width: 50%;
  height: 100%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: green;
  @media (max-width: 768px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

