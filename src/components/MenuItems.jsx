import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import styled from "styled-components";
import {
  Equalizer,
  Dashboard,
  Search,
  NotificationsNone,
  Send,
  LiveTv,
  Settings,
  ExitToApp,
} from "@mui/icons-material";
import { useHistory } from "react-router";

export default function MenuItems(props) {
  const { menuOpen } = props;
  const history = useHistory();
  return (
    <nav aria-label="menu">
      <MenuList>
        <ListItem
          disablePadding
          onClick={() => {
            history.push("/feeds");
          }}
        >
          <ListItemButton>
            <ListItemIcon
              style={
                menuOpen
                  ? { padding: "" }
                  : { padding: "12px", minWidth: "30px" }
              }
            >
              <Dashboard />
            </ListItemIcon>
            {menuOpen ? <ListItemText primary="Feed" /> : ""}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding  onClick={() => {
            history.push("/messages");
          }}>
          <ListItemButton>
            <ListItemIcon
              style={
                menuOpen
                  ? { padding: "" }
                  : { padding: "12px", minWidth: "30px" }
              }
            >
              <Send />
            </ListItemIcon>
            {menuOpen ? <ListItemText primary="Direct" /> : ""}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon
              style={
                menuOpen
                  ? { padding: "" }
                  : { padding: "12px", minWidth: "30px" }
              }
            >
              <Search />
            </ListItemIcon>
            {menuOpen ? <ListItemText primary="Explore" /> : ""}
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon
              style={
                menuOpen
                  ? { padding: "" }
                  : { padding: "12px", minWidth: "30px" }
              }
            >
              <NotificationsNone />
            </ListItemIcon>
            {menuOpen ? <ListItemText primary="Notifications" /> : ""}
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon
              style={
                menuOpen
                  ? { padding: "" }
                  : { padding: "12px", minWidth: "30px" }
              }
            >
              <LiveTv />
            </ListItemIcon>
            {menuOpen ? <ListItemText primary="IG TV" /> : ""}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon
              style={
                menuOpen
                  ? { padding: "" }
                  : { padding: "12px", minWidth: "30px" }
              }
            >
              <Equalizer />
            </ListItemIcon>
            {menuOpen ? <ListItemText primary="Stats" /> : ""}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon
              style={
                menuOpen
                  ? { padding: "" }
                  : { padding: "12px", minWidth: "30px" }
              }
            >
              <Settings />
            </ListItemIcon>
            {menuOpen ? <ListItemText primary="Settings" /> : ""}
          </ListItemButton>
        </ListItem>
      </MenuList>
      <Divider />
      <MenuList>
        <ListItem
          disablePadding
          onClick={() => {
            history.push("/");
          }}
        >
          <ListItemButton>
            <ListItemIcon
              style={
                menuOpen
                  ? { padding: "" }
                  : { padding: "12px", minWidth: "30px" }
              }
            >
              <ExitToApp />
            </ListItemIcon>
            {menuOpen ? <ListItemText primary="Logout" /> : ""}
          </ListItemButton>
        </ListItem>
      </MenuList>
    </nav>
  );
}
const MenuList = styled(List)`
  color: #fff;

  li {
    > div:first-of-type {
      &:hover {
        border-left: 2px solid;
        border-left-color: #e44166;
        svg {
          color: #e44166;
        }
        div {
          color: #e44166;
        }
      }
    }
    span {
      font-family: "Maven Pro" !important;
      font-size: 19px;
    }
    svg {
      &:hover {
        color: red;
      }
      color: #fff;
    }
  }
`;
