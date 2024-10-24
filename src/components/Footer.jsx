import Link from "next/link";
import Image from "next/image";
import localFont from "@next/font/local";
import behanceLogo from '../../public/002-behance.png'
import linkedinLogo from '../../public/001-linkedin.png'
import instagramLogo from '../../public/instagram 1.png'

const futuraFontThin = localFont({
  src: '../../public/FuturaPT/FuturaCyrillicLight.ttf'
})

const futuraFontRegular = localFont({
  src: '../../public/FuturaPT/FuturaCyrillicDemi.ttf'
})
const futuraFontBold = localFont({
  src: '../../public/FuturaPT/FuturaCyrillicBold.ttf'
})
const futuraFontHeavy = localFont({
    src: '../../public/FuturaPT/FuturaCyrillicHeavy.ttf'
})
const futuraFontMedium = localFont({
    src: '../../public/FuturaPT/FuturaCyrillicMedium.ttf'
})
export const Footer = () => {
    
    return (
        <footer className={futuraFontThin.className + " pb-[100px] px-[70px] mx-auto max-w-[1440px]"}>
            <div className="group flex flex-start items-center relative gap-[16px] group hover:text-avant-green transition-all duration-[400ms]">
                <svg width="81" height="43" viewBox="0 0 81 43" fill="none" xmlns="http://www.w3.org/2000/svg" className='relative group-hover:w-[100px] transition-all duration-[400ms]'>
<g id="Asset 1" clip-path="url(#clip0_532_1435)">
<g id="Layer 1">
<g id="Group">
<path id="Vector" d="M29.8596 14.8281C28.9336 14.1015 27.9791 13.4605 26.9819 12.8906C23.4631 19.1019 22.7936 25.7691 24.5173 31.1968C24.8735 31.0543 25.2296 30.8976 25.5715 30.7267C26.2696 30.3848 26.9534 30.0001 27.623 29.587C27.6087 29.5158 27.5802 29.4445 27.566 29.3733C26.4833 25.2135 27.0816 20.4553 29.2328 15.9963C29.418 15.5974 29.6317 15.2127 29.8453 14.8281H29.8596Z" fill="currentColor"/>
<path id="Vector_2" d="M41.3849 0.710357C40.7438 0.325714 39.9461 0.325714 39.2907 0.710357C36.1994 2.5481 33.6066 4.62802 31.4697 6.8789C31.5551 6.93588 31.6406 6.97862 31.7118 7.02136C32.6236 7.5912 33.4926 8.20378 34.3474 8.8591C35.7862 7.406 37.396 6.06687 39.191 4.84171C39.8748 4.37159 40.7866 4.37159 41.4704 4.84171C45.9436 7.87612 49.3485 11.6798 51.4284 15.9821C53.5795 20.4411 54.1779 25.1993 53.0952 29.3592C51.5281 35.3995 46.7557 39.0037 40.3307 39.0037C36.8119 39.0037 33.7918 37.921 31.5266 35.9551C30.4724 36.5961 29.404 37.1802 28.3213 37.6788C31.1705 40.6278 35.2306 42.4513 40.3307 42.4513C60.3606 42.4513 64.4208 14.3723 41.3707 0.710357H41.3849Z" fill="currentColor"/>
<path id="Vector_3" d="M43.5941 19.5723C44.9902 17.6206 46.543 15.8826 48.224 14.3868C47.9106 13.9167 47.5829 13.4465 47.241 12.9764C46.9989 12.663 46.7424 12.3496 46.4718 12.0362C46.3578 11.8937 46.2581 11.7655 46.1441 11.623C44.5485 13.0192 43.0242 14.629 41.5996 16.4809C42.2977 17.4639 42.953 18.4896 43.5941 19.5723Z" fill="currentColor"/>
<path id="Vector_4" d="M52.3687 7.4203C53.1095 8.33205 53.8076 9.27229 54.4344 10.241C58.8364 8.17534 63.5091 7.6055 67.5978 8.67395C73.6381 10.241 77.2423 15.0134 77.2423 21.4384C77.2423 27.8634 73.6381 32.6358 67.5978 34.2029C64.3924 35.0291 60.8309 34.8724 57.3264 33.7612C56.842 34.8582 56.2722 35.8839 55.6168 36.8241C68.0536 41.1122 80.6756 34.8582 80.6756 21.4384C80.6756 6.83621 65.7458 0.710413 52.3545 7.4203H52.3687Z" fill="currentColor"/>
<path id="Vector_5" d="M39.0911 26.3955C38.3931 25.4125 37.7235 24.3868 37.0967 23.3041C34.1478 27.4212 30.5293 30.5696 26.4549 32.5355C21.9959 34.6867 17.2377 35.285 13.0779 34.2023C7.03755 32.6352 3.4333 27.8628 3.4333 21.4379C3.4333 15.0129 7.03755 10.2405 13.0779 8.6734C17.2377 7.5907 21.9959 8.18903 26.4549 10.3402C30.5293 12.3061 34.1478 15.4545 37.0967 19.5716C37.5241 20.17 37.9372 20.7968 38.3503 21.4379C38.6923 22.0504 39.0342 22.6345 39.3903 23.2044C39.547 23.4465 39.7037 23.6887 39.8604 23.9167C40.0171 24.1588 40.1738 24.4153 40.3448 24.6575C42.8663 28.3472 45.7868 31.2391 48.8782 33.376C49.6047 32.5213 50.1888 31.5383 50.6447 30.4129C48.0092 28.5609 45.6443 26.1533 43.5929 23.2898C43.5502 23.2329 43.5074 23.1616 43.4647 23.1046C43.08 22.5633 42.7096 22.0077 42.3392 21.4236C42.0543 20.9107 41.7552 20.3979 41.456 19.9135C41.399 19.828 41.342 19.7283 41.285 19.6429C27.4521 -2.55249 0 1.63585 0 21.4379C0 41.2399 24.7596 44.9723 39.0911 26.3955Z" fill="currentColor"/>
</g>
</g>
</g>
<defs>
<clipPath id="clip0_532_1435">
<rect width="80.6896" height="42.0258" fill="white" transform="translate(0 0.424805)"/>
</clipPath>
</defs>
                </svg>
                <p className="text-4xl leading-2 group-hover:text-2xl  transition-all duration-[400ms]">avant-green</p>
            </div>
            <div className="grid grid-col-4 grid-flow-col gap-[100px] mb-[100px]">
                <div>
                    <h3 className={futuraFontMedium.className + " text-2xl text-apres-huit mb-[24px]"}>company</h3> 
                    <Link href='/about' className={futuraFontBold.className = " text-apres-huit text-base block font-bold mb-[16px]"}>about us</Link>
                    <Link href='/portfolio' className={futuraFontBold.className = ' text-apres-huit text-base block font-bold mb-[16px]'}>portfolio</Link>
                    <Link href='/about' className={futuraFontBold.className = ' text-apres-huit text-base block'}><span className={futuraFontBold.className = ' text-apres-huit text-base block font-bold'}>stories</span></Link>
                    
                </div>
                <div>
                    <h3 className={futuraFontMedium.className + " text-2xl text-apres-huit mb-[24px]"}>services</h3> 
                    <Link href='/services/trend-curation' className={futuraFontBold.className = " text-apres-huit text-base block font-bold mb-[16px]"}>trend curation</Link>
                    <Link href='/services/design-to-prototype' className={futuraFontBold.className = ' text-apres-huit text-base block font-bold mb-[16px]'}>design to prototyping</Link>
                    <Link href='/services/sustainability-management' className={futuraFontBold.className = ' text-apres-huit text-base block'}><span className={futuraFontBold.className = ' text-apres-huit text-base block font-bold'}>sustainability management</span></Link>
                    
                </div>
                <div className='flex flex-col justify-end'>
                    <p className='text-apres-huit text-base font-bold mb-[16px]'>4-7-825 <br /> Sainikpuri, <br /> Hyderabad, TG <br /> <a href='tel:+915558675309'>+91-555-867-5309</a></p>
                    <Link href='mailto:contact@avantgreen.com' className={futuraFontBold.className = 'text-apres-huit text-base block font-bold no-underline mb-[16px]'}>contact@avantgreen.com</Link>
                    <div className="flex justify-start items-center gap-[12px]">
                        <Link href='#'>
                            <Image src={behanceLogo} alt={behanceLogo} />
                        </Link>
                        <Link href='#'>
                            <Image src={linkedinLogo} alt={linkedinLogo} />
                        </Link>
                        <Link href='#'>
                            <Image src={instagramLogo} alt={instagramLogo} />
                        </Link>
                    </div>
                </div>
                <div>
                     <Link href='/contact' className='text-xl text-apres-huit bg-avant-green py-[8px] px-[16px] rounded-[40px] hover:rounded-[4px] transition-all duration-[400ms] font-bold' >contact us</Link>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <p className='text-base text-apres-huit font-bold'>made by <Link href='#' className='underline'>cyphr.digital</Link></p>
                <p className='text-base text-apres-huit font-bold'>2024. All Rights Reserved </p>
            </div>
        </footer>
    )
}