import Head from "next/head";
import Link from "next/link";
import { Box, Grid } from "@material-ui/core";
import Sidebar from "../components/Sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
      </Head>

      <Grid container xs={12} max-width="1200">
        {/* <Box width="200"> */}
        <Grid item xs={12}>
          <Link href="/">
            <a>
              <img src="/rick-and-morty.svg" alt="logo" 
              width="90%" height="150vh"
              />
            </a>
          </Link>
        </Grid>
          {/* </Box> */}
        <Box ml="5">
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
        </Box>
        {children}
      </Grid>
    </>
  );
};

export default Layout;
