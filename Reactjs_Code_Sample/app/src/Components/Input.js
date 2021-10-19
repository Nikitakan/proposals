import React from "react";
import { makeStyles } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  search: {
    background: "white",
  },
  inputSearch: {
    padding: "6px 4px",
    background: "white",
    outline: "none",
    border: 0,
    width: "330px",
  },
  searchIcon: {
    color: "blue",
    marginRight: "3px",
  },
}));

const Input = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <input
        className={classes.inputSearch}
        type="text"
        placeholder="Search for products, brands and more"
      />
      <SearchOutlined className={classes.searchIcon} />
    </div>
  );
};

export default Input;
