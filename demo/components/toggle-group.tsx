import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { clsx } from "clsx";
import React, { ReactElement } from "react";

interface ToggleItem {
  value: string;
  label: string;
  icon: ReactElement;
}

const settings: ToggleItem[] = [
  {
    value: "bold",
    label: "Font bold",
    icon: <FontBoldIcon />,
  },
  {
    value: "italic",
    label: "Font italic",
    icon: <FontItalicIcon />,
  },
  {
    value: "underline",
    label: "Underline",
    icon: <UnderlineIcon />,
  },
];

interface ToggleGroupProps {}

const ToggleGroup = (props: ToggleGroupProps) => {
  return (
    <ToggleGroupPrimitive.Root type="multiple" aria-label="Font settings">
      {settings.map(({ value, label, icon }, i) => (
        <ToggleGroupPrimitive.Item
          key={`group-item-${value}-${label}`}
          value={value}
          aria-label={label}
          className={clsx(
            "group radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900",
            "bg-white dark:bg-gray-800",
            "border-y px-2.5 py-2 first:rounded-l-md first:border-x last:rounded-r-md last:border-x",
            "border-gray-200 radix-state-on:border-transparent dark:border-gray-600 dark:radix-state-on:border-transparent",
            "focus:relative focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          )}
        >
          {React.cloneElement(icon, {
            className: "w-5 h-5 text-gray-700 dark:text-gray-100",
          })}
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  );
};

export { ToggleGroup };
