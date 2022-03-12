import { AppBar } from "@material-ui/core";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Person } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function NavBar({ currentPage }) {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky">
      <Grid container alignItems="center">
        <Grid item xs={1}>
          {currentPage != "HOME" ? (
            <IconButton size="small" onClick={() => navigate(-1)}>
              <ArrowCircleLeftRoundedIcon fontSize="large" color="secondary" />
            </IconButton>
          ) : (
            <Link to="user">
              <IconButton size="small">
                <Person fontSize="large" color="secondary" />
              </IconButton>
            </Link>
          )}
        </Grid>
        <Grid item xs={10}>
          <Typography className="text-center">{currentPage}</Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
}
