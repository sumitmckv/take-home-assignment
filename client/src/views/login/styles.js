const { makeStyles } = require("@material-ui/core");

const loginStyle = makeStyles({
  cardContainer: {
    height: "100vh",
    width: "100%",
  },
  itemCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

export default loginStyle;
