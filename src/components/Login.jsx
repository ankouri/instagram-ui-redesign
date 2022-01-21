import React, { useState } from "react";
import {
  Divider,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import styled from "styled-components";
import {
  VisibilityOff,
  Visibility,
  Email,
  Lock,
  Facebook,
} from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useHistory } from "react-router-dom";
import ForgotPassword from "./FogotPassword";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [forgot, setForgot] = useState(true);
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    history.push('/feeds');
  };

  return (
    <>
      {forgot ? (
        <>
          <form onSubmit={handleLogin}>
            <TextFieldInput
              type="email"
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              //   inputRef={""}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />

            <TextFieldInput
              type={showPassword ? "text" : "password"}
              id="password"
              label="Password"
              variant="outlined"
              fullWidth
              required
              //   inputRef={""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <ForgetPassword>
              <Link
                to="/"
                onClick={() => {
                  setForgot(!forgot);
                }}
              >
                Forgot Password?
              </Link>
            </ForgetPassword>
            <LoginButton
              type="submit"
              variant="contained"
              startIcon={<LoginIcon />}
            >
              Log In
            </LoginButton>
          </form>
          <Divider sx={{ marginTop: "25px", marginBottom: "8px" }}>OR</Divider>
          <FacebookButton
            type="submit"
            variant="outlined"
            startIcon={<Facebook />}
          >
            Facebook
          </FacebookButton>
        </>
      ) : (
        <ForgotPassword setForgot={setForgot} forgot={forgot} />
      )}
    </>
  );
}

const ForgetPassword = styled.div`
  width: 100%;
  a {
    text-decoration: none;
  }
`;
const LoginButton = styled(Button)`
  && {
    width: 90%;
    margin: 16px auto;
    display: flex;
    color: #fff;
    font-weight: 400;
    background: #e03d70 !important;
    font-family: "Maven Pro" !important;
    text-transform: capitalize;
  }
`;
const FacebookButton = styled(Button)`
  && {
    width: 70%;
    margin: 10px auto;
    display: flex;
    font-weight: 400;
    font-family: "Maven Pro" !important;
    text-transform: capitalize;
  }
`;
const TextFieldInput = styled(TextField)`
  && {
    margin: 12px auto;
  }
  input {
    color: #30323b;
    font-family: "Maven Pro";
    padding: 11px 0px;
  }
  fieldset {
    border: 1px solid #30323b !important;
  }
  label,
  div,
  button {
    color: #30323b !important;
    font-family: "Maven Pro" !important;
  }
`;
