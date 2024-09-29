import Image from "next/image";
import Link from "next/link";
import localFont from "@next/font/local";
import { NavbarLight } from "@/components/NavbarLight";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import sustainableOne from "../../../../public/sustainable-1.png";
import sustainableTwo from "../../../../public/sustainable-2.png";
import trendcurationpoints from "../../../../public/trendcuration-points2.png";
import trendOne from "../../../../public/trend-5.png";
import trendTwo from "../../../../public/trend-1.png";
import trendThree from "../../../../public/trend-2.png";
import trendFour from "../../../../public/trend-6.png";

const futuraFontThin = localFont({
  src: "../../../../public/FuturaPT/FuturaCyrillicLight.ttf",
});
const futuraFontRegular = localFont({
  src: "../../../../public/FuturaPT/FuturaCyrillicDemi.ttf",
});
const futuraFontBold = localFont({
  src: "../../../../public/FuturaPT/FuturaCyrillicBold.ttf",
});
export default function DesignToPrototype() {
  const text = "check out our sustainable fashion statements";
  return (
    <main
      className={
        futuraFontRegular.className +
        " no-scrollbar " +
        futuraFontBold.className
      }
    >
      <NavbarLight />
      <section className="max-w-[1440px] mx-auto px-[70px]">
        <h2 className="text-avant-green text-6xl font-medium mb-[72px]">
          design to prototype
        </h2>
        <p
          className={
            futuraFontRegular.className +
            " text-xl text-body-text max-w-[520px] font-thin mb-[100px]"
          }
        >
          We catalyze your brand’s sustainability journey with insightful
          design, guiding you from concept to pre-production prototyping.
        </p>
      </section>
      <section className="max-w-[1440px] mx-auto px-[70px] py-[100px]">
        <h2 className="text-apres-huit text-5xl font-medium mb-[72px] font-medium">
          explore the process
        </h2>
        <p
          className={
            futuraFontRegular.className +
            " max-w-[560px] text-xl text-body-text mb-[100px]"
          }
        >
          Our step-by-step methodology ensures that every part of the process is
          given due importance. Be it a startup or an established brand,
          avant-green ensures that we give you the best creation experience,
          paying attention to every detail along the way.
        </p>
      </section>
      <section className="max-w-[1440px] mx-auto px-[70px] py-[100px] ">
        <div
          className="flex max-w-[1084px] justify-start relative mb-[115rem]"
          id="2"
        >
          <div className="max-w-[480px] bg-body-yellow pl-[24px] pt-[32px] pb-[44px] pr-[32px] rounded-xl absolute z-10">
            <h2 className="text-apres-huit text-4xl font-medium mb-base font-medium">
              trend mapping
            </h2>
            <p
              className={
                futuraFontRegular.className +
                " max-w-[560px] text-xl text-body-text mb-[100px]"
              }
            >
              The most relevant sustainable fashion trends are curated for your
              project requirements
            </p>
          </div>
          <Image
            src={sustainableOne}
            alt=""
            className="absolute top-[20rem] left-[16rem] max-w-[420px] object-cover"
          />
          <div className="max-w-[480px] bg-body-yellow pl-[24px] pt-[32px] pb-[44px] pr-[32px] rounded-xl absolute top-[40rem] right-[2rem]">
            <h2 className="text-apres-huit text-4xl font-medium mb-base font-medium">
              range creation
            </h2>
            <p
              className={
                futuraFontRegular.className +
                " max-w-[560px] text-xl text-body-text mb-[100px]"
              }
            >
              Inspired and creative designs that are finetuned from initial
              concept to final sketches. With the edge of Clo-3D, you can access
              hyper real renditions.
            </p>
          </div>
          <div className="max-w-[508px] bg-body-yellow px-[24px] pt-[32px] pb-[44px]  rounded-xl absolute top-[80rem] z-10">
            <h2 className="text-apres-huit text-4xl font-medium mb-base font-medium">
              material research
            </h2>
            <p
              className={
                futuraFontRegular.className +
                " max-w-[560px] text-xl text-body-text mb-[100px]"
              }
            >
              Material choice is the foremost decision sustainable clothing. Be
              it organic cotton and banana silk or Recycled PET, we have it
              covered.
            </p>
          </div>
          <Image
            src={sustainableTwo}
            alt=""
            className="relative top-[100rem] left-[16rem] max-w-[420px] object-cover"
          />
          <div className="max-w-[508px] bg-body-yellow px-[24px] pt-[32px] pb-[44px] rounded-xl absolute top-[120rem] right-[2rem]">
            <h2 className="text-apres-huit text-4xl font-medium mb-base font-medium">
              supplier research
            </h2>
            <p
              className={
                futuraFontRegular.className +
                " max-w-[560px] text-xl text-body-text mb-[100px]"
              }
            >
              We recommend the best supplier for you from our database of
              suppliers compliant with global sustainability standards and
              certifications.
            </p>
          </div>
        </div>
        <div className="flex justify-center text-center items-center mb-[100px] mx-auto max-w-[1440px]">
          <h2 className="text-sm text-[#000] opacity-40">
            Disclaimer <br /> Part of the avant-green mission is to promote the
            efforts of sustainable material and clothing manufacturers. We do
            not participate in price negotiation, nor do we profit from our
            clients onboarding any entities. We only make a recommendation and
            work with the chosen partner to develop the end product.
          </h2>
        </div>
        <div className="max-w-[1440px] mx-auto my-[100px] px-[70px]">
          <h2 className="text-apres-huit text-5xl font-medium mb-[72px] font-medium">
            With our design to prototype service, avant-green can
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
        </div>
      </section>
      <Banner text={text} />
      <Footer />
    </main>
  );
}
