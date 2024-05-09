import React, { useState, useEffect } from "react";

export const TimerLeaf = (props) => {
  const {
    item: { interval, time },
  } = props;

  const style =
    "w-10 bg-[#7aab8d] font-semibold text-[#efeae4] text-[20px] sm:text-[40px] py-1 px-2 rounded drop-shadow-xl";

  return (
    <>
      {interval !== "months" && (
        <span className="pb-9 text-[#FBFAF8] text-[20px] sm:text-[40px]">
          :
        </span>
      )}
      <div className="flex flex-col gap-1 ">
        <div className="flex gap-1">
          <span className={style}>{time.length > 1 ? time.charAt(0) : 0}</span>
          <span className={style}>
            {time.length > 1 ? time.charAt(1) : time.charAt(0)}
          </span>
        </div>
        <div className="flex justify-center text-[#827462]">
          <p>{interval}</p>
        </div>
      </div>
    </>
  );
};
