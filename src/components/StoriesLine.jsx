import React from "react";
import SingleStory from "./SingleStory";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination } from "swiper";
import { stories } from "../dummyData";

SwiperCore.use([Pagination]);

export default function StoriesLine() {
  return (
    <StoriesWrapper>
      <Swiper
        centeredSlides={true}
        navigation={false}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <SingleStory stories={stories[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory stories={stories[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <SingleStory stories={stories[3]} />
        </SwiperSlide>
      </Swiper>
    </StoriesWrapper>
  );
}
const StoriesWrapper = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
`;
