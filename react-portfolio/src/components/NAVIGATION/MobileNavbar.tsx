import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";

type NavbarComponentProps = {
  onSelect: (id: string) => void;
};

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "testimonials", label: "Testimonials" },
  { id: "cert", label: "Certs." },
];

export default function MobileNavbar({ onSelect }: NavbarComponentProps) {
  const [active, setActive] = useState("home");

  const handleSelect = (id: string) => {
    setActive(id);
    onSelect(id);
  };

  return (
    <div className="md:hidden fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <div className="backdrop-blur-md bg-white/70 border border-gray-200/50 shadow-lg rounded-3xl px-2 py-3 w-[90%] max-w-md">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides
          spaceBetween={14}
          grabCursor
          loop
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          onSlideChange={(swiper) => {
            const currentItem = navItems[swiper.realIndex % navItems.length];
            handleSelect(currentItem.id);
          }}
          className="flex items-center"
        >
          {navItems.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex justify-center items-center transition-all duration-300 ease-in-out"
              style={{ width: active === item.id ? 110 : 90 }}
            >
              <button
                onClick={() => handleSelect(item.id)}
                className={`px-4 py-2 text-sm font-semibold tracking-wide rounded-full select-none transition-all duration-300 
                  ${
                    active === item.id
                      ? "bg-black text-white shadow-md scale-105"
                      : "bg-white/60 text-gray-700 backdrop-blur-sm border border-gray-200/60 hover:bg-white/80"
                  }`}
              >
                {item.label}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
