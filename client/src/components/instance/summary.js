import {
  Box,
  Card,
  CardContent,
  Grid,
  Switch,
  Typography,
} from "@material-ui/core";
import React from "react";
import { instanceStyles } from "./styles";

const Summary = ({ instances, isUsd, toggleCurrency }) => {
  const classes = instanceStyles();
  const summary = instances.reduce(
    (summary, instance) => {
      if (instance.status === "running") {
        summary.running += isUsd
          ? instance.costPerHour
          : instance.costPerHourInr;
      } else {
        summary.stopped += isUsd
          ? instance.costPerHour
          : instance.costPerHourInr;
      }
      return summary;
    },
    { running: 0, stopped: 0 }
  );
  return (
    <Card className={classes.summaryRoot}>
      <CardContent className={classes.cardContent}>
        <Box className={classes.summary}>
          <Box className={classes.summaryContent}>
            <Typography variant="h6" className={classes.contentTitle}>
              {(isUsd ? "$" : "₹") + summary.running.toFixed(2)} / hr
            </Typography>
            <Typography>Running Instance</Typography>
          </Box>
          <Box className={classes.summaryContent}>
            <Typography variant="h6" className={classes.contentTitle}>
              {(isUsd ? "$" : "₹") + summary.stopped.toFixed(2)} / hr
            </Typography>
            <Typography>Stopped Instance</Typography>
          </Box>
        </Box>
        <Box>
          <Typography component="div" variant="h6">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>INR</Grid>
              <Grid item>
                <Switch
                  checked={isUsd}
                  onChange={toggleCurrency}
                  color="primary"
                  name="checkedC"
                />
              </Grid>
              <Grid item>USD</Grid>
            </Grid>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Summary;
