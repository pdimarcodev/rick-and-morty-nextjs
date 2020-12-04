import Head from "next/head";
import Link from "next/link";
import { Grid } from "@material-ui/core";
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
        <Grid item xs={12}>
          <Link href="/">
            <a>
              <img src="/vercel.svg" alt="logo" />
            </a>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        {children}
      </Grid>
    </>
  );
};

export default Layout;
