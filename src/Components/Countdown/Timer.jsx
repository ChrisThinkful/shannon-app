import React, { useState, useEffect } from "react";
import moment from "moment";
moment().format();

// const targetTime = moment("2025-04-28");

export const Countdown = ({ date }) => {
  const targetTime = moment(date);
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  let countDownTime = {
    months: timeBetween.months().toString(),
    weeks: timeBetween.weeks().toString(),
    days: timeBetween.days().toString(),
    hours: timeBetween.hours().toString(),
    minutes: timeBetween.minutes().toString(),
    seconds: timeBetween.seconds().toString(),
  };

  useEffect(() => {
    console.log(countDownTime.months);
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
        <div className="flex flex-col gap-1 ">
          <div className="flex gap-1">
            <span className="bg-[#7aab8d] font-semibold text-[#efeae4] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime.months.length > 1
                ? countDownTime.months.charAt(0)
                : 0}
            </span>
            <span className="bg-[#7aab8d] font-semibold text-[#efeae4] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime.months.length > 1
                ? countDownTime.months.charAt(1)
                : countDownTime.months.charAt(0)}
            </span>
          </div>
          <div className="flex justify-center text-[#827462]">
            <p>months</p>
          </div>
        </div>
        <span className="pb-9 text-[#FBFAF8] text-[20px] sm:text-[40px]">
          :
        </span>
        <div className="flex flex-col gap-1 ">
          <div className="flex gap-1">
            <span className="bg-[#7aab8d] font-semibold text-[#efeae4] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime.weeks.length > 1
                ? countDownTime.weeks.charAt(0)
                : 0}
            </span>
            <span className="bg-[#7aab8d] font-semibold text-[#efeae4] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime.weeks.length > 1
                ? countDownTime.weeks.charAt(1)
                : countDownTime.weeks.charAt(0)}
            </span>
          </div>
          <div className="flex justify-center text-[#827462]">
            <p>weeks</p>
          </div>
        </div>
        <span className="pb-9 text-[#FBFAF8] text-[20px] sm:text-[40px]">
          :
        </span>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <span className="bg-[#7aab8d] font-semibold text-[#efeae4] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime.days.length > 1 ? countDownTime.days.charAt(0) : 0}
            </span>
            <span className="bg-[#7aab8d] font-semibold text-[#efeae4] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime.days.length > 1
                ? countDownTime.days.charAt(1)
                : countDownTime.days.charAt(0)}
            </span>
          </div>
          <div className="flex justify-center text-[#827462]">
            <p>days</p>
          </div>
        </div>
        <span className="pb-9 text-[#FBFAF8] text-[20px] sm:text-[40px]">
          :
        </span>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <span className="bg-[#7aab8d] font-semibold text-[#efeae4] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime.hours.length > 1
                ? countDownTime.hours.charAt(0)
                : 0}
            </span>
            <span className="bg-[#7aab8d] font-semibold text-[#efeae4] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime.hours.length > 1
                ? countDownTime.hours.charAt(1)
                : countDownTime.hours.charAt(0)}
            </span>
          </div>
          <div className="flex justify-center text-[#827462]">
            <p>hours</p>
          </div>
        </div>
        <span className="pb-9 text-[#FBFAF8] text-[20px] sm:text-[40px]">
          :
        </span>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <span className="bg-[#7aab8d] font-semibold text-[#efeae4] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime.minutes.length > 1
                ? countDownTime.minutes.charAt(0)
                : 0}
            </span>
            <span className="bg-[#7aab8d] font-semibold text-[#efeae4] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime.minutes.length > 1
                ? countDownTime.minutes.charAt(1)
                : countDownTime.minutes.charAt(0)}
            </span>
          </div>
          <div className="flex justify-center text-[#827462]">
            <p>minutes</p>
          </div>
        </div>
        <span className="pb-9 text-[#FBFAF8] text-[20px] sm:text-[40px]">
          :
        </span>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <span className="bg-[#7aab8d] font-semibold text-[#efeae4] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime.seconds.length > 1
                ? countDownTime.seconds.charAt(0)
                : 0}
            </span>
            <span className="bg-[#7aab8d] font-semibold text-[#efeae4] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
              {countDownTime.seconds.length > 1
                ? countDownTime.seconds.charAt(1)
                : countDownTime.seconds.charAt(0)}
            </span>
          </div>
          <div className="flex justify-center text-[#827462]">
            <p>seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};
