import React from "react";
import "./menu-item-style.scss";
import { withRouter } from "react-router-dom"; //This make this component and super powerful compoent that can recived from other higher componet somestuff like props.

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)} // This is creating a fuction on click pushing the url to match the link url by connecting them by `${}`
  >
    <div
      className="background-img"
      style={{ background: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
