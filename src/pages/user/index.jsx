import { gql, useQuery } from "@apollo/client";
import React from "react";
import ErrorMessage from "../../helper/errorMessage";
import Loading from "../../helper/loading";
import NavBar from "../../components/navbar";

const USER = gql`
  {
    Page {
      users(sort: ID) {
        id
        name
      }
    }
  }
`;

export default function Staff() {
  const { data, loading, error } = useQuery(USER);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  return (
    <div className="container mx-auto flex flex-col text-center">
      <NavBar currentPage="List of Users" />
      {data.Page.users.map((res) => (
        <div key={res.id} className="border-solid border-2 rounded-sm m-2 p-2">
          {res.name}
        </div>
      ))}
    </div>
  );
}
