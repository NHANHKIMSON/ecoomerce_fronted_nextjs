'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Suspense } from "react";

export default function CarsouselProduct({products = []}) {
  return (
    <div className="px-6 py-4 relative">
      {/* Centered overlay on top of the slides */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {/* Hello */}
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="rounded-2xl shadow-xl"
      >
        {products.map((product) => (
          <SwiperSlide key={product?.id}>
            <div className="relative h-64 md:h-96 overflow-hidden">
              <Suspense
                fallback={
                  <div className="absolute inset-0 bg-gray-300 animate-pulse" />
                }
              >
                <img
                  src={`http://localhost:9000/images/${product.photo}`}
                  alt={product?.name}
                  className="w-full h-full object-cover"
                />
              </Suspense>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}