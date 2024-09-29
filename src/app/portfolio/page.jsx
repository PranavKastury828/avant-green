import { NavbarLight } from "@/components/NavbarLight";
import { CardHeavy } from "@/components/CardHeavy";
import { Portfolio } from "@/components/Portfolio";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import localFont from "@next/font/local";
import { portfolios } from "@/sanity/posts";

async function getData() {
  const query = `*[_type=='posts'] | order(_createdAt asc) {
  date, heading, image, title, service, summary, 
    "slug": slug.current
}`;
  const portfolios = await client.fetch(query);
  return portfolios;
}

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
export default async function Portfolios() {
  const portfolios = await getData();
  // console.log("hi", portfolios);
  // console.log("hhhh");
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
          a sustainable impact
        </h2>
        <p
          className={
            futuraFontRegular.className +
            " text-xl text-body-text max-w-[520px] font-thin mb-[100px]"
          }
        >
          We empower brands to achieve remarkable sustainability milestones. Our
          innovative solutions help reduce carbon footprints, increase
          eco-friendly materials, and set new environmental standards in
          fashion. Explore our success stories.
        </p>
      </section>
      <section className="pt-[100px] pb-[100px] pl-[70px]  max-w-[1440px] mx-auto">
        
        {portfolios.map((portfolio) => (
          <>
            <Portfolio portfolio={portfolio} key={portfolio.title} className='pb-[100px]'/>
          </>
        ))}
      </section>
      <Banner text={text} />
      <Footer/>
    </main>
  );
}
