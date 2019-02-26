import React, { useState } from "react";
import MyButton from "../ui/MyButton";
import { Zoom } from "react-reveal";

const Pricing = () => {
  const [state] = useState({
    prices: [100, 150, 200],
    positions: ["Belcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur porro, quam voluptatum ",
      "Sapiente facilis nesciunt dolor distinctio placeat qui impedit veniam quaerat repudiandae corporis voluptatem id eum consequatur voluptas eos",
      "Optio aliquam dignissimos architecto quis facere repellendus incidunt, voluptates quasi pariatur animi  in?"
    ],
    linkto: ["http://slaes/a", "http://slaes/b", "http://slaes/c"],
    delays: [500, 0, 500]
  });

  const showBoxes = () =>
    state.prices.map((price, i) => (
      <Zoom key={i} delay={state.delays[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${price}</span>
              <span>{state.positions[i]}</span>
            </div>
            <div className="pricing_description">{state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                link={state.linkto[i]}
                bck="#ffa800"
                color="#ffffff"
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>

        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;
