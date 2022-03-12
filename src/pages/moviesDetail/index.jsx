import { gql, useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { QUERY_MOVIES_DETAIL } from "../../query";
import NavBar from "../../components/navbar";
import ErrorMessage from "../../helper/errorMessage";
import Loading from "../../helper/loading";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      <NavBar currentPage={data.Media.title.native} />
      <img src={data.Media.bannerImage} />
      <div className="m-4 flex">
        <img className="w-72" src={data.Media.coverImage.extraLarge} />
        <div>
          <div className="text-left m-2 font-bold text-2xl">
            {data.Media.title.english}
          </div>
          <div className="flex">
            <div>
              <div>
                <div className="text-left mx-2 font-semibold">Duration</div>
                <div className="text-left mx-2 text-base ">
                  {data.Media.duration} mins
                </div>
              </div>
              <div>
                <div className="text-left mx-2 font-semibold">Release Date</div>
                <div className="text-left mx-2">
                  {getMonthName(data.Media.startDate.year)}{" "}
                  {data.Media.startDate.day}, {data.Media.startDate.year}
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="text-left mx-2 font-semibold">
                  Average Score
                </div>
                <div className="text-left mx-2 text-base ">
                  {data.Media.averageScore} %
                </div>
              </div>
              <div>
                <div className="text-left mx-2 font-semibold">Mean Score</div>
                <div className="text-left mx-2">{data.Media.meanScore} %</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4">
        <div className="text-xl font-semibold">Description</div>
        <div className="text-justify">{data.Media.description}</div>
      </div>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="text-xl font-semibold">Description</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="text-justify">{data.Media.description}</div>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
