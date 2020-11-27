import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import { CharactersQuery } from '../interfaces';

const ALL_CHARACTERS = gql`
  query allCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const getAllCharacters = () => {
const results = useQuery<CharactersQuery>(ALL_CHARACTERS);
    return results;
}
