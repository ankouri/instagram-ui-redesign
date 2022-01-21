import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";
import styled from "styled-components";
import { Avatar } from "@mui/material";

SwiperCore.use([Pagination, Navigation]);

export default function SingleStory(props) {
  const { stories } = props;
  return (
    <SingleStoryWrapper>
      <Swiper
        grabCursor={true}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        autoplay={true}
        delay={2000}
        className="mySwiper"
      >
        <UserInfo>
          <Avatar src="assets/profiles/11.jpg" />
          <h5>Ankouri</h5>
        </UserInfo>
        <SwiperSlide>
          <Item src={stories[0]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Item src={stories[1]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Item src={stories[2]} alt="" />
        </SwiperSlide>
      </Swiper>
    </SingleStoryWrapper>
  );
}

const SingleStoryWrapper = styled.div`
  position: relative;
  width: 100% !important;
  height: 100% !important;
  background: black;
`;

const UserInfo = styled.div`
  position: absolute;
  top: 15px;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  div {
    margin-left: 15px;
    width: 40px;
    height: 40px;
  }
  h5 {
    margin-left: 10px;
    color: white !important;
  }
`;

const Item = styled.img`
  width: 100% !important;
  height: 100% !important;
`;
