import { Box, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

interface Props {
    totalPages: number | undefined;
    currentPage: number;
    handlePagination: (e: React.ChangeEvent<unknown>, page: number) => void;
}

const PaginationComponent: React.FC<Props> = ({totalPages, currentPage, handlePagination}) => {
  return (
    <Box mt={2} mb={2}>
    <Grid item>
      <Pagination
        boundaryCount={3}
        count={totalPages}
        onChange={handlePagination}
        page={currentPage}
        showFirstButton={true}
        showLastButton={true}
      />
    </Grid>
  </Box>
  )};

  export default PaginationComponent;

