import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Title, ImageContainer, Image } from "./styles";
import { DetailsUser } from "../../services/usersService";

function Team() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    loadDetails();
  }, []);

  const loadDetails = async () => {
    setLoading(true);

    try {
      const { data } = await DetailsUser(id);
      setLoading(false);
      setUser(data);
    } catch (err) {
      console.log(err);
      setLoading(false);
      alert("Error to get User");
    }
  };

  return (
    <Container className="container">
      <Title>User</Title>
      <>
        <ImageContainer>
          <Image src={user?.avatarUrl}></Image>
        </ImageContainer>
        <div className="row">
          <div className="col-md-6">
            <b>Id: </b>
            {user?.id}
          </div>
          <div className="col-md-6">
            <b>Display Name: </b>
            {user?.displayName}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <b>First Name: </b>
            {user?.firstName}
          </div>
          <div className="col-md-6">
            <b>Location: </b>
            {user?.location}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <b>Last Name: </b>
            {user?.lastName}
          </div>
        </div>
      </>
    </Container>
  );
}

export default Team;
