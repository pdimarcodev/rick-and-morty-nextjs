import { useState } from "react";
import Modal from "react-modal";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Character } from "../interfaces";
import CharDetail from "./CharDetail";

Modal.setAppElement("#__next");

interface Props {
  character: Character;
}

const CharCard: React.FC<Props> = ({ character }) => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <Grid item xs={3}>
      <Paper
        onClick={() => setToggleModal(true)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
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

      <Modal
        isOpen={toggleModal}
        onRequestClose={() => setToggleModal(false)}
        shouldCloseOnOverlayClick={false}
      >
        <button onClick={() => setToggleModal(false)}>x</button>
        <CharDetail id={character.id} />
      </Modal>
    </Grid>
  );
};

export default CharCard;
