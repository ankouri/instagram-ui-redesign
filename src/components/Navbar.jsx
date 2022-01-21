import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  InputBase,
  Button,
  IconButton,
  CardMedia,
} from "@mui/material";
import styled from "styled-components";
import { styled as muiStyled, alpha } from "@mui/material/styles";
import {
  Search as SearchIcon,
  MenuOpen,
  NotificationsNone,
  Send,
  Add,
} from "@mui/icons-material";
import { useHistory } from "react-router";

export default function Navbar(props) {
  const { menuOpen, setMenuOpen, menuRef } = props;
  const history = useHistory();
  const handleCloseMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuRef);
  };

  return (
    <CustomBar position="sticky" elevation={0}>
      <Container>
        <CustomToolbar sx={{ display: { md: "none", xs: "block" } }}>
          <TextLogo component="img" src="assets/text-logo.svg" alt="" />
        </CustomToolbar>
        <Toolbar>
          <IconButton
            onClick={handleCloseMenu}
            sx={{ display: { md: "block", xs: "none" } }}
          >
            {menuOpen ? (
              <MenuButton />
            ) : (
              <MenuButton style={{ transform: "rotate(180deg)" }} />
            )}
          </IconButton>
          <Search sx={{ display: { md: "block", xs: "none" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton>
            <StyledBadge variant="dot" overlap="circular">
              <NotificationsNone />
            </StyledBadge>
          </IconButton>

          <IconButton
            onClick={() => {
              history.push("/messages");
            }}
          >
            <StyledBadge variant="dot" overlap="circular">
              <Send />
            </StyledBadge>
          </IconButton>

          <IconButton sx={{ display: { md: "none", xs: "block" } }}>
            <StyledBadge>
              <Add />
            </StyledBadge>
          </IconButton>
          <AddPostButton startIcon={<Add />}>Add Post</AddPostButton>
        </Toolbar>
      </Container>
    </CustomBar>
  );
}
const CustomToolbar = styled(Toolbar)`
  min-height: 40px !important;
  margin-top: 8px;
`;
const TextLogo = styled(CardMedia)`
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%)
    contrast(103%);
  width: 150px;
  margin: auto;
`;

const AddPostButton = styled(Button)`
  && {
    background: linear-gradient(
      91deg,
      rgba(229, 63, 105, 0.8519782913165266) 18%,
      rgba(248, 158, 74, 0.7371323529411764) 94%
    );
    font-family: "Maven Pro";
    color: white;
    margin-left: 10px;
  }
`;

const StyledBadge = styled("div")`
  position: relative;
  span {
    padding: 0;
    z-index: auto;
    min-width: 6px;
    width: 6px;
    height: 6px;
    background: #e1376b;
    border-radius: 100%;
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
  svg {
    color: white;
  }
`;
const MenuButton = styled(MenuOpen)`
  color: white;
  font-size: 29px;
  transition: all 0.3s ease-out;
`;

const CustomBar = styled(AppBar)`
  && {
    background: transparent !important;
    color: white !important;
  }
`;

const Search = muiStyled("div")(({ theme }) => ({
  position: "relative",
  flexGrow: 1,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = muiStyled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = muiStyled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontFamily: "Maven Pro",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
