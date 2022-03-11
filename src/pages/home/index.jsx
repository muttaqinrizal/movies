import { PermMedia, Person } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [value, setValue] = React.useState(0);
  return (
    <div className="pt-80">
      <div className="text-center text-xl font-bold m-3">Media Playlist</div>
      <div className="flex justify-evenly">
        <Link to="media-list">
          <div className="border-2 p-4 text-center rounded-sm">
            <PermMedia />
            <h1>Media List</h1>
          </div>
        </Link>
        <Link to="user">
          <div className="border-2 px-8 py-4 text-center rounded-sm">
            <Person />
            <h1>Users</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
