import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import flipkart_logo from "../../../public/images/flipkart-plus_8d85f4.png";
import Input from "../Input";
import HeaderButtons from "./HeaderButtons";
import Cart from "./Cart";
import HeaderButton2 from "./HeaderButton2";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#2874f0",
    MinHeight: "50px",
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-evenly",
  },

  plusText: {
    margin: 0,
    fontSize: "12px",
    fontStyle: "italic",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <div>
          <img src={flipkart_logo} alt="" width="76px" height="20px" />
          <p className={classes.plusText}>
            Explore <span className="text-warning">plus +</span>{" "}
          </p>
        </div>

        <div>
          <Input />
        </div>

        <div className="d-flex ">
          <div className="me-1">
            <HeaderButtons />
          </div>
          <div className="ms-1">
            <HeaderButton2 />
          </div>
        </div>

        <div>
          <Cart />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
