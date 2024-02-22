import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import leftIcon from "../../../assets/left.png";

function CaraoselLeft() {
  const swiper = useSwiper();
  const [start, setStart] = useState();

  useEffect(() => {
    swiper.on("slideChange", function () {
      setStart(swiper.start);
    });
  }, []);

  const handleLeft = () => {
    swiper.slidePrev();
  };

  return (
    <>
      <div onClick={handleLeft}>
        {!start && <img src={leftIcon} alt="leftIcon" />}
      </div>
    </>
  );
}

export default CaraoselLeft;
