import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { QUERY_MOVIES_DETAIL } from "../../query";
import NavBar from "../../components/navbar";
import ErrorMessage from "../../helper/errorMessage";
import Loading from "../../helper/loading";

export default function MoviesDetail() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(QUERY_MOVIES_DETAIL, {
    variables: { id },
  });
  const getMonthName = (month) => {
    const dates = new Date();
    dates.setMonth(month - 1);
    const monthName = dates.toLocaleString("default", { month: "long" });
    return monthName;
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="container mx-auto flex flex-col">
      <NavBar
        currentPage={data.Media.title.english ?? data.Media.title.romaji}
      />
      <img
        className={`${data.Media.bannerImage ? "h-56" : ""} w-auto`}
        src={data.Media.bannerImage ?? null}
      />
      <div className="m-4 flex">
        <img
          className={`${data.Media.bannerImage ? "-mt-10" : ""} w-72 `}
          src={data.Media.coverImage.extraLarge}
        />
        <div>
          <div className="text-left m-2 font-bold text-2xl">
            {data.Media.title.english ?? data.Media.title.romaji}
          </div>
          <div className="flex">
            <div>
              <div>
                <div className="text-left mx-2 font-semibold">Duration</div>
                <div className="text-left mx-2 text-base ">
                  {data.Media.duration ?? 0} mins
                </div>
              </div>
              <div className="my-2">
                <div className="text-left mx-2 font-semibold">Release Date</div>
                <div className="text-left mx-2">
                  {getMonthName(data.Media.startDate.year)}{" "}
                  {data.Media.startDate.day}, {data.Media.startDate.year}
                </div>
              </div>
              <div>
                <div className="text-left mx-2 font-semibold">Status</div>
                <div
                  className={`text-center mx-2 text-base rounded-lg ${
                    data.Media.status === "NOT_YET_RELEASED" ? "w-36" : "w-24"
                  } text-white border-2 ${
                    data.Media.status !== "FINISHED"
                      ? "bg-yellow-600"
                      : "bg-green-600"
                  }`}
                >
                  {data.Media.status ?? 0}
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="text-left mx-2 font-semibold">
                  Average Score
                </div>
                <div className="text-left mx-2 text-base ">
                  {data.Media.averageScore ?? 0} %
                </div>
              </div>
              <div className="my-2">
                <div className="text-left mx-2 font-semibold">Mean Score</div>
                <div className="text-left mx-2">
                  {data.Media.meanScore ?? 0} %
                </div>
              </div>
              <div>
                <div className="text-left mx-2 font-semibold">Episode</div>
                <div className="text-left mx-2">{data.Media.episodes ?? 0}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4">
        <div className="text-xl font-semibold">Description</div>
        <div className="text-justify">{data.Media.description}</div>
      </div>
      <div className="mx-4 mt-2">
        <div className="text-xl font-semibold">Tags</div>
        <div className="flex">
          {data.Media.tags.map((res) => (
            <div
              key={res.id}
              className="text-white rounded-md bg-gray-500 px-2"
            >
              {res.name}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-4 mt-2">
        <div className="text-xl font-semibold">Site URL</div>
        <a href={data.Media.siteUrl} target="_blank" className="text-justify">
          {data.Media.siteUrl}
        </a>
      </div>
    </div>
  );
}
