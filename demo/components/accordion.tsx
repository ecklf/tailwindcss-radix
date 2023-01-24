import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React from "react";

interface AccordionItem {
  header: string;
  content: string;
}

const items: AccordionItem[] = [
  {
    header: "What is Radix UI?",
    content:
      "Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.",
  },
  {
    header: "Why are goats so popular at Vercel",
    content:
      "Goats are popular at Vercel for a few reasons. First, they provide a healthier and more sustainable solution for grass cutting and vegetation control. Additionally, goats are able to traverse very steep terrain. This makes them perfect for providing maintenance in areas that are difficult to access. Finally, their presence is said to provide a calming atmosphere, which is especially beneficial in stressful engineering environments.",
  },
  {
    header: "Is it accessible?",
    content: "Yes!",
  },
];

interface AccordionProps {}

const Accordion = (props: AccordionProps) => {
  return (
    <AccordionPrimitive.Root
      type="single"
      defaultValue="item-1"
      className={clsx("space-y-4 w-full")}
    >
      {items.map(({ header, content }, i) => (
        <AccordionPrimitive.Item
          key={`header-${i}`}
          value={`item-${i + 1}`}
          className="rounded-lg focus-within:ring focus-within:ring-purple-500 focus-within:ring-opacity-75 focus:outline-none w-full"
        >
          <AccordionPrimitive.Header className="w-full">
            <AccordionPrimitive.Trigger
              className={clsx(
                "group",
                "radix-state-open:rounded-t-lg radix-state-closed:rounded-lg",
                "focus:outline-none",
                "inline-flex w-full items-center justify-between bg-white px-4 py-2 text-left dark:bg-gray-800"
              )}
            >
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {header}
              </span>
              <ChevronDownIcon
                className={clsx(
                  "ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out dark:text-gray-400",
                  "group-radix-state-open:rotate-180 group-radix-state-open:duration-300"
                )}
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="pt-1 w-full rounded-b-lg bg-white px-4 pb-3 dark:bg-gray-800">
            <div className="text-sm text-gray-700 dark:text-gray-400">
              {content}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

export { Accordion };
