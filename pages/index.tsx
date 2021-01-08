import { Grid } from "@material-ui/core";
import CharList from "../components/CharList";
import SearchBox from "../components/SearchBox";
import SwitchComponent from "../components/Switch";
import PaginationComponent from "../components/Pagination";
import Spinner from '../components/Spinner';
import { getAllCharacters } from "../resolvers/Characters";
import { useSearch } from '../hooks/search';
import { useSwitch } from "../hooks/switch";
import { usePagination } from "../hooks/pagination";

export default function Home() {
  const search = useSearch();
  const switchToggle = useSwitch();
  const pagination = usePagination(search.setCurrentPage);

  const { data, loading, error } = getAllCharacters(
    switchToggle.searchBy,
    search.searchField,
    search.currentPage
  );

  const characters = data?.characters.results;
  const totalPages = data?.characters.info.pages;

  return (
    <Grid xs={10} direction="column" container>
      <SearchBox
       handleChange={search.handleChange} 
       handleClear={search.handleClear}
       />

      <SwitchComponent
        checked={switchToggle.searchBy === "name"}
        handleSwitch={switchToggle.handleSwitch}
        secondSearch={"Type"}
      />

      {loading ? (
        <Spinner />
      ) : error ? (
        <p>Error.</p>
      ) : characters && characters.length > 0 ? (
        <Grid item>
          <CharList characters={characters} />
          <PaginationComponent 
            totalPages={totalPages}
            currentPage={search.currentPage}
            handlePagination={pagination.handlePagination}
          />
        </Grid>
      ) : (
        <p>No data.</p>
      )}
    </Grid>
  );
}
