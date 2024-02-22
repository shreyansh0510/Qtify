import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRight.module.css";
import right from "../../../assets/left.png";

function CarouselRight() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  const handleRight = () => {
    swiper().slideNext();
  };

  return (
    <>
      <div className={styles.rightNavigation}>
        {!isEnd && (
          <div onClick={handleRight}>
            <img src={right} alt="rightArrow" />
          </div>
        )}
      </div>
    </>
  );
}

export default CarouselRight;
