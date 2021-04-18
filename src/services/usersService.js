import axios from "axios";

export const ListUsers = async () =>
  axios.get("https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/");

export const DetailsUser = async (id) =>
  axios.get(
    `https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/${id}`
  );
