import { Grid } from "@material-ui/core";
import { CharList, ErrorComponent, SearchBox, SwitchComponent, PaginationComponent, Spinner } from '../components';
import { getAllCharacters } from "../resolvers/Characters";
import { useSearch } from '../hooks/search';
import { useSwitch } from "../hooks/switch";
import { usePagination } from "../hooks/pagination";

export default function Home() {
  const secondSearch = "type";

  const search = useSearch();
  const switchToggle = useSwitch(secondSearch);
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
        secondSearch={secondSearch}
      />

      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorComponent error={error} />
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
