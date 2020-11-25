import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

import Head from "next/head";
import CharList from "../components/CharList";
import styles from "../styles/Home.module.css";

const CharsQueryDocument = gql`
  query($page: Int) {
    characters(page: $page) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        image
        type
        gender
        species
      }
    }
  }
`;

const ALL_CHARACTERS = gql`
  query allCharacters {
    characters {
      results {
        id
        name
      }
    }
  }
`;

interface Character {
  id: string;
  name: string;
  image: string;
  type: string;
  gender: string;
  species: string;
}

interface CharactersQuery {
  characters: {
    results: Character[];
  };
}

interface Pages {
  pages: number;
  next: number;
  prev: number;
}

interface CharsVars {
  page: Pages;
}

export default function Home() {
  const { data, loading, error } = useQuery<CharactersQuery>(ALL_CHARACTERS);
  const characters = data?.characters.results;

  return (
    <div>
      <Head>
        <title>Rick and Morty</title>
      </Head>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error.</p>
      ) : characters && characters.length > 0 ? (
        <CharList characters={characters} />
      ) : (
        <p>No characters loaded.</p>
      )}
    </div>
  );
}
