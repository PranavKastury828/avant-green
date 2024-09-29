import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import localFont from "@next/font/local";
import storiescta from "../../public/stories-cta.jpeg";

const futuraFontThin = localFont({
  src: "../../public/FuturaPT/FuturaCyrillicLight.ttf",
});

const futuraFontRegular = localFont({
  src: "../../public/FuturaPT/FuturaCyrillicDemi.ttf",
});
const futuraFontBold = localFont({
  src: "../../public/FuturaPT/FuturaCyrillicBold.ttf",
});
const futuraFontHeavy = localFont({
  src: "../../public/FuturaPT/FuturaCyrillicHeavy.ttf",
});
const futuraFontMedium = localFont({
  src: "../../public/FuturaPT/FuturaCyrillicMedium.ttf",
});

export function Portfolio({ portfolio }) {
  return (
    <div
      className={
        futuraFontRegular.className +
        " no-scrollbar pb-[100px]" +
        futuraFontBold.className
      }
    >
      <div
        className={
          futuraFontMedium.className +
          " flex justify-between border-b-2 border-apres-huit pb-[20px] mb-[40px]"
        }
      >
        <h4 className="text-xl text-body-text">{portfolio.service}</h4>
        <h4 className="text-xl text-body-text">{portfolio.date}</h4>
      </div>
      <div className="relative h-[70vh] w-full">
        <Image
          src={urlFor(portfolio.image).url()} // Replace this with the path to your image
          layout="fill"
          objectFit="cover"
          alt="Background"
          className="z-0 max-h-[662px] rounded-xl"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-apres-huit opacity-10 z-10 max-h-[662px]"></div>
        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center z-20 max-h-[662px]">
          <h1 className="text-centre-parfait text-4xl md:text-6xl font-bold text-center">
            {portfolio.title}
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center mb-[100px]">
        <div className="max-w-[960px]">
          <h2
            className={
              futuraFontRegular.className +
              " text-5xl text-apres-huit mb-[48px]"
            }
          >
            {portfolio.heading}
          </h2>
          <p
            className={futuraFontRegular.className + " text-xl text-apres-huit"}
          >
            {portfolio.summary}
          </p>
        </div>
        <div>
          <a href="#">
            <a className="text-xl text-apres-huit bg-avant-green py-[8px] px-[16px] rounded-[40px] hover:rounded-[4px] transition-all duration-[400ms] font-bold">
              read more
            </a>
          </a>
        </div>
      </div>
    </div>
  );
}
