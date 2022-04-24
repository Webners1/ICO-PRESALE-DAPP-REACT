import { useContext, useEffect, useState } from "react";
import AppContext from "../contexts";

export const useAppContext = () => useContext(AppContext);

const useCountdown = (targetDate) => {
  
  const { days = 0, hours = 0, minutes = 0, seconds = 60 } = targetDate;
  const [[dys, hrs, mins, secs], setTime] = useState([
    days,
    hours,
    minutes,
    seconds,
  ]);
  const tick = () => {
    if (dys === 0 && hrs === 0 && mins === 0 && secs === 0) reset();
    else if (hrs === 0 && mins === 0 && secs === 0) {
      setTime([dys - 1, 59, 59, 59]);
    } else if (mins === 0 && secs === 0) {
      setTime([dys, hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([dys, hrs, mins - 1, 59]);
    } else {
      setTime([dys, hrs, mins, secs - 1]);
    }
  };

  const reset = () =>

    setTime([
      parseInt(0),
      parseInt(0),
      parseInt(0),
      parseInt(0),
    ]);

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return [dys, hrs, mins, secs].map((item) => item.toString().padStart(2, "0"));
};

export default useCountdown;
