const { makeStyles } = require("@material-ui/core");

const registerStyle = makeStyles({
  cardContainer: {
    marginTop: "15%",
  },
  itemCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    maxWidth: "90%",
    minWidth: 600,
    paddingBottom: 25,
    paddingTop: 25,
    paddingLeft: 50,
    paddingRight: 50,
  },
  cardTitle: {
    alignItems: "center",
  },
  loginInputLabel: {
    marginBottom: 12,
    letterSpacing: 1,
  },
  loginBtn: {
    paddingTop: 12,
    paddingBottom: 12,
    textTransform: "none",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  testTransform: {
    textTransform: "none",
  },
});

export default registerStyle;
