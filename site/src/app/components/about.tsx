import { Bitcount_Grid_Single } from "next/font/google";
import Link from "next/link";
const bitcountMono = Bitcount_Grid_Single({
  subsets: ["latin"],
  weight: ["400"],
});

export default function About() {
  const steps = [
    {
      step: "01",
      title: "Brainstorm",
      description:
        "Think about a creative idea for a program that would use a YubiKey to do something unique.",
      color: "bg-gradient-to-br from-purple-500 to-pink-600",
    },
    {
      step: "02",
      title: "Code it!",
      description:
        "Code your idea into reality using any framework you desire, it should just be a project you can ship!",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
    },
    {
      step: "03",
      title: "Submit it!",
      description:
        "Submit your creative creation here and get your reward, YubiKey 5C NFC or YubiKey 5 NFC!",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      step: "04",
      title: "Re-Test",
      description:
        "Test your projects with the YubiKey we sent to you! If it works, make a post in #keybridge!",
      color: "bg-gradient-to-br from-orange-500 to-red-600",
    },
  ];

  const sideCards = [
    { title: "No AI Readmes", subtitle: "Only 30% AI use allowed" },
    { title: "Show Creativity", subtitle: "Think outside the box" },
    { title: "No Fraud", subtitle: "Honest submissions only" },
    {
      title: "Frequent git commits",
      subtitle: "Commit often, atleast one for every hour of code",
    },
  ];

  return (
    <div id="about" className="min-h-screen bg-black text-white">
      <div className="bg-black min-h-fit">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 space-y-4">
              <h2
                className={`${bitcountMono.className} text-2xl mb-6 text-gray-300`}
              >
                Quick Rules
              </h2>

              <div className="space-y-3">
                {sideCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-[#050505] backdrop-blur-sm border border-white/20 p-4 hover:bg-[#121212] transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl"></span>
                      <div>
                        <h3
                          className={`${bitcountMono.className} text-sm font-bold text-white`}
                        >
                          {card.title}
                        </h3>
                        <p className="text-xs text-gray-400">{card.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 border border-white/20">
                <h3
                  className={`${bitcountMono.className} text-lg text-yellow-400 mb-2`}
                >
                  WE SHIP
                </h3>
                <p className="text-sm text-gray-300">
                  YubiKey 5C NFC or YubiKey 5 NFC
                </p>
              </div>
              <div className="mt-8 p-4 border border-white/20">
                <h3
                  className={`${bitcountMono.className} text-lg text-yellow-400 mb-2`}
                >
                  JOIN US
                </h3>
                <p className="text-sm text-gray-300">
                  If you have any questions, put them in{" "}
                  <Link
                    className="underline"
                    href={"https://hackclub.slack.com/archives/C09NXETJMLJ"}
                  >
                    #keybridge
                  </Link>{" "}
                  on slack.
                </p>
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2
                className={`${bitcountMono.className} text-3xl mb-8 text-center text-gray-300`}
              >
                How It Works
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`${step.color} p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`${bitcountMono.className} text-6xl font-bold text-white/20`}
                        >
                          {step.step}
                        </span>
                      </div>

                      <h3
                        className={`${bitcountMono.className} text-2xl font-bold text-white mb-4`}
                      >
                        {step.title}
                      </h3>

                      <p className="text-white/90 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
