import { client } from '@/sanity/lib/client'
import { Testimonials } from "@/components/Testimonials";
import { NavbarLight } from "@/components/NavbarLight";
import { Card } from "@/components/Card";
import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import Link from "next/link";
import Image from "next/image";
import localFont from "@next/font/local";
import homeServicesOne from '../../../public/home-services-1.png';
import homeServicesTwo from '../../../public/home-services-2.png';
import homeServicesThree from '../../../public/home-services-3.png';

const futuraFontRegular = localFont({
  src: '../../../public/FuturaPT/FuturaCyrillicDemi.ttf'
})
const futuraFontBold = localFont({
  src: '../../../public/FuturaPT/FuturaCyrillicBold.ttf'
})
const futuraFontThin = localFont({
  src: '../../../public/FuturaPT/FuturaCyrillicLight.ttf'
})

async function getData() {
  const query = `*[_type=='name'] {
        name, quote, organization, profession, image
    }`;
  const datas = await client.fetch(query)
  return datas
}

export default async function Services() {
  const datas = await getData();
  const images = [
  // Replace with your image URL
  homeServicesOne, homeServicesTwo, homeServicesThree
  ];
  
  const texts = ["trend \ncuration", 'design to prototyping', 'sustainability management'];
  const text = 'check out our sustainable fashion statements'

    return (
        <main className={futuraFontRegular.className + ' no-scrollbar ' + futuraFontBold.className}> 
            <NavbarLight />
            <section className="max-w-[1440px] mx-auto px-[70px]">
                 <h2 className='text-avant-green text-6xl font-medium mb-[72px]'>services</h2>
                  <p className={futuraFontRegular.className + ' text-xl text-body-text max-w-[520px] font-thin mb-[100px]'}>Our services apply to changemaking brands and suppliers in the fashion and lifestyle industry,
            worldwide. Whether you’re lookingto have a gradual or dramatic transformation, we have the tools.</p>
                 <div className="grid grid-cols-3 gap-4">
                    {images.map((image, index) => (
                      <Card key={index} image={image} text={texts[index]} />
        
                    ))}
                   </div>
        </section>
        <section className="mx-auto py-[100px] pl-[70px]">
          <div className='overflow-x-auto whitespace-nowrap py-4 no-scrollbar'>
          <div className="inline-flex gap-[100px] pb-[32px]">
        {datas.map((data) => (
          <>
              <Testimonials data={data} key={data.quote} className='min-w-[5050px]'/>
          </>
        ))}
            </div>
        </div>
        </section>
        <Banner text={text} />
        <Footer/>
        </main>
    )
}