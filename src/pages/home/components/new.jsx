import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../../../helper/errorMessage";
import Loading from "../../../helper/loading";
import { QUERY_MOVIES_HIGHLIGHT_NEW } from "../../../query";
import CardMovie from "./cardMovie";

export default function NewRelease() {
  const { data, loading, error } = useQuery(QUERY_MOVIES_HIGHLIGHT_NEW);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      <div className="flex justify-between m-2">
        <div className="font-bold">NEW RELEASE!</div>
        <Link to="movies">
          <div className="text-semibold text-blue-600">View All</div>
        </Link>
      </div>
      <div className="flex justify-around flex-wrap">
        {data.Page.media.map((res) => (
          <Link to={`/movies/${res.id}`} key={res.id}>
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
