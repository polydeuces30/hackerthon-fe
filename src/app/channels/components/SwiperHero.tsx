import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Button from "@/components/buttons/Button";
import { FaFire, FaHeart, FaPlay } from "react-icons/fa6";
import IconButton from "@/components/buttons/IconButton";
import { HiMiniSpeakerWave } from "react-icons/hi2";

const SwiperHero = () => {
  return (
    <div className="relative">
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper h-[80vh] rounded-lg"
      >
        <SwiperSlide>
          <div className="flex items-end pb-24 justify-center h-full bg-[url('/images/channels/minji.png')] bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col items-center">
              <p className="font-semibold text-white text-xl">MinjiNJ12</p>
              <p className="font-semibold text-[#999999]">12.8k Viewers</p>
              <div className="flex gap-5 max-sm:flex-col mt-[30px]">
                <Button variant="green" leftIcon={FaPlay}>
                  Watch Now
                </Button>
                <div className="flex gap-[10px]">
                  <IconButton icon={FaHeart} variant="black"></IconButton>
                  <IconButton icon={FaFire} variant="black"></IconButton>
                  <IconButton
                    icon={HiMiniSpeakerWave}
                    variant="black"
                  ></IconButton>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-end pb-24 justify-center h-full bg-[url('/images/channels/minji.png')] bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col items-center">
              <p className="font-semibold text-white text-xl">Minji Cantik</p>
              <p className="font-semibold text-[#999999]">12.8k Viewers</p>
              <div className="flex max-sm:flex-col gap-5 mt-[30px]">
                <Button variant="green" leftIcon={FaPlay}>
                  Watch Now
                </Button>
                <div className="flex gap-[10px]">
                  <IconButton icon={FaHeart} variant="black"></IconButton>
                  <IconButton icon={FaFire} variant="black"></IconButton>
                  <IconButton
                    icon={HiMiniSpeakerWave}
                    variant="black"
                  ></IconButton>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-end pb-24 justify-center h-full bg-[url('/images/channels/minji.png')] bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col items-center">
              <p className="font-semibold text-white text-xl">Kim Minjiku</p>
              <p className="font-semibold text-[#999999]">1105.8M Viewers</p>
              <div className="flex gap-5 max-sm:flex-col mt-[30px]">
                <Button variant="green" leftIcon={FaPlay}>
                  Watch Now
                </Button>
                <div className="flex gap-[10px]">
                  <IconButton icon={FaHeart} variant="black"></IconButton>
                  <IconButton icon={FaFire} variant="black"></IconButton>
                  <IconButton
                    icon={HiMiniSpeakerWave}
                    variant="black"
                  ></IconButton>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute z-20 bottom-0 left-0 right-0 flex justify-between p-4">
        <button className="custom-prev text-xl bg-[#0F0F0F] text-white p-2 rounded-md">
          <GoArrowLeft />
        </button>
        <button className="custom-next bg-[#0F0F0F] text-xl text-white p-2 rounded-md">
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SwiperHero;
