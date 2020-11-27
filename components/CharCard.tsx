import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Character } from "../interfaces";

interface Props {
  character: Character;
}

const CharCard: React.FC<Props> = ({ character }) => {
  return (
    <Grid item xs={3}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <img
          style={{ marginRight: "20px" }}
          alt="character"
          src={character.image}
        />
        <Typography variant="subtitle1">
          <b>{character.name}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default CharCard;
