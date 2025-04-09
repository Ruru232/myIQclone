import Image from 'next/image';
import { CardsData } from './_lib/data';

export default function Footer() {
  return (
    <div className="w-full mt-auto">
      <div className="w-full mt-10 md:mt-16 bg-[#001B36] py-6 lg:py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col max-[1320px]:px-6 max-md:px-4">
          <div className="flex flex-col justify-between md:flex-row md:gap-5">
            <div className="flex flex-col justify-start gap-6">
              <div className="w-fit">
                <Image
                  src="/img/logo2.svg"
                  width={108}
                  height={31}
                  alt="My IQ Logo"
                  priority
                />
                <ul className="flex gap-4 text-white mt-5">
                  <li className="h-6 w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 26 27"
                    >
                      <path
                        fill="currentColor"
                        d="M15.42 11.679 24.89.669h-2.244l-8.224 9.56L7.854.669H.28l9.932 14.456L.28 26.67h2.244l8.684-10.095 6.936 10.095h7.576zm-3.075 3.573-1.006-1.44L3.332 2.36H6.78l6.462 9.243 1.006 1.439 8.4 12.015H19.2l-6.854-9.804z"
                      ></path>
                    </svg>
                  </li>
                  <li className="h-6 w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 28 29"
                    >
                      <path
                        fill="currentColor"
                        d="M8.202.768c-1.49.07-2.507.308-3.396.657-.92.359-1.7.84-2.477 1.619a6.9 6.9 0 0 0-1.61 2.48c-.345.892-.578 1.91-.644 3.4s-.08 1.97-.073 5.772c.007 3.8.024 4.278.096 5.772.07 1.489.308 2.506.657 3.396.359.92.84 1.7 1.619 2.477a6.86 6.86 0 0 0 2.483 1.61c.89.344 1.909.579 3.399.644s1.97.08 5.77.073c3.802-.007 4.28-.024 5.774-.095s2.505-.31 3.395-.657c.92-.36 1.7-.84 2.477-1.62a6.85 6.85 0 0 0 1.609-2.483c.345-.89.579-1.91.644-3.398.065-1.494.08-1.971.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397a6.9 6.9 0 0 0-1.62-2.477 6.8 6.8 0 0 0-2.482-1.61c-.891-.344-1.91-.58-3.4-.643S17.775.663 13.974.67 9.695.694 8.202.766m.164 25.309c-1.365-.06-2.106-.286-2.6-.476a4.4 4.4 0 0 1-1.612-1.044 4.3 4.3 0 0 1-1.05-1.608c-.192-.494-.423-1.234-.487-2.6-.07-1.474-.084-1.917-.092-5.655s.006-4.18.07-5.656c.059-1.364.287-2.106.477-2.6a4.34 4.34 0 0 1 1.044-1.612 4.3 4.3 0 0 1 1.608-1.05c.493-.193 1.234-.422 2.598-.487 1.476-.07 1.919-.084 5.656-.092s4.18.006 5.658.07c1.364.06 2.106.286 2.599.477.654.252 1.12.555 1.612 1.044s.795.954 1.05 1.609c.194.492.423 1.232.487 2.597.07 1.476.086 1.919.093 5.656s-.006 4.18-.071 5.656c-.06 1.365-.286 2.106-.476 2.6a4.34 4.34 0 0 1-1.045 1.613 4.3 4.3 0 0 1-1.608 1.05c-.493.192-1.234.422-2.597.487-1.476.069-1.92.084-5.657.092s-4.181-.007-5.657-.071M19.779 7.187a1.68 1.68 0 1 0 3.36-.006 1.68 1.68 0 0 0-3.36.006M6.812 14.683a7.19 7.19 0 0 0 14.378-.028 7.19 7.19 0 0 0-14.378.028m2.523-.005a4.667 4.667 0 1 1 9.334-.022 4.667 4.667 0 0 1-9.334.024"
                      ></path>
                    </svg>
                  </li>
                  <li className="h-6 w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 28 29"
                    >
                      <path
                        fill="currentColor"
                        d="M14 .67c-7.732 0-14 6.268-14 14 0 6.566 4.52 12.075 10.618 13.588v-9.31H7.731V14.67h2.887v-1.843c0-4.765 2.156-6.974 6.835-6.974.887 0 2.417.174 3.043.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296 0-3.183.87-3.183 3.13v1.513h4.573l-.786 4.278h-3.787v9.619C22.628 27.73 28 21.827 28 14.67c0-7.732-6.268-14-14-14"
                      ></path>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-5">
              <div className="text-white max-md:mt-6 md:mr-10 lg:mr-10 ">
                <p className="mb-4 text-lg font-semibold">Customer Support</p>
                <p className="text-base font-medium">How to Cancel</p>
                <button className="mt-3 flex max-w-[200px] items-center justify-center gap-3 rounded-full border-2 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-[#001B36] text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 16v2a4 4 0 0 1-4 4h-5"
                    ></path>
                  </svg>
                  Customer Support
                  <br />
                  24/7/365
                </button>
              </div>
              <ul className="mb-6 flex flex-col gap-4 max-md:mt-4 md:flex-row md:gap-20 lg:mb-12">
                <li>
                  <p className="mb-4 text-lg font-semibold text-white">Legal</p>
                  <ul className="flex flex-col gap-2 text-base font-medium text-white">
                    <li>Privacy Policy</li>
                    <li>Terms & Condition</li>
                    <li>Cookie Policy</li>
                    <li>Refund Policy</li>
                  </ul>
                </li>
                <li>
                  <p className="mb-4 text-lg font-semibold text-white">
                    About Us
                  </p>
                  <ul className="flex flex-col gap-2 text-base font-medium text-white">
                    <li>Help</li>
                    <li>Blog</li>
                    <li>Reviews</li>
                    <li>Pricing</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <hr className="w-full h-px bg-gray-500 border-none" />
          <div className="w-full pt-6">
            <div className="flex flex-col gap-4 items-start md:items-end">
              <button className="relative inline-flex items-center box-border appearance-none select-none whitespace-nowrap font-normal overflow-hidden transform-gpu outline-none border-2 px-4 h-10 text-sm gap-2 rounded-md subpixel-antialiased w-auto min-w-32 justify-between text-white">
                <span className="max-w-full overflow-hidden truncate">
                  English
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down shrink-0 transform cursor-pointer text-white transition-transform duration-300 ease-in-out  ml-auto )}"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
            <div className="flex w-full flex-col justify-between gap-4 lg:flex-row lg:items-center mt-4">
              <div className="text-base text-white">
                <p>
                  Copyright © 2024-2025 myIQ™. All rights reserved. All
                  trademarks referenced herein are the properties of their
                  respective owners.
                </p>
              </div>
              <div className="justify-left lg:justify-end grow-1 flex gap-1.5 ">
                {CardsData.map((data, index) => (
                  <div
                    key={index}
                    className="flex h-8 w-[46px] items-center justify-center rounded-lg bg-white"
                  >
                    <Image
                      src={data.img}
                      width={38}
                      height={25}
                      alt="Cards Logo"
                      priority
                      className="h-[25px] w-[38px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
