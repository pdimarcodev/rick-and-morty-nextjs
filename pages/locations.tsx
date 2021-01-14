import { Grid } from "@material-ui/core";
import { LocationList, ErrorComponent, SearchBox, SwitchComponent, PaginationComponent, Spinner } from '../components';
import { getAllLocations } from "../resolvers/Locations";
import { useSearch } from "../hooks/search";
import { useSwitch } from "../hooks/switch";
import { usePagination } from "../hooks/pagination";

const Locations: React.FC = () => {
  const secondSearch = "type";

  const search = useSearch();
  const switchToggle = useSwitch(secondSearch);
  const pagination = usePagination(search.setCurrentPage);

  const { data, loading, error } = getAllLocations(
    switchToggle.searchBy,
    search.searchField,
    search.currentPage
  );

  const locations = data?.locations.results;
  const totalPages = data?.locations.info.pages;

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
      ) : locations && locations.length > 0 ? (
        <Grid item>
          <LocationList locations={locations} />
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
};

export default Locations;
