import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import rightIcon from "../../../assets/right.png";

function CaraoselLeft() {
  const swiper = useSwiper();
  const [end, setEnd] = useState();

  useEffect(() => {
    swiper.on("slideChange", function () {
      setEnd(swiper.end);
    });
  }, []);

  const handleRight = () => {
    swiper.slideNext();
  };

  return (
    <>
      <div onClick={handleRight}>
        {!end && <img src={rightIcon} alt="rightIcon" />}
      </div>
    </>
  );
}

export default CaraoselLeft;
