import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomCalender = () => {
  const [calDate, setCalDate] = useState(new Date());

  function onChange(calDate) {
    // change results based on calendar date click
    setCalDate(calDate);

    const filteredResults = userResults.filter((result) => {
      const newResultFormat = new Date(result.created_at)
        .toLocaleString()
        .split(",")[0];

      const newCalDateFormat = calDate.toLocaleString().split(",")[0];
      return newResultFormat === newCalDateFormat;
    });
  }

  return <Calendar onChange={onChange} value={calDate} />;
};

export default CustomCalender;
