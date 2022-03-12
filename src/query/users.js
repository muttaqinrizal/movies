import { gql } from "@apollo/client";

export const USER = gql`
  query ($filter: String) {
    Page {
      users(sort: ID, search: $filter) {
        id
        name
      }
    }
  }
`;
