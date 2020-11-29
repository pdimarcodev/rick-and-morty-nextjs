import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import { CharacterQuery, CharactersQuery, CharsVars, CharVars } from '../interfaces';

const ALL_CHARACTERS = gql`
  query ($name: String) {
    characters (filter: { name: $name} ){
      results {
        id
        name
        image
      }
    }
  }
`;

const ONE_CHARACTER= gql`

  query ($id: ID!) {
      character (id: $id) {
       id
       name
       image
       type
       gender
       species
      }
  }
`;


export const getAllCharacters = (name: string) => {
const results = useQuery<CharactersQuery, CharsVars>(ALL_CHARACTERS, {variables: {name}});
    return results;
}

export const getOneCharacter = (id: string) => {
  const results = useQuery<CharacterQuery, CharVars>(ONE_CHARACTER, {variables: {id}});
  return results;
}