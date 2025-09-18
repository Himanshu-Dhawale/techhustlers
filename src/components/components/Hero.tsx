





// "use client";

// import React, { useState } from 'react';
// import { ChevronRight, Plus } from 'lucide-react';

// const HeroSection: React.FC = () => {
//   const [isDesignMode, setIsDesignMode] = useState(true);

//   return (
//     <div className="bg-gray-50 relative overflow-hidden flex flex-col">

//       <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm">
//         <div className="text-xl font-bold text-gray-900">Tech Hustlers</div>
//         <div className="hidden md:flex items-center space-x-8">
//           <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
//           <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blogs</a>
//           <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
//         </div>
//         <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
//           Become a member
//         </button>
//       </nav>

//    <div className='border border-dashed border-custom-black
//             bg-custom-gray rounded-t-[25px] mt-[100px] max-w-[1561px] max-h-[1032px] relative'>
//               <div className="relative z-20 max-w-[1150px] max-h-[226px] mx-auto px-6 pt-16 pb-8 text-center">

//         <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight mb-8">
//           A community for both
//           <br />
//           <span className="inline-flex items-center gap-4">
//             <span className={transition-colors duration-300 ${isDesignMode ? 'text-purple-500' : 'text-gray-400'}}>
//             {"["} Design
//             </span>

//             <button
//               onClick={() => setIsDesignMode(!isDesignMode)}
//               className="relative inline-flex h-8 w-14 items-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 hover:shadow-lg"
//             >
//               <span
//                 className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
//                   isDesignMode ? 'translate-x-1' : 'translate-x-7'
//                 }`}
//               />
//             </button>
//             <span className={transition-colors duration-300 ${!isDesignMode ? 'text-gray-800' : 'text-gray-400'}}>
//               Dev {"]"}
//             </span>
//             </span>
//         </h1>

//         <p className="text-xl text-gray-600 mb-10 mx-auto leading-relaxed max-w-[997px] max-h-[84px]">
//           Join a community of builders, creators, and dreamers shaping
//           <br />
//           the future with code and creativity.
//         </p>

//         <button className="group inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 hover:shadow-xl hover:scale-105 ">
//           Get Started
//           <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//         </button>
//       </div>

//       <div className="relative z-10 w-full mt-12 md:mt-16 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-items-center">

//           <div className="transform rotate-3 hover:rotate-6 transition-transform duration-700">
//             <div className="bg-white rounded-2xl shadow-2xl p-6 w-72 md:w-80 border-gray-100 max-w-[420px] max-h-[269px] border-[5px]">

//               <div className="flex items-center bg-[#D8D8D8] justify-end gap-2 mb-6 max-w-[373px] h-[44px] rounded-t-[20px]">
//                 <div className="w-3 h-3 bg-red-400 rounded-full"></div>
//                 <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                 <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//               </div>
//               <div className="w-[95px] h-[113px] top-[737px] left-[187px] rounded-tr-[29px] rounded-br-[29px] opacity-100 absolute bg-black">
//               </div>

//               <div className="space-y-4 border-[4px] border-yellow-300 max-w-[373px] max-h-[200px] flex">
//                 <div className="flex">
//                   <div className="w-24 h-[113px] bg-gray-200 rounded-r-[29px]"></div>
//                 </div>
//                 <div className="ml-auto">
//                   <div className="bg-purple-500 rounded-2xl px-4 py-2 text-white text-sm max-w-[151px] max-h-[28px]">

//                   </div>
//                 </div>
//                 <div className="flex">
//                   <div className="bg-pink-200 rounded-2xl px-4 py-2 text-gray-800 text-sm max-w-xs">
//                     That sounds awesome! 🚀
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-700">
//             <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl shadow-2xl p-8 w-56 md:w-64 text-white">
//               <h3 className="text-lg font-semibold mb-2">Find friends</h3>
//               <p className="text-purple-100 text-sm mb-6">in Tech</p>

//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-white/20 rounded-full mr-3"></div>
//                 <div className="w-12 h-12 bg-white/20 rounded-full"></div>
//               </div>

