import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import styles from "./CarouselLeft.module.css"
import LeftArrow from '../../../assets/left.png';


function CarouselLeft() {
    const swiper = useSwiper();
    const [isBegin, setIsBegin] = useState(swiper.isBegin);

    useEffect(() => {
        swiper.on("slideChange", function () {
            setIsBegin(swiper.isBegin)
        })
    }, []);


    const handleLeft = () => {
        swiper().slidePrev()
    }

    return (
        <>
            <div className={styles.leftNavigation}>
                {!isBegin &&
                    <div onClick={handleLeft} >
                        <img src={LeftArrow} alt="leftArrow" />
                    </div>

                }
            </div>
        </>
    )
}

export default CarouselLeft