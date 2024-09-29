// "use client"
import Image from "next/image";
import Link from "next/link";
import localFont from "@next/font/local";
import { client } from "@/sanity/lib/client";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/Card";
import { Banner } from "@/components/Banner";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import homeServicesOne from "../../public/home-services-1.png";
import homeServicesTwo from "../../public/home-services-2.png";
import homeServicesThree from "../../public/home-services-3.png";
import meetTheTeam from "../../public/meet-the-team.png";

async function getData() {
  const query = `*[_type=='name'] {
        name, quote, organization, profession, image
    }`;
  const datas = await client.fetch(query);
  return datas;
}

const futuraFontRegular = localFont({
  src: "../../public/FuturaPT/FuturaCyrillicDemi.ttf",
});
const futuraFontBold = localFont({
  src: "../../public/FuturaPT/FuturaCyrillicBold.ttf",
});

export default async function Home() {
  const datas = await getData();
  const images = [
    // Replace with your image URL
    homeServicesOne,
    homeServicesTwo,
    homeServicesThree,
  ];

  const texts = [
    "trend \ncuration",
    "design to prototyping",
    "sustainability management",
  ];
  const text = "check out our sustainable fashion statements";

  return (
    <main
      className={
        futuraFontRegular.className +
        " no-scrollbar " +
        futuraFontBold.className
      }
    >
      <header className="relative h-screen bg-cover bg-center background-header max-h-[80vh]">
        <div className="overlay">
          <Navbar />
          <div className="flex justify-center items-center mb-[80px]">
            <h1 className="text-centre-parfait text-5xl text-center">
              Making sustainable fashion <br /> the new normal
            </h1>
          </div>
          <div className="flex justify-center items-center gap-[32px]">
            <Link
              href="/contact"
              className="text-xl text-apres-huit bg-avant-green py-[8px] px-[16px] rounded-[40px] hover:rounded-[4px] transition-all duration-[400ms]"
            >
              book a free consultation
            </Link>
            <Link
              className="text-xl text-centre-parfait bg-transparent border-2 border-centre-parfait py-[8px] px-[16px] rounded-[40px] hover:rounded-[4px] hover:bg-avant-green transition-all duration-[400ms]"
              href="/services"
            >
              our services
            </Link>
          </div>
        </div>
      </header>
      <section className="pt-[200px] pb-[100px] max-w-[1440px] mx-auto px-[70px]">
        <div className="flex justify-between items-center">
          <div className="block col-1">
            <h2 className="text-apres-huit text-5xl font-medium mb-[72px]">
              why avant green
            </h2>
            <p className="text-xl text-body-text max-w-[520px] font-normal">
              A myriad gradual changes must be made for a fashion business to
              become green. {" "}
            </p>
            <br />

            <p className="text-xl text-body-text max-w-[520px] font-normal">
              It is this process of transformation that inspires us, the many
              opportunities to make positive impact in an industry rife with
              challenges.{" "}
            </p>
            <br />

            <p className="text-xl text-body-text max-w-[520px] mb-[72px] font-normal">
              We are driven by our passion to consume the earth’s resources
              consciously, and to create a better future for everyone.
            </p>
            <Link
              href="/work"
              className="text-xl text-apres-huit bg-avant-green py-[8px] px-[16px] rounded-[40px] hover:rounded-[4px] transition-all duration-[400ms]"
            >
              view our work
            </Link>
          </div>
          <div className="block col-2"></div>
        </div>
      </section>

      <section className="pt-[100px] pb-[100px] max-w-[1440px] mx-auto px-[70px]">
        <div>
          <h2 className="text-apres-huit text-5xl font-medium mb-[72px]">
            what we offer
          </h2>
          <p className="text-xl text-body-text max-w-[520px] font-normal mb-[72px]">
            Our services apply to changemaking brands and suppliers in the
            fashion and lifestyle industry, worldwide. Whether you’re looking to
            have a gradual or dramatic transformation, we have the tools. {" "}
          </p>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <Card key={index} image={image} text={texts[index]} />
            ))}
          </div>
        </div>
      </section>
      <Banner text={text} />
      <section className="mx-auto py-[100px] pl-[70px]">
        <div className="flex w-full justify-center items-center">
          <h2 className="text-apres-huit text-5xl font-medium mb-[72px]">
            testimonials
          </h2>
        </div>
        <div className="overflow-x-auto whitespace-nowrap py-4 no-scrollbar">
          <div className="inline-flex gap-[100px] pb-[32px]">
            {datas.map((data) => (
              <>
                <Testimonials
                  data={data}
                  key={data.quote}
                  className="min-w-[5050px]"
                />
              </>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto py-[100px]">
        <div className="stories-cta">
          <div className=" overlay py-[167px] flex flex-col justify-center items-center gap-[60px]">
            <h2
              className={
                futuraFontRegular.className +
                " text-6xl text-centre-parfait font-normal"
              }
            >
              STORIES OF SUSTAINABILITY
            </h2>
            <Link
              href="/stories"
              className="text-xl text-apres-huit bg-avant-green py-[8px] px-[16px] rounded-[40px] hover:rounded-[4px] transition-all duration-[400ms]"
            >
              read our stories
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-[200px] pb-[100px] max-w-[1440px] mx-auto px-[70px]">
        <div className="flex justify-between items-center">
          <div className="block col-1">
            <h2 className="text-apres-huit text-5xl font-medium mb-[72px]">
              It takes a village
            </h2>
            <p className="text-xl text-body-text max-w-[520px] font-normal">
              Tapping into a global talent pool with diverse skills, we offer
              high quality services that can evolve into long-term partnerships.
              We believe in paving the way for a sustainable fashion industry,
              one mindful step at a time.{" "}
            </p>
            <br />
            <div className="group">
              <Link
                href="/work"
                className="flex justify-start items-center text-xl text-apres-huit transition-all duration-[400ms] text-xl text-link hover:text-link-hover duration-[400ms] transition-all underline"
              >
                meet the team
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ease-in-out transition-all duration-[400ms]"
                >
                  <g id="Active?=Yes">
                    <path
                      id="Vector"
                      d="M5 12H19"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="ease-in-out hidden group-hover:block transition-all duration-[400ms]"
                    />
                    <path
                      id="Vector_2"
                      d="M12 5L19 12L12 19"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
          <div className="block col-2">
            <Image
              src={meetTheTeam}
              alt="meet the team | AVant Green"
              className="max-w-[576px] max-h-[576px] object-cover rounded-[24px]"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