//               <button className="w-full bg-white/20 backdrop-blur-sm rounded-xl py-3 px-4 flex items-center justify-between text-sm font-medium hover:bg-white/30 transition-colors">
//                 Find me a Team
//                 <Plus className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           <div className="transform -rotate-3 hover:-rotate-6 transition-transform duration-700">
//             <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden w-72 md:w-80">

//               <div className="flex items-center gap-2 p-4 bg-gray-800">
//                 <div className="w-3 h-3 bg-red-400 rounded-full"></div>
//                 <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                 <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//               </div>

//               <div className="p-4 text-sm font-mono">
//                 <div className="text-gray-400 mb-2">{'// App.tsx'}</div>
//                 <div className="text-blue-400">import <span className="text-yellow-300">React</span> from <span className="text-green-400">&apos;react&apos;</span>;</div>
//                 <div className="text-blue-400 mt-2">function <span className="text-yellow-300">App</span>() {'{'}</div>
//                 <div className="text-gray-300 ml-4 mt-1">return (</div>
//                 <div className="text-gray-300 ml-8 mt-1">&lt;<span className="text-red-400">div</span>&gt;</div>
//                 <div className="text-gray-300 ml-12 mt-1">&lt;<span className="text-red-400">h1</span>&gt;Hello World&lt;/<span className="text-red-400">h1</span>&gt;</div>
//                 <div className="text-gray-300 ml-8 mt-1">&lt;/<span className="text-red-400">div</span>&gt;</div>
//                 <div className="text-gray-300 ml-4 mt-1">);</div>
//                 <div className="text-gray-300 mt-1">{'}'}</div>
//                 <div className="text-blue-400 mt-2">export default <span className="text-yellow-300">App</span>;</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//             </div>

//       <div className="absolute inset-0 pointer-events-none -z-10">
//         <div className="absolute top-40 left-1/4 w-2 h-2 bg-purple-300 rounded-full opacity-60"></div>
//         <div className="absolute top-60 right-1/3 w-1 h-1 bg-pink-300 rounded-full opacity-60"></div>
//         <div className="absolute bottom-40 left-1/5 w-3 h-3 bg-blue-300 rounded-full opacity-40"></div>
//         <div className="absolute top-32 right-1/5 w-1 h-1 bg-green-300 rounded-full opacity-60"></div>
//       </div>

//     </div>
//   );
// };

// export default HeroSection;

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    //     <div className='bg-white px-[83px] w-[100%]'>
    //         <nav className="flex items-center justify-between py-4 bg-white/80 backdrop-blur-sm px-[83px]">
    //      <div className="text-xl font-extrabold text-gray-900 leading-[118%]">Tech Hustlers</div>
    //         <div className="hidden md:flex items-center space-x-8">
    //            <a href="#" className="text-[#696969] hover:text-gray-900 transition-colors font-extrabold text-xl leading-[118%]">About</a>
    //            <a href="#" className="text-[#696969] hover:text-gray-900 transition-colors font-extrabold text-xl leading-[118%]">Blogs</a>
    //           <a href="#" className="text-[#696969] hover:text-gray-900 transition-colors font-extrabold text-xl leading-[118%]">Contact</a>
    //         </div>
    //          <button className="border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors w-[223px] h-[46px] font-extrabold text-xl leading-[118%]">
    //          Become a member
    //         </button>
    //         </nav>

    //         <div className="max-w-[1561px] max-h-[1032px] border border-dashed border-custom-black flex flex-col items-center gap-8 rounded-t-[29px] bg-[#F2F2F2]">
    //         {/* Heading Text */}
    //           <h1 className="font-extrabold leading-[118%] text-8xl md:text-7xl text-gray-800 mb-8">
    //   A community for both
    //   <br />
    //   <span className="inline-flex items-center gap-4">
    //     <span className="text-gray-400">
    //       [ Design
    //     </span>

    //     <button
    //       className="relative inline-flex h-8 w-14 items-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 hover:shadow-lg"
    //     >
    //       <span className="inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 translate-x-1" />
    //     </button>
    //     <span className="text-gray-800">
    //       Dev ]
    //     </span>
    //   </span>
    // </h1>
    //         </div>
    //     </div>

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
                <span className="text-[inherit] text-gray-500">[</span>
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