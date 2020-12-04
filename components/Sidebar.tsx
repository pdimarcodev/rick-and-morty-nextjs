import { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [page, setPage] = useState("/");

  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    router.push(value);
    setPage(value);
  };

  return (
    <Box height={1}>
      <Grid item>
        <FormControl>
          <RadioGroup
            name="page"
            onChange={handlePageChange}
          >
            <FormControlLabel
              value="/"
              checked={page === "/"}
              control={<Radio />}
              label="Characters"
            />
            <FormControlLabel
              value="/locations"
              checked={page === "/locations"}
              control={<Radio />}
              label="Locations"
            />
            <FormControlLabel
              value="/episodes"
              checked={page === "/episodes"}
              control={<Radio />}
              label="Episodes"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Box>
  );
};

export default Sidebar;
