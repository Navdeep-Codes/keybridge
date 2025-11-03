import { Bitcount_Grid_Single } from "next/font/google";

const bitcountMono = Bitcount_Grid_Single({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Main() {
  return (
    <div
      id="home"
      className="min-h-screen flex-1 flex justify-center items-center flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-9 px-4 sm:px-6 md:px-8 lg:px-12 bg-black text-white"
    >
      <p
        className={`${bitcountMono.className} text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-center`}
      >
        keybridge
      </p>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-balance max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        Make something which uses yubikeys in a creative way and get a yubikey
        to test it.
      </p>
    </div>
  );
}
