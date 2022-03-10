import { gql, useQuery } from "@apollo/client";
import React from "react";
import ErrorMessage from "../../helper/errorMessage";
import Loading from "../../helper/loading";

export default function Media() {
  const MEDIA = gql`
    {
      Page {
        media(sort: ID) {
          id
          title {
            romaji
            english
            native
            userPreferred
          }
          description
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(MEDIA);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  return (
    <div className="container mx-auto flex flex-col text-center">
      <h1 className="font-bold">Media</h1>
      {data.Page.media.map((res) => (
        <div key={res.id} className="border-solid border-2 rounded-sm m-4 p-2">
          <p>{res.title.english}</p>
          <p>{res.title.native}</p>
          <p>{res.description}</p>
        </div>
      ))}
    </div>
  );
}
