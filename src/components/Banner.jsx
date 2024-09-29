import Link from "next/link"
export const Banner = ({ text }) => {
    return (
        <section className='pt-[100px] pb-[100px] '>
            <div className='hero-cta  '>
                <div className='overlay p-[120px] flex justify-center items-center'>
                <div className='flex justify-center items-center max-w-[1440px] max-auto gap-[32px]'>
                 <h3 className='text-5xl text-centre-parfait'>{text}</h3>
                 <Link href='/contact' className='flex justify-center items-center min-w-[400px] text-xl text-apres-huit bg-avant-green py-[8px] px-[16px] rounded-[40px] hover:rounded-[4px] transition-all duration-[400ms]' >book a free consultation</Link>
                </div>
                </div>
                </div>
      </section>
    )
}