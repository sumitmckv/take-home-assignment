const {
  withStyles,
  makeStyles,
  TableCell,
  TableRow,
} = require("@material-ui/core");

const instanceStyles = makeStyles((theme) => ({
  summaryRoot: {
    marginTop: 100,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summary: {
    display: "flex",
  },
  summaryContent: {
    marginLeft: theme.spacing(3),
    justifyContent: "space-around",
  },
  contentTitle: {
    marginBottom: theme.spacing(1),
  },
  root: {
    marginTop: 50,
  },
  table: {
    minWidth: 700,
    borderCollapse: "separate",
    borderSpacing: "0 .2em",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  link: {
    cursor: "pointer",
    textDecoration: "underline",
  },
  gridItem: {
    justifyContent: 'flex-end',
  },
  [theme.breakpoints.down('sm')]: {
    gridItem: {
        justifyContent: 'center',
    },
  },
}));

const InstanceTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#B8D5D1",
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const InstanceTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "#E5E4E4",
    },
    "&:nth-of-type(odd)": {
      backgroundColor: "#E9F0F0",
    },
  },
}))(TableRow);

const cardDefaultProps = {
  bgcolor: "background.paper",
  border: 1,
  borderColor: "text.primary",
};

export {
  instanceStyles,
  InstanceTableCell,
  InstanceTableRow,
  cardDefaultProps,
};
