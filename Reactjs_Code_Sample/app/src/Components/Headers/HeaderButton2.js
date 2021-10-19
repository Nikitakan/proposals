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
  NotificationsActive,
  SystemUpdate,
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
    width: "250px",
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

export default function HeaderButton2() {
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
        More
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
            <NotificationsActive fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Notification Prefrence" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <AddCircleOutline fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Sell on Flipkart" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <ListAlt fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="24*7 Customer Care" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <Favorite fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Advertise" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <SystemUpdate fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Download App" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
