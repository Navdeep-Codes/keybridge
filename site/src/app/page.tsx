import Navbar from "./components/navbar";
import Main from "./components/home";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black flex flex-col">
      <Navbar />
      <Main />
      <Main />
    </div>
  );
}
