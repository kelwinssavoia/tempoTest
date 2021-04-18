import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Title,
  SearchInput,
  SearchContainer,
  TableContainer,
  TeamsTable,
} from "./styles";
import { DetailsTeam } from "../../services/teamsServices";
import { DetailsUser } from "../../services/usersService";

function Team() {
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState({});
  const [teamLeader, setTeamLeader] = useState();
  const [teamMembers, setTeamMembers] = useState();

  const [search, setSearch] = useState("");
  const { id } = useParams();

  useEffect(() => {
    loadTeam();
  }, []);

  const loadTeam = async () => {
    setLoading(true);

    try {
      const { data } = await DetailsTeam(id);
      setLoading(false);
      setTeam(data);
      loadLeader(data.teamLeadId);
      loadMembers(data.teamMemberIds);
    } catch (err) {
      console.log(err);
      setLoading(false);
      alert("Error to get Team");
    }
  };

  const loadMembers = async (members) => {
    const proms = members.map((member) => DetailsUser(member));
    const resps = await Promise.all(proms);
    setTeamMembers(resps.map((x) => x.data));
  };

  const renderItem = (user) => (
    <tr>
      <td>
        <a href={`/user/${user.id}`}>{user.id}</a>
      </td>
      <td>{`${user.firstName} ${user.lastName}`}</td>
    </tr>
  );

  const loadLeader = async (leaderId) => {
    try {
      const { data } = await DetailsUser(leaderId);
      console.log(data);
      setTeamLeader(data);
    } catch (err) {
      console.log(err);
      alert("Error to get Leader");
    }
  };

  const filteredItems = () =>
    teamMembers.filter(
      (x) =>
        `${x.firstName} ${x.lastName}`
          .toUpperCase()
          .search(search.toUpperCase()) !== -1
    );

  return (
    <Container className="container">
      <Title>Team</Title>
      {!loading && (
        <>
          <div className="row">
            <div className="col-md-6">
              <b>Id: </b>
              {team?.id}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <b>Name: </b>
              {team?.name}
            </div>
          </div>
          {teamLeader && (
            <div className="row">
              <div className="col-md-6">
                <b>Leader: </b>
                {`${teamLeader.firstName} ${teamLeader.lastName}`}
              </div>
            </div>
          )}
        </>
      )}
      {teamMembers && (
        <>
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
        </>
      )}
    </Container>
  );
}

export default Team;
