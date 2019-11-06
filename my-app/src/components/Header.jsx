import React from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { Link } from "react-router-dom";

import { ResponsiveMenu } from "bootstrap";

export const Header = () => {
  return (
    <div>
      <ResponsiveMenu
        menuOpenButton={<FaBars size={30} color="MediumPurple" />}
        menuCloseButton={<IoMdClose size={30} color="MediumPurple" />}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <ul>
            <li>
              <Link to={"/"} className="nav-link">
                A
              </Link>
            </li>
            <li>
              <Link to={"/"} className="nav-link">
                A
              </Link>
            </li>
            <li>
              <Link to={"/"} className="nav-link">
                A
              </Link>
            </li>
          </ul>
        }
      />
    </div>
  );
};

//};
