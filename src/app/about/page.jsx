import { NavbarLight } from "@/components/NavbarLight"
import { CardHeavy } from "@/components/CardHeavy";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import localFont from "@next/font/local";
import bentoOne from '../../../public/bento-1.jpeg';
import bentoTwo from '../../../public/bento-2.jpeg';
import bentoThree from '../../../public/bento-3.jpeg';
import card1 from '../../../public/cardheavy1.png'
import card2 from '../../../public/cardheavy2.png'
import card3 from '../../../public/cardheavy3.png'
import village1 from '../../../public/village1.png'
import radhika from '../../../public/radhika.png'
import eloy from '../../../public/eloy.png'
import arianna from '../../../public/arianna.png'
import manju from '../../../public/manju.png'
import gif1 from '../../../public/E_GIF_08.gif'
import gif2 from '../../../public/E_GIF_09.gif'
import gif3 from '../../../public/E_GIF_11.gif'
import gif4 from '../../../public/E_GIF_12.gif'
import gif5 from '../../../public/E_GIF_14.gif'
import gif6 from '../../../public/E_GIF_15.gif'


const futuraFontThin = localFont({
  src: '../../../public/FuturaPT/FuturaCyrillicLight.ttf'
})
const futuraFontRegular = localFont({
  src: '../../../public/FuturaPT/FuturaCyrillicDemi.ttf'
})
const futuraFontBold = localFont({
  src: '../../../public/FuturaPT/FuturaCyrillicBold.ttf'
})
export default function About() {

  const cardImages = [card1, card2, card3]
  const texts = ['people', 'planet', 'profit']
  const text = 'check out our sustainable fashion statements'
  const descriptions = ["We prioritize producers & manufacturers that are local to our clients, connect global talent, and provide opportunities while working towards a common cause.", 'We enable positive change by driving our clients closer to their environmental goals.', 'We help create valuable consumer goods that build viable businesses.'];
    return (
        <main className={futuraFontRegular.className + ' no-scrollbar ' + futuraFontBold.className}>  
            <NavbarLight />
            <section className='pt-[100px] pb-[100px] pl-[70px]  max-w-[1440px] mx-auto'>
        <div className='grid grid-cols-2  gap-[160px] relative mb-[72px]'>
          <div className='relative block col-1'>
            <h2 className='text-avant-green text-6xl font-medium mb-[72px]'>about us</h2>
            <p className={futuraFontRegular.className + ' text-xl text-body-text max-w-[520px] font-thin'}>avant-green is a B2B sustainable fashion consultancy that aims to support businesses in their sustainability journey. Becoming a green business is a meticulous process, with more intermediary shades than absolutes. We are here to be a catalyst in that journey, aid in the transformation that occurs avant-green, or, before green.
 </p><br/>
            <p className={futuraFontRegular.className + ' text-xl text-body-text max-w-[520px] font-thin mb-[72px]'}>We offer a comprehensive range of services tailored to meet the needs of fashion brands and suppliers, ensuring that every aspect of your business aligns with your sustainability goals </p><br/>

           <div className='mb-[200px]'><Link href='/contact' className='text-xl text-apres-huit bg-avant-green py-[8px] px-[16px] rounded-[40px] hover:rounded-[4px] transition-all duration-[400ms]' >book a free consultation</Link></div>
              
              <h2 className='text-apres-huit text-5xl font-medium mb-[72px] font-medium'>our impact</h2>
              <p className={futuraFontRegular.className + ' max-w-[560px] text-xl text-body-text '}>At avant-green, we see ourselves as partners in our clients’ progress towards their climate and social impact goals. We believe in consistent, measurable action over perfection and are committed to all aspects of sustainability.</p>
              {/* <p className={futuraFontRegular.className + 'max-w-[560px] text-xl text-body-text font-thin'}>At avant-green, we see ourselves as partners in our clients’ progress towards their climate and social impact goals. We believe in consistent, measurable action over perfection and are committed to all aspects of sustainability.</p> */}
              
          </div>
            <div className='relative block col-2'>
               
              <div className='overflow-hidden'>
              <div className="grid grid-cols-2 grid-rows-16 gap-4  bg-gray-900 relative right-[-140px] ">
                  <div className="col-start-1 row-start-1 row-end-9"><Image src={bentoOne} className='min-h-[560px] w-full relative rounded-[24px] object-cover' /></div>
                  <div className="col-start-2 row-start-4 row-end-8"><Image src={bentoTwo} className='max-h-[385px] relative rounded-[24px]  object-cover' /></div>
                  <div className="col-start-1 row-start-9 row-end-12"><Image src={bentoTwo} className='max-h-[385px] relative rounded-[24px]  object-cover' /></div>
                  <div className="col-start-2 row-start-8 row-end-13"><Image src={bentoThree} className='min-h-[620px] relative rounded-[24px] top object-cover' /></div>
          </div>
          </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4  max-w-[1440px] mx-auto">
      {cardImages.map((image, index) => (
        <CardHeavy key={index} image={image} text={texts[index]} description={descriptions[index]} />
        
      ))}
    </div>

        </section>
        <section className='pt-[100px] pb-[100px] px-[70px] max-w-[1440px] mx-auto'>
           <h2 className='text-apres-huit text-5xl font-medium mb-[72px] font-medium'>it takes a village</h2>
          <p className={futuraFontRegular.className + ' max-w-[560px] text-xl text-body-text mb-[72px]'}>Tapping into a global talent pool with diverse skills, we offer high quality services that can evolve into long-term partnerships. We believe in paving the way for a sustainable fashion industry, one mindful step at a time.</p>
          <div className="flex flex-col w-[100%]">
            <div className="flex pr-[8%] mb-[200px]">
              <Image src={village1} alt='' className='h-[400px] justify-self-start flex-[33%] object-contain' />
              <div className='justify-self-start flex-[66%]'>
                <h2 className="text-apres-huit text-2xl mb-[20px]">Sulakshana Chemudupati</h2>
                <h3 className={futuraFontRegular.className + " text-apres-huit text-xl mb-[72px]"}>Founder & Eco-Creative Head</h3>
                <p className={futuraFontThin.className + " text-body-text text-xl"}>Working as an independent sustainable fashion consultant since 2023 and backed by 15 years of experience with fashion brands in India and UAE, Sulakshana founded avant-green as a solution oriented approach to the complexities of sustainable fashion. She takes global inspiration, uniting like minds and incorporating best practices from around the world towards this green cause.</p>
              </div>
              
            </div>

            <div className="flex pl-[8%] justify-end w-full mb-[200px]">
              
              <div className='justify-self-end flex-[66%] pl-[4%]'>
                <h2 className="text-apres-huit text-2xl mb-[20px]">Arianna Di Bassi </h2>
                <h3 className={futuraFontRegular.className + " text-apres-huit text-xl mb-[72px]"}>Sustainable Fashion Strategist</h3>
                <p className={futuraFontThin.className + " text-body-text text-xl"}>A tireless explorer who intends to offer reliable dissemination on green and ethical dressing, Arianna’s heart is always turned towards innovation and her mind open to the future. She supports brands in successfully adopting and communicating more sustainable practices. Her recent book "New Fashion - Overcoming the challenges of sustainability to be a brand in the new era of fashion”, is available in Italian and soon to be translated into English.</p>
              </div>
              <Image src={arianna} alt='' className='h-[400px] flex-[33%] object-contain' />            
            </div>
            

            <div className="flex pr-[8%] mb-[200px]">
              <Image src={radhika} alt='' className='h-[400px] justify-self-start flex-[33%] object-contain' />
              <div className='justify-self-start flex-[66%]'>
                <h2 className="text-apres-huit text-2xl mb-[20px]">Radhika Kamat</h2>
                <h3 className={futuraFontRegular.className + " text-apres-huit text-xl mb-[72px]"}>Womenswear Lead</h3>
                <p className={futuraFontThin.className + " text-body-text text-xl"}>A fashion designer and digital artist with over 15 years of experience in the industry, Radika’s work is visually stunning and thought-provoking; inviting viewers and wearers alike to see the world through a fresh perspective. Her journey as a designer is marked by her dedication to originality and a constant pursuit of the unconventional.</p>
              </div>
            </div>



            <div className="flex pl-[8%] justify-end w-full mb-[200px]">
              <div className='justify-self-end flex-[66%] pl-[4%]'>
                <h2 className="text-apres-huit text-2xl mb-[20px]">Eloy Santos </h2>
                <h3 className={futuraFontRegular.className + " text-apres-huit text-xl mb-[72px]"}>Kidswear Lead</h3>
                <p className={futuraFontThin.className + " text-body-text text-xl"}>Eloy is a highly creative designer with over 10 years of experience in creating unique and best selling prints, graphics and designs for established retail brands in UAE. She has a keen eye for trends and uses extensive market research to deliver high quality and detailed work. Lately, her projects focus on licensed artworks and fun prints for kidswear.</p>
              </div>
              <Image src={eloy} alt='' className='h-[400px] flex-[33%] object-contain' />
            </div>

            <div className="flex pr-[8%] mb-[200px]">
              <Image src={manju} alt='' className='h-[400px] justify-self-start flex-[33%] object-contain' />
              <div className='justify-self-start flex-[66%]'>
                <h2 className="text-apres-huit text-2xl mb-[20px]">Manju Shree</h2>
                <h3 className={futuraFontRegular.className + " text-apres-huit text-xl mb-[72px]"}>Digital Design Specialist</h3>
                <p className={futuraFontThin.className + " text-body-text text-xl"}>Manju is a passionate designer with a keen eye for silhouette exploration and the technical skills to bring it all to life through 3D garment development. With a degree in design coupled with real-world experience in both graphic design and Clo-3D modeling, she approaches design with a comprehensive perspective.</p>
              </div>
            </div>

            <div className="flex pl-[8%] justify-end w-full ">
              <div className='justify-self-end flex-[66%] pl-[4%]'>
                <h2 className="text-apres-huit text-2xl mb-[20px]">Asmita Chatterjee </h2>
                <h3 className={futuraFontRegular.className + " text-apres-huit text-xl mb-[72px]"}>Sustainability Content Specialist</h3>
                <p className={futuraFontThin.className + " text-body-text text-xl"}></p>
              </div>
              <Image src={village1} alt='' className='h-[400px] flex-[33%] object-contain' />
            </div>


            
          </div>
        </section>
        <section className='pt-[100px] pb-[100px] px-[70px]  max-w-[1440px] mx-auto'>
          <h2 className='text-apres-huit text-5xl font-medium mb-[72px] font-medium'>the UN SDGs</h2>
          <p className={futuraFontRegular.className + ' max-w-[560px] text-xl text-body-text mb-[72px]'}>We align our mission with the <Link href='https://www.undp.org/sustainable-development-goals' className='underline text-link'>United Nations Sustainability Development Goals</Link> to drive sustainable transformation in the fashion industry</p>
          <div className="grid grid-cols-3 justify-items-center items-center gap-y-[56px]">
            <Image src={gif1} alt='UN SDGs' className="max-w-[200px] h-auto rounded-[12px]" />
            <Image src={gif2} alt='UN SDGs' className="max-w-[200px] h-auto rounded-[12px]"/>
            <Image src={gif3} alt='UN SDGs' className="max-w-[200px] h-auto rounded-[12px]" />
            <Image src={gif4} alt='UN SDGs' className="max-w-[200px] h-auto rounded-[12px]"/>
            <Image src={gif5} alt='UN SDGs' className="max-w-[200px] h-auto rounded-[12px]"/>
            <Image src={gif6} alt='UN SDGs' className="max-w-[200px] h-auto rounded-[12px]"/>
          </div>
        </section>
        <Banner text={text} />
        <Footer/>
     
        </main>
    )
}