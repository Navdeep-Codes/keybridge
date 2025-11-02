import Navbar from "./components/navbar";
import Main from "./components/home";
export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col min-h-screen ">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}
