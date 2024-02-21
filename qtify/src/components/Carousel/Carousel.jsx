import React, { useEffect } from "react";
import styles from "./Carousel.modules.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import "swiper/css";
import CarouselLeft from "./CarouselLeft/CarouselLeft";
import CarouselRight from "./CarouselRight/CarouselRight";


const Controls = ({ data }) => {
  const swiper = useSwiper()

  useEffect(() => {
    swiper.slideTo(0)
  }, [data])

  return (<></>)

}

function Carousel({ data, renderComponent }) {

  return (
    <>
      <div className={styles.wrapper} >
        <Swiper style={{ padding: "0px 20px" }} initialSlide={0} modules={[]} slidesPerView={"auto"} spaceBetween={40} allowTouchMove >
          <Controls data={data} />
          <CarouselLeft />
          <CarouselRight />
          {data.map((items) => {
            return <SwiperSlide>{renderComponent(items)}</SwiperSlide>
          })}
        </Swiper>
      </div>

    </>
  )
}

export default Carousel;
