import { useState } from "react";
import Link from "next/link";
import localFont from "@next/font/local";

const futuraFontThin = localFont({
  src: "../../public/FuturaPT/FuturaCyrillicLight.ttf",
});

const futuraFontRegular = localFont({
  src: "../../public/FuturaPT/FuturaCyrillicDemi.ttf",
});

export const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full"
      >
        <span className="text-2xl text-apres-huit py-[16px]">{title}</span>
        {!accordionOpen ? (
          <span className="transition-all duration-[400ms] ease-in-out">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="chevron-down">
                <path
                  id="Vector"
                  d="M8 12L16 20L24 12"
                  stroke="#1A1A1A"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </span>
        ) : (
          <span className="rotate-180 transition-all duration-[400ms] ease-in-out">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="chevron-down">
                <path
                  id="Vector"
                  d="M8 12L16 20L24 12"
                  stroke="#1A1A1A"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-[400ms] ease-in-out text-apres-huit ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        {accordionOpen ? (
          <div className="overflow-hidden block py-[32px] transition-all duration-[400ms] ease-in-out">
            <p
              className={
                futuraFontRegular.className +
                " text-xl text-apres-huit mb-[72px]"
              }
            >
              {answer}
            </p>
            <div>
              <Link
                href="/contact"
                className={
                  futuraFontThin.className +
                  " border-avant-green border-2 py-[8px] px-[8px] rounded-[24px] text-xl text-apres-huit hover:bg-avant-green hover:rounded-[4px] transition-all duration-[400ms] ease-in-out"
                }
              >
                contact us
              </Link>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden block py-[0px] transition-all duration-[400ms] ease-in-out">
            <p
              className={
                futuraFontRegular.className +
                " text-xl text-apres-huit mb-[72px]"
              }
            >
              {answer}
            </p>
            <div>
              <Link
                href="/contact"
                className={
                  futuraFontThin.className +
                  " border-avant-green border-2 py-[8px] px-[8px] rounded-[24px] text-xl text-apres-huit"
                }
              >
                contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
