import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  layout: {
    backgroundColor: theme.palette.text.white,
    width: 500,
    margin: "auto",
    minHeight: "100vh",
    paddingBottom: 15,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));
export default function Layout(props) {
  const { children } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.layout} elevation={6}>
      {children}
    </Paper>
  );
}
