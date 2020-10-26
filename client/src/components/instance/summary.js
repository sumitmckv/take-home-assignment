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

const Summary = () => {
  const classes = instanceStyles();
  return (
    <Card className={classes.summaryRoot}>
      <CardContent className={classes.cardContent}>
        <Box className={classes.summary}>
          <Box className={classes.summaryContent}>
            <Typography variant="h6" className={classes.contentTitle}>
              $0.19 / hr
            </Typography>
            <Typography>Running Instance</Typography>
          </Box>
          <Box className={classes.summaryContent}>
            <Typography variant="h6" className={classes.contentTitle}>
              $0.35 / hr
            </Typography>
            <Typography>Stopped Instance</Typography>
          </Box>
        </Box>
        <Box>
          <Typography component="div" variant="h6">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>INR</Grid>
              <Grid item>
                <Switch checked={true} color="primary" name="checkedC" />
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
