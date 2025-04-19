import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="space-y-6">
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 px-3 py-1 text-sm font-medium">FAQ</Badge>
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-semibold">
                What is a food byproduct?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Food by-products remain underutilized despite their potential for human consumption. Industrial food processing alone generates substantial amounts of by-products, often representing 30-60% of the total weight of raw materials. These include fruit peels, vegetable scraps, grain husks, seeds, and pomace, which are frequently discarded.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-semibold">
                How does sustainabite works?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                An AI-powered tool that enables food processors to identify optimal applications for their agricultural by-products based on their specific infrastructure and available waste streams. The system analyzes user inputs about processing equipment and by-product inventory to generate tailored recommendations for product development opportunities and necessary infrastructure upgrades, facilitating the transformation of waste into value-added ingredients and additives.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export {FAQSection}