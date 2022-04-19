import React from "react";
import "../stylesheets/Section1.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="texts">
        <h1 style={{ fontWeight: "bold" }}>Spark E-Cell presents</h1>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Entrepreneurship <br />
          Festival - 2022
        </h1>
        <h1>Bennett University</h1>
        <div className="events">
          <CalendarMonthIcon
            style={{ margin: "0rem 0.5rem", padding: "0rem", fontSize: "32px" }}
          />
          <h1 style={{ margin: "0rem 0rem" }}>28th April</h1>
        </div>
        <div className="events">
          <AccessAlarmIcon
            style={{ margin: "0rem 0.5rem", padding: "0rem", fontSize: "32px" }}
          />
          <h1 style={{ margin: "0rem 0rem" }}>4:30-8:30</h1>
        </div>
        <button className="section_button">Explore</button>
      </div>
    </div>
  );
};

export default Section1;
