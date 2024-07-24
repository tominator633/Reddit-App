import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SliderBtnPrev () {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>prev</button>
  );
}