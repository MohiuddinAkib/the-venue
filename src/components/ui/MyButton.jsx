import React from "react";
import Button from "@material-ui/core/Button";
import TicketIcon from "../../resources/images/icons/ticket.png";
import PropTypes from "prop-types";

const MyButton = ({ bck, link, color, text }) => {
  return (
    <Button
      href={link}
      size="small"
      variant="contained"
      style={{ background: bck, color }}
    >
      <img src={TicketIcon} alt="icon_button" className="iconImage" />
      {text}
    </Button>
  );
};

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  bck: PropTypes.string.isRequired
};

export default MyButton;
