import Image from "next/image";
import React from "react";

const Events = () => {
  return (
    <section className="bg-[#F2F2F2] px-10 py-[31px] flex flex-col justify-center items-center text-center">
      <h2 className="font-['Albert_Sans'] font-extrabold text-[48px] text-gray-800 leading-[118%] tracking-[-0.02em] ">
        Upcoming Events
      </h2>
      <p className="text-gray-600 text-lg font-normal mb-8">
        Stay updated with our latest happenings and activities.
      </p>
      <div className="w-full relative p-[46px] bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center items-center overflow-hidden">
        <div className="flex-1 p-8 flex flex-col justify-start text-left">
          <h3 className="text-3xl font-bold text-black mb-4">Hackathon 2025</h3>
          <p className="text-lg text-black mb-4 leading-relaxed">
            A 48-hour coding marathon where innovators build exciting projects
            and compete for prizes.
          </p>
          <p className="text-lg text-black mb-6">
            Prizes: $2000 cash + Swag Kits + Internship Opportunities
          </p>
          <button className="w-fit px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 font-medium hover:bg-gray-50 transition-colors">
            Register now
          </button>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "408px",
            height: "216px",
          }}
        >
          <Image
            src="/cc208b4017bdb36a6e227dc42d0ab3d6 2.png"
            alt="hack"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;