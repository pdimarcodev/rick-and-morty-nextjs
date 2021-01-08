import { useRef } from "react";
import { Box, Grid, Paper, TextField, Button } from "@material-ui/core";

interface Props {
  handleChange: ((e: React.ChangeEvent<HTMLInputElement>) => void);
  handleClear: () => void;
}

const SearchBox: React.FC<Props> = ({ handleChange, handleClear }) => {
  let textInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (textInput.current !== null) {
      textInput.current.value = "";
    }
    handleClear();
  };

  return (
    <Box>
      <Grid item xs={10}>
        <Paper elevation={6} style={{ padding: "25x" }}>
          <TextField
            type="text"
            onChange={handleChange}
            inputRef={textInput}
            fullWidth
            label="Search..."
            InputProps={{
              endAdornment: (
                <Button onClick={handleClick}>
                  <span>&#10761;</span>
                </Button>
              ),
            }}
          />
        </Paper>
      </Grid>
    </Box>
  );
};

export default SearchBox;
