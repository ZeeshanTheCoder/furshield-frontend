// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
  EffectFade,
} from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/ally';
// import 'swiper/css/thumbs';

const modules = [Navigation, Pagination, Scrollbar, A11y, Thumbs, EffectFade];

export { Swiper, SwiperSlide, modules };
