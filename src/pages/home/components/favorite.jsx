import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../../../helper/errorMessage";
import Loading from "../../../helper/loading";
import {
  QUERY_MOVIES_HIGHLIGHT,
  QUERY_MOVIES_HIGHLIGHT_FAVOURITES,
} from "../../../query";
import CardMovie from "./cardMovie";

export default function Favorite() {
  const { data, loading, error } = useQuery(QUERY_MOVIES_HIGHLIGHT_FAVOURITES);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="my-2">
      <div className="flex justify-between m-2">
        <div className="font-bold">FAVOURITES NOW</div>
        <Link to="user">
          <div>View All</div>
        </Link>
      </div>
      <div className="flex justify-around flex-wrap">
        {data.Page.media.map((res) => (
          <Link to={`/movies/${res.idMal}`} key={res.id}>
            <div className="h-40 mb-12">
              <CardMovie
                title={res.title.english ? res.title.english : res.title.romaji}
                image={res.coverImage.large}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
