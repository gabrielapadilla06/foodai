import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="space-y-6">
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 px-3 py-1 text-sm font-medium">FAQ</Badge>
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Find answers to common questions about biodiversity conservation and our mission to protect Earth&apos;s
            diverse flora and fauna.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-semibold">
                What is biodiversity conservation?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Biodiversity conservation refers to the protection, preservation, and sustainable management of the
                variety of life forms on Earth. This includes the diversity within species, between species, and of
                ecosystems.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Why is public awareness important for conservation?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Public awareness is crucial because it leads to better understanding, support for conservation
                initiatives, and more sustainable behaviors. When people understand the value of biodiversity, they're
                more likely to participate in conservation efforts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-semibold">
                How can I contribute to biodiversity conservation?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                You can contribute by supporting local conservation projects, reducing your environmental impact,
                educating others about biodiversity, and making sustainable choices in your daily life.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-semibold">
                What are the main threats to biodiversity?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                The main threats include habitat destruction, climate change, pollution, overexploitation of resources,
                and the introduction of invasive species. Human activities are the primary driver of these threats.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export {FAQSection}