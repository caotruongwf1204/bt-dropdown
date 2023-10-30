import React from "react";
import Link from "./Link";

const Menu = () => {
  return (
    <ul className="dropdown-menu">
      <Link>Action</Link>
      <Link>Another action</Link>
      <Link>Something else here</Link>
    </ul>
  );
};

export default Menu;
