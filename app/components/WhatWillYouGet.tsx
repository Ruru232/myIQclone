import { WhatWillYouGetData } from './_lib/data';

export default function WhatWillYouGet() {
  return (
    <div className="relative z-0 py-6 md:py-4">
      <div className="mx-auto w-full max-w-7xl max-[1320px]:px-6 max-md:px-4">
        <div className="relative z-0 flex flex-col items-center gap-2 py-6 md:py-10">
          <div className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap border-2 px-1 h-7 text-small rounded-full bg-transparent border-blue-500 text-blue-500">
            <span className="flex-1 text-inherit font-normal px-2">
              BENEFITS
            </span>
          </div>
          <h4 className="text-[28px] font-semibold text-[#2C3345] md:text-[39px]">
            What Will You Get
          </h4>
          <div className="overflow-x-auto pt-5 max-lg:w-[calc(100vw-48px)] scrollbar-hidden">
            <div className="flex gap-6">
              {WhatWillYouGetData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none shadow-none max-w-[236px] shrink-0 rounded-lg border border-[#D9E7FF] max-lg:w-[236px]"
                >
                  <div className="relative flex w-full flex-auto flex-row h-auto break-words text-left overflow-y-auto items-start gap-4 p-4 antialiased md:py-6">
                    <div className="p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 22 22"
                        className="h-[22px] min-w-[22px]"
                      >
                        <path
                          fill="#007AFF"
                          d="M21.3 11a1.53 1.53 0 0 0-.57-1.194L19.378 8.68l.62-1.611a1.544 1.544 0 0 0-1.195-2.067l-1.735-.3-.27-1.705a1.545 1.545 0 0 0-2.067-1.194l-1.651.609-1.086-1.343a1.583 1.583 0 0 0-2.388 0L8.479 2.422l-1.61-.62A1.545 1.545 0 0 0 4.8 2.999l-.299 1.735L2.797 5a1.545 1.545 0 0 0-1.194 2.068l.609 1.652L.869 9.805a1.545 1.545 0 0 0 0 2.388l1.353 1.127-.62 1.61a1.545 1.545 0 0 0 1.195 2.068l1.734.3.27 1.705a1.545 1.545 0 0 0 2.067 1.194l1.652-.61 1.086 1.343a1.545 1.545 0 0 0 2.388 0l1.126-1.353 1.611.62a1.544 1.544 0 0 0 2.068-1.194l.3-1.736L18.801 17a1.545 1.545 0 0 0 1.195-2.068l-.609-1.652 1.343-1.085A1.53 1.53 0 0 0 21.3 11"
                        ></path>
                        <path
                          fill="#F5F5F5"
                          d="M9.39 14.537a2.23 2.23 0 0 1-1.344-.446l-1.82-1.366a.75.75 0 1 1 .899-1.2l1.821 1.366a.755.755 0 0 0 1.043-.14l4.344-5.587a.75.75 0 1 1 1.185.922l-4.346 5.586a2.26 2.26 0 0 1-1.782.865"
                        ></path>
                      </svg>
                    </div>
                    <p className="max-w-[80%] text-sm text-[#2C3345]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 z-[-1] h-full w-full bg-[#F6FBFF] "></div>
    </div>
  );
}
