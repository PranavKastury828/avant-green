import { NavbarLight } from "@/components/NavbarLight";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/Card";
import homeServicesOne from "../../../public/home-services-1.png";
import homeServicesTwo from "../../../public/home-services-2.png";
import homeServicesThree from "../../../public/home-services-3.png";
import localFont from "@next/font/local";

const futuraFontThin = localFont({
  src: "../../../public/FuturaPT/FuturaCyrillicLight.ttf",
});
const futuraFontRegular = localFont({
  src: "../../../public/FuturaPT/FuturaCyrillicDemi.ttf",
});
const futuraFontBold = localFont({
  src: "../../../public/FuturaPT/FuturaCyrillicBold.ttf",
});

const text = "check out our sustainable fashion statements";
export default async function Contact() {
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
      <NavbarLight />
      <section className="pt-[100px] pb-[100px] pl-[70px]  max-w-[1440px] mx-auto">
        <h2 className="text-avant-green text-6xl font-medium mb-[72px]">
          let's begin
        </h2>
        <p
          className={
            futuraFontRegular.className +
            " text-xl text-body-text max-w-[520px] font-thin mb-[100px]"
          }
        >
          We are excited to help your brand make an impact in the industry and
          the world.
        </p>
      </section>
      <section className="pt-[100px] pb-[100px] pl-[70px]  max-w-[1440px] mx-auto flex justify-center items-center">
        <form className="max-w-[634px] w-[634px]">
          <input
            type="text"
            placeholder="name"
            className="border-b-2 border-apres-huit block mb-[60px] w-full"
          />
          <input
            type="text"
            placeholder="company/organization"
            className="border-b-2 border-apres-huit block mb-[60px] w-full"
          />
          <input
            type="number"
            placeholder="how large is your organization"
            className="border-b-2 border-apres-huit block mb-[60px] w-full"
          />
          <input
            type="email"
            placeholder="email address"
            className="border-b-2 border-apres-huit block mb-[60px] w-full"
          />
          <input
            type="phone"
            placeholder="contact number"
            className="border-b-2 border-apres-huit block mb-[60px] w-full"
          />
          <h2 className="text-xl text-apres-huit mb-[16px]">
            what services are you interested in?
          </h2>
          <textarea
            rows="8"
            className="border-2 border-apres-huit p-1 rounded-xl w-full mb-[72px]"
          ></textarea>
          <div>
            <button
              type="submit"
              className=" text-xl text-white rounded-3xl py-[12px] px-[24px] bg-avant-green hover:rounded-sm transition-all duration-[400ms] ease-in-out"
            >
              submit
            </button>
          </div>
        </form>
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
      <Footer />
    </main>
  );
}
