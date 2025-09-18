import Image from "next/image";
import React from "react";

const Hero = () => {
  return (

    <section className="w-full bg-white pt-12  ">
      <div className=" mx-auto">
        {/* large dotted rounded container */}
        <div className="relative border-2 border-dashed border-gray-300 rounded-[28px] bg-gray-50 p-8 md:p-14">
          {/* Heading area */}
          <div className="text-center">
            <h1 className="font-extrabold text-gray-700 leading-tight text-[28px] md:text-[44px] lg:text-[64px]">
              <span className="text-[inherit]">A </span>
              <span className="text-gray-800">community</span>
              <span className="mx-3">for both</span>

              <span className="inline-flex items-center space-x-3 ml-2">
                <span className="text-gray-500">[</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-violet-400 to-pink-400 font-extrabold text-[1.05em]">
                  Design
                </span>

                {/* Toggle style */}
                <span
                  className="relative inline-flex items-center w-14 h-7 rounded-full p-1"
                  style={{
                    background: "linear-gradient(90deg,#7C6BFF,#FF6BA8)",
                  }}
                >
                  <span className="bg-white w-5 h-5 rounded-full shadow-sm transform translate-x-0.5"></span>
                </span>

                <span className=" font-extrabold text-gray-400">Dev</span>
                <span className=" text-gray-500">]</span>
              </span>
            </h1>

            <p className="mt-6 text-gray-500 max-w-2xl mx-auto md:text-lg">
              Join a community of builders, creators, and dreamers shaping the
              future with code and creativity.
            </p>

            <div className="mt-8 flex justify-center">
              <button className="relative inline-flex items-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-full shadow-2xl hover:translate-y-[-1px] transition-transform cursor-pointer">
                <span className="font-medium">Get Started</span>
                <span className="text-sm">›</span>
              </button>
            </div>
          </div>

          {/* cards + connectors */}
          <div className="relative mt-12 md:mt-16 flex items-center justify-center">
            {/* connectors SVG placed absolutely behind the cards */}
            <svg
              className="pointer-events-none absolute top-[-40px] left-0 right-0 mx-auto"
              width="100%"
              height="220"
              viewBox="0 0 1200 220"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M600 40 C600 40, 600 80, 600 100"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
              <path
                d="M600 100 C500 140, 360 140, 300 180"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
              <path
                d="M600 100 C700 140, 840 140, 900 180"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />

              {/* circle */}
              <circle
                cx="600"
                cy="40"
                r="6"
                fill="#F8FAFC"
                stroke="#CBD5E1"
                strokeWidth="2"
              />
            </svg>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-end w-full max-w-[980px]">
              {/* left card  */}
              <div className="flex justify-start md:justify-center">
                <div className="w-[260px] md:w-[300px] rounded-2xl bg-white shadow-[0_18px_30px_rgba(3,7,18,0.06)] border border-white p-4 transform -translate-y-16 -translate-x-4">
                  <Image
                    src="/Group 5.png"
                    alt="left card"
                    className="w-full h-[170px]  rounded-lg"
                    width={260}
                    height={170}
                  />
                </div>
              </div>

              {/* middle card  */}
              <div className="flex justify-center">
                <div className="w-[280px] mb-4 md:w-[330px] rounded-2xl bg-white shadow-[0_20px_40px_rgba(3,7,18,0.08)] border border-white p-2 transform translate-y-4 md:translate-y-8">
                  <Image
                    src="/Rectangle 10.png"
                    alt="center card"
                    className="w-full h-[180px] object-cover rounded-2xl"
                    width={260}
                    height={170}
                  />
                </div>
              </div>

              {/* right card */}
              <div className="flex justify-end md:justify-center">
                <div className="w-[260px] md:w-[300px] rounded-2xl bg-white shadow-[0_18px_30px_rgba(3,7,18,0.06)] border border-white p-4 transform -translate-y-16 translate-x-4">
                  <Image
                    src="/Group 4.png"
                    alt="right card"
                    className="w-full h-[170px]  rounded-lg"
                    width={260}
                    height={170}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;