import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import "./Header.css";
import TinderLogo from "../../assets/tinder-logo.png";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon
          className="header__icon"
          fontSize="large"
          color="secondary"
        />
      </IconButton>
      <img className="header__logo" src={TinderLogo} alt="Tinder Logo" />
      <IconButton>
        <ForumIcon className="header__icon" color="primary" />
      </IconButton>
    </div>
  );
}

export default Header;
