import Navbar from "./components/navbar";
import Main from "./components/home";
import Faq from "./components/faq";
import About from "./components/about";
export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col min-h-screen ">
        <Navbar />
        <Main />
        <About />
        <Faq />
      </div>
    </div>
  );
}
