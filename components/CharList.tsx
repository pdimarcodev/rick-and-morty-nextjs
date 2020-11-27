import React from "react";
import { Grid } from '@material-ui/core';

import { Character } from '../interfaces'
import CharCard from "./CharCard";
 
interface Props {
    characters: Character[];
}

const CharList: React.FC<Props> = ({characters}) => { 

    return (
        <Grid container spacing={10}>
          {characters.map((character) => (
            <CharCard character={character} />
          ))}
        </Grid>
      );

};

export default CharList;