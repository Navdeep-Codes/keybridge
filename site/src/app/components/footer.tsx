import { Bitcount_Grid_Single } from "next/font/google";
const bitcountMono = Bitcount_Grid_Single({
  subsets: ["latin"],
  weight: ["400"],
});
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div
        className={`${bitcountMono.className} h-10 bg-[#e8b53f] w-full text-black text-3xl flex items-center justify-between px-4`}
      >
        <Link href={"#home"}>
          <p className="hover:underline transition-all duration-200">
            keybridge
          </p>
        </Link>
      </div>
    </div>
  );
}
