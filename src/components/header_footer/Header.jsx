import React, { useState, useLayoutEffect } from "react";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "./SideDrawer";

const Header = props => {
  const [state, setState] = useState({
    drawerOpen: false,
    affix: false
  });

  const scrollHandler = () =>
    window.scrollY > 0
      ? setState({ ...state, affix: true })
      : setState({ ...state, affix: false });

  useLayoutEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  const toggleHandler = val => setState({ ...state, drawerOpen: val });

  return (
    <AppBar
      position="fixed"
      style={{
        background: state.affix ? "#2f2f2f" : "transparent",
        boxShadow: "none",
        padding: "10px 0px"
      }}
    >
      <ToolBar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">The Venue</div>
          <div className="header_logo_title">Musical Events</div>
        </div>
        {/* Menu icon */}
        <IconButton
          aria-label="menu"
          color="inherit"
          onClick={toggleHandler.bind(this, true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Side drawer */}
        <SideDrawer open={state.drawerOpen} onClose={toggleHandler} />
      </ToolBar>
    </AppBar>
  );
};

export default Header;
