import React, { useState } from "react";
import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import styled from "styled-components";
import {
  VisibilityOff,
  Visibility,
  Email,
  Lock,
  Person,
  PhoneAndroid,
  Login,
} from "@mui/icons-material";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <RegisterDesc>
        Sign up to see photos and videos from your friends.
      </RegisterDesc>
      <form onSubmit={handleRegister}>
        <TextFieldInput
          type="text"
          id="username"
          label="Username"
          variant="outlined"
          fullWidth
          // inputRef={""}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
        />

        <TextFieldInput
          type="email"
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          // inputRef={""}
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
          type="number"
          id="phone"
          label="Phone Number"
          variant="outlined"
          fullWidth
          // inputRef={""}
          required
          InputProps={{
            maxLength: 10,
            startAdornment: (
              <InputAdornment position="start">
                <PhoneAndroid />
              </InputAdornment>
            ),
          }}
        />
        <TextFieldInput
          type={showPassword ? "text" : "password"}
          id="Password"
          label="Password"
          variant="outlined"
          fullWidth
          required
          // inputRef={""}
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

        <LoginButton type="submit" variant="contained" startIcon={<Login />}>
          Sign In
        </LoginButton>
      </form>
    </div>
  );
}

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
const RegisterDesc = styled.h2`
  color: #30323b !important;
  font-family: "Maven Pro" !important;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
`;
