import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";


export default function Accordions(){
    
   const faqs = [
     {
       id: 1,
       heading: "Does it remove salinity ?",
       response: "Yes",
     },
     {
       id: 2,
       heading: "Can it be detached on relocation ?",
       response: `Yes , the systems are detached free of charge by our technical team and reinstalled in your new space`,
     },
     {
       id: 3,
       heading: "Is the water safe for drinking ?",
       response: `Yes , the systems filter sediment ,kill microorganisms and mineralise your water optimally , simply put , they are the " domestic versions " of the industrial purification systems that produce mineral water .`,
     },
     {
       id: 4,
       heading: "How many litres can it purify in a day ?",
       response: `For 5 stage purifiers - 200 to 300 litres a day ,7 stage purifiers - upto 400 litres in a day`,
     },
     {
       id: 5,
       heading: "Will it clear up my stained teeth ?",
       response: `No , Fluorosis is not reversible .However , it will prevent further staining of the teeth`,
     },
     {
       id: 6,
       heading: "What does it filter ?",
       response: `Sediment , chloride , flouride , heavy metals , microplastics , herbicides , pesticides , microorganisms, salt and most contaminants.`,
     },
     {
       id: 7,
       heading: "How often do you need to do maintenance ?",
       response: `This is dependent on the water source and your usage .Changes in the water source might disrupt your maintenance schedule .Hydra offers free first year maintenance service every 3 months so as to gauge the working of the systems in your space and advise on the best maintenance schedule that will give you optimum functioning of the system .The schedules may range from every 5 months to every 3 years.`,
     },
   ];
   
   
    return (
      <>
        <Accordion allowToggle className="space-y-2">
          {faqs.map((faq, id) => (
            <AccordionItem
              key={id}
              className="rounded-md overflow-hidden border border-neutral-300"
            >
              <h2 className="border-b border-neutral-200/60 bg-neutral-100">
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-semibold py-2"
                  >
                    {faq.heading}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                className=" text-neutral-700 bg-white"
              >
                {faq.response}
              </AccordionPanel>
            </AccordionItem>
          ))}          
        </Accordion>
      </>
    );
}