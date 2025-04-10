import Image from 'next/image';
import { AvailableTestData } from './_lib/data';

export default function AvailableTest() {
  return (
    <div className="relative z-0 py-6 md:py-8">
      <div className="mx-auto w-full max-w-7xl max-[1320px]:px-6 max-md:px-4">
        <h3 className="text-center text-[28px] font-semibold text-[#2C3345] md:text-[39px]">
          AvailableTest
        </h3>
        <p className="pt-1.5 text-center text-base text-[#2C3345] md:pt-2.5 md:text-[18px]">
          Each test reveals a new part of you. Start with intelligence, with
          more tests coming soon
        </p>
        <div className="grid grid-rows-4 gap-4 pt-6 max-lg:grid-cols-2 max-lg:grid-rows-2 max-md:grid-cols-1 md:gap-6 md:pt-8 lg:grid-cols-4 lg:grid-rows-1">
          {AvailableTestData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none shadow-none rounded-lg w-full border-1 border-[#E2E8F0] bg-white"
            >
              <div className="relative flex w-full p-3 flex-auto flex-col h-auto break-words text-left overflow-y-auto gap-2.5 px-4 py-6 antialiased max-md:items-center max-sm:items-start md:gap-3">
                <Image
                  src={item.img}
                  width={38}
                  height={38}
                  alt="Available Test Logo"
                  style={{ width: '38px', height: '38px' }}
                  priority
                />
                <p className="text-[18px] font-semibold text-[#2C3345]">
                  {item.title}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#454F69]">
                  <div className="flex items-center gap-1.5">
                    <Image
                      src="/img/time.svg"
                      width={16}
                      height={16}
                      alt="Clock Icon"
                      style={{ width: '16px', height: '16px' }}
                      priority
                    />
                    <p>{item.time}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Image
                      src="/img/questions.svg"
                      width={16}
                      height={16}
                      alt="Question Icon"
                      style={{ width: '16px', height: '16px' }}
                      priority
                    />
                    <p>{item.questions}</p>
                  </div>
                </div>
                <button
                  disabled={item.button === 'Coming Soon'}
                  className={`z-0 relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden outline-none min-w-24 shadow-lg gap-3 h-12 w-full rounded-xl px-6 md:px-8 lg:max-w-[306px]
                    ${
                      item.button === 'Coming Soon'
                        ? 'bg-[#0D766E] text-white cursor-not-allowed opacity-50'
                        : 'bg-[#0D766E] text-white'
                    }`}
                >
                  {item.button}
                  {item.button === 'Start IQ Test Now' && (
                    <Image
                      src="/img/arrow.svg"
                      alt="Arrow Icon"
                      width={15}
                      height={14}
                      priority
                      style={{ width: '15px', height: '14px' }}
                    />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 z-[-1] h-full w-full bg-[#F6FBFF] "></div>
    </div>
  );
}
