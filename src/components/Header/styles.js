import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginRight: 40,
  },
}));

export default useStyles;
