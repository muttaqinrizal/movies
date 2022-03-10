import React from "react";

export default function ErrorMessage({ error }) {
  return <div>{error.message}</div>;
}
