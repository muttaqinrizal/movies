import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { QUERY_MOVIES } from "../../api";
import NavBar from "../../components/navbar";
import ErrorMessage from "../../helper/errorMessage";
import Loading from "../../helper/loading";

export default function Movies() {
  const { data, loading, error } = useQuery(QUERY_MOVIES);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  return (
    <div className="container mx-auto flex flex-col ">
      <NavBar currentPage="Movies" />
      {data.Page.media.map((res) => (
        <Link to={`/movies/${res.idMal}`}>
          <div
            key={res.id}
            className="border-solid border-2 rounded-sm m-2 p-2 "
          >
            <img className="h-36 w-full" src={res.bannerImage} />
            <p className="font-medium">
              {res.title.native ? res.title.native : "-"}
            </p>
            <div className="flex justify-between">
              <p className="text-sm">Genre : {res.type}</p>
              <p className="text-sm">Duration : {res.duration} mins</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
