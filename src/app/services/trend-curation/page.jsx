import Image from "next/image";
import Link from "next/link";
import localFont from "@next/font/local";
import { NavbarLight } from "@/components/NavbarLight";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { CardBare } from "@/components/CardBare";
import trendcuration1 from "../../../../public/trendcuration-1.jpeg";
import trendcuration2 from "../../../../public/trendcuration-2.jpeg";
import trendcuration3 from "../../../../public/trendcuration-3.jpeg";
import trendcurationpoints from "../../../../public/trendcuration-points.jpeg";
import trendOne from "../../../../public/trend-1.png";
import trendTwo from "../../../../public/trend-2.png";
import trendThree from "../../../../public/trend-3.png";
import trendFour from "../../../../public/trend-4.png";

const futuraFontThin = localFont({
  src: "../../../../public/FuturaPT/FuturaCyrillicLight.ttf",
});
const futuraFontRegular = localFont({
  src: "../../../../public/FuturaPT/FuturaCyrillicDemi.ttf",
});
const futuraFontBold = localFont({
  src: "../../../../public/FuturaPT/FuturaCyrillicBold.ttf",
});

export default async function TrendCuration() {
  const cardImages = [trendcuration1, trendcuration2, trendcuration3];
  const text='check out our sustainable fashion statements'
  return (
    <main className={futuraFontRegular.className + " no-scrollbar "}>
      <NavbarLight />
      <section className="max-w-[1440px] mx-auto px-[70px]">
        <h2 className="text-avant-green text-6xl font-medium mb-[72px]">
          trend curation
        </h2>
        <p
          className={
            futuraFontRegular.className +
            " text-xl text-body-text max-w-[520px] font-thin mb-[100px]"
          }
        >
          Stay ahead of the curve through our collation of cutting-edge
          developments in sustainable fashion. 
          <br />
          <br />
          Be it global or local, we curate long lasting fashion trends to make
          your slow fashion brand or sustainable fashion capsule relevant to
          your end consumer. Get aesthetic and precise moodboards that can be
          customized and readily interpreted into conscious collections for your
          market.
        </p>
      </section>
      <section className="max-w-[1440px] mx-auto px-[70px] py-[100px]">
        <h2 className="text-apres-huit text-5xl font-medium mb-[72px] font-medium">
          macro trend curation
        </h2>
        <p
          className={
            futuraFontRegular.className +
            " max-w-[560px] text-xl text-body-text mb-[100px]"
          }
        >
          We interpret global macro trends to shape sustainability strategies
          and spark innovation
        </p>
        <div className="grid grid-cols-3 gap-4">
          {cardImages.map((image, index) => (
            <CardBare key={index} image={image} />
          ))}
        </div>
      </section>
      <section className="py-[100px] max-w-[1440px] mx-auto px-[70px]">
        <h2 className="text-apres-huit text-5xl font-medium mb-[72px] font-medium">
          micro trend curation
        </h2>
        <p
          className={
            futuraFontRegular.className +
            " max-w-[560px] text-xl text-body-text mb-[100px]"
          }
        >
          Discover color, silhouette, material, and print nuances that align
          with sustainability values and resonate with your brand.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {cardImages.map((image, index) => (
            <CardBare key={index} image={image} />
          ))}
        </div>
      </section>
      <section className="py-[100px] max-w-[1440px] mx-auto px-[70px]">
        <h2 className="text-apres-huit text-5xl font-medium mb-[72px] font-medium mb-[100px]">
          With our trend curation <br />
          service, avant-green can
        </h2>
        <div className="flex justify-start items-center gap-x-[72px]">
          <Image
            src={trendcurationpoints}
            alt="Card Image"
            className=" h-[700px] max-w-[550px] object-cover rounded-[24px]"
          />
          <div className="grid grid-cols-2 gap-[64px]">
            <div className="grid-item">
              <Image src={trendOne} alt="" className="mb-[16px]" />
              <h3
                className={
                  futuraFontRegular.className + " text-xl text-body-text"
                }
              >
                Highlight long lasting trends worthy of investment
              </h3>
            </div>
            <div className="grid-item">
              <Image src={trendTwo} alt="" className="mb-[16px]" />
              <h3
                className={
                  futuraFontRegular.className + " text-xl text-body-text"
                }
              >
                Conduct customized trend research for your product category
              </h3>
            </div>
            <div className="grid-item">
              <Image src={trendThree} alt="" className="mb-[16px]" />
              <h3
                className={
                  futuraFontRegular.className + " text-xl text-body-text"
                }
              >
                Elevate your brand’s storytelling with aesthetic trend packs
              </h3>
            </div>
            <div className="grid-item">
              <Image src={trendFour} alt="" className="mb-[16px]" />
              <h3
                className={
                  futuraFontRegular.className + " text-xl text-body-text"
                }
              >
                Provide a competitive edge with insights on the latest
                innovations
              </h3>
            </div>
          </div>
        </div>
      </section>
      <Banner text={text} />
      <Footer/>
    </main>
  );
}
