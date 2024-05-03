import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CardGrid from "./Components/CardGrid/CardGrid";
import { data } from "./data";
import { Countdown } from "./Components/Countdown/Timer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import VotingComponent from "./Components/Gender/Gender";

const App = () => {
  const now = new Date();
  now.setMonth(now.getMonth() + 9);

  const [date, setDate] = useState(new Date(now));
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const handleChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <div className="bg-gradient-to-r from-[#bba78c] to-[#efeae4]">
      <Header />
      {/* <CardGrid cards={data} /> */}
      <div>
        <div className="flex flex-col justify-center">
          <Countdown date={date} />
          <div className="flex">
            <DatePicker
              className="self-center"
              selected={date}
              onChange={(date) => setDate(date)}
            />
          </div>
        </div>
        <div className="flex justify-evenly">
          <div>Amazon</div>
          <div>
            Gender
            <VotingComponent />
          </div>
          <div>Names</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
