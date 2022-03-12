import { gql } from "@apollo/client";

export const MOVIES = gql`
  {
    Page {
      media(sort: ID) {
        id
        bannerImage
        title {
          english
          native
        }
        type
        duration
        bannerImage
        idMal
      }
    }
  }
`;

export const MOVIES_DETAIL = gql`
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
      averageScore
      meanScore
      description
      startDate {
        year
        month
        day
      }
      coverImage {
        extraLarge
      }
    }
  }
`;
