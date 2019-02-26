import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="This is a unique title"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8990681564!2d90.37139331445586!3d23.750978394672252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4d6018f643%3A0x603d2d083289b4a3!2sDhanmondi+32+Road+Bridge%2C+Dhanmondi+Bridge%2C+Dhaka+1209!5e0!3m2!1sen!2sbd!4v1551173105849"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>LOCATION</div>
      </div>
    </div>
  );
};

export default Location;
