import { Bitcount_Grid_Single } from "next/font/google";
const bitcountMono = Bitcount_Grid_Single({
  subsets: ["latin"],
  weight: ["400"],
});
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav
        className={`${bitcountMono.className} h-10 bg-[#e8b53f] w-screen text-black text-3xl flex items-center justify-between px-4`}
      >
        <Link href={"#home"}>
          <p className="hover:underline transition-all duration-200">
            keybridge
          </p>
        </Link>
        <div className="flex items-center space-x-6">
          <Link href={"#about"}>
            <p className="text-lg hover:underline transition-all duration-200">
              About
            </p>
          </Link>
          <Link href={"#services"}>
            <p className="text-lg hover:underline transition-all duration-200">
              Yubikey
            </p>
          </Link>
          <Link href={"#contact"}>
            <p className="text-lg hover:underline transition-all duration-200">
              FAQs
            </p>
          </Link>
        </div>
      </nav>
    </div>
  );
}
