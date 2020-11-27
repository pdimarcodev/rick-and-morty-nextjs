import React from "react";
import { Paper, TextField } from "@material-ui/core";

const SearchBox: React.FC<any> = ({ handleChange }) => {
  return (
    <Paper elevation={6} style={{ padding: "25x" }}>
      <TextField onChange={handleChange} fullWidth label="Search..." />
    </Paper>
  );
};

export default SearchBox;
