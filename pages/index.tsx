import { CircularProgress } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useState } from "react";
import Head from "next/head";
import CharList from "../components/CharList";
import SearchBox from "../components/SearchBox";
import Switch from '../components/Switch';
import { getAllCharacters } from "../resolvers/Characters";
//import styles from "../styles/Home.module.css";

export default function Home() {
  const [searchBy, setSearchBy] = useState("name");
  const [searchField, setSearchField] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  

  const { data, loading, error } = getAllCharacters(searchBy, searchField, currentPage);
  console.log(error);

  const characters = data?.characters.results;
  const totalPages = data?.characters.info.pages;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > 2 || value === "") {
      setSearchField(value);
      setCurrentPage(1);
      } 
    //console.log(value);
  };

  const handlePagination = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const handleSwitch = () => {
    setSearchBy(searchBy==="name" ? "type" : "name");
  }

  return (
    <>
      <Head>
        <title>Rick and Morty</title>
      </Head>

      <Switch
        checked={searchBy==="name"} 
        handleSwitch={handleSwitch}
      />

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

      <Pagination
        boundaryCount={3}
        count={totalPages}
        onChange={handlePagination}
        page={currentPage}
        showFirstButton={true}
        showLastButton={true}
      />
    </>
  );
}
