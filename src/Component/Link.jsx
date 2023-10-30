import React from "react";

const Link = ({ children }) => {
  return (
    <li>
      <a className="dropdown-item" href="#">
        {children}
      </a>
    </li>
  );
};

export default Link;

