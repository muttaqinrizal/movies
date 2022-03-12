import { gql, useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import ErrorMessage from "../../helper/errorMessage";
import Loading from "../../helper/loading";
import NavBar from "../../components/navbar";
import { Button, Grid, Input } from "@material-ui/core";
import { QUERY_USER } from "../../query";

export default function User() {
  const [searchFilter, setSearchFilter] = React.useState(null);
  const [executeSearch, { data, loading, error }] = useLazyQuery(QUERY_USER);

  useEffect(() => {
    executeSearch({
      variables: { filter: searchFilter },
    });
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="container mx-auto flex flex-col text-center">
      <NavBar currentPage="List of Users" />
      <Grid container alignItems="center">
        <Grid item xs={8}>
          <Input
            className="m-4"
            placeholder="search"
            type="text"
            onChange={(e) => setSearchFilter(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            color="secondary"
            onClick={() =>
              executeSearch({
                variables: { filter: searchFilter },
              })
            }
          >
            Cari
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={() =>
              executeSearch({
                variables: { filter: null },
              })
            }
          >
            Reset
          </Button>
        </Grid>
      </Grid>
      {data &&
        data.Page.users.map((res) => (
          <div
            key={res.id}
            className="border-solid border-2 rounded-sm m-2 p-2"
          >
            {res.name}
          </div>
        ))}
    </div>
  );
}
