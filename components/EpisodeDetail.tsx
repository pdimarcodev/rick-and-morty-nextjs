import { Paper, Typography, CircularProgress } from "@material-ui/core";

import { getOneEpisode } from "../resolvers/Episodes";

const EpisodeDetail: React.FC<any> = ({ id }) => {
  const { data, loading, error } = getOneEpisode(id);
  const episode = data?.episode;

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <p>Error.</p>
      ) : episode ? (
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">
            <b>{episode.name}</b>
          </Typography>
          <Typography variant="subtitle2">
            <b>Release Date: {episode.air_date}</b>
          </Typography>
          <Typography variant="subtitle2">
            <b>Episode: {episode.episode}</b>
          </Typography>
          <Typography variant="subtitle1">
            <b>Characters:</b>
          </Typography>
          {episode.characters.slice(0, 5).map((character) => (
            <Typography variant="subtitle2">
              <b>{character.name}</b>
            </Typography>
          ))}
        </Paper>
      ) : (
        <p>No data.</p>
      )}
    </>
  );
};

export default EpisodeDetail;
