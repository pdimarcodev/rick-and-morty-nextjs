import { useRef } from "react";
import { Box, Grid, Paper, TextField, Button } from "@material-ui/core";

const SearchBox: React.FC<any> = ({ handleChange, handleClear }) => {
  
  let textInput: any = useRef(null);

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
                <Button
                  onClick={() => {
                    textInput.current.value = "";
                    handleClear();
                  }}
                >
                  <span>X</span>
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
