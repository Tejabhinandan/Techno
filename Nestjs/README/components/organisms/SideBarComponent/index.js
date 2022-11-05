import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  primary: {
    fontSize: "16px !important",
    fontWeight: "500 !important",
    fontFamily: "Montserrat !important",
  },
});

const drawerWidth = 240;

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  background: "#333333 !important",
  border: "none",
});

const closedMixin = theme => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: "80px !important",
  overflowX: "hidden",
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  background: "#333333 !important",
  border: "none",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  border: "none",
  borderBottom: "none",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  border: "none",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideBarComponent = ({ menuList = [] }) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    menuList?.map((item, index) => {
      if (item.path === router.pathname) {
        setActiveIndex(index);
      }
    });
  }, [router.pathname]);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader sx={{ ml: 1.5 }}>
        <IconButton color="inherit" onClick={handleDrawerOpen}>
          <MenuIcon className="color-white" fontSize="medium" />
        </IconButton>
        <Typography
          className="text-start color-white w-100 ff-MS fs-14 fw-500 ms-2"
          sx={{ opacity: open ? 1 : 0 }}
        >
          Menu
        </Typography>
      </DrawerHeader>
      <List>
        {menuList?.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            className={
              activeIndex === index ? "bg-light-black" : "bg-dark-black"
            }
            onClick={() => router.push(item.path)}
          >
            <ListItemButton
              sx={{
                minHeight: 40,
                justifyContent: "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  ml: open ? 1 : 0,
                  justifyContent: open ? "" : "center",
                  alignItems: "center",
                  minWidth: "40px",
                }}
                className="color-white"
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                className="color-white"
                primary={item.label}
                sx={{ opacity: open ? 1 : 0 }}
                classes={{ primary: classes.primary }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBarComponent;
