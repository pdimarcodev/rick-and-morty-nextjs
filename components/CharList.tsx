import React from "react";

import { Character } from '../interfaces'
 
interface Props {
    characters: Character[];
}

const CharList: React.FC<Props> = ({characters}) => { 

    return (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      );

};

export default CharList;