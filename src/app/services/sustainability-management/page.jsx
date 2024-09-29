"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import localFont from "@next/font/local";
import { NavbarLight } from "@/components/NavbarLight";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Accordion } from "@/components/Accordion";
import forBrands from "../../../../public/for-brands.jpeg";
import forSuppliers from "../../../../public/for-suppliers.jpeg";

const futuraFontThin = localFont({
  src: "../../../../public/FuturaPT/FuturaCyrillicLight.ttf",
});
const futuraFontRegular = localFont({
  src: "../../../../public/FuturaPT/FuturaCyrillicDemi.ttf",
});
const futuraFontBold = localFont({
  src: "../../../../public/FuturaPT/FuturaCyrillicBold.ttf",
});
export default function SustainabilityManagement() {
  const [activeAccordion, setActiveAccordion] = useState(null); // null means no accordion is active

  const toggleAccordion = (accordion) => {
    setActiveAccordion((prev) => (prev === accordion ? null : accordion)); // Toggle between accordion states
  };

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
          sustainability management
        </h2>
        <p
          className={
            futuraFontRegular.className +
            " text-xl text-body-text max-w-[520px] font-thin mb-[100px]"
          }
        >
          Stay ahead of the curve through our collation of cutting-edge
          developments in sustainable fashion. 
          <br /> <br /> Be it global or local, we curate long lasting fashion
          trends to make your slow fashion brand or sustainable fashion capsule
          relevant to your end consumer. Get aesthetic and precise moodboards
          that can be customized and readily interpreted into conscious
          collections for your market.
        </p>
      </section>

      <section className="py-[100px] px-[70px] max-w-[1440px] mx-auto">
        <div className="flex group gap-x-[30px]">
          {/* For Brands Section */}
          {activeAccordion !== "brands" && (
            <motion.div
              className="relative rounded-xl cursor-pointer flex-1"
              id="wrapperForBrands"
              onClick={() => toggleAccordion("brands")}
              initial={{ opacity: 1 }}
              animate={{ opacity: activeAccordion === "brands" ? 0 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.4 }}
            >
              <Image
                src={forBrands}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-apres-huit bg-opacity-50 flex items-center justify-center rounded-xl">
                <span className="text-centre-parfait text-2xl font-bold">
                  For Brands
                </span>
              </div>
            </motion.div>
          )}

          {activeAccordion === "brands" && (
            <motion.div
              className="w-[960px] py-[60px] px-[48px] bg-body-yellow flex-1"
              id="accordionWrapperForBrands"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-5xl text-apres-huit">for brands</h2>
              <Accordion
                title="sustainability roadmap"
                answer="Define your sustainability objectives through a comprehensive materiality analysis, with an actionable roadmap aligned with your sustainability strategy."
              />
              <Accordion
                title="circular fashion solutions"
                answer="Access closed-loop solutions like upcycling or repair initiatives, eco-friendly packaging, and waste reduction strategies."
              />
              <Accordion
                title="sustainability communication"
                answer="Our team crafts communication guidelines and messages that resonate with your brand's impact goals, ensure transparency and keep you greenwashing-free."
              />
            </motion.div>
          )}

          {/* For Suppliers Section */}
          {activeAccordion !== "suppliers" && (
            <motion.div
              className="relative rounded-xl cursor-pointer flex-1"
              id="wrapperForSuppliers"
              onClick={() => toggleAccordion("suppliers")}
              initial={{ opacity: 1 }}
              animate={{ opacity: activeAccordion === "suppliers" ? 0 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={forSuppliers}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-apres-huit bg-opacity-50 flex items-center justify-center rounded-xl">
                <span className="text-centre-parfait text-2xl font-bold">
                  For Suppliers
                </span>
              </div>
            </motion.div>
          )}

          {activeAccordion === "suppliers" && (
            <motion.div
              className="w-[960px] py-[60px] px-[48px] bg-body-yellow flex-1"
              id="accordionWrapperForSuppliers"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-5xl text-apres-huit">for suppliers</h2>
              <Accordion
                title="certification roadmap"
                answer="Identify the most relevant sustainability standards LIKE GOTS, OEKO-Tex, GRS & more for you with a compliance roadmap to ace certification audits."
              />
              <Accordion
                title="material curation"
                answer="Amplify your sustainability efforts with a curated seasonal material library that aligns with trends and client needs."
              />
              <Accordion
                title="sustainability communication"
                answer="Convey your commitment to sustainable practices and showcase your impact with transparency."
              />
            </motion.div>
          )}
        </div>
      </section>

      <Banner text={text} />
      <Footer />
    </main>
  );
}
