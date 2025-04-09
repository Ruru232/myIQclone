'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { TrustedByMillionsData } from './_lib/data';

export default function TrustedByMillions() {
  return (
    <div className="mx-auto w-full max-w-7xl pt-1 max-[1320px]:px-6 max-md:px-4 overflow-x-hidden">
      <div className="relative py-6 md:py-10">
        <h3 className="text-center font-semibold text-[#2C3345] text-[28px] lg:text-[39px]">
          Trusted by Millions Worldwide
        </h3>
        <div className="mt-2.5 md:mt-8 px-6">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {TrustedByMillionsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col relative overflow-hidden text-foreground box-border outline-none shadow-sm rounded-lg min-h-[180px] h-[190px] w-full p-3 !antialiased  ">
                  <div className="p-3 z-10 w-full justify-start shrink-0 subpixel-antialiased rounded-t-lg flex flex-col items-start gap-1 pb-[-5px]">
                    <div className="flex justify-start gap-2">
                      <p className="text-xs font-semibold">{item.name}</p>
                      <div className="relative flex text-gray-300">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${
                              i < item.stars
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.174 3.617a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.084 2.24a1 1 0 00-.364 1.118l1.174 3.618c.3.92-.755 1.688-1.54 1.118l-3.084-2.24a1 1 0 00-1.176 0l-3.084 2.24c-.784.57-1.838-.197-1.539-1.118l1.173-3.618a1 1 0 00-.364-1.118L2.424 9.044c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.174-3.617z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#0d766e"
                        viewBox="0 0 24 24"
                        className="h-[15px] w-[15px]"
                        data-sentry-element="IconReviewCheck"
                        data-sentry-source-file="review-card.component.tsx"
                      >
                        <path d="M19.965 8.521Q20 8.26 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8q0 .26.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A4 4 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16q0-.26-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479m-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42z"></path>
                      </svg>
                      <p className="text-[11px]">Verified Customers</p>
                    </div>
                  </div>
                  <div className="relative flex w-full p-3 flex-auto flex-col h-auto break-words text-left overflow-y-auto subpixel-antialiased pt-0 text-sm ">
                    <p className="line-clamp-3">{item.review}</p>
                  </div>
                  <div className="p-3 h-auto w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large flex justify-end text-[11px]">
                    <p>
                      {item.location} {item.time}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 top-20 -left-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="swiper-button-prev rotate-180 z-0  inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden transform-gpu text-tiny gap-2 rounded-sm px-0 min-w-5 w-5 h-5 bg-transparent !text-[#317873]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              ></path>
            </svg>
          </div>
          <div className="absolute inset-0 top-20 -right-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="swiper-button-next z-0 relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden transform-gpu text-tiny gap-2 rounded-sm px-0 min-w-5 w-5 h-5 bg-transparent !text-[#317873]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
