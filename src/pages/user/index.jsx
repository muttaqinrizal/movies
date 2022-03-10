import { gql, useQuery } from "@apollo/client";
import React from "react";
import ErrorMessage from "../../helper/errorMessage";
import Loading from "../../helper/loading";

const STAFF = gql`
  {
    Page {
      staff(sort: ID)
    }
  }
`;

export default function Staff() {
  const { data, loading, error } = useQuery(STAFF);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  return (
    <div className="container mx-auto flex flex-col text-center">
      <h1 className="font-bold">Genre</h1>
      {data.Page.staff.map((res) => (
        <div key={res.id} className="border-solid border-2 rounded-sm m-4 p-2">
          {res.name}
        </div>
      ))}
    </div>
  );
}
