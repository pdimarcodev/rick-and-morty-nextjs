import { Box, Grid, Paper, TextField } from "@material-ui/core";

const SearchBox: React.FC<any> = ({ handleChange }) => {
  return (
    <Box >
    <Grid item xs={10}>
    <Paper elevation={6} style={{ padding: "25x" }}>
      <TextField onChange={handleChange} fullWidth label="Search..." />
    </Paper>
    </Grid>
    </Box>
  );
};

export default SearchBox;
