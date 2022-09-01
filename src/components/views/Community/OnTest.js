import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react"; // basic
import "swiper/css";
import { Button } from "antd";
import styled from "styled-components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import Swiper from "react-id-swiper";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
} from "swiper";
function OnTest() {
  const [swiper, setSwiper] = useState(null);

  return (
    <div>
      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 1000 }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        //     slideChangeTransitionStar = {{function() {
        //     // 페이지 넘어갈 때마다 fraction 현재 인덱스 변경
        //     $('.custom-fraction .current').text(this.realIndex + 1);
        // }}}
        pagination={{
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            },
          },
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        ref={setSwiper}
      >
        <SwiperSlide style={{ background: "yellow" }}>1</SwiperSlide>
        <SwiperSlide style={{ background: "blue" }}>2</SwiperSlide>
        <SwiperSlide style={{ background: "green" }}>3</SwiperSlide>
      </StyledSwiper>
      <button class="swiper-button-next" style={{ background: "black" }}>
        sdfa
      </button>
      <button class="swiper-button-prev" style={{ background: "black" }} />
      <div class="swiper-pagination">23</div>
    </div>
  );
}
export default OnTest;
const NextButton = styled.button`
  width: 200px;
  height: 200px !important;
  background: yellow;
  cursor: pointer;
  margin-bottom: 200px;
`;
const StyledSwiper = styled(Swiper)`
  position: relative;
  width: 200px;
  height: 200px;
`;
