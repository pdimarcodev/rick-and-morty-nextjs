import * as React from "react";

import { Paper, Typography, CircularProgress } from "@material-ui/core";

import { getOneCharacter } from "../resolvers/Characters";

const CharDetail: React.FC<any> = ({ id }) => {
  const { data, loading, error } = getOneCharacter(id);
  const character = data?.character;

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <p>Error.</p>
      ) : character ? (
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1">
            <b>Name: {character?.name}</b>
          </Typography>
          <Typography variant="subtitle2">
            <b>Type: {character?.type}</b>
          </Typography>
          <Typography variant="subtitle2">
            <b>Gender: {character?.gender}</b>
          </Typography>
          <Typography variant="subtitle2">
            <b>Species: {character?.species}</b>
          </Typography>
          <img
            style={{ marginRight: "20px" }}
            alt="character"
            src={character?.image}
          />
        </Paper>
      ) : (
        <p>No data.</p>
      )}
    </>
  );
};

export default CharDetail;
