import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../../../helper/errorMessage";
import Loading from "../../../helper/loading";
import { QUERY_MOVIES_HIGHLIGHT_TRENDING } from "../../../query";
import CardMovie from "./cardMovie";

export default function Trending() {
  const { data, loading, error } = useQuery(QUERY_MOVIES_HIGHLIGHT_TRENDING);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="my-2">
      <div className="flex justify-between m-2">
        <div className="font-bold">TRENDING NOW</div>
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
