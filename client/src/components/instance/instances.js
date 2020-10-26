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
import instances from "../_data";
import { instanceStyles, InstanceTableCell, InstanceTableRow } from "./styles";

const Instances = () => {
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
                  <InstanceTableCell>{row.costPerHour}</InstanceTableCell>
                  <InstanceTableCell>
                    {row.status === "running" ? (
                      <Typography color="primary">{row.status}</Typography>
                    ) : (
                      <Typography color="error">{row.status}</Typography>
                    )}
                  </InstanceTableCell>
                  <InstanceTableCell align="right">
                    {row.status !== "running" ? (
                      <Link className={classes.link}>start</Link>
                    ) : (
                      <Link color="error" className={classes.link}>
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
