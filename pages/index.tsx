import { gql } from "@apollo/client";
import { CircularProgress } from "@material-ui/core";
import { useState, useEffect } from "react";
import Head from "next/head";
import React from "react";
import CharList from "../components/CharList";
import SearchBox from "../components/SearchBox";
import { getAllCharacters } from "../resolvers/Characters";
//import styles from "../styles/Home.module.css";

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
  id: number;
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
  const [searchField, setSearchField] = useState<string>("");

  const { data, loading, error } = getAllCharacters(searchField);
  const characters = data?.characters.results;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    if (value.length > 2 || value == '') {
      setSearchField(value);
    }
    //console.log(value);
  };

  return (
    <>
      <Head>
        <title>Rick and Morty</title>
      </Head>

      <SearchBox handleChange={handleChange} />
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <p>Error.</p>
      ) : characters && characters.length > 0 ? (
        <CharList characters={characters} />
      ) : (
        <p>No data.</p>
      )}
    </>
  );
}
