import React from "react";
import {
  Divider,
  Button,
  InputAdornment,
  TextField,
  IconButton,
} from "@mui/material";
import styled from "styled-components";
import { Email, ArrowBackIosNew, Send } from "@mui/icons-material";

export default function ForgotPassword(props) {

  const handleForgotPassword = (e) => {
      e.preventDefault();
  }
  return (
    <ForgotContainer>
      <Divider sx={{ marginTop: "10px", marginBottom: "10px" }}></Divider>
      <IconButton
        onClick={() => {
          props.setForgot(!props.forgot);
        }}
      >
        <ArrowBackIosNew />
      </IconButton>
      <ForgotTitle>Trouble Logging In?</ForgotTitle>
      <ForgotMsg>
        Enter your email, phone, or username and we'll send you a link to get
        back into your account.
      </ForgotMsg>

      <form onSubmit={ handleForgotPassword }>
        <TextFieldInput
          type="email"
          id="outlined-basic"
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

        <LoginButton type="submit" variant="contained" startIcon={<Send />}>
          Send Email
        </LoginButton>
      </form>
    </ForgotContainer>
  );
}
const ForgotTitle = styled.h3`
  text-align: center;
  width: 100%;
  margin-bottom: 8px;
`;

const ForgotMsg = styled.p`
  text-align: center;
  width: 100%;
  margin-bottom: 8px;
  font-size: 16px;
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

const ForgotContainer = styled.div``;
