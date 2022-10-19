// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      width={150}
      height={200}
     
    >
      <SwiperSlide>
      <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-gray-200 [border:1px_solid_#c9e3f4] box-border w-[323px] flex flex-col p-[30px_20px] items-center justify-center gap-[50px]">
    <img
      className="relative w-[280px] h-[157px] shrink-0 object-cover"
      alt=""
      src="../worldwide-delivery-1@2x.png"
    />
    <div className="w-[279px] flex flex-col items-start justify-start gap-[20px]">
      <div className="bg-gray-200 flex flex-row p-[10px_0px] box-border items-center justify-center gap-[10px] text-base">
        <img
          className="relative w-[40px] h-[40px] shrink-0"
          alt=""
          src="../language.svg"
        />
        <div className="relative font-medium inline-block w-[102px] shrink-0">
          International Relocation
        </div>
      </div>
      <b className="relative text-2xl leading-[130%] inline-block text-gray-1600 w-[242px]">{`Great & Affordable Shifting Services`}</b>
      <div className="relative text-gray-1000 inline-block w-[279px]">{`Receive fixed-price, individualized plans and reserve your move without having to worry about hidden fees. `}</div>
      <div className="relative inline-block">Read More</div>
    </div>
  </div>
      </SwiperSlide>
      {/* <SwiperSlide>Slide 2</SwiperSlide> */}
      <SwiperSlide> 
        <div className="absolute top-[0px] left-[343px] rounded-[20px] bg-gray-200 [border:1px_solid_#c9e3f4] box-border w-[323px] flex flex-col p-[30px_20px] items-center justify-center gap-[50px]">
        <img
          className="relative w-[280px] h-[157px] shrink-0 object-cover"
          alt=""
          src="../worldwide-delivery-11@2x.png"
        />
        <div className="w-[279px] flex flex-col items-start justify-start gap-[20px]">
          <div className="bg-gray-200 flex flex-row p-[10px_0px] box-border items-center justify-center gap-[10px] text-base">
            <img className="relative w-[40px] h-[40px] shrink-0" alt="" />
            <div className="relative font-medium inline-block w-[102px] shrink-0">
              International Relocation
            </div>
          </div>
          <b className="relative text-2xl leading-[130%] inline-block text-gray-1600 w-[242px]">{`Great & Affordable Shifting Services`}</b>
          <div className="relative text-gray-1000 inline-block w-[279px]">{`Receive fixed-price, individualized plans and reserve your move without having to worry about hidden fees. `}</div>
          <div className="relative inline-block">Read More</div>
        </div>
      </div>
      </SwiperSlide>
      {/* <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>
  );
};