import { Paper, Typography, CircularProgress } from "@material-ui/core";

import { getOneLocation } from "../resolvers/Locations";

const locationDetail: React.FC<any> = ({ id }) => {
  const { data, loading, error } = getOneLocation(id);
  const location = data?.location;

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <p>Error.</p>
      ) : location ? (
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1">
            <b>Name: {location.name}</b>
          </Typography>
          <Typography variant="subtitle2">
            <b>Type: {location.type}</b>
          </Typography>
          <Typography variant="subtitle2">
            <b>Dimension: {location.dimension}</b>
          </Typography>
          <Typography variant="subtitle1">
            <b>Residents:</b>
          </Typography>
          {location.residents.slice(0, 5).map((resident) => (
            <Typography variant="subtitle2">
              <b>{resident.name}</b>
            </Typography>
          ))}
        </Paper>
      ) : (
        <p>No data.</p>
      )}
    </>
  );
};

export default locationDetail;
