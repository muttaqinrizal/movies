import React from "react";
import NavBar from "../../../components/navbar";

export default function UserList({ users, onLoadMore }) {
  const handleScroll = ({ currentTarget }, onLoadMore) => {
    if (
      currentTarget.scrollTop + currentTarget.clientHeight >=
      currentTarget.scrollHeight
    ) {
      onLoadMore();
    }
  };
  return (
    <div className="container mx-auto flex flex-col text-center">
      <NavBar currentPage="List of Users" />
      <div onScroll={(e) => handleScroll(e, onLoadMore)}>
        {users.map((res) => (
          <div
            key={res.id}
            className="border-solid border-2 rounded-sm m-2 p-2"
          >
            {res.name}
          </div>
        ))}
      </div>
    </div>
  );
}
