import React from 'react';

interface RatingStarsProps {
  rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps) {
  return (
    <div className="relative flex text-gray-300">
      {[...Array(5)].map((_, i) => {
        const percent = Math.min(100, Math.max(0, (rating - i) * 100));
        return (
          <div key={i} className="relative w-[17px] h-[17px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              width="17"
              height="17"
              className="absolute"
            >
              <path
                fillRule="evenodd"
                d="M10 15.27L16.18 18l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l4.46 3.73L3.82 18z"
                clipRule="evenodd"
              />
            </svg>
            <div
              className="absolute top-0 overflow-hidden text-[#f7b635]"
              style={{ width: `${percent}%` }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                width="17"
                height="17"
              >
                <path
                  fillRule="evenodd"
                  d="M10 15.27L16.18 18l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l4.46 3.73L3.82 18z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}
