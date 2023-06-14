// import React, { useEffect, useRef } from "react";
// import "../../../styles/MainPage/Notice.scss";
// import { Swiper, SwiperSlide } from "swiper/react"; // basic
// import "swiper/css";
// import PickerButton from "antd/lib/date-picker/PickerButton";
// import { Button } from "antd";
// function NoticeList() {
//   useEffect(() => {}, []);
//   const btn_pre = useRef(null);
//   return (
//     <div>
//       <div className="notice_container">
//         <Swiper
//           className="noticeSwiper_container"
//           slidesPerView={1}
//           loop="true"
//           navigation={{ nextEl: btn_pre.current, prevEl: ".btn_nex" }}
//           autoplay={{ delay: 1000 }}
//           pagination
//           direction="horizontal"
//         >
//           <div>
//             <SwiperSlide>
//               <img src="/assets/notice1.png" alt="" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img src="/assets/notice2.jpg" alt="" className="notice1" />
//             </SwiperSlide>
//             <Button className="btn_pre" ref={btn_pre}>
//               {"<<"}asd
//             </Button>
//             <Button className="btn_nex">{">>"}dasd</Button>
//           </div>
//         </Swiper>
//       </div>
//       <Button className="btn_nex">{">>"}dasd</Button>
//       <Button className="btn_pre" ref={btn_pre}>
//         asd
//       </Button>
//     </div>
//   );
// }
// export default NoticeList;

import React, { useEffect, useRef, useState } from "react";
import "../../../styles/MainPage/Notice.scss";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import "swiper/css";
import PickerButton from "antd/lib/date-picker/PickerButton";
import { Button } from "antd";
import styled from "styled-components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
function NoticeList() {
  const [swiper, setSwiper] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const swiperParams = {
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.activeIndex = mainImageIndex;
      swiper.navigation.update();
    },
    loop: true,
    autoplay: { delay: 1000 },

    onSwiper: setSwiper,
    onSlideChange: (e) => setMainImageIndex(e.activeIndex),
  };

  return (
    <div className="notice_container">
      <StyledSwiper
        className="noticeSwiper_container"
        {...swiperParams}
        ref={setSwiper}
      >
        <SwiperSlide>
          <img src="/assets/notice1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/dum1.png" alt="" className="notice1" />
        </SwiperSlide>
      </StyledSwiper>
    </div>
  );
}
export default NoticeList;
const StyledSwiper = styled(Swiper)`
  position: relative;
  width: 752px;
  height: 752px;
`;
