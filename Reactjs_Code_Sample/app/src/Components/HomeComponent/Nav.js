import React from "react";
import { navData } from "../Utils/Data";

const Nav = () => {
  return (
    <div className="d-flex mt-5 justify-content-evenly pt-4 px-4">
      {navData.map((item) => (
        <div className="text-center" style={{ cursor: "pointer" }}>
          <img src={item.url} alt="" width="64" />
          <p className="fw-bold">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Nav;
