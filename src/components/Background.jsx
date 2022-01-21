import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Navigation } from "swiper";


SwiperCore.use([Autoplay, Navigation]);

export default function BackgroundImages(props) {
  const { listImage, delay } = props;
  return (
    <Container>
      <Swiper
        spaceBetween={2}
        autoplay={{
          delay: delay,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 2,
          },
        }}
        className="mySwiper"
      >
        {listImage.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <Item data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}
const Item = styled.div`
  width: 100%;
  height: calc(99vh / 3);
  background: url(${(props) => props.data});
  background-size: cover;
  background-position: center center;
`;

const Container = styled.div`
  margin-top: 2px;
`;
