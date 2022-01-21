import React from "react";
import styled from "styled-components";
import { Instagram } from "@mui/icons-material";
import CardInfo from "./CardInfo";
import MenuItems from "./MenuItems";


export default function LeftMenu(props) {
  const { menuOpen, setMenuOpen } = props;
  return (
    <MenuContainer>
      <MenuLogo>
        <Instagram/>
        {
          menuOpen ? <TextLogo src="assets/text-logo.svg" alt="" /> : ""
        }

      </MenuLogo>
      <CardInfo menuOpen={ menuOpen } setMenuOpen={ setMenuOpen }/>
      <MenuItems menuOpen={ menuOpen } setMenuOpen={ setMenuOpen }/>
    </MenuContainer>
  );
}



const MenuLogo = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  svg {
    font-size: 39px;
    margin: 6px 10px 10px 15px;
    color: #e2e2e2;
  }
`;

const TextLogo = styled.img`
  width: 40%;
  height: 60px;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%)
    contrast(103%);

  
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #282a34;
`;
