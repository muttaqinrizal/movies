import { gql, useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { QUERY_MOVIES } from "../../query";
import NavBar from "../../components/navbar";
import ErrorMessage from "../../helper/errorMessage";
import Loading from "../../helper/loading";
import CardMovie from "../home/components/cardMovie";

export default function Movies() {
  const { data, loading, error } = useQuery(QUERY_MOVIES);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  return (
    <div className="container">
      <NavBar currentPage="MOVIES" />
      <div className="flex justify-around flex-wrap mt-4">
        {data &&
          data.Page.media.map((res) => (
            <Link to={`/movies/${res.id}`} key={res.id}>
              <div className="h-40 mb-12">
                <CardMovie
                  title={
                    res.title.english ? res.title.english : res.title.romaji
                  }
                  image={res.coverImage.large}
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
