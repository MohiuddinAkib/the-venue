import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueNFO from "./components/venueNFO";
import Highlight from "./components/Highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";
import { Element } from "react-scroll";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <section>
          <Element name="featured">
            <Featured />
          </Element>
        </section>
        <section>
          <Element name="venuenfo">
            <VenueNFO />
          </Element>
        </section>
        <section>
          <Element name="highlights">
            <Highlight />
          </Element>
        </section>
        <section>
          <Element name="pricing">
            <Pricing />
          </Element>
        </section>
        <section>
          <Element name="location">
            <Location />
          </Element>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
