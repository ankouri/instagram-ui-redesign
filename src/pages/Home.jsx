import React, { useRef, useState } from "react";
import { Container, Grid} from "@mui/material";
import LeftMenu from "./../components/LeftMenu";
import Navbar from "../components/Navbar";
import Stories from "./../components/Stories";
import styled from 'styled-components';
import Feeds from './../components/Feeds';
import Messages from '../components/Messages';




export default function Home(props) {
  const menuRef = useRef();
  const [menuOpen, setMenuOpen] = useState(true);
  const { feeds, messages, stories } = props;

  return (
    <Container disableGutters>
      <Grid container>
        <Grid
          ref={menuRef}
          item
          md={menuOpen ? 3 : 1}
          sx={{
            display: { md: "block", xs: "none" },
            position: "relative",
            transition: "all 0.2s ease-out",
          }}
        >
          <LeftMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </Grid>
        <Grid
          item
          md={menuOpen ? 9 : 11}
          xs={12}
          sx={{ transition: "all 0.2s ease-out" }}
        >
          <Navbar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            menuRef={menuRef}
          />
          <Container>
            <Stories />
            <ContainerPost>
               {
                 feeds ? <Feeds /> : ''
               }
               {
                 messages ? <Messages/> : ''
               }
        
            </ContainerPost>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

const ContainerPost = styled.div`
  height:calc(100vh - 225px);
  width:100%;
  overflow-y:scroll;
  -ms-overflow-style: none; 
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;