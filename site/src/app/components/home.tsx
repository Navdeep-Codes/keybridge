import { Bitcount_Grid_Single } from "next/font/google";
const bitcountMono = Bitcount_Grid_Single({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Main() {
  return (
    <div className="flex-1 flex justify-center items-center flex-col gap-9 px-4 bg-black">
      <p className={`${bitcountMono.className} text-9xl`}>keybridge</p>
      <p className="text-center text-balance">
        Make something which uses yubikeys in a creative way and get a
        yubikey.{" "}
      </p>
    </div>
  );
}
