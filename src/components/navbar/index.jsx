import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar({ currentPage }) {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky">
      <Grid container alignItems="center">
        <Grid item xs={1}>
          <IconButton size="small" onClick={() => navigate(-1)}>
            <ArrowCircleLeftRoundedIcon fontSize="large" color="secondary" />
          </IconButton>
        </Grid>
        <Grid item xs={10}>
          <Typography className="text-xl">{currentPage}</Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
}
