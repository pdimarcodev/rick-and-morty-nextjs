import { Grid, CircularProgress } from "@material-ui/core";
import { useState } from "react";
import CharList from "../components/CharList";
import SearchBox from "../components/SearchBox";
import SwitchComponent from "../components/Switch";
import PaginationComponent from "../components/Pagination";
import { getAllCharacters } from "../resolvers/Characters";
//import styles from "../styles/Home.module.css";

export default function Home() {
  const [searchBy, setSearchBy] = useState("name");
  const [searchField, setSearchField] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, loading, error } = getAllCharacters(
    searchBy,
    searchField,
    currentPage
  );
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
    setSearchBy(searchBy === "name" ? "type" : "name");
  };

  return (
    <Grid xs={10} direction="column" container>
      <SearchBox handleChange={handleChange} />

      <SwitchComponent
        checked={searchBy === "name"}
        handleSwitch={handleSwitch}
      />

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <p>Error.</p>
      ) : characters && characters.length > 0 ? (
        <Grid item>
          <CharList characters={characters} />
          <PaginationComponent 
            totalPages={totalPages}
            currentPage={currentPage}
            handlePagination={handlePagination}
          />
        </Grid>
      ) : (
        <p>No data.</p>
      )}
    </Grid>
  );
}
