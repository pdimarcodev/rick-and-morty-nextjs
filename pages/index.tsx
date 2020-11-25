import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

import Head from "next/head";
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

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>:( an error happened</p>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data?.characters.results.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
}
