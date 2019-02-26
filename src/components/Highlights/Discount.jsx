import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-reveal";
import MyButton from "../ui/MyButton";

// @description     animates the discount number
const animateDiscount = (state, setState) => {
  if (state.discountStart < state.discountEnd) {
    setState(prevState => ({
      ...state,
      discountStart: prevState.discountStart + 1
    }));
  }
};

const Discount = () => {
  const [state, setState] = useState({
    discountStart: 0,
    discountEnd: 30
  });

  useEffect(() => {
    const id = setTimeout(() => animateDiscount(state, setState), 30);
    return () => {
      clearTimeout(id);
    };
  }, [state.discountStart]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade onReveal={animateDiscount.bind(this, state, setState)}>
          <div className="discount_porcentage">
            <span>{state.discountStart}%</span>
            <span>OFF</span>
          </div>
        </Fade>

        <Slide right>
          <div className="discount_description">
            <h3>Purchase tickets before 20th june</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore ea dicta laudantium! Modi itaque quibusdam, illo,
              perspiciatis vero molestiae eveniet dolores
            </p>

            <MyButton
              text="Purchase tickets"
              bck="#ffa800"
              color="#ffffff"
              link="https://google.com"
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
