import React from "react";
import {
  BsWindow,
  BsPeople,
  BsSearch,
  BsBell,
  BsGear,
  BsJustify,
} from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { uid } from "react-uid";

let menuItems = [
  { name: "Dashboard", icon: BsWindow },
  { name: "Students", icon: BsPeople },
  { name: "IntelliSearch", icon: BsSearch },
  { name: "Notifications", icon: BsBell },
  { name: "Settings", icon: BsGear },
  { name: "Contact", icon: FiPhone },
];

const LeftSideMenu = ({ isMenuOpened = false, setMenu = () => {} }) => {
  return (
    <div className="row no-gutters">
      <div className="col-12">
        <div
          className="row no-gutters h4 pb-5 pt-2 mb-5 justify-content-between"
          style={{ borderBottom: "1px solid white" }}
        >
          {isMenuOpened && (
            <BsJustify
              style={{ cursor: "pointer" }}
              onClick={() => setMenu((prev) => !prev)}
            ></BsJustify>
          )}
          <div className="text-primary">INTERNLY</div>
        </div>

        {menuItems.map((x) => (
          <div className="row no-gutters mb-4 cursor-pointer" key={uid(x)}>
            <x.icon
              fontSize="24px"
              className="mr-2"
              strokeWidth={x.name === "Contact" ? 1.7 : 0.1}
            ></x.icon>
            <div>{x.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideMenu;
