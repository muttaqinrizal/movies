import { gql, useQuery } from "@apollo/client";
import React from "react";
import NavBar from "../../components/navbar";
import ErrorMessage from "../../helper/errorMessage";
import Loading from "../../helper/loading";

export default function MediaList() {
  const MEDIA_LIST = gql`
    {
      Page {
        mediaList(userId: 10) {
          id
          score
          media {
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
    }
  `;
  const { data, loading, error } = useQuery(MEDIA_LIST);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  return (
    <div className="container mx-auto flex flex-col text-center">
      <NavBar currentPage="Media" />
      {data.Page.mediaList.map((res) => (
        <div key={res.id} className="border-solid border-2 rounded-sm m-4 p-2">
          <p>{res.media.title.english}</p>
          <p>{res.media.title.native}</p>
          <p>{res.media.description}</p>
        </div>
      ))}
    </div>
  );
}
