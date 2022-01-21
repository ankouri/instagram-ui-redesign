import React, { useState } from "react";
import styled from "styled-components";

export default function CircleStatus(props) {
  const [open, setOpen] = useState(false);
  const { small, bg } = props;
  console.log(bg);
  return (
    <>
    <Circle
      loading={open.toString()}
      onClick={() => {
        setOpen(!open);
      }}
      small={small}
    >
      <div style={{ backgroundImage: `url(${bg})` }} />
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="a" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e44166" />
            <stop offset="100%" stopColor="#f89d4a" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" stroke="url(#a)" />
      </svg>
    </Circle>
    </>
  );
}

const Circle = styled.div`
  user-select: none;
  position: relative !important;
  width: ${(props) => (props.small ? "130px" : "80px")};
  height: ${(props) => (props.small ? "130px" : "80px")};
  svg {
    fill: none;
    stroke: #e44166;
    stroke-linecap: round;
    stroke-width: 2;
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    /* animation: stroke-draw 6s ease-out infinite alternate; */

    animation: ${(props) =>
      props.loading === "true"
        ? "stroke-draw 2s cubic-bezier(0.77, 0, 0.175, 1) infinite alternate"
        : ""};
  }
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    border-radius: 100%;
    outline: none;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    user-select: none;
    outline: none;
    cursor:pointer;
  }

  @keyframes stroke-draw {
    from {
      stroke-dasharray: 1;
    }
    to {
      transform: rotate(180deg);
      stroke-dasharray: 6;
    }
  }
`;
