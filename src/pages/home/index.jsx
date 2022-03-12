import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { QUERY_MOVIES_HIGHLIGHT } from "../../query";
import NavBar from "../../components/navbar";
import ErrorMessage from "../../helper/errorMessage";
import Loading from "../../helper/loading";
import CardMovie from "./components/cardMovie";
import Trending from "./components/trending";
import Favorite from "./components/favorite";
import NewRelease from "./components/new";

export default function Home() {
  return (
    <div className="container mx-auto ">
      <NavBar currentPage="HOME" />
      {/* trending */}
      <div className="flex flex-col">
        <NewRelease />
        <Trending />
        <Favorite />
      </div>
    </div>
  );
}
