import Events from "@/components/components/Events";
import HeroSection from "@/components/components/Hero";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white w-[100%] h-full px-8 md:px-[83px] flex flex-col gap-[30px]">
      <HeroSection />
      <Events />
    </div>
  );
}