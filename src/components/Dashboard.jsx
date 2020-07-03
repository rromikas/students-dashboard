import React, { useState } from "react";
import { uid } from "react-uid";
import { BsArrowDownRight, BsArrowUpRight, BsJustify } from "react-icons/bs";
const data = {
  total_students: 135,
  new_students_since_yday: 9,
  new_students_since_last_visit: 42,
  new_students_today_since_last_visit: 4,
  total_offers_sent: 12,
  offers_sent_today: 4,
  num_of_shortlisted: 33,
  num_of_shortlisted_today: -5,
  shortlisted_per_job_roles: [
    { role: "Front End Developer", num_of_shortlisted: 10 },
    { role: "Back End Developer", num_of_shortlisted: 15 },
    { role: "Data Scientist", num_of_shortlisted: 5 },
    { role: "Solutions Architect", num_of_shortlisted: 3 },
  ],
  shortlisted_per_university: [
    { university: "Durham University", num_of_shortlisted: 7 },
    { university: "University of Leeds", num_of_shortlisted: 10 },
    { university: "Newcastle University", num_of_shortlisted: 3 },
    { university: "Oxford University", num_of_shortlisted: 4 },
    { university: "University of Liverpool", num_of_shortlisted: 7 },
    { university: "Sheffield Hallam unviersity ", num_of_shortlisted: 2 },
  ],
  top_five_locations: [
    "Manchester",
    "London",
    "Newcastle",
    "Leeds",
    "Leicester",
  ],
};

const formatFigure = (n) => {
  return (
    <div className="row no-gutters justify-content-center">
      <div className="col-auto mr-2">
        Today {n > 0 ? "+" : ""}
        {n}
      </div>
      <div className="col-auto">
        {n > 0 ? (
          <BsArrowUpRight className="text-primary"></BsArrowUpRight>
        ) : n < 0 ? (
          <BsArrowDownRight className="text-danger"></BsArrowDownRight>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const cardClasses = "col-12 col-md-6 col-lg-3 p-3 text-center";

const Dashboard = ({ setMenu }) => {
  const [job, setJob] = useState(0);
  return (
    <div className="row no-gutters">
      <div className="col-12 px-3 pb-3">
        <div className="row no-gutters align-items-center">
          <BsJustify
            onClick={() => setMenu((prev) => !prev)}
            fontSize="24px"
            className="mr-4 d-block d-md-none col-auto cursor-pointer"
          ></BsJustify>
          <div className="h1 col-auto mb-0">Dashboard</div>
        </div>
      </div>
      <div className={cardClasses}>
        <div className="row no-gutters bg-white p-3 basic-card h-100">
          <div className="col-12 card-title">Total number of students</div>
          <div className="col-12 h2">{data.total_students}</div>
          <div className="col-12 text-center">
            {formatFigure(data.new_students_since_yday)}
          </div>
        </div>
      </div>
      <div className={cardClasses}>
        <div className="row no-gutters bg-white p-3 basic-card h-100">
          <div className="col-12 card-title">New students since last visit</div>
          <div className="col-12 h2">{data.new_students_since_last_visit}</div>
          <div className="col-12">
            {formatFigure(data.new_students_today_since_last_visit)}
          </div>
        </div>
      </div>
      <div className={cardClasses}>
        <div className="row no-gutters bg-white p-3 basic-card h-100">
          <div className="col-12 card-title">Total offers sent</div>
          <div className="col-12 h2">{data.total_offers_sent}</div>
          <div className="col-12">{formatFigure(data.offers_sent_today)}</div>
        </div>
      </div>
      <div className={cardClasses}>
        <div className="row no-gutters bg-white p-3 basic-card h-100">
          <div className="col-12 card-title">Shortlisted students</div>
          <div className="col-12 h2">{data.num_of_shortlisted}</div>
          <div className="col-12">
            {formatFigure(data.num_of_shortlisted_today)}
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-4 col-lg-6 p-3">
        <div className="row no-gutters bg-white basic-card h-100">
          <div className="col py-3 ">
            <div className="row no-gutters px-3 card-title">
              Shortlisted by job roles
            </div>
            {data.shortlisted_per_job_roles.map((x, i) => (
              <div
                key={uid(x)}
                onClick={() => setJob(i)}
                className={`row no-gutters justify-content-between cursor-pointer py-1 px-3${
                  job === i ? " bg-primary text-white" : ""
                }`}
              >
                <div className="col-auto">{x.role}</div>
              </div>
            ))}
          </div>
          <div className="col text-center bg-primary">
            <div className="h1 text-white row no-gutters justify-content-center h-100 align-items-center">
              {data.shortlisted_per_job_roles[job].num_of_shortlisted}
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 p-3 col-12">
        <div className="row no-gutters bg-white p-3 basic-card h-100">
          <div className="col-12 card-title text-center">
            Shortlisted by university
          </div>
          <div className="col-auto mx-auto">
            {data.shortlisted_per_university.map((x) => (
              <div key={uid(x)} className="row no-gutters py-1 mx-auto">
                <div className="col-auto mr-4">{x.num_of_shortlisted}</div>
                <div className="col text-left">{x.university}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-12 p-3">
        <div className="row no-gutters bg-white p-3 basic-card text-center h-100">
          <div className="col-12 card-title">Top 5 preferred locations</div>
          <div className="col-12">
            {data.top_five_locations.map((x) => (
              <div
                key={uid(x)}
                className="row no-gutters justify-content-center py-1"
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
