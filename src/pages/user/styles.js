import styled from "styled-components";
import Table from "react-bootstrap/Table";

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 10px 0;
  text-align: center;
`;
export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  border-width: 1px;
  border-style: dashed;
  border-color: white-gray;
`;
