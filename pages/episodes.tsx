import { Grid } from "@material-ui/core";
import { EpisodeList, ErrorComponent, SearchBox, SwitchComponent, PaginationComponent, Spinner } from '../components';
import { getAllEpisodes } from "../resolvers/Episodes";
import { useSearch } from "../hooks/search";
import { useSwitch } from "../hooks/switch";
import { usePagination } from "../hooks/pagination";

const Episodes: React.FC = () => {
  const secondSearch = "episode";

  const search = useSearch();
  const switchToggle = useSwitch(secondSearch);
  const pagination = usePagination(search.setCurrentPage);

  const { data, loading, error } = getAllEpisodes(
    switchToggle.searchBy,
    search.searchField,
    search.currentPage
  );

  const episodes = data?.episodes.results;
  const totalPages = data?.episodes.info.pages;

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
      ) : episodes && episodes.length > 0 ? (
        <Grid item>
          <EpisodeList episodes={episodes} />
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

export default Episodes;
