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
        className={`${bitcountMono.className} h-10 bg-[#e8b53f] w-screen text-black text-3xl flex items-center`}
      >
        <Link href={"/"}>
          <p className="pl-4">keybridge</p>
        </Link>
      </nav>
    </div>
  );
}
