import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bitcount_Grid_Single } from "next/font/google";

const bitcountMono = Bitcount_Grid_Single({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Faq() {
  return (
    <div className="min-h-screen bg-black">
      <div className="flex items-center justify-center py-16 px-4">
        <h1
          className={`${bitcountMono.className} text-6xl md:text-8xl lg:text-9xl text-white hover:text-shadow-white text-center`}
        >
          FAQs
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-black shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <Accordion type="single" collapsible className="w-full gap-4">
              <AccordionItem
                value="item-1"
                className="transition-colors duration-200"
              >
                <AccordionTrigger className="hover:no-underline px-6 py-4 text-white/70 hover:text-gray-200 text-left font-medium text-lg [&[data-state=open]>svg]:rotate-180">
                  What is this YSWS?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 text-white/70 text-base leading-relaxed max-w-none overflow-hidden">
                  <div className="space-y-4">
                    <p>
                      make smth related to yubikeys..... put text here navdeep
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="transition-colors duration-200"
              >
                <AccordionTrigger className="hover:no-underline px-6 py-4 text-white/70 hover:text-gray-200 text-left font-medium text-lg [&[data-state=open]>svg]:rotate-180">
                  What is a yubikey?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 text-white/70 text-base leading-relaxed max-w-none overflow-hidden">
                  <div className="space-y-4">
                    <p>yubikeys..... put text here navdeep</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="transition-colors duration-200"
              >
                <AccordionTrigger className="hover:no-underline px-6 py-4 text-white/70 hover:text-gray-200 text-left font-medium text-lg [&[data-state=open]>svg]:rotate-180">
                  What is this hackclub?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 text-gray-300 text-base leading-relaxed max-w-none overflow-hidden">
                  <div className="space-y-4">
                    <p>put text here navdeep</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="transition-colors duration-200"
              >
                <AccordionTrigger className="hover:no-underline px-6 py-4 text-white/70 hover:text-gray-200 text-left font-medium text-lg [&[data-state=open]>svg]:rotate-180">
                  question
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 text-white/70 text-base leading-relaxed max-w-none overflow-hidden">
                  <div className="space-y-4">
                    <p>put text here navdeep</p>
                  </div>
                </AccordionContent>
              </AccordionItem>{" "}
              <AccordionItem
                value="item-5"
                className="transition-colors duration-200"
              >
                <AccordionTrigger className="hover:no-underline px-6 py-4 text-white/70 hover:text-gray-200 text-left font-medium text-lg ">
                  question
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 text-white/70 text-base leading-relaxed max-w-none overflow-hidden">
                  <div className="space-y-4">
                    <p>put text here navdeep</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* Add more items here if needed */}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
