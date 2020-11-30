import { Grid, Switch } from "@material-ui/core";

interface Props {
  checked: boolean;
  handleSwitch: (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

const SwitchComponent: React.FC<Props> = ({ checked, handleSwitch }) => {
  return (
    <Grid component="label" container alignItems="center" spacing={1}>
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
  );
};

export default SwitchComponent;
