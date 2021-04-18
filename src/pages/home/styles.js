import styled from "styled-components";
import Table from "react-bootstrap/Table";

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const Title = styled.h1`
  margin: 10px 0;
  text-align: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  margin: 5px 0;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  border-width: 1px;
  border-style: solid;
  border-color: gray;
  border-radius: 5px;
  padding: 10px;
  flex: 1;
  margin: 10px;
  font-size: 20px;
`;

export const TableContainer = styled.div`
  padding: 0 10px;
  width: 100%;  
`;

export const TeamsTable = styled(Table)``;


