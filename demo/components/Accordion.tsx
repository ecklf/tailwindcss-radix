import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import cx from "classnames";
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
    header:
      "Each primitive can be installed individually so you we adopt them incrementally?",
    content: "Yes!",
  },
  {
    header: "Is it accessible?",
    content: "Yes!",
  },
];

interface Props {}

const Accordion = (props: Props) => {
  return (
    <AccordionPrimitive.Root
      type="single"
      //   type="multiple"
      className={cx("space-y-4")}
    >
      {items.map(({ header, content }, i) => (
        <AccordionPrimitive.Item
          key={`header-${i}`}
          value={`item-${i + 1}`}
          className="rounded-lg focus:outline-none focus-within:ring focus-within:ring-purple-500 focus-within:ring-opacity-75"
        >
          <AccordionPrimitive.Header className="w-full">
            <AccordionPrimitive.Trigger
              className={cx(
                "group",
                "radix-state-open:rounded-t-lg radix-state-closed:rounded-lg",
                "focus:outline-none",
                "inline-flex items-center justify-between w-full px-4 py-2 text-left bg-white dark:bg-gray-800"
              )}
            >
              <span className="text-sm font-medium dark:text-gray-200">
                {header}
              </span>
              <ChevronDownIcon className="w-5 h-5 ml-2 duration-300 ease-in-out transform shrink-0 dark:text-gray-200 group-radix-state-open:rotate-180" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="w-full px-4 pb-3 bg-white rounded-b-lg pt-r1 dark:bg-gray-800">
            <div className="text-sm text-gray-500">{content}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

export default Accordion;
