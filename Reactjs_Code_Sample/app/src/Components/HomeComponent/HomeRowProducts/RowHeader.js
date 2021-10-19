import React from "react";
import { makeStyles } from "@material-ui/core";
import { AccessAlarm } from "@material-ui/icons";
import Countdown from "react-countdown";

const styles = makeStyles({
  icon: {
    color: "black",
    fontSize: "30px",
    marginLeft: "10px",
  },
});

const RowHeader = ({ headerTag, timeShow }) => {
  const classes = styles();

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <h5 className="mt-2 text-secondary">
        {" "}
        {hours}: {minutes}: {seconds} Left
      </h5>
    );
  };

  return (
    <div className="d-flex algin-items-center justify-content-between my-2 shadow-sm p-2">
      <div className="d-flex align-items-center">
        <h4 className="fw-bold">{headerTag}</h4>
        {timeShow && <AccessAlarm className={classes.icon} />}
        <p className="my-auto ms-2">
          {timeShow && (
            <Countdown
              date={Date.now() + 24 * 60 * 60 * 1000}
              renderer={renderer}
            />
          )}
        </p>
      </div>

      <button className="btn btn-primary me-5">VIEW ALL</button>
    </div>
  );
};

export default RowHeader;
