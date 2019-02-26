import React, { useState, useEffect } from "react";
import { Slide } from "react-reveal";

// @description     Get the time difference from deadline
const getTimeUntil = (state, setState) => {
  const time = Date.parse(state.deadline) - Date.parse(new Date());
  if (time < 0) {
    // Update the state
    setState(prevState => ({
      ...prevState,
      days: "0",
      hours: "0",
      minutes: "0",
      seconds: "0"
    }));
  } else {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    // Update the state
    setState(prevState => ({
      ...prevState,
      days,
      hours,
      minutes,
      seconds
    }));
  }
};

// Component
const CountDown = () => {
  const [state, setState] = useState({
    deadline: "Dec, 16, 2019",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0"
  });

  useEffect(() => {
    const id = setInterval(() => getTimeUntil(state, setState), 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Events starts in</div>
        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">{state.days}</div>
            <div className="countdown_tag">Days</div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">{state.hours}</div>
            <div className="countdown_tag">Hrs</div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">{state.minutes}</div>
            <div className="countdown_tag">Min</div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">{state.seconds}</div>
            <div className="countdown_tag">Sec</div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default CountDown;
