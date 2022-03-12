import { gql } from "@apollo/client";

export const MOVIES = gql`
  {
    Page {
      media(sort: START_DATE) {
        id
        bannerImage
        title {
          romaji
          english
          native
        }
        type
        duration
        coverImage {
          extraLarge
          large
          medium
        }
        idMal
      }
    }
  }
`;

export const MOVIES_HIGHLIGHT_FAVOURITES = gql`
  {
    Page(perPage: 8) {
      media(sort: FAVOURITES) {
        id
        bannerImage
        title {
          romaji
          english
          native
        }
        type
        duration
        coverImage {
          extraLarge
          large
          medium
        }
        idMal
      }
    }
  }
`;

export const MOVIES_HIGHLIGHT_NEW = gql`
  {
    Page(perPage: 8) {
      media(sort: START_DATE) {
        id
        bannerImage
        title {
          romaji
          english
          native
        }
        type
        duration
        coverImage {
          extraLarge
          large
          medium
        }
        idMal
      }
    }
  }
`;

export const MOVIES_HIGHLIGHT_TRENDING = gql`
  {
    Page(perPage: 8) {
      media(sort: TRENDING) {
        id
        bannerImage
        title {
          romaji
          english
          native
        }
        type
        duration
        coverImage {
          extraLarge
          large
          medium
        }
        idMal
      }
    }
  }
`;

export const MOVIES_DETAIL = gql`
  query ($id: Int) {
    Media(id: $id) {
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
      status
      episodes
      siteUrl
      startDate {
        year
        month
        day
      }
      tags {
        id
        name
      }
      coverImage {
        extraLarge
      }
    }
  }
`;
