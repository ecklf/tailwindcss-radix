import {
  FontBoldIcon,
  FontItalicIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import cx from "classnames";
import React, { ReactElement } from "react";

interface ToggleItem {
  value: string;
  label: string;
  icon: ReactElement;
}

const fontSettings: ToggleItem[] = [
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

const textSettings: ToggleItem[] = [
  {
    value: "left",
    label: "Text left",
    icon: <TextAlignLeftIcon />,
  },
  {
    value: "center",
    label: "Text center",
    icon: <TextAlignCenterIcon />,
  },
  {
    value: "right",
    label: "Text right",
    icon: <TextAlignRightIcon />,
  },
];

interface Props {}

const Toolbar = (props: Props) => {
  return (
    <ToolbarPrimitive.Root className="flex space-x-4 rounded-lg bg-white px-2.5 py-2 dark:bg-gray-800">
      <ToolbarPrimitive.ToggleGroup type="multiple" aria-label="Font settings">
        {fontSettings.map(({ value, label, icon }, i) => (
          <ToolbarPrimitive.ToggleItem
            key={`group-item-${value}-${label}`}
            value={value}
            aria-label={label}
            className={cx(
              "radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900",
              "bg-white dark:bg-gray-800",
              "border-y px-2.5 py-2 first:rounded-l-md first:border-x last:rounded-r-md last:border-x",
              "border-gray-200 radix-state-on:border-transparent dark:border-gray-600 dark:radix-state-on:border-transparent",
              "focus:relative focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            {React.cloneElement(icon, {
              className: "w-5 h-5 text-gray-700 dark:text-gray-100",
            })}
          </ToolbarPrimitive.ToggleItem>
        ))}
      </ToolbarPrimitive.ToggleGroup>

      <ToolbarPrimitive.ToggleGroup
        type="single"
        defaultValue="center"
        aria-label="Text settings"
      >
        {textSettings.map(({ value, label, icon }, i) => (
          <ToolbarPrimitive.ToggleItem
            key={`group-item-${value}-${label}`}
            value={value}
            aria-label={label}
            className={cx(
              "radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900",
              "bg-white dark:bg-gray-800",
              "border-y px-2.5 py-2 first:rounded-l-md first:border-x last:rounded-r-md last:border-x",
              "border-gray-200 radix-state-on:border-transparent dark:border-gray-600 dark:radix-state-on:border-transparent",
              "focus:relative focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            {React.cloneElement(icon, {
              className: "w-5 h-5 text-gray-700 dark:text-gray-100",
            })}
          </ToolbarPrimitive.ToggleItem>
        ))}
      </ToolbarPrimitive.ToggleGroup>

      <ToolbarPrimitive.Separator className="mx-4 my-0.5 hidden h-auto w-px dark:bg-gray-600 xl:flex" />

      <span className="hidden items-center pr-2 xl:flex">
        <ToolbarPrimitive.Link
          className={cx(
            "text-sm text-gray-500 dark:text-gray-400",
            "focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          )}
          href="https://github.com/ecklf/tailwindcss-radix"
          target="_blank"
        >
          Edited 2 hours ago
        </ToolbarPrimitive.Link>
      </span>
    </ToolbarPrimitive.Root>
  );
};

export default Toolbar;
