import React from "react";
import LeftSideMenu from "./LeftSideMenu";

const LeftSideMenuFloating = ({ isMenuOpened, setMenu }) => {
  return (
    <div
      className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 vh-100"
      style={{ position: "absolute", left: 0, top: 0 }}
    >
      <div className="w-100 h-100 position-relative">
        <div
          className="container-fluid px-0 bg-dark text-white p-5"
          style={{
            height: "100%",
            width: "100%",
            left: isMenuOpened ? 0 : "-100%",
            transition: "left 0.3s",
            position: "absolute",
            zIndex: 5,
            background: "white",
          }}
        >
          <LeftSideMenu setMenu={setMenu} isMenuOpened></LeftSideMenu>
        </div>
      </div>
    </div>
  );
};

export default LeftSideMenuFloating;
