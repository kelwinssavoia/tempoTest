import axios from "axios";

export const ListTeams = async () =>
  axios.get("https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/");

export const DetailsTeam = async (id) =>
  axios.get(
    `https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/${id}`
  );
