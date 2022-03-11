import { gql, useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navbar";
import ErrorMessage from "../../helper/errorMessage";
import Loading from "../../helper/loading";

const MOVIES_DETAIL = gql`
  query ($id: Int) {
    Media(idMal: $id) {
      id
      bannerImage
      title {
        romaji
        english
        native
        userPreferred
      }
      type
      duration
      coverImage {
        large
      }
    }
  }
`;

export default function MoviesDetail() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(MOVIES_DETAIL, {
    variables: { id },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="container mx-auto flex flex-col text-center">
      <NavBar currentPage="Movies" />
      <div className="p-4 flex">
        <img src={data.Media.coverImage.large} />
        <div className="text-left mx-2 font-bold">
          {data.Media.title.english}
        </div>
      </div>
    </div>
  );
}
