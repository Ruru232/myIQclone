import Image from 'next/image';
import { HowItWorksData } from './_lib/data';

export default function HowItWorks() {
  return (
    <div className="mx-auto w-full max-w-7xl max-[1320px]:px-6 max-md:px-4 ">
      <div className="w-full pb-6 pt-3 md:pb-10 ">
        <h3 className="text-center text-[28px] font-semibold text-[#2C3345] md:text-[39px]">
          How it Works
        </h3>
        <div className="flex w-full gap-3 pt-6 max-md:flex-col md:gap-6 md:pt-8">
          {HowItWorksData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col relative overflow-hidden h-auto text-foreground box-border shadow-none rounded-lg border-1 w-full border-[#D9E7FF]"
            >
              <div className="relative flex w-full flex-auto flex-col h-auto break-words text-left overflow-auto gap-3 p-4 antialiased md:px-8 md:pt-[42px]">
                <Image
                  src={data.img}
                  alt="Icon"
                  width={38}
                  height={38}
                  priority
                  style={{ width: '38px', height: '38px' }}
                />
                <p className="text-[18px] font-semibold text-[#2C3345]">
                  {data.title}
                </p>
                <p className="text-sm">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
