import React, { useEffect, useRef } from "react";
import styles from "./Caraosel.module.css";
import leftIcon from "../../assets/left.png";
import rightIcon from "../../assets/right.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Container from "../Container/Container";
import CaraoselLeft from "./CaraoselLeft/CaraoselLeft";
import CaraoselRight from "./CaraoselRight/CaraoselRight";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, 1);
  }, [data]);

  return <></>;
};

export default function Caraosel({ caraouselData }) {
  //   const swiperRef = useRef(null);

  //   const navigateToPrev = () => {
  //     if (swiperRef.current) {
  //       swiperRef.current.swiper.slideNext();
  //     }
  //   };

  //   const navigateToNext = () => {
  //     if (swiperRef.current) {
  //       swiperRef.current.swiper.slidePrev();
  //     }
  //   };

  return (
    <>
      <div style={{ color: "white" }}>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          cssMode={true}
          navigation={false}
          pagination={false}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className={styles.mySwiper}
        >
          {caraouselData.map((item) => (
            <SwiperSlide>
              <Container
                image={item.image}
                follows={item.follows}
                title={item.title}
              />
            </SwiperSlide>
          ))}
          <Controls data={caraouselData} />
          <div className={styles.arrows}>
            <div className={styles.leftarrow}>
              <CaraoselLeft />
            </div>
            <div className={styles.rightarrow}>
              <CaraoselRight />
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
}
