import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import "./Header.css";
import TinderLogo from "../../assets/tinder-logo.png";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon
            className="header__icon"
            fontSize="large"
            color="secondary"
          />
        </IconButton>
      )}

      <Link to="/">
        <img className="header__logo" src={TinderLogo} alt="Tinder Logo" />
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" color="primary" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
