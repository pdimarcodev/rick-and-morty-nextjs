import { Box, Grid, Switch } from "@material-ui/core";

interface Props {
  checked: boolean;
  handleSwitch: (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

const SwitchComponent: React.FC<Props> = ({ checked, handleSwitch }) => {
  return (
    <Box height={50}>
      <Grid
        item
        xs={10}
        component="label"
        alignItems="center"
        spacing={1}
        container
      >
        <Grid item>Type</Grid>
        <Grid item>
          <Switch
            checked={checked}
            onChange={handleSwitch}
            color="secondary"
            name="checkedName"
          />
        </Grid>
        <Grid item>Name</Grid>
      </Grid>
    </Box>
  );
};

export default SwitchComponent;
