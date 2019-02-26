import React from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { scroller } from "react-scroll";

const scrollToElement = (el, drawerHandler) => {
  scroller.scrollTo(el, {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset: -150
  });
  drawerHandler(false);
};

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem
          button
          onClick={scrollToElement.bind(this, "featured", props.onClose)}
        >
          <ListItemText>Event starts in</ListItemText>
        </ListItem>

        <ListItem
          button
          onClick={scrollToElement.bind(this, "venuenfo", props.onClose)}
        >
          <ListItemText>Venue NFO</ListItemText>
        </ListItem>

        <ListItem
          button
          onClick={scrollToElement.bind(this, "highlights", props.onClose)}
        >
          <ListItemText>Highlights</ListItemText>
        </ListItem>

        <ListItem
          button
          onClick={scrollToElement.bind(this, "pricing", props.onClose)}
        >
          <ListItemText>Pricing</ListItemText>
        </ListItem>

        <ListItem
          button
          onClick={scrollToElement.bind(this, "location", props.onClose)}
        >
          <ListItemText>Location</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default SideDrawer;
