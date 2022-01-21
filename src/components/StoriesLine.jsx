import React, { useState } from "react";
import SingleStory from './SingleStory';
import styled from "styled-components";
import { Button } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination } from "swiper";
import { stories } from '../dummyData';

SwiperCore.use([Pagination]);

export default function StoriesLine() {
  const arrayStories = [...new Array(11)].map((item, key) =>  {return <SingleStory key={key}/>});
  const [current, setCurrent] = useState(0);


  return (
    <StoriesWrapper>
        
        <Swiper
        centeredSlides={true}
        navigation={false}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide><SingleStory stories={stories[1]} /></SwiperSlide>
        <SwiperSlide><SingleStory stories={stories[2]} /></SwiperSlide>
        <SwiperSlide><SingleStory stories={stories[3]} /></SwiperSlide>
      </Swiper>
    </StoriesWrapper>
  );
}
const PrevItem = styled.div`
    width:300px;
    height:600px;
    background:yellow;
    margin-right:30px;
`;
const NextItem = styled.div`
    width:300px;
    height:600px;
    background:green;
    margin-left:30px;
`;
const CurrentItem = styled.div`
    width:400px;
    height:600px;
    background:pink;
`;
const StoriesWrapper = styled.div`
    width:400px;
    height:600px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:red;

`;
