'use client';
import Image from 'next/image';
import RatingStars from './RatingStarsProps';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';

export default function ProfileIcons() {
  const [isLoading, setIsLoading] = useState([true, true, true, true]);

  const handleImageLoad = (index: number) => {
    setIsLoading((prev) => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  const imageSources = [
    '/img/pfp1.jpg',
    '/img/pfp2.jpg',
    '/img/pfp3.jpg',
    '/img/pfp4.jpg',
  ];

  const allImagesLoaded = isLoading.every((val) => val === false);

  return (
    <div className="mt-[11px] flex md:mt-4">
      <div className="flex items-center justify-center h-auto w-max">
        {imageSources.map((src, index) => {
          const classNames = `relative flex justify-center items-center box-border overflow-hidden align-middle z-0 w-10 h-10 md:w-[50px] md:h-[50px] border-3 md:border-4 border-white ${
            index === 0 ? 'ms-0' : '-ms-6'
          } rounded-full`;

          return (
            <span key={index} className={classNames}>
              {isLoading[index] && (
                <Skeleton className="absolute w-full h-full rounded-full" />
              )}
              <Image
                src={src}
                alt="Profile Picture"
                width={50}
                height={50}
                priority
                onLoad={() => handleImageLoad(index)}
                className="flex object-cover w-full h-full rounded-full bg-white"
              />
            </span>
          );
        })}

        <div className="ml-4 flex flex-col text-sm text-[#2B2D42] md:text-base md:leading-6">
          <div className="flex flex-wrap max-md:flex-col md:items-center md:gap-1">
            <p>Excellent user reviews</p>
            <RatingStars rating={4.6} />
          </div>

          <div className="relative overflow-hidden h-5">
            {allImagesLoaded ? (
              <p>
                <span className="font-semibold">7869</span> IQ tests taken
                today!
              </p>
            ) : (
              <Skeleton className="w-44 h-5 rounded-md" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
