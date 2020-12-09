import { Box, Grid } from "@material-ui/core";
import { Character } from "../interfaces";
import CharCard from "./CharCard";

interface Props {
  characters: Character[];
}

const CharList: React.FC<Props> = ({ characters }) => {
  return (
    <Box mb={13}>
    <Grid container item spacing={4}>
      {characters.map((character) => (
        <Grid item>
          <CharCard key={character.id} character={character} />
        </Grid>
      ))}
    </Grid>
    </Box>
  );
};

export default CharList;
