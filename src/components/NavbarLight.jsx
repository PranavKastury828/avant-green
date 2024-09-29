import Link from "next/link";
export const NavbarLight = () => {
  return (
    <div className="flex justify-center relative w-full bg-transparent z-10 mb-[80px]">
      <nav className="max-w-[1440px] flex justify-between items-center w-full p-[70px] pb-[30px]  ">
        <>
          <Link href="/" className="flex items-center group">
            {/* <svg width="57" height="30" viewBox="0 0 57 30" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M20.9602 10.6149C20.3102 10.1049 19.6402 9.65488 18.9402 9.25488C16.4702 13.6149 16.0002 18.2949 17.2102 22.1049C17.4602 22.0049 17.7102 21.8949 17.9502 21.7749C18.4402 21.5349 18.9202 21.2649 19.3902 20.9749C19.3802 20.9249 19.3602 20.8749 19.3502 20.8249C18.5902 17.9049 19.0102 14.5649 20.5202 11.4349C20.6502 11.1549 20.8002 10.8849 20.9502 10.6149H20.9602Z" fill="currentColor"/>
                        <path d="M29.0499 0.704941C28.5999 0.434941 28.0399 0.434941 27.5799 0.704941C25.4099 1.99494 23.5899 3.45494 22.0899 5.03494C22.1499 5.07494 22.2099 5.10494 22.2599 5.13494C22.8999 5.53494 23.5099 5.96494 24.1099 6.42494C25.1199 5.40494 26.2499 4.46494 27.5099 3.60494C27.9899 3.27494 28.6299 3.27494 29.1099 3.60494C32.2499 5.73494 34.6399 8.40494 36.0999 11.4249C37.6099 14.5549 38.0299 17.8949 37.2699 20.8149C36.1699 25.0549 32.8199 27.5849 28.3099 27.5849C25.8399 27.5849 23.7199 26.8249 22.1299 25.4449C21.3899 25.8949 20.6399 26.3049 19.8799 26.6549C21.8799 28.7249 24.7299 30.0049 28.3099 30.0049C42.3699 30.0049 45.2199 10.2949 29.0399 0.704941H29.0499Z" fill="currentColor"/>
                        <path d="M30.6002 13.945C31.5802 12.575 32.6702 11.355 33.8502 10.305C33.6302 9.97499 33.4002 9.64499 33.1602 9.31499C32.9902 9.09499 32.8102 8.87499 32.6202 8.65499C32.5402 8.55499 32.4702 8.46499 32.3902 8.36499C31.2702 9.34499 30.2002 10.475 29.2002 11.775C29.6902 12.465 30.1502 13.185 30.6002 13.945Z" fill="currentColor"/>
                        <path d="M36.76 5.41491C37.28 6.05491 37.77 6.71491 38.21 7.39491C41.3 5.94491 44.58 5.54491 47.45 6.29491C51.69 7.39491 54.22 10.7449 54.22 15.2549C54.22 19.7649 51.69 23.1149 47.45 24.2149C45.2 24.7949 42.7 24.6849 40.24 23.9049C39.9 24.6749 39.5 25.3949 39.04 26.0549C47.77 29.0649 56.63 24.6749 56.63 15.2549C56.63 5.00491 46.15 0.704906 36.75 5.41491H36.76Z" fill="currentColor"/>
                        <path d="M27.44 18.7349C26.95 18.0449 26.48 17.3249 26.04 16.5649C23.97 19.4549 21.43 21.6649 18.57 23.0449C15.44 24.5549 12.1 24.9749 9.18 24.2149C4.94 23.1149 2.41 19.7649 2.41 15.2549C2.41 10.7449 4.94 7.39492 9.18 6.29492C12.1 5.53492 15.44 5.95492 18.57 7.46492C21.43 8.84492 23.97 11.0549 26.04 13.9449C26.34 14.3649 26.63 14.8049 26.92 15.2549C27.16 15.6849 27.4 16.0949 27.65 16.4949C27.76 16.6649 27.87 16.8349 27.98 16.9949C28.09 17.1649 28.2 17.3449 28.32 17.5149C30.09 20.1049 32.14 22.1349 34.31 23.6349C34.82 23.0349 35.23 22.3449 35.55 21.5549C33.7 20.2549 32.04 18.5649 30.6 16.5549C30.57 16.5149 30.54 16.4649 30.51 16.4249C30.24 16.0449 29.98 15.6549 29.72 15.2449C29.52 14.8849 29.31 14.5249 29.1 14.1849C29.06 14.1249 29.02 14.0549 28.98 13.9949C19.27 -1.58508 0 1.35492 0 15.2549C0 29.1549 17.38 31.7749 27.44 18.7349Z" fill="currentColor"/>
                        </svg> */}
            <svg
              width="37"
              height="20"
              viewBox="0 0 37 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-apres-huit group-hover:text-avant-green transition ease-in-out duration-[400ms] mr-[8px]"
            >
              <g id="Asset 1" clipPath="url(#clip0_542_702)">
                <g id="Layer 1">
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M13.437 7.02567C13.0203 6.69872 12.5907 6.41024 12.142 6.15381C10.5586 8.94888 10.2572 11.9491 11.0329 14.3916C11.1932 14.3275 11.3535 14.257 11.5073 14.18C11.8215 14.0262 12.1292 13.8531 12.4305 13.6672C12.4241 13.6351 12.4112 13.6031 12.4048 13.571C11.9176 11.6991 12.1869 9.5579 13.1549 7.55135C13.2382 7.37185 13.3344 7.19876 13.4306 7.02567H13.437Z"
                      fill="currentColor"
                    />
                    <path
                      id="Vector_2"
                      d="M18.6237 0.672786C18.3353 0.499696 17.9763 0.499696 17.6814 0.672786C16.2902 1.49977 15.1235 2.43573 14.1619 3.44863C14.2004 3.47427 14.2388 3.4935 14.2709 3.51274C14.6812 3.76916 15.0722 4.04483 15.4569 4.33972C16.1043 3.68582 16.8287 3.08322 17.6365 2.53189C17.9442 2.32034 18.3545 2.32034 18.6622 2.53189C20.6752 3.89738 22.2073 5.60904 23.1433 7.54508C24.1113 9.55163 24.3806 11.6928 23.8934 13.5647C23.1882 16.2829 21.0406 17.9048 18.1494 17.9048C16.5659 17.9048 15.2068 17.4176 14.1875 16.5329C13.7131 16.8214 13.2323 17.0842 12.7451 17.3086C14.0273 18.6356 15.8543 19.4562 18.1494 19.4562C27.1628 19.4562 28.9899 6.82067 18.6173 0.672786H18.6237Z"
                      fill="currentColor"
                    />
                    <path
                      id="Vector_3"
                      d="M19.6172 9.16068C20.2455 8.28241 20.9442 7.5003 21.7007 6.82718C21.5597 6.61562 21.4122 6.40407 21.2584 6.19251C21.1494 6.05148 21.034 5.91044 20.9122 5.76941C20.8609 5.7053 20.816 5.6476 20.7647 5.5835C20.0467 6.21175 19.3608 6.93616 18.7197 7.76955C19.0339 8.21189 19.3287 8.67346 19.6172 9.16068Z"
                      fill="currentColor"
                    />
                    <path
                      id="Vector_4"
                      d="M23.566 3.69211C23.8993 4.1024 24.2135 4.52551 24.4955 4.96144C26.4764 4.03188 28.5792 3.77545 30.419 4.25626C33.1372 4.96144 34.7591 7.10903 34.7591 10.0003C34.7591 12.8915 33.1372 15.0391 30.419 15.7443C28.9766 16.1161 27.374 16.0456 25.7969 15.5455C25.5789 16.0392 25.3225 16.5007 25.0276 16.9238C30.6242 18.8535 36.3041 16.0392 36.3041 10.0003C36.3041 3.42927 29.5856 0.672664 23.5596 3.69211H23.566Z"
                      fill="currentColor"
                    />
                    <path
                      id="Vector_5"
                      d="M17.591 12.2312C17.2769 11.7889 16.9756 11.3273 16.6935 10.8401C15.3665 12.6928 13.7382 14.1096 11.9047 14.9943C9.89815 15.9623 7.75697 16.2315 5.88504 15.7443C3.1669 15.0391 1.54498 12.8915 1.54498 10.0003C1.54498 7.10907 3.1669 4.96148 5.88504 4.2563C7.75697 3.76909 9.89815 4.03834 11.9047 5.00635C13.7382 5.89103 15.3665 7.3078 16.6935 9.1605C16.8858 9.42975 17.0718 9.71182 17.2577 10.0003C17.4115 10.276 17.5654 10.5388 17.7256 10.7952C17.7962 10.9042 17.8667 11.0132 17.9372 11.1158C18.0077 11.2248 18.0782 11.3401 18.1552 11.4491C19.2899 13.1095 20.6041 14.4109 21.9952 15.3725C22.3221 14.9878 22.585 14.5455 22.7901 14.0391C21.6041 13.2057 20.5399 12.1223 19.6168 10.8337C19.5976 10.8081 19.5783 10.776 19.5591 10.7504C19.386 10.5068 19.2193 10.2567 19.0527 9.99389C18.9244 9.76311 18.7898 9.53232 18.6552 9.31436C18.6296 9.27589 18.6039 9.23102 18.5783 9.19255C12.3535 -0.795347 0 1.0894 0 10.0003C0 18.9112 11.1418 20.5908 17.591 12.2312Z"
                      fill="currentColor"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_542_702">
                  <rect
                    width="36.3103"
                    height="18.9116"
                    fill="currentColor"
                    transform="translate(0 0.544434)"
                  />
                </clipPath>
              </defs>
            </svg>

            <p className="text-apres-huit group-hover:text-avant-green text-xl transition ease-in-out duration-[400ms] font-thin">
              avant green
            </p>
          </Link>
        </>
        <div className="flex gap-[64px]">
          <Link
            href="/about"
            className="text-base text-apres-huit transition-all duration-[400ms] hover:text-avant-green hover:underline"
          >
            about
          </Link>
          <div className="relative group ">
            <Link href="/services">
              <span className="flex justify-center items-center gap-1 text-base text-apres-huit transition-all duration-[400ms] group-hover:text-avant-green group-hover:underline">
                services{" "}
                <svg
                  className="duration-[400ms] group-hover:rotate-180 "
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>

            <div className="block absolute z-10 left-0 w-[180px] bg-transparent rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
              <Link
                href="/services/sustainability-management"
                className="block text-base text-apres-huit transition-all duration-[400ms] hover:text-avant-green hover:underline"
              >
                sustainability management
              </Link>
              <Link
                href="/services/design-to-prototype"
                className="block text-base text-apres-huit transition-all duration-[400ms] hover:text-avant-green hover:underline"
              >
                design to prototype
              </Link>
              <Link
                href="/services/trend-curation"
                className="block text-base text-apres-huit transition-all duration-[400ms] hover:text-avant-green hover:underline"
              >
                trend curation
              </Link>
            </div>
          </div>
          <Link
            href="/portfolio"
            className="text-base text-apres-huit transition-all duration-[400ms] hover:text-avant-green hover:underline"
          >
            portfolio
          </Link>
          <Link
            href="/stories"
            className="text-base text-apres-huit transition-all duration-[400ms] hover:text-avant-green hover:underline"
          >
            stories
          </Link>
        </div>
        <div>
          <Link
            href="/contact"
            className="text-base text-apres-huit bg-avant-green py-[8px] px-[16px] rounded-[20px] hover:rounded-[4px] transition-all duration-[400ms]"
          >
            contact us
          </Link>
        </div>
      </nav>
    </div>
  );
};
