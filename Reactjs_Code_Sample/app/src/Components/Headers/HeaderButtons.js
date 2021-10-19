import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ListItemIcon, makeStyles } from "@material-ui/core";
import {
  AccountBalanceWallet,
  AccountCircle,
  Favorite,
  AddCircleOutline,
  CardGiftcard,
  ListAlt,
} from "@material-ui/icons";

const styles = makeStyles({
  button: {
    background: "white",
    color: "black",
  },
});

const StyledMenu = withStyles({
  button: {
    background: "white",
  },
  paper: {
    border: "1px solid #d3d4d5",
    width: "230px",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "start",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "start",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {},
  ListItemText: {
    background: "red",
  },
}))(MenuItem);

export default function HeaderButtons() {
  const classes = styles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className={classes.button}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Login
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <AddCircleOutline fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Flipkart plus zone" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <ListAlt fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <Favorite fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Wishlists" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <AccountBalanceWallet fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Rewards" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <CardGiftcard fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Gift Cards" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
