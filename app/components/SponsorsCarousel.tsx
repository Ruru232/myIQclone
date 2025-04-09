import { svgSponsors } from './_lib/svg';

export default function SponsorsCarousel() {
  return (
    <div className="flex w-full overflow-x-hidden mx-auto max-w-[90dvw] custom-gap custom-duration">
      <div className="relative flex animate-scrolling-banner gap-10 w-max items-stretch ">
        {[...svgSponsors, ...svgSponsors, ...svgSponsors].map((Icon, index) => (
          <span key={index}>{Icon}</span>
        ))}
      </div>
      <div className="absolute top-0 left-0 h-full w-10 md:w-36 bg-white/85 "></div>
      <div className="absolute top-0 right-0 h-full w-10 md:w-36 bg-white/85 "></div>
    </div>
  );
}
