import { useEffect, useState } from "react";

import {
  Container,
  Title,
  SearchContainer,
  SearchInput,
  TableContainer,
  TeamsTable,
} from "./styles";
import { ListTeams } from "../../services/teamsServices";

function Home() {
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    setLoading(true);

    try {
      const { data } = await ListTeams();
      setLoading(false);
      setTeams(data);
    } catch (err) {
      console.log(err);
      setLoading(false);
      alert("Error to get Teams");
    }
  };

  const renderItem = (team) => (
    <tr>
      <td>
        <a href={`/team/${team.id}`}>{team.id}</a>
      </td>
      <td>{team.name}</td>
    </tr>
  );

  const filteredItems = () =>
    teams.filter(
      (x) => x.name.toUpperCase().search(search.toUpperCase()) !== -1
    );

  return (
    <Container>
      <Title>Teams</Title>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.currentTarget.value)}
          value={search}
        ></SearchInput>
      </SearchContainer>
      <TableContainer>
        <TeamsTable striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: 400 }}>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{filteredItems().map((team) => renderItem(team))}</tbody>
        </TeamsTable>
      </TableContainer>
    </Container>
  );
}

export default Home;
