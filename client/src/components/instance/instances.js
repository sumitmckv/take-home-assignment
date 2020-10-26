import {
  Card,
  CardContent,
  Link,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { instanceStyles, InstanceTableCell, InstanceTableRow } from "./styles";

const Instances = ({ instances, isUsd, onAction }) => {
  const classes = instanceStyles();

  return (
    <Card className={classes.root} borderRadius={10}>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          Instances
        </Typography>
        <TableContainer>
          <Table className={classes.table} aria-label="instance table">
            <TableHead>
              <TableRow>
                <InstanceTableCell>ID</InstanceTableCell>
                <InstanceTableCell align="left">
                  Instance Name
                </InstanceTableCell>
                <InstanceTableCell>Cost Per Hour</InstanceTableCell>
                <InstanceTableCell>Status</InstanceTableCell>
                <InstanceTableCell align="right">Action</InstanceTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {instances.map((row) => (
                <InstanceTableRow key={row.id}>
                  <InstanceTableCell scope="row">{row.id}</InstanceTableCell>
                  <InstanceTableCell align="left">{row.name}</InstanceTableCell>
                  <InstanceTableCell>
                    {(isUsd ? "$ " : "₹ ") +
                      (isUsd
                        ? row.costPerHour.toFixed(2)
                        : row.costPerHourInr.toFixed(2))}
                  </InstanceTableCell>
                  <InstanceTableCell>
                    {row.status === "running" ? (
                      <Typography color="primary">{row.status}</Typography>
                    ) : (
                      <Typography color="error">{row.status}</Typography>
                    )}
                  </InstanceTableCell>
                  <InstanceTableCell align="right">
                    {row.status !== "running" ? (
                      <Link
                        className={classes.link}
                        onClick={() => onAction(row.id, "start")}
                      >
                        start
                      </Link>
                    ) : (
                      <Link
                        color="error"
                        className={classes.link}
                        onClick={() => onAction(row.id, "stop")}
                      >
                        stop
                      </Link>
                    )}
                  </InstanceTableCell>
                </InstanceTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default Instances;
