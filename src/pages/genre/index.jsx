import { gql, useQuery } from "@apollo/client";
import React from "react";
import ErrorMessage from "../../helper/errorMessage";
import Loading from "../../helper/loading";

const GENRE = gql`
  {
    GenreCollection
  }
`;

export default function Genre() {
  const { data, loading, error } = useQuery(GENRE);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  return (
    <div className="container mx-auto flex flex-col text-center">
      <h1 className="font-bold">Genre</h1>
      {data.GenreCollection.map((res) => (
        <div key={res} className="border-solid border-2 rounded-sm m-4 p-2">
          {res}
        </div>
      ))}
    </div>
  );
}
