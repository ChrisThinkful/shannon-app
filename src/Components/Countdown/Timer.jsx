import React, { useState, useEffect } from "react";
import moment from "moment";
import { TimerLeaf } from "./TimerLeaf";
moment().format();

// const targetTime = moment("2025-04-28");

export const Countdown = ({ date }) => {
  const targetTime = moment(date);
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  let timeArray = [
    {
      interval: "months",
      time: timeBetween.months().toString(),
    },
    {
      interval: "weeks",
      time: timeBetween.weeks().toString(),
    },
    {
      interval: "days",
      time: timeBetween.days().toString(),
    },
    {
      interval: "hours",
      time: timeBetween.hours().toString(),
    },
    {
      interval: "minutes",
      time: timeBetween.minutes().toString(),
    },
    {
      interval: "seconds",
      time: timeBetween.seconds().toString(),
    },
  ];

  useEffect(() => {
    console.log(timeArray.months);
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <div className="flex justify-center flex-col gap-4 pb-5">
        <h1 className="text-6xl font-serif font-bold leading-8 text-[#827462] text-center">
          Baby arrives in:
        </h1>
      </div>
      <div className="flex gap-2 items-center justify-center">
        {timeArray
          //   .filter((e) => e.interval == "days" || e.interval == "seconds")
          .map((item, i) => (
            <TimerLeaf key={i} item={item} />
          ))}
      </div>
    </div>
  );
};
