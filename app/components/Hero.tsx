import Image from 'next/image';
import ProfileIcons from './ProfileIcons';
import SponsorsCarousel from './SponsorsCarousel';

export default function Hero() {
  return (
    <div className="relative overflow-x-hidden h-[770px] md:h-[630px]">
      <div className="mx-auto w-full max-w-7xl pt-6 md:pt-16 max-[1320px]:px-6 max-md:px-4">
        <div className="relative z-0 flex h-full w-full flex-col pt-14 lg:pt-[84px] text-black">
          <div className="flex h-full w-full flex-col-reverse items-center gap-5 md:flex-row md:justify-between">
            <div className="flex w-full flex-col gap-3 md:gap-4 ">
              <h1 className="text-[32px] font-extrabold leading-[35px] md:text-[48px] md:leading-[57px]">
                <span className="inline-block bg-gradient-to-r from-[#2c3345] to-[#424D6A] bg-clip-text text-transparent">
                  Want to Know Your
                </span>
                <br className="max-md:hidden" />
                <span className="inline-block bg-gradient-to-r from-[#27415F] via-[#007AFF] to-[#007AFF] bg-clip-text text-transparent">
                  Real IQ Score?
                </span>
              </h1>
              <p className="text-base leading-[25px] text-[#2B2D42] lg:max-w-[325px] lg:text-[18px]">
                Take our IQ test and unlock your path to self-discovery and
                development
              </p>
              <div className="mt-2 flex gap-3 max-sm:flex-wrap md:mt-4 md:gap-6">
                <button className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap bg-teal-700 text-white h-12 hover:opacity-80 rounded-xl px-6 !text-base max-lg:w-full sm:max-w-[306px] md:px-8 md:gap-4 lg:gap-6">
                  Start IQ Test Now
                  <Image
                    src="/img/arrow.svg"
                    width={14}
                    height={14}
                    alt="arrow"
                    priority
                    style={{ width: '14px', height: '14px' }}
                    className="hidden md:inline"
                  />
                </button>
                <button className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden px-6 min-w-20 rounded-xl h-12 gap-3 border-2 border-teal-700 text-teal-700 hover:text-white max-lg:w-full hover:bg-teal-700 ">
                  How It Works
                </button>
              </div>
              <ProfileIcons />
            </div>
            <div className="flex h-full w-full scale-[1.2]">
              <Image
                src="/img/graph.webp"
                alt="graph"
                width={517}
                height={292}
                priority
              />
            </div>
            <div className="absolute bottom-[-65px] w-full overflow-hidden px-6 lg:bottom-[-100px]">
              <SponsorsCarousel />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 z-[-1] h-full w-full bg-gradient-to-b from-white via-[#EBF4FF] to-white "></div>
    </div>
  );
}
