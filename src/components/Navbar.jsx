import Link from "next/link";
export const Navbar = () => {
  return (
    <div className="flex justify-center relative w-full bg-transparent z-10 mb-[80px]">
      <nav className="max-w-[1440px] flex justify-between items-center w-full p-[70px] pb-[30px]  ">
        <>
          <Link href="/" className="flex items-center group">
            <svg
              width="57"
              height="30"
              viewBox="0 0 57 30"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-interface-light group-hover:text-avant-green transition ease-in-out duration-[400ms] mr-[8px]"
            >
              <path
                d="M20.9602 10.6149C20.3102 10.1049 19.6402 9.65488 18.9402 9.25488C16.4702 13.6149 16.0002 18.2949 17.2102 22.1049C17.4602 22.0049 17.7102 21.8949 17.9502 21.7749C18.4402 21.5349 18.9202 21.2649 19.3902 20.9749C19.3802 20.9249 19.3602 20.8749 19.3502 20.8249C18.5902 17.9049 19.0102 14.5649 20.5202 11.4349C20.6502 11.1549 20.8002 10.8849 20.9502 10.6149H20.9602Z"
                fill="currentColor"
              />
              <path
                d="M29.0499 0.704941C28.5999 0.434941 28.0399 0.434941 27.5799 0.704941C25.4099 1.99494 23.5899 3.45494 22.0899 5.03494C22.1499 5.07494 22.2099 5.10494 22.2599 5.13494C22.8999 5.53494 23.5099 5.96494 24.1099 6.42494C25.1199 5.40494 26.2499 4.46494 27.5099 3.60494C27.9899 3.27494 28.6299 3.27494 29.1099 3.60494C32.2499 5.73494 34.6399 8.40494 36.0999 11.4249C37.6099 14.5549 38.0299 17.8949 37.2699 20.8149C36.1699 25.0549 32.8199 27.5849 28.3099 27.5849C25.8399 27.5849 23.7199 26.8249 22.1299 25.4449C21.3899 25.8949 20.6399 26.3049 19.8799 26.6549C21.8799 28.7249 24.7299 30.0049 28.3099 30.0049C42.3699 30.0049 45.2199 10.2949 29.0399 0.704941H29.0499Z"
                fill="currentColor"
              />
              <path
                d="M30.6002 13.945C31.5802 12.575 32.6702 11.355 33.8502 10.305C33.6302 9.97499 33.4002 9.64499 33.1602 9.31499C32.9902 9.09499 32.8102 8.87499 32.6202 8.65499C32.5402 8.55499 32.4702 8.46499 32.3902 8.36499C31.2702 9.34499 30.2002 10.475 29.2002 11.775C29.6902 12.465 30.1502 13.185 30.6002 13.945Z"
                fill="currentColor"
              />
              <path
                d="M36.76 5.41491C37.28 6.05491 37.77 6.71491 38.21 7.39491C41.3 5.94491 44.58 5.54491 47.45 6.29491C51.69 7.39491 54.22 10.7449 54.22 15.2549C54.22 19.7649 51.69 23.1149 47.45 24.2149C45.2 24.7949 42.7 24.6849 40.24 23.9049C39.9 24.6749 39.5 25.3949 39.04 26.0549C47.77 29.0649 56.63 24.6749 56.63 15.2549C56.63 5.00491 46.15 0.704906 36.75 5.41491H36.76Z"
                fill="currentColor"
              />
              <path
                d="M27.44 18.7349C26.95 18.0449 26.48 17.3249 26.04 16.5649C23.97 19.4549 21.43 21.6649 18.57 23.0449C15.44 24.5549 12.1 24.9749 9.18 24.2149C4.94 23.1149 2.41 19.7649 2.41 15.2549C2.41 10.7449 4.94 7.39492 9.18 6.29492C12.1 5.53492 15.44 5.95492 18.57 7.46492C21.43 8.84492 23.97 11.0549 26.04 13.9449C26.34 14.3649 26.63 14.8049 26.92 15.2549C27.16 15.6849 27.4 16.0949 27.65 16.4949C27.76 16.6649 27.87 16.8349 27.98 16.9949C28.09 17.1649 28.2 17.3449 28.32 17.5149C30.09 20.1049 32.14 22.1349 34.31 23.6349C34.82 23.0349 35.23 22.3449 35.55 21.5549C33.7 20.2549 32.04 18.5649 30.6 16.5549C30.57 16.5149 30.54 16.4649 30.51 16.4249C30.24 16.0449 29.98 15.6549 29.72 15.2449C29.52 14.8849 29.31 14.5249 29.1 14.1849C29.06 14.1249 29.02 14.0549 28.98 13.9949C19.27 -1.58508 0 1.35492 0 15.2549C0 29.1549 17.38 31.7749 27.44 18.7349Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-interface-light group-hover:text-avant-green text-xl transition ease-in-out duration-[400ms]">
              avant green
            </p>
          </Link>
        </>
        <div className="flex gap-[64px]">
          <Link
            href="/about"
            className="text-base text-interface-light transition-all duration-[400ms] hover:text-avant-green hover:underline"
          >
            about
          </Link>
          <div className="relative group ">
            <Link href="/services">
              <span className="flex justify-center items-center gap-1 text-base text-interface-light transition-all duration-[400ms] group-hover:text-avant-green group-hover:underline">
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
                className="block text-base text-interface-light transition-all duration-[400ms] hover:text-avant-green hover:underline"
              >
                sustainability management
              </Link>
              <Link
                href="/services/design-to-prototype"
                className="block text-base text-interface-light transition-all duration-[400ms] hover:text-avant-green hover:underline"
              >
                design to prototype
              </Link>
              <Link
                href="/services/trend-curation"
                className="block text-base text-interface-light transition-all duration-[400ms] hover:text-avant-green hover:underline"
              >
                trend curation
              </Link>
            </div>
          </div>
          <Link
            href="/portfolio"
            className="text-base text-interface-light transition-all duration-[400ms] hover:text-avant-green hover:underline"
          >
            portfolio
          </Link>
          <Link
            href="/stories"
            className="text-base text-interface-light transition-all duration-[400ms] hover:text-avant-green hover:underline"
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