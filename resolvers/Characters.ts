import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import { CharactersQuery } from '../interfaces';

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

interface CharsVars {
  name: string;
}

export const getAllCharacters = (name: string) => {
const results = useQuery<CharactersQuery, CharsVars>(ALL_CHARACTERS, {variables: {name}});
    return results;
}
