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
    <div className="max-w-full min-h-screen flex items-center justify-center flex-col">
      <p className={`${bitcountMono.className} text-9xl`}>FAQs</p>
      <div className="bg-black p-8">
        <Accordion type="single" collapsible className="text-white w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is this YSWS?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              make smth related to yubikeys..... put text here navdeep
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is a yubikey?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              yubikeys..... put text here navdeep
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is this hackclub?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              put text here navdeep
            </AccordionContent>
          </AccordionItem>
          {/*add more items here if needed*/}
        </Accordion>
      </div>
    </div>
  );
}
