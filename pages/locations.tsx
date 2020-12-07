import { Grid, CircularProgress } from "@material-ui/core";
import { useState } from "react";
import LocationList from "../components/LocationList";
import SearchBox from "../components/SearchBox";
import SwitchComponent from "../components/Switch";
import PaginationComponent from "../components/Pagination";
import { getAllLocations } from "../resolvers/Locations";
//import styles from "../styles/Home.module.css";

const Locations: React.FC = () => {
  const [searchBy, setSearchBy] = useState("name");
  const [searchField, setSearchField] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, loading, error } = getAllLocations(
    searchBy,
    searchField,
    currentPage
  );
  console.log(error);

  const locations = data?.locations.results;
  const totalPages = data?.locations.info.pages;

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

  const handleClear = () => {
    setSearchField("");
    setCurrentPage(1);
  }

  return (
    <Grid xs={10} direction="column" container>
      <SearchBox 
      handleChange={handleChange}
      handleClear={handleClear}
      />

      <SwitchComponent
        checked={searchBy === "name"}
        handleSwitch={handleSwitch}
        secondSearch={"Type"}
      />

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <p>Error.</p>
      ) : locations && locations.length > 0 ? (
        <Grid item>
          <LocationList locations={locations} />
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


export default Locations;