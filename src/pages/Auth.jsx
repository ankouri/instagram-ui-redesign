import React, { useState } from "react";
import { Container, Grid, Card, CardContent } from "@mui/material";
import styled from "styled-components";
import BackgroundImages from "../components/Background";
import Login from "../components/Login";
import Register from "../components/Register";

const listImage = [
  "assets/profiles/1.jpeg",
  "assets/profiles/2.jpeg",
  "assets/profiles/3.jpeg",
  "assets/profiles/4.jpeg",
  "assets/profiles/5.jpeg",
  "assets/profiles/6.jpeg",
  "assets/profiles/7.jpeg",
  "assets/profiles/8.jpeg",
  "assets/profiles/9.jpeg",
  "assets/profiles/10.jpeg",
  "assets/profiles/11.jpg",
];

export default function Auth() {
  const [singIn, setSigIn] = useState(false);

  return (
    <>
      <BackgroundImages listImage={listImage} delay={2000} />
      <BackgroundImages listImage={listImage} delay={3500} />
      <BackgroundImages listImage={listImage} delay={4000} />

      <Container>
        <Article>
          <GridContainer container>
            <Grid item lg={3} md={6} xs={11}>
              <AuthCard elevation={0}>
                <CardContent>
                  <CardTitleLogo>
                    <InstagramLogo />
                  </CardTitleLogo>
                  {singIn ? <Register /> : <Login />}
                  {singIn ? (
                    <SingIn>
                      You already have an account{" "}
                      <b
                        onClick={() => {
                          setSigIn(!singIn);
                        }}
                      >
                        Log In
                      </b>
                    </SingIn>
                  ) : (
                    <SingIn>
                      Don't have an account?{" "}
                      <b
                        onClick={() => {
                          setSigIn(!singIn);
                        }}
                      >
                        Sign In
                      </b>
                    </SingIn>
                  )}
                </CardContent>
              </AuthCard>
            </Grid>
          </GridContainer>
        </Article>
      </Container>
    </>
  );
}

const SingIn = styled.div`
  margin-top: 20px;
  margin-bottom: 8px;
  width: 100%;
  text-align: center;
  b {
    cursor: pointer;
    color: #1976d2;
  }
`;
const CardTitleLogo = styled.div`
  width: 100%;
  text-align: center;
  height: 52px;
  margin: 0px auto;
`;
const InstagramLogo = styled.div`
  width: 180px;
  background: url("assets/all.png");
  height: 52px;
  background-position: 430px -130px;
  margin: 0 auto;
`;
const AuthCard = styled(Card)`
  border: 1px solid #ddd;
  padding: 20px;
`;
const GridContainer = styled(Grid)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 100vh;
`;
const Article = styled.article`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 777;
  height: 100vh;
  background: rgb(61, 63, 80);
  background: -moz-linear-gradient(
    10deg,
    rgba(61, 63, 80, 1) 0%,
    rgba(229, 63, 105, 0.8519782913165266) 44%,
    rgba(248, 158, 74, 0.7371323529411764) 79%
  );
  background: -webkit-linear-gradient(
    10deg,
    rgba(61, 63, 80, 1) 0%,
    rgba(229, 63, 105, 0.8519782913165266) 44%,
    rgba(248, 158, 74, 0.7371323529411764) 79%
  );
  background: linear-gradient(
    10deg,
    rgba(61, 63, 80, 1) 0%,
    rgba(229, 63, 105, 0.8519782913165266) 44%,
    rgba(248, 158, 74, 0.7371323529411764) 79%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d3f50",endColorstr="#f89e4a",GradientType=1);
`;
